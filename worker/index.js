/**
 * Nihongo Lab — Worker
 *
 * Two responsibilities:
 *   1. Daily reminder (scheduled) — POSTs to ntfy.sh on a cron trigger
 *   2. AI chat proxy (fetch /chat) — proxies the frontend to Gemini 2.0
 *      Flash, keeping the API key as a Worker secret (never in the repo)
 *
 * Secrets required (set with `wrangler secret put NAME`):
 *   - GEMINI_API_KEY   — your Google AI Studio key (free tier)
 *
 * Vars (in wrangler.toml):
 *   - NTFY_TOPIC       — your private ntfy topic for daily reminders
 *   - NTFY_TITLE       — optional, defaults to per-message rotating title
 *   - ALLOWED_ORIGIN   — optional CORS allowlist (defaults to "*")
 */

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

async function sendReminder(env) {
  const topic = env.NTFY_TOPIC;
  if (!topic || topic.includes("CHANGE-THIS")) {
    console.error("NTFY_TOPIC not configured — edit wrangler.toml.");
    return;
  }
  const msg = pickMessage();
  const title = env.NTFY_TITLE || msg.title;

  const res = await fetch(`https://ntfy.sh/${topic}`, {
    method: "POST",
    body: msg.body,
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
async function sendEmail(env) {
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

  const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f6f7fb;margin:0;padding:24px;color:#1f1d2c">
  <div style="max-width:520px;margin:0 auto;background:#fff;border:3px solid #1f1d2c;border-radius:16px;padding:28px;box-shadow:4px 4px 0 0 #1f1d2c">
    <div style="font-size:34px;line-height:1;margin-bottom:6px">🇯🇵</div>
    <h1 style="margin:0 0 4px;font-size:22px;font-weight:800">${msg.title}</h1>
    <p style="margin:0 0 18px;color:#6b6478;font-size:14px">Hey ${escapeHtmlEmail(recipientName)} — daily nudge from Nihongo Lab.</p>
    <p style="font-size:15px;line-height:1.55;margin:0 0 20px">${msg.body}</p>
    <a href="${siteUrl}" style="display:inline-block;background:#ff4d8d;color:#fff;text-decoration:none;font-weight:800;padding:10px 18px;border:2px solid #1f1d2c;border-radius:10px;box-shadow:3px 3px 0 0 #1f1d2c">Open today's chapter →</a>
    <hr style="border:0;border-top:1px dashed #d6cdb5;margin:24px 0 12px"/>
    <p style="font-size:11px;color:#6b6478;margin:0">Quick links · <a href="${siteUrl}#chapters" style="color:#ff4d8d">Chapters</a> · <a href="${siteUrl}#quiz" style="color:#ff4d8d">Quiz</a> · <a href="${siteUrl}#cheat" style="color:#ff4d8d">Quick Cheat</a></p>
    <p style="font-size:11px;color:#6b6478;margin:6px 0 0">If this email is annoying, edit <code>REMINDER_EMAIL</code> in your Cloudflare Worker config.</p>
  </div>
</body></html>`;

  const text = `${msg.title}\n\nHey ${recipientName} — ${msg.body}\n\nOpen Nihongo Lab: ${siteUrl}`;

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
    // Fire both reminders in parallel — phone push + email
    ctx.waitUntil(Promise.allSettled([
      sendReminder(env),
      sendEmail(env),
    ]));
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

    // /test — fire a manual ntfy reminder
    if (url.pathname === "/test") {
      await sendReminder(env);
      return new Response("Test reminder sent! Check your phone.", { status: 200 });
    }

    // /test-email — fire a manual email reminder
    if (url.pathname === "/test-email") {
      await sendEmail(env);
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
