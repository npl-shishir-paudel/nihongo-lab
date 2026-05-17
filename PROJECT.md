# Nihongo Lab — project brief

Short context for humans and AI assistants joining the project.

## What it is
- Static Japanese-learning web app (HTML + vanilla JS + CSS, no build step)
- Single-user (Shishir, Nepali IT professional)
- Deployed on **GitHub Pages**: https://npl-shishir-paudel.github.io/nihongo-lab/
- AI tutor chat backed by **Gemini 2.5 Flash** via a **Cloudflare Worker** proxy
- Daily reminders on phone (ntfy.sh) AND email (Resend) on a cron

## Architecture
```
  Browser                              Google
  ┌─────────────────┐  POST /chat  ┌──────────────┐  Gemini 2.5 Flash
  │  GitHub Pages   │ ───────────▶ │  Cloudflare  │ ─────▶ generateContent
  │  (static site)  │              │   Worker     │ ◀─────
  │  ai-chat.js     │ ◀─────────── │  index.js    │
  │                 │ POST /state  │              │
  │  (sync progress │ ───────────▶ │   KV: STATE  │  ← personalises the reminder
  │  + reminder)    │ ◀─────────── │              │
  └─────────────────┘              └──────────────┘
                                        │ secrets: GEMINI_API_KEY, RESEND_API_KEY
                                        │ cron: every hour (0 * * * *)
                                        │   ↳ reads KV → only fires at user's
                                        │     preferred UTC hour
                                        ├────▶ ntfy.sh    (phone push, personalised)
                                        └────▶ Resend API (Gmail email, personalised)
```
- Pages site is the whole UI. No backend except `/chat` + `/state` on the Worker.
- Worker holds API keys as Cloudflare secrets — never in the repo.
- CORS on `/chat` is locked to the Pages origin.
- **Cron runs hourly**, reads user's preferred hour from KV, fires push + email only when the hour matches. Each reminder embeds today's chapter title and any missed days based on `chapDone` synced from the app.

### KV state shape (`env.STATE`, key `"user"`)
```js
{
  progress: { curriculumStart: "2026-05-16", chapDone: [1,3,5] },
  prefs:    { reminderUtcHour: 13, channelNtfy: true, channelEmail: true },
  meta:     { updatedAt: 1716000000000, version: 1 }
}
```
Updated by the app on every chapter mark-complete or settings save.

## Repos & accounts
- **Pages repo:** `github.com/npl-shishir-paudel/nihongo-lab` (push to `main` = deploy)
- **Cloudflare Worker:** `nihongo-lab-reminder` on account `shishirpaudel.sharedsystems@gmail.com`
  - Worker URL: `https://nihongo-lab-reminder.shishirpaudel-sharedsystems.workers.dev`
- **Gemini API:** key generated at https://aistudio.google.com/apikey, stored as Worker secret

## File map (everything that matters is in `application/`)
| File | Role |
|---|---|
| `index.html` | Single page, 5 tabs (Kana+Kanji / Chapters / Quiz / Phrases / Quick Cheat) |
| `app.js` | All rendering, navigation, kana/structure logic, romaji auto-annotate, calls `NihongoAI.syncProgress()` on chapter complete |
| `ai-chat.js` | Floating chat widget + sessions + "explain this" buttons + reminder Settings UI + `/state` sync |
| `data.js` | Curriculum content (43 chapters, structures, sentences, vocab, kana, kanji) |
| `cheat-data.js` | Cheat-sheet content (5 themed sets per section) |
| `styles.css` | All CSS — light vibrant sticker theme |
| `sw.js` | Service worker (offline cache + auto-update on bump) |
| `worker/index.js` | Cloudflare Worker — `/chat` proxy + `/state` GET/POST (KV) + hourly cron + personalised ntfy/email reminders + slim chapter manifest |
| `worker/wrangler.toml` | Worker config: vars + KV namespace binding (secrets via `wrangler secret put`) |
| `AI_SETUP.md` | User-facing setup steps (AI chat + email reminder) |
| `PROJECT.md` | This file |

## Setup from scratch (new machine / new contributor)
```bash
# 1. Clone
git clone https://github.com/npl-shishir-paudel/nihongo-lab.git
cd nihongo-lab/application

# 2. (Optional) Just to view the site: open index.html in a browser. Done.

# 3. To deploy the Worker (chat + reminders + state sync):
cd worker
npx wrangler login                              # opens browser, click Allow
# Cloudflare account also needs a workers.dev subdomain enabled in the
# dashboard the first time — see AI_SETUP.md if deploy errors on this.

# Create the KV namespace and paste the printed id into wrangler.toml
# under [[kv_namespaces]] binding = "STATE":
npx wrangler kv namespace create STATE

# Set the API keys as Worker secrets (never committed):
npx wrangler secret put GEMINI_API_KEY          # Google AI Studio
npx wrangler secret put RESEND_API_KEY          # Resend.com (for email reminder)

# Deploy:
npx wrangler deploy                              # prints the Worker URL

# 4. Verify the chat works: open the Pages URL, click ✨ AI Tutor.
#    Worker URL is hardcoded in ai-chat.js (DEFAULT_WORKER_URL) so it
#    works out of the box. Override via Settings (⚙) if needed.

# 5. Set your reminder time:
#    Open the app → ✨ AI Tutor → ⚙ Settings → pick local time + channels → Save
```

## How to deploy changes
- **Frontend (UI / content / curriculum):** push to `main` on the Pages repo. GitHub Pages auto-rebuilds in ~1 minute. If you change anything cached, **bump `CACHE_NAME` in `sw.js`** so browsers refetch.
- **Worker (chat / state / cron):** `cd application/worker && npx wrangler deploy`. Instant.
- **Key rotation:** `npx wrangler secret put <NAME>` with the new value (`GEMINI_API_KEY` or `RESEND_API_KEY`), then `npx wrangler deploy`.
- **If the 43-chapter curriculum changes** (titles in `data.js`): also update the slim `CHAPTERS` array in `worker/index.js` and redeploy the Worker — that's the manifest the daily email uses to say "Today is Day X: <title>".

## What's NEVER in the repo
- `GEMINI_API_KEY` (Cloudflare secret only)
- `worker/.wrangler/` (auth tokens, build cache — `.gitignore`)
- `secrete-no-push.md` in the parent dir
- Any Cloudflare API tokens

## Conventions
- No build tools, no npm dependencies in the frontend. Vanilla JS, plain CSS.
- Curriculum content is structured data in `data.js` / `cheat-data.js` — the rendering layer is in `app.js`.
- Every Japanese cell in the UI is click-to-speak (uses browser's `speechSynthesis`).
- Hover-info tooltips live in `app.js#bindHoverInfo`.
- Romaji is **auto-annotated** at render time from raw kana via `app.js#annotateJP` (so authors don't have to type romaji into data files — they just write Japanese).

## What the AI tutor knows
System prompt lives in `worker/index.js#DEFAULT_SYSTEM`. It briefs Gemini to:
- Reply in 2–4 short sentences by default
- Always include romaji in parens after any Japanese
- Add a Nepali gloss in brackets when useful
- Lean on IT/workplace examples
- Be encouraging but direct about mistakes

## Quick triage for an AI assistant
- "Chat returns 'GEMINI_API_KEY not set'" → run `wrangler secret put GEMINI_API_KEY` in `worker/`, redeploy.
- "Chat returns CORS error" → `ALLOWED_ORIGIN` in `wrangler.toml` doesn't match the site origin. Update + redeploy.
- "Frontend changes not showing on live site" → SW cache. Bump `CACHE_NAME` in `sw.js` and push.
- "Daily reminder stopped" → check `NTFY_TOPIC` in `wrangler.toml`; Cloudflare → Workers → Triggers shows the cron enabled; the cron now runs HOURLY but only fires at `state.prefs.reminderUtcHour` — check KV state via `GET /state`.
- "Email reminder says generic message, not today's chapter" → app probably hasn't pushed progress yet. Open app → mark any chapter → check `GET /state` for `chapDone` populated.
- "Reminder fires at wrong time" → user picked a local time in the app's ⚙ Settings — it's converted to UTC and stored in KV. To check: `GET /state` → `prefs.reminderUtcHour`. The cron uses `new Date().getUTCHours()` so DST won't drift.
- "Want to deploy a new feature" → frontend = push to main, Worker = `npx wrangler deploy` in `application/worker/`.
