/* Nihongo Lab — AI chat widget (Gemini 2.0 Flash via Cloudflare Worker).
   - Floating ✨ button bottom-right
   - Slide-in side panel from the right
   - Sessions saved to localStorage (save / load / delete / clear)
   - "Explain this" buttons on content cards (event-delegated by data-explain)
   - Worker URL stored in localStorage; user pastes it once via Settings */
(function () {
  "use strict";

  // Default Worker URL — hardcoded so the app works out-of-the-box on any
  // device without needing to paste a URL into Settings. Users can still
  // override via Settings (⚙) to point at a dev Worker. The URL itself
  // isn't sensitive (visible in DevTools the moment chat fires); abuse
  // is gated by CORS lockdown on the Worker side (ALLOWED_ORIGIN).
  const DEFAULT_WORKER_URL = "https://nihongo-lab-reminder.shishirpaudel-sharedsystems.workers.dev";

  const LS_URL = "jp.chat.workerUrl";
  const LS_SESSIONS = "jp.chat.sessions";
  const LS_CURRENT = "jp.chat.currentId";

  // ── State ────────────────────────────────────────────────────────────
  const state = {
    open: false,
    sending: false,
    currentId: localStorage.getItem(LS_CURRENT) || null,
    sessions: loadSessions(),
  };
  if (!state.sessions.length) {
    const s = newSession();
    state.sessions = [s];
    state.currentId = s.id;
    saveSessions();
  } else if (!state.currentId || !state.sessions.find(s => s.id === state.currentId)) {
    state.currentId = state.sessions[0].id;
  }

  // ── Persistence ──────────────────────────────────────────────────────
  function loadSessions() {
    try { return JSON.parse(localStorage.getItem(LS_SESSIONS) || "[]"); }
    catch { return []; }
  }
  function saveSessions() {
    localStorage.setItem(LS_SESSIONS, JSON.stringify(state.sessions));
    localStorage.setItem(LS_CURRENT, state.currentId || "");
  }
  function getCurrent() {
    return state.sessions.find(s => s.id === state.currentId) || state.sessions[0];
  }
  function newSession(title) {
    return {
      id: "s_" + Math.random().toString(36).slice(2, 10),
      title: title || "New chat",
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  }

  function getWorkerUrl() {
    return localStorage.getItem(LS_URL) || DEFAULT_WORKER_URL;
  }
  function setWorkerUrl(url) {
    if (url && !/^https?:\/\//.test(url)) url = "https://" + url;
    if (url) localStorage.setItem(LS_URL, url.replace(/\/+$/, ""));
    else localStorage.removeItem(LS_URL);
  }

  // ── Mount DOM ────────────────────────────────────────────────────────
  function mount() {
    if (document.getElementById("aiChatRoot")) return;

    const root = document.createElement("div");
    root.id = "aiChatRoot";
    root.innerHTML = `
      <button id="aiChatToggle" class="ai-toggle" title="AI Tutor (chat)">
        <span class="ai-spark">✨</span><span class="ai-lbl">AI Tutor</span>
      </button>
      <aside id="aiChatPanel" class="ai-panel" aria-hidden="true">
        <header class="ai-head">
          <span class="ai-head-title">✨ AI Tutor</span>
          <select id="aiSessionPicker" class="ai-session-pick" title="Switch session"></select>
          <button id="aiSettingsBtn" class="ai-icon" title="Settings">⚙</button>
          <button id="aiCloseBtn"    class="ai-icon" title="Close">✕</button>
        </header>
        <div id="aiSettingsPane" class="ai-settings" hidden>
          <label class="ai-field">
            <span>Worker URL</span>
            <input id="aiWorkerUrl" type="url" placeholder="https://nihongo-lab-reminder.YOUR-ACCOUNT.workers.dev" />
          </label>
          <p class="ai-hint">Deploy the worker in <code>application/worker/</code> (see <code>AI_SETUP.md</code>), then paste its URL here. Stored in your browser only.</p>
          <button id="aiSaveSettings" class="ai-primary">Save</button>
        </div>
        <div id="aiMessages" class="ai-messages"></div>
        <div class="ai-toolbar">
          <button id="aiNewBtn"    class="ai-tool" title="New session">＋ New</button>
          <button id="aiRenameBtn" class="ai-tool" title="Rename session">✎ Rename</button>
          <button id="aiClearBtn"  class="ai-tool" title="Clear messages in this session">🧽 Clear</button>
          <button id="aiDeleteBtn" class="ai-tool danger" title="Delete this session">🗑 Delete</button>
        </div>
        <form id="aiInputForm" class="ai-input-row">
          <textarea id="aiInput" class="ai-input" rows="2" placeholder="Ask anything — e.g. 'what does ありがとう mean?'"></textarea>
          <button id="aiSendBtn" type="submit" class="ai-send" title="Send (Enter)">▶</button>
        </form>
      </aside>
    `;
    document.body.appendChild(root);

    // Wire up handlers
    document.getElementById("aiChatToggle").addEventListener("click", () => toggle());
    document.getElementById("aiCloseBtn").addEventListener("click", () => toggle(false));
    document.getElementById("aiSettingsBtn").addEventListener("click", () => toggleSettings());
    document.getElementById("aiSaveSettings").addEventListener("click", saveSettings);
    document.getElementById("aiNewBtn").addEventListener("click", () => createNew());
    document.getElementById("aiRenameBtn").addEventListener("click", renameCurrent);
    document.getElementById("aiClearBtn").addEventListener("click", clearCurrent);
    document.getElementById("aiDeleteBtn").addEventListener("click", deleteCurrent);
    document.getElementById("aiSessionPicker").addEventListener("change", switchSession);
    document.getElementById("aiInputForm").addEventListener("submit", onSubmit);
    document.getElementById("aiInput").addEventListener("keydown", onInputKey);

    // Event delegation: any element with data-explain attribute opens chat with that prompt
    document.body.addEventListener("click", onExplainClick);

    renderSessionPicker();
    renderMessages();
  }

  // ── Open / close / settings ─────────────────────────────────────────
  function toggle(force) {
    state.open = (typeof force === "boolean") ? force : !state.open;
    const panel = document.getElementById("aiChatPanel");
    panel.classList.toggle("is-open", state.open);
    panel.setAttribute("aria-hidden", String(!state.open));
    if (state.open) {
      setTimeout(() => document.getElementById("aiInput")?.focus(), 200);
    }
  }
  function toggleSettings(force) {
    const pane = document.getElementById("aiSettingsPane");
    const show = (typeof force === "boolean") ? force : pane.hidden;
    pane.hidden = !show;
    if (show) {
      document.getElementById("aiWorkerUrl").value = getWorkerUrl();
    }
  }
  function saveSettings() {
    const url = document.getElementById("aiWorkerUrl").value.trim();
    setWorkerUrl(url);
    toggleSettings(false);
    appendSystemMessage(url ? "✓ Worker URL saved." : "Worker URL cleared.");
  }

  // ── Session management ──────────────────────────────────────────────
  function renderSessionPicker() {
    const sel = document.getElementById("aiSessionPicker");
    sel.innerHTML = state.sessions
      .slice()
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .map(s => `<option value="${s.id}" ${s.id === state.currentId ? "selected" : ""}>${escapeHtml(s.title)}</option>`)
      .join("");
  }
  function switchSession(e) {
    state.currentId = e.target.value;
    saveSessions();
    renderMessages();
  }
  function createNew() {
    const s = newSession();
    state.sessions.unshift(s);
    state.currentId = s.id;
    saveSessions();
    renderSessionPicker();
    renderMessages();
    document.getElementById("aiInput").focus();
  }
  function renameCurrent() {
    const cur = getCurrent();
    if (!cur) return;
    const next = prompt("Rename session:", cur.title);
    if (next && next.trim()) {
      cur.title = next.trim();
      cur.updatedAt = Date.now();
      saveSessions();
      renderSessionPicker();
    }
  }
  function clearCurrent() {
    const cur = getCurrent();
    if (!cur) return;
    if (!confirm("Erase all messages in this session? The session itself stays.")) return;
    cur.messages = [];
    cur.updatedAt = Date.now();
    saveSessions();
    renderMessages();
  }
  function deleteCurrent() {
    const cur = getCurrent();
    if (!cur) return;
    if (state.sessions.length === 1) {
      alert("Can't delete your last session — clear it instead.");
      return;
    }
    if (!confirm(`Delete session "${cur.title}"? This can't be undone.`)) return;
    state.sessions = state.sessions.filter(s => s.id !== cur.id);
    state.currentId = state.sessions[0].id;
    saveSessions();
    renderSessionPicker();
    renderMessages();
  }

  // ── Messages ────────────────────────────────────────────────────────
  function renderMessages() {
    const wrap = document.getElementById("aiMessages");
    const cur = getCurrent();
    if (!cur || !cur.messages.length) {
      wrap.innerHTML = `
        <div class="ai-empty">
          <div class="ai-empty-emoji">🎌</div>
          <p><b>Your personal Japanese tutor.</b></p>
          <p class="ai-empty-tips">Try asking:</p>
          <ul class="ai-empty-prompts">
            <li><button class="ai-prompt-pill" data-prompt="Explain は vs が in 2 sentences.">Explain は vs が</button></li>
            <li><button class="ai-prompt-pill" data-prompt="Give me 3 ways to say 'I want to eat sushi' from casual to polite.">3 ways to say 'I want to eat sushi'</button></li>
            <li><button class="ai-prompt-pill" data-prompt="Quiz me: ask one Japanese sentence, I'll translate to Nepali.">Quiz me one sentence</button></li>
          </ul>
          <p class="ai-empty-hint">Or click the ✨ button on any kana / word / sentence card to ask about it.</p>
        </div>`;
      // Wire suggestion pills
      wrap.querySelectorAll(".ai-prompt-pill").forEach(b => {
        b.addEventListener("click", () => {
          document.getElementById("aiInput").value = b.dataset.prompt;
          document.getElementById("aiInputForm").dispatchEvent(new Event("submit"));
        });
      });
      return;
    }
    wrap.innerHTML = cur.messages.map(m => renderMessageHtml(m)).join("");
    wrap.scrollTop = wrap.scrollHeight;
  }
  function renderMessageHtml(m) {
    if (m.role === "system") {
      return `<div class="ai-msg ai-sys">${escapeHtml(m.content)}</div>`;
    }
    const cls = m.role === "user" ? "ai-user" : "ai-assistant";
    const label = m.role === "user" ? "You" : "Tutor";
    return `<div class="ai-msg ${cls}">
      <div class="ai-msg-head">${label}</div>
      <div class="ai-msg-body">${formatMarkdown(m.content)}</div>
    </div>`;
  }
  function appendSystemMessage(text) {
    const cur = getCurrent();
    if (!cur) return;
    cur.messages.push({ role: "system", content: text });
    cur.updatedAt = Date.now();
    saveSessions();
    renderMessages();
  }

  // ── Input + send ────────────────────────────────────────────────────
  function onInputKey(e) {
    // Enter sends, Shift+Enter inserts newline
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      document.getElementById("aiInputForm").dispatchEvent(new Event("submit"));
    }
  }
  async function onSubmit(e) {
    e.preventDefault();
    if (state.sending) return;
    const input = document.getElementById("aiInput");
    const text = input.value.trim();
    if (!text) return;
    const url = getWorkerUrl();
    if (!url) {
      toggleSettings(true);
      appendSystemMessage("Set the Worker URL in Settings first.");
      return;
    }
    const cur = getCurrent();
    cur.messages.push({ role: "user", content: text });
    cur.updatedAt = Date.now();
    // Auto-title from first user message
    if (cur.title === "New chat" && cur.messages.filter(m => m.role === "user").length === 1) {
      cur.title = text.slice(0, 36) + (text.length > 36 ? "…" : "");
    }
    saveSessions();
    renderSessionPicker();
    input.value = "";
    state.sending = true;
    // Add a placeholder assistant message
    cur.messages.push({ role: "assistant", content: "…" });
    renderMessages();

    try {
      const resp = await fetch(url + "/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: cur.messages.filter(m => m.role !== "system" && m.content !== "…").map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await resp.json().catch(() => ({ error: "Bad JSON from worker" }));
      // Replace placeholder with real content
      cur.messages.pop();
      if (!resp.ok || !data.text) {
        cur.messages.push({ role: "assistant", content: `⚠ ${data.error || "Unknown error"}` });
      } else {
        cur.messages.push({ role: "assistant", content: data.text });
      }
    } catch (err) {
      cur.messages.pop();
      cur.messages.push({ role: "assistant", content: `⚠ Network error: ${err.message}` });
    } finally {
      cur.updatedAt = Date.now();
      saveSessions();
      state.sending = false;
      renderMessages();
    }
  }

  // ── Context-aware explain: any clickable with data-explain ──────────
  function onExplainClick(e) {
    const btn = e.target.closest(".ai-explain-btn");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const ctx = btn.dataset.explain || "";
    if (!ctx) return;
    toggle(true);
    // Pre-fill and submit
    const input = document.getElementById("aiInput");
    input.value = `Explain this for me as a beginner Japanese learner:\n\n${ctx}`;
    document.getElementById("aiInputForm").dispatchEvent(new Event("submit"));
  }

  // ── Helpers ─────────────────────────────────────────────────────────
  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Minimal markdown: **bold**, `code`, line breaks. Safe — escapes first.
  function formatMarkdown(text) {
    let s = escapeHtml(text);
    s = s.replace(/```([\s\S]*?)```/g, (_, c) => `<pre>${c}</pre>`);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    s = s.replace(/\*([^*]+)\*/g, "<i>$1</i>");
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  // ── Bootstrap ───────────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }

  // Expose a helper for app.js to attach explain buttons programmatically
  // and to know whether the widget is mounted. Optional surface.
  window.NihongoAI = {
    open: () => toggle(true),
    explain: (context) => {
      toggle(true);
      const input = document.getElementById("aiInput");
      input.value = `Explain this for me as a beginner Japanese learner:\n\n${context}`;
      document.getElementById("aiInputForm").dispatchEvent(new Event("submit"));
    },
    // Build the standard explain-button HTML (used by card renderers)
    explainButtonHtml: (context) =>
      `<button class="ai-explain-btn" data-explain="${escapeHtml(context)}" title="Ask the AI tutor about this">✨</button>`,
  };
})();
