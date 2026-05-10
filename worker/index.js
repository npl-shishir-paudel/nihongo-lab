/**
 * Nihongo Lab — daily reminder Worker
 *
 * On the cron trigger (configured in wrangler.toml), POSTs a friendly
 * Japanese-themed reminder to ntfy.sh, which forwards it to your phone
 * via the ntfy app.
 *
 * The Worker rotates through several greetings + study prompts so the
 * reminder doesn't feel like the same notification every day.
 */

const MESSAGES = [
  { title: "🌅 おはよう Shishir", body: "Time for today's Japanese study. 5 minutes of streak protection 🔥" },
  { title: "📚 Daily reminder", body: "今日も日本語を勉強しましょう。 (Let's study Japanese today too.)" },
  { title: "🧠 Brain time", body: "Your daily 20-30 min slot — open Nihongo Lab and tick today's day complete." },
  { title: "🇯🇵 Don't break the chain", body: "Streaks are precious. Even 5 mins counts." },
  { title: "✨ がんばって！", body: "Open Nihongo Lab. Today's Day is waiting in the snake path." },
  { title: "🍵 Time for tea + grammar", body: "Brew something warm. Crack open today's chapter." },
  { title: "📖 Nihongo Lab calling", body: "頑張ってください！ Your future-self will thank you." }
];

/** Pick a message for today (deterministic per-day so it doesn't feel random) */
function pickMessage() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return MESSAGES[dayOfYear % MESSAGES.length];
}

/** Post a notification to ntfy.sh */
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
      "Click": "https://npl-shishir-paudel.github.io/nihongo-lab/", // tap → open the app
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

export default {
  /** Scheduled event — fires on the cron trigger */
  async scheduled(event, env, ctx) {
    ctx.waitUntil(sendReminder(env));
  },

  /** Manual trigger — visit https://your-worker.workers.dev/test to test */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/test") {
      await sendReminder(env);
      return new Response("Test reminder sent! Check your phone.", { status: 200 });
    }
    return new Response(
      "Nihongo Lab reminder Worker. Add /test to the URL to fire a test notification.",
      { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
};
