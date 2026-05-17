/**
 * Nihongo Lab — Worker
 *
 * Responsibilities:
 *   1. Hourly reminder cron — fires at every hour, reads user's preferred
 *      hour from KV, sends ntfy push + Resend email only when it matches.
 *      Reminder body is personalised with today's chapter + missed days.
 *   2. AI chat proxy (fetch /chat) — proxies the frontend to Gemini,
 *      keeping the API key as a Worker secret (never in the repo).
 *   3. State sync (GET/POST /state) — reads/writes the user's progress
 *      + reminder prefs to KV so the cron can personalise the reminder
 *      and so the user can change reminder time from the app.
 *
 * Secrets (set with `wrangler secret put NAME`):
 *   - GEMINI_API_KEY   — Google AI Studio key (free tier)
 *   - RESEND_API_KEY   — Resend.com key (free tier)
 *
 * Vars (in wrangler.toml):
 *   - NTFY_TOPIC       — private ntfy topic for daily phone reminders
 *   - NTFY_TITLE       — optional title override
 *   - ALLOWED_ORIGIN   — CORS allowlist (locked to Pages origin)
 *   - REMINDER_EMAIL   — destination Gmail
 *   - REMINDER_NAME    — display name for the recipient
 *
 * KV bindings:
 *   - STATE            — single key "user" holds { progress, prefs, meta }
 */

// ──────────────────────────────────────────────────────────────────────
// Chapter manifest — kept slim (day + title only). Manually mirrored from
// data.js. The cron uses this to say "today is Day X: <title>" in the
// reminder body. If chapters change in data.js, update this list and
// redeploy the Worker.
// ──────────────────────────────────────────────────────────────────────
const CHAPTERS = [
  { d: 1,  t: "Vowels + first hello" },
  { d: 2,  t: "K + S + T rows + question か" },
  { d: 3,  t: "N + H + M rows + は as 'wa'" },
  { d: 4,  t: "Y + R + W rows + ん + を + dakuten G/Z" },
  { d: 5,  t: "Dakuten D/B + handakuten P + yōon — hiragana complete" },
  { d: 6,  t: "Katakana A-T rows + IT loanwords" },
  { d: 7,  t: "Katakana N-W rows + workplace nouns" },
  { d: 8,  t: "★ Katakana dakuten + small chars — KANA COMPLETE" },
  { d: 9,  t: "Pronouns — 1st / 2nd / 3rd person" },
  { d: 10, t: "Demonstratives — これ・それ・あれ + どれ" },
  { d: 11, t: "Wh-question words — 何 / 誰 / どこ / いつ / いくら" },
  { d: 12, t: "は vs が — topic vs subject" },
  { d: 13, t: "を — direct object marker" },
  { d: 14, t: "の — possessive + noun connector" },
  { d: 15, t: "に vs で — target vs location-of-action" },
  { d: 16, t: "へ + と + や + も — direction, with/and, also" },
  { d: 17, t: "から + まで + より + よ + ね — range + sentence-end" },
  { d: 18, t: "ます-form — polite present / future" },
  { d: 19, t: "て-form — linking actions + てください request" },
  { d: 20, t: "〜ています — ongoing / right now" },
  { d: 21, t: "Plain forms — dictionary / ない / た + verb groups" },
  { d: 22, t: "Past tense — ました + でした" },
  { d: 23, t: "🧠 The three negatives — ません vs ありません vs ではありません" },
  { d: 24, t: "Adjectives — i-adj + na-adj (all 4 forms)" },
  { d: 25, t: "Wants & Invites — たい / ませんか / ましょう" },
  { d: 26, t: "Potential 'can do' + Preferences 'I like'" },
  { d: 27, t: "Existence あります / います + Counters" },
  { d: 28, t: "Connectors — から / ので / けど / が" },
  { d: 29, t: "The Q&A system — か + はい/いいえ + Wh-words" },
  { d: 30, t: "★ Dialog mastery — workplace + daily-life" },
  { d: 31, t: "Plain volitional — casual 'let's'" },
  { d: 32, t: "Conditionals — ば / たら / なら / と" },
  { d: 33, t: "Comparison — より / ほうが / 一番" },
  { d: 34, t: "Giving and receiving — あげる / もらう / くれる" },
  { d: 35, t: "Quotations — 〜と言う / 〜と思う" },
  { d: 36, t: "Permission and prohibition" },
  { d: 37, t: "Obligation — 〜なければなりません" },
  { d: 38, t: "Experience — 〜たことがある" },
  { d: 39, t: "Simultaneous + listing — 〜ながら, 〜たり〜たり" },
  { d: 40, t: "Advice + intentions — 〜たほうがいい / 〜つもり" },
  { d: 41, t: "Relative clauses + nuance" },
  { d: 42, t: "Keigo intro — 尊敬語 / 謙譲語" },
  { d: 43, t: "★ Cumulative review + next-month plan" },
];

// ──────────────────────────────────────────────────────────────────────
// State (KV-backed): progress + reminder preferences
// ──────────────────────────────────────────────────────────────────────
const STATE_KEY = "user";
const DEFAULT_STATE = {
  progress: {
    curriculumStart: null,   // ISO date string YYYY-MM-DD
    chapDone: [],            // array of completed day numbers
  },
  prefs: {
    reminderUtcHour: 13,     // 0-23, UTC. 13 ≈ 18:45 NPT (legacy default)
    channelNtfy: true,
    channelEmail: true,
  },
  meta: { updatedAt: 0, version: 1 },
};

async function getState(env) {
  try {
    const raw = await env.STATE?.get(STATE_KEY, { type: "json" });
    if (!raw) return DEFAULT_STATE;
    // Defensive merge so old shapes still work after schema additions
    return {
      progress: { ...DEFAULT_STATE.progress, ...(raw.progress || {}) },
      prefs:    { ...DEFAULT_STATE.prefs,    ...(raw.prefs    || {}) },
      meta:     { ...DEFAULT_STATE.meta,     ...(raw.meta     || {}) },
    };
  } catch (e) {
    console.error("KV read failed:", e);
    return DEFAULT_STATE;
  }
}
async function saveState(env, state) {
  state.meta = { ...state.meta, updatedAt: Date.now() };
  await env.STATE.put(STATE_KEY, JSON.stringify(state));
  return state;
}

// Compute which curriculum day "today" should be based on the start date.
// Returns null if no start date or out of range.
function todaysChapterDay(state) {
  const start = state.progress.curriculumStart;
  if (!start) return null;
  const startMs = new Date(start + "T00:00:00Z").getTime();
  if (isNaN(startMs)) return null;
  const todayUtc = new Date();
  // Floor to UTC day boundary for both dates so DST etc. doesn't shift it
  const todayMs = Date.UTC(todayUtc.getUTCFullYear(), todayUtc.getUTCMonth(), todayUtc.getUTCDate());
  const dayN = Math.floor((todayMs - startMs) / 86400000) + 1;
  if (dayN < 1 || dayN > CHAPTERS.length) return null;
  return dayN;
}

function progressSummary(state) {
  const todayDay = todaysChapterDay(state);
  const todayCh = todayDay ? CHAPTERS.find(c => c.d === todayDay) : null;
  const done = new Set(state.progress.chapDone || []);
  const missed = [];
  if (todayDay) {
    for (let d = 1; d < todayDay; d++) {
      if (!done.has(d)) {
        const ch = CHAPTERS.find(c => c.d === d);
        missed.push(ch ? `Day ${d}: ${ch.t}` : `Day ${d}`);
      }
    }
  }
  return { todayDay, todayCh, missed, doneCount: done.size, totalDays: CHAPTERS.length };
}

// ──────────────────────────────────────────────────────────────────────
// Daily reminder
// ──────────────────────────────────────────────────────────────────────
const MESSAGES = [
  { title: "🌅 おはよう Shishir", body: "Time for today's Japanese study. 5 minutes of streak protection 🔥" },
  { title: "📚 Daily reminder", body: "今日も日本語を勉強しましょう。 (Let's study Japanese today too.)" },
  { title: "🧠 Brain time", body: "Your daily 20-30 min slot — open Nihongo Lab and tick today's day complete." },
  { title: "🇯🇵 Don't break the chain", body: "Streaks are precious. Even 5 mins counts." },
  { title: "✨ がんばって！", body: "Open Nihongo Lab. Today's Day is waiting in the snake path." },
  { title: "🍵 Time for tea + grammar", body: "Brew something warm. Crack open today's chapter." },
  { title: "📖 Nihongo Lab calling", body: "頑張ってください！ Your future-self will thank you." }
];

function pickMessage() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return MESSAGES[dayOfYear % MESSAGES.length];
}

async function sendReminder(env, state) {
  const topic = env.NTFY_TOPIC;
  if (!topic || topic.includes("CHANGE-THIS")) {
    console.error("NTFY_TOPIC not configured — edit wrangler.toml.");
    return;
  }
  const msg = pickMessage();
  const title = env.NTFY_TITLE || msg.title;

  // Personalise body with today's chapter + missed-days if state available
  let body = msg.body;
  if (state) {
    const sum = progressSummary(state);
    if (sum.todayCh) {
      body = `📖 Today — Day ${sum.todayDay}: ${sum.todayCh.t}\n${msg.body}`;
    }
    if (sum.missed.length) {
      body += `\n⚠ Catch up: ${sum.missed.length} missed day${sum.missed.length > 1 ? "s" : ""}`;
    }
  }

  const res = await fetch(`https://ntfy.sh/${topic}`, {
    method: "POST",
    body,
    headers: {
      "Title": title,
      "Tags": "books,jp,sparkles",
      "Priority": "default",
      "Click": "https://npl-shishir-paudel.github.io/nihongo-lab/",
      "Actions": "view, Open Nihongo Lab, https://npl-shishir-paudel.github.io/nihongo-lab/, clear=true"
    }
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`ntfy.sh returned ${res.status}: ${text}`);
  } else {
    console.log(`Reminder sent to topic ${topic}: ${title}`);
  }
}

// ──────────────────────────────────────────────────────────────────────
// Daily email reminder via Resend
// Sends to env.REMINDER_EMAIL using onboarding@resend.dev as sender.
// On Resend's free tier, sending from the shared sender works ONLY to
// the email address you signed up with — perfect for personal reminders.
// ──────────────────────────────────────────────────────────────────────
async function sendEmail(env, state) {
  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set — skipping email reminder.");
    return;
  }
  const to = env.REMINDER_EMAIL;
  if (!to) {
    console.error("REMINDER_EMAIL not set in wrangler.toml — skipping email.");
    return;
  }
  const recipientName = env.REMINDER_NAME || "Shishir";
  const msg = pickMessage();
  const siteUrl = "https://npl-shishir-paudel.github.io/nihongo-lab/";

  // Personalise with today's chapter + missed-days (if state available)
  let todayBlock = "", missedBlock = "", progressBlock = "";
  if (state) {
    const sum = progressSummary(state);
    if (sum.todayCh) {
      todayBlock = `<div style="background:#fff5cc;border:2px solid #1f1d2c;border-radius:12px;padding:14px;margin:0 0 16px;box-shadow:3px 3px 0 0 #1f1d2c"><div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6b6478;font-weight:800">Today · Day ${sum.todayDay} of ${sum.totalDays}</div><div style="font-size:17px;font-weight:800;margin-top:4px">${escapeHtmlEmail(sum.todayCh.t)}</div></div>`;
    }
    if (sum.missed.length) {
      const list = sum.missed.slice(0, 5).map(s => `<li style="margin:2px 0">${escapeHtmlEmail(s)}</li>`).join("");
      const more = sum.missed.length > 5 ? `<li style="margin:2px 0;color:#6b6478">+ ${sum.missed.length - 5} more</li>` : "";
      missedBlock = `<div style="background:#ffe1ea;border:2px solid #c75450;border-radius:12px;padding:12px 14px;margin:0 0 16px"><div style="font-weight:800;color:#c75450;font-size:13px;margin-bottom:6px">⚠ Catch up — ${sum.missed.length} missed day${sum.missed.length > 1 ? "s" : ""}</div><ul style="margin:0;padding:0 0 0 18px;font-size:13px">${list}${more}</ul></div>`;
    }
    progressBlock = `<div style="font-size:11px;color:#6b6478;margin:12px 0 0">📊 ${sum.doneCount}/${sum.totalDays} chapters done${sum.todayDay ? ` · Day ${sum.todayDay} today` : ""}</div>`;
  }

  const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f6f7fb;margin:0;padding:24px;color:#1f1d2c">
  <div style="max-width:520px;margin:0 auto;background:#fff;border:3px solid #1f1d2c;border-radius:16px;padding:28px;box-shadow:4px 4px 0 0 #1f1d2c">
    <div style="font-size:34px;line-height:1;margin-bottom:6px">🇯🇵</div>
    <h1 style="margin:0 0 4px;font-size:22px;font-weight:800">${msg.title}</h1>
    <p style="margin:0 0 18px;color:#6b6478;font-size:14px">Hey ${escapeHtmlEmail(recipientName)} — daily nudge from Nihongo Lab.</p>
    ${todayBlock}
    ${missedBlock}
    <p style="font-size:15px;line-height:1.55;margin:0 0 20px">${msg.body}</p>
    <a href="${siteUrl}" style="display:inline-block;background:#ff4d8d;color:#fff;text-decoration:none;font-weight:800;padding:10px 18px;border:2px solid #1f1d2c;border-radius:10px;box-shadow:3px 3px 0 0 #1f1d2c">Open today's chapter →</a>
    ${progressBlock}
    <hr style="border:0;border-top:1px dashed #d6cdb5;margin:24px 0 12px"/>
    <p style="font-size:11px;color:#6b6478;margin:0">Quick links · <a href="${siteUrl}#chapters" style="color:#ff4d8d">Chapters</a> · <a href="${siteUrl}#quiz" style="color:#ff4d8d">Quiz</a> · <a href="${siteUrl}#cheat" style="color:#ff4d8d">Quick Cheat</a></p>
    <p style="font-size:11px;color:#6b6478;margin:6px 0 0">Adjust reminder time in the app's AI Settings (⚙).</p>
  </div>
</body></html>`;

  let textBody = `${msg.title}\n\nHey ${recipientName} — ${msg.body}`;
  if (state) {
    const sum = progressSummary(state);
    if (sum.todayCh) textBody = `Today is Day ${sum.todayDay} of ${sum.totalDays}: ${sum.todayCh.t}\n\n${textBody}`;
    if (sum.missed.length) textBody += `\n\nMissed: ${sum.missed.slice(0, 5).join(", ")}${sum.missed.length > 5 ? "…" : ""}`;
  }
  const text = `${textBody}\n\nOpen Nihongo Lab: ${siteUrl}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Nihongo Lab <onboarding@resend.dev>",
      to: [to],
      subject: `🇯🇵 ${msg.title}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error(`Resend ${res.status}: ${errText}`);
  } else {
    const data = await res.json();
    console.log(`Email reminder sent to ${to}, id=${data.id || "?"}`);
  }
}

function escapeHtmlEmail(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ──────────────────────────────────────────────────────────────────────
// AI chat proxy — Gemini 2.0 Flash
// Frontend posts { messages, system?, model? } here; we forward to Gemini
// with the API key from Worker secrets and stream the response back.
// ──────────────────────────────────────────────────────────────────────
const DEFAULT_SYSTEM = `You are Shishir's friendly Japanese tutor. Shishir is a Nepali IT professional learning Japanese.

Style:
- Reply in 2–4 short sentences unless they ASK for a longer breakdown.
- Encouraging but direct — point out mistakes clearly.

Whenever you write Japanese:
- Strictly, Provide BOTH the Japanese AND the romaji in parentheses, e.g. 食べます (tabemasu).
- When useful, add a quick Nepali gloss in [brackets], e.g. [खान्छु].

When explaining grammar:
- Lead with the formula in one line, then a 1-sentence intuition.
- Use IT / workplace examples when natural (meetings, code review, standup). But dont limit to IT or work

Don't dump definitions — pick the most useful explanation for an early-intermediate learner.`;

function corsHeaders(env) {
  const origin = env.ALLOWED_ORIGIN || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function jsonResponse(body, status, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(env) },
  });
}

async function handleChat(request, env) {
  if (!env.GEMINI_API_KEY) {
    return jsonResponse({ error: "GEMINI_API_KEY not set on Worker. Run: wrangler secret put GEMINI_API_KEY" }, 500, env);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Body must be JSON" }, 400, env);
  }
  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (!messages.length) return jsonResponse({ error: "messages required" }, 400, env);

  // gemini-2.5-flash is what Shishir's free tier covers (5 RPM / 20 RPD).
  // gemini-2.0-flash showed limit:0 on this project (known Google quirk).
  // Frontend can override via the `model` field in the request body.
  const model = body.model || "gemini-2.5-flash";
  const system = body.system || DEFAULT_SYSTEM;

  // Gemini's REST API expects: contents=[{role:user|model, parts:[{text}]}]
  // Map our { role: user|assistant, content } shape.
  const contents = messages.map(m => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content || "") }],
  }));

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${env.GEMINI_API_KEY}`;
  const payload = {
    systemInstruction: { parts: [{ text: system }] },
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
      topP: 0.9,
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT",        threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_HATE_SPEECH",       threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
    ],
  };

  const resp = await fetch(geminiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    return jsonResponse({ error: `Gemini API ${resp.status}: ${errText.slice(0, 500)}` }, 502, env);
  }
  const data = await resp.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") ||
    (data?.promptFeedback?.blockReason ? `(Blocked: ${data.promptFeedback.blockReason})` : "");
  if (!text) return jsonResponse({ error: "Empty response", raw: data }, 502, env);

  return jsonResponse({ text, model }, 200, env);
}

// ──────────────────────────────────────────────────────────────────────
export default {
  async scheduled(event, env, ctx) {
    // Cron now runs hourly. Read user state + only fire if the current
    // UTC hour matches the preferred reminder hour.
    ctx.waitUntil((async () => {
      const state = await getState(env);
      const nowHourUtc = new Date().getUTCHours();
      const wantHourUtc = state.prefs.reminderUtcHour ?? 13;
      if (nowHourUtc !== wantHourUtc) {
        console.log(`Cron tick: hour ${nowHourUtc} UTC, user wants ${wantHourUtc}. Skipping.`);
        return;
      }
      const channels = [];
      if (state.prefs.channelNtfy)  channels.push(sendReminder(env, state));
      if (state.prefs.channelEmail) channels.push(sendEmail(env, state));
      await Promise.allSettled(channels);
    })());
  },

  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    // /chat — AI tutor proxy
    if (url.pathname === "/chat" && request.method === "POST") {
      return handleChat(request, env);
    }

    // /state — sync user progress + reminder prefs to KV
    if (url.pathname === "/state" && request.method === "GET") {
      const state = await getState(env);
      return jsonResponse(state, 200, env);
    }
    if (url.pathname === "/state" && request.method === "POST") {
      let body;
      try { body = await request.json(); }
      catch { return jsonResponse({ error: "Body must be JSON" }, 400, env); }
      const current = await getState(env);
      const merged = {
        progress: { ...current.progress, ...(body.progress || {}) },
        prefs:    { ...current.prefs,    ...(body.prefs    || {}) },
      };
      const saved = await saveState(env, merged);
      return jsonResponse({ ok: true, state: saved }, 200, env);
    }

    // /test — fire a manual ntfy reminder (with KV personalisation)
    if (url.pathname === "/test") {
      const state = await getState(env);
      await sendReminder(env, state);
      return new Response("Test reminder sent! Check your phone.", { status: 200 });
    }

    // /test-email — fire a manual email reminder (with KV personalisation)
    if (url.pathname === "/test-email") {
      const state = await getState(env);
      await sendEmail(env, state);
      return new Response("Test email sent! Check your inbox (and spam).", { status: 200 });
    }

    // / — friendly index
    return new Response(
      "Nihongo Lab Worker.\n" +
      "  POST /chat        — AI tutor proxy (Gemini)\n" +
      "  GET  /test        — fire a manual ntfy reminder\n" +
      "  GET  /test-email  — fire a manual email reminder\n",
      { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
};
