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
// AI chat proxy — Gemini 2.0 Flash
// Frontend posts { messages, system?, model? } here; we forward to Gemini
// with the API key from Worker secrets and stream the response back.
// ──────────────────────────────────────────────────────────────────────
const DEFAULT_SYSTEM = `You are Shishir's friendly Japanese tutor. Shishir is a Nepali IT professional learning Japanese.

Style:
- Reply in 2–4 short sentences unless they ASK for a longer breakdown.
- Encouraging but direct — point out mistakes clearly.

Whenever you write Japanese:
- Provide BOTH the Japanese AND the romaji in parentheses, e.g. 食べます (tabemasu).
- When useful, add a quick Nepali gloss in [brackets], e.g. [खान्छु].

When explaining grammar:
- Lead with the formula in one line, then a 1-sentence intuition.
- Use IT / workplace examples when natural (meetings, code review, standup).

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

  const model = body.model || "gemini-2.0-flash";
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
    ctx.waitUntil(sendReminder(env));
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

    // / — friendly index
    return new Response(
      "Nihongo Lab Worker.\n" +
      "  POST /chat   — AI tutor proxy (Gemini 2.0 Flash)\n" +
      "  GET  /test   — fire a manual ntfy reminder\n",
      { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
};
