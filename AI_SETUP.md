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
- You hit the free-tier rate limit (15 RPM / ~20 RPD on the free tier for `gemini-2.5-flash`). Wait a few minutes / a day.

**CORS error in console:**
- Set `ALLOWED_ORIGIN` in `wrangler.toml` to your Pages URL, then `wrangler deploy`.

---

# Daily email reminder — also one-time setup

The same Worker also fires a daily email reminder to your Gmail via **Resend** (free tier: 3000 emails/month). Independent of the ntfy phone push.

## 1. Get a Resend API key (2 minutes)
1. Go to https://resend.com/signup
2. Sign up with the Gmail you want to receive reminders at
3. Verify your email (Resend sends a confirmation link — click it)
4. Dashboard → **API Keys** → **Create API Key** → permission "Full access" → copy (starts with `re_…`)

## 2. Upload as Worker secret + deploy
```bash
cd application/worker
wrangler secret put RESEND_API_KEY   # paste the key
wrangler deploy
```

## 3. Verify it works
- Open `https://<your-worker>.workers.dev/test-email` in a browser → should respond "Test email sent!"
- Check your Gmail inbox → AND the **Spam** folder

**⚠ First-time gotcha:** the first email almost always lands in **Spam** because the sender (`onboarding@resend.dev`) is new to your inbox. To fix forever:
- Open the email in Spam → click **"Report not spam"** (Gmail) or move it to Inbox
- All future emails go straight to Inbox

## 4. Change the schedule (optional)
- Edit `crons = ["0 13 * * *"]` in `wrangler.toml`. Format is standard cron in **UTC**.
- `0 13 * * *` = 13:00 UTC daily = ~18:45 Nepal time. For 7am NPT, use `15 1 * * *`.
- Redeploy after editing.

## 5. Rotate the key later
The Resend key is a SECRET. If it leaks (pasted into chat, committed to repo, screenshot, etc.), revoke immediately:
- Resend dashboard → API Keys → ⋯ → **Revoke**
- Generate a new one
- `wrangler secret put RESEND_API_KEY` (paste new) → `wrangler deploy`

## Troubleshooting (email)

**No email at all (not even in spam):**
- Worker logs: Cloudflare dashboard → Workers & Pages → nihongo-lab-reminder → **Logs (Live)** — hit `/test-email` and watch for the error message
- Most common: `RESEND_API_KEY not set` → re-run step 2

**"You can only send testing emails to your own email address":**
- Resend's anti-abuse rule. You can only send TO the email you signed up with, unless you verify a custom domain. For personal reminders to yourself, this is exactly what you want.
