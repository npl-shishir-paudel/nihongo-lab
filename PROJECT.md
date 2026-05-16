# Nihongo Lab — project brief

Short context for humans and AI assistants joining the project.

## What it is
- Static Japanese-learning web app (HTML + vanilla JS + CSS, no build step)
- Single-user (Shishir, Nepali IT professional)
- Deployed on **GitHub Pages**: https://npl-shishir-paudel.github.io/nihongo-lab/
- AI tutor chat backed by **Gemini 2.0 Flash** via a **Cloudflare Worker** proxy

## Architecture
```
                                 (free tier, ~15 RPM)
  Browser                                                Google
  ┌─────────────────┐    POST /chat    ┌───────────────┐ Gemini
  │  GitHub Pages   │ ───────────────▶ │  Cloudflare   │   API
  │  (static site)  │                  │   Worker      │ ───▶ Gemini 2.0 Flash
  │  ai-chat.js     │ ◀─────────────── │ index.js      │ ◀───
  └─────────────────┘    JSON {text}   └───────────────┘
                                            │ secret: GEMINI_API_KEY
                                            │ cron: daily ntfy reminder
                                            ▼
                                       ntfy.sh → phone push
```
- Pages site is the whole UI. No backend except for chat.
- Worker holds the Gemini API key as a Cloudflare secret — never in the repo.
- CORS on `/chat` is locked to the Pages origin.
- The same Worker also sends a daily ntfy reminder on a cron.

## Repos & accounts
- **Pages repo:** `github.com/npl-shishir-paudel/nihongo-lab` (push to `main` = deploy)
- **Cloudflare Worker:** `nihongo-lab-reminder` on account `shishirpaudel.sharedsystems@gmail.com`
  - Worker URL: `https://nihongo-lab-reminder.shishirpaudel-sharedsystems.workers.dev`
- **Gemini API:** key generated at https://aistudio.google.com/apikey, stored as Worker secret

## File map (everything that matters is in `application/`)
| File | Role |
|---|---|
| `index.html` | Single page, 5 tabs (Kana+Kanji / Chapters / Quiz / Phrases / Quick Cheat) |
| `app.js` | All rendering, navigation, kana/structure logic, romaji auto-annotate |
| `ai-chat.js` | Floating chat widget + sessions + "explain this" buttons |
| `data.js` | Curriculum content (43 chapters, structures, sentences, vocab, kana, kanji) |
| `cheat-data.js` | Cheat-sheet content (5 themed sets per section) |
| `styles.css` | All CSS — light vibrant sticker theme |
| `sw.js` | Service worker (offline cache + auto-update on bump) |
| `worker/index.js` | Cloudflare Worker — `/chat` proxy + scheduled ntfy reminder |
| `worker/wrangler.toml` | Worker config (vars only, secrets via `wrangler secret put`) |
| `AI_SETUP.md` | User-facing steps to wire up AI chat |
| `PROJECT.md` | This file |

## Setup from scratch (new machine / new contributor)
```bash
# 1. Clone
git clone https://github.com/npl-shishir-paudel/nihongo-lab.git
cd nihongo-lab

# 2. (Optional) Just to view the site: open index.html in a browser. Done.

# 3. To deploy the Worker (chat + reminders):
cd worker
npx wrangler login                          # opens browser, click Allow
npx wrangler secret put GEMINI_API_KEY      # paste your Gemini key
# (Cloudflare account also needs a workers.dev subdomain enabled in the
#  dashboard the first time — see AI_SETUP.md if deploy errors on this.)
npx wrangler deploy                         # prints the Worker URL

# 4. Verify the chat works: open the Pages URL, click ✨ AI Tutor.
#    Worker URL is hardcoded in ai-chat.js (DEFAULT_WORKER_URL) so it
#    works out of the box. Override via Settings ⚙ if needed.
```

## How to deploy changes
- **Frontend (UI / content / curriculum):** push to `main` on the Pages repo. GitHub Pages auto-rebuilds in ~1 minute. If you change anything cached, **bump `CACHE_NAME` in `sw.js`** so browsers refetch.
- **Worker (chat backend / cron):** `cd application/worker && npx wrangler deploy`. Instant.
- **Gemini key rotation:** `npx wrangler secret put GEMINI_API_KEY` with the new value, then `npx wrangler deploy`.

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
- "Daily reminder stopped" → check `NTFY_TOPIC` in `wrangler.toml`; check Cloudflare → Workers → Triggers shows the cron enabled.
- "Want to deploy a new feature" → frontend = push to main, Worker = `npx wrangler deploy` in `application/worker/`.
