# AI Tutor — one-time setup

The AI chat in Nihongo Lab is powered by **Gemini 2.0 Flash**, called through your own **Cloudflare Worker** (the same one that already sends your daily ntfy reminder). The Worker holds the API key as a secret, so the key never ships in the git repo or to the browser.

## Cost

- **Cloudflare Worker:** free tier — 100k requests/day, you'll use <100.
- **Gemini 2.0 Flash:** free tier — 15 RPM, 1500 requests/day, 1M tokens/day. More than enough for personal use.

## 1. Get a Gemini API key (2 minutes)

1. Go to https://aistudio.google.com/apikey
2. Sign in with your Google account
3. Click **"Create API key"** → copy the key (starts with `AIza…`)

## 2. Add the key as a Worker secret (1 command)

From the `application/worker/` directory:

```bash
cd application/worker
wrangler secret put GEMINI_API_KEY
```

Paste the key when prompted. (If you don't have `wrangler` yet: `npm install -g wrangler`, then `wrangler login`.)

## 3. Re-deploy the Worker

```bash
wrangler deploy
```

Wrangler prints your Worker URL after deploy — something like:
```
https://nihongo-lab-reminder.YOUR-ACCOUNT.workers.dev
```

Copy that URL.

## 4. Paste the URL into the app

1. Open https://npl-shishir-paudel.github.io/nihongo-lab/
2. Click the floating **✨ AI Tutor** button (bottom-right)
3. Click the **⚙** settings icon in the panel header
4. Paste your Worker URL
5. Click **Save**

Stored in your browser's localStorage — never sent anywhere. You only do this once per device.

## What works after setup

- **Free-form chat:** ask anything in the side panel
- **Save / Rename / Delete sessions:** all sessions live in localStorage, ChatGPT-style
- **Context-aware "explain":** hover any kana / word / sentence / kanji / structure card → tiny ✨ button appears top-right → click it → AI explains that exact item for a beginner

## Privacy & safety notes

- Your Gemini API key lives only on the Worker, never in the browser.
- Chat history is in your browser's localStorage — not synced anywhere.
- The frontend talks ONLY to your Worker (same-origin to you). The Worker talks to Google.
- "Clear" wipes the current session's messages. "Delete" removes the session entirely.

## Troubleshooting

**"⚠ Network error" in the chat:**
- Worker URL wrong → re-paste in Settings (⚙).
- Worker not deployed → `wrangler deploy` from `application/worker/`.

**"⚠ GEMINI_API_KEY not set":**
- You haven't run `wrangler secret put GEMINI_API_KEY` yet — go back to step 2.

**"⚠ Gemini API 429":**
- You hit the free-tier rate limit (15 requests/minute). Wait a minute.

**CORS error in console:**
- Set `ALLOWED_ORIGIN` in `wrangler.toml` to your Pages URL, then `wrangler deploy`.
