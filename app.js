/* eslint-disable */
// Interactive Japanese learning app — vanilla JS, no build step.

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const state = {
    voice: null,
    voices: [],
    rate: parseFloat(localStorage.getItem("jp.rate") || "0.95"),
    hoverInfo: localStorage.getItem("jp.hoverInfo") !== "0",
    learned: new Set(JSON.parse(localStorage.getItem("jp.learned") || "[]")),
    score: JSON.parse(localStorage.getItem("jp.score") || '{"right":0,"total":0}'),
    quiz: null,
    tipTimer: null,
    lastTab: localStorage.getItem("jp.tab") || "today"
  };

  // ---------- speech ----------
  const synth = window.speechSynthesis;

  function loadVoices() {
    const all = synth.getVoices();
    state.voices = all.filter(v => /^ja(-|_)?/i.test(v.lang) || /Japanese/i.test(v.name));
    const sel = $("#voice");
    sel.innerHTML = "";
    if (state.voices.length === 0) {
      const opt = document.createElement("option");
      opt.textContent = "No Japanese voice found";
      sel.appendChild(opt);
      sel.disabled = true;
      return;
    }
    sel.disabled = false;
    state.voices.forEach((v, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${v.name} (${v.lang})`;
      sel.appendChild(opt);
    });
    const savedIdx = parseInt(localStorage.getItem("jp.voiceIdx") || "0", 10);
    sel.value = Math.min(savedIdx, state.voices.length - 1);
    state.voice = state.voices[sel.value];
  }

  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }

  let currentlyPlaying = null;
  function speak(text, el) {
    if (!synth || !text) return;
    synth.cancel();
    if (currentlyPlaying) currentlyPlaying.classList.remove("playing");
    if (el) el.classList.add("playing");
    currentlyPlaying = el || null;

    const u = new SpeechSynthesisUtterance(text);
    if (state.voice) u.voice = state.voice;
    u.lang = state.voice ? state.voice.lang : "ja-JP";
    u.rate = state.rate;
    u.pitch = 1.0;
    u.onend = u.onerror = () => {
      if (el && el.classList.contains("playing")) el.classList.remove("playing");
      if (currentlyPlaying === el) currentlyPlaying = null;
    };
    synth.speak(u);
  }

  // ---------- info tooltip (hover to learn, click to hear) ----------
  const infoTip = document.createElement("div");
  infoTip.className = "info-tip";
  infoTip.style.display = "none";
  document.body.appendChild(infoTip);

  function showTipFor(el, html) {
    if (!html) return;
    clearTimeout(state.tipTimer);
    state.tipTimer = setTimeout(() => {
      infoTip.innerHTML = html;
      infoTip.style.display = "block";
      // measure after content is set
      const elRect = el.getBoundingClientRect();
      const tipRect = infoTip.getBoundingClientRect();
      const margin = 10;
      let top  = elRect.top  + window.scrollY - tipRect.height - margin;
      let left = elRect.left + window.scrollX + (elRect.width / 2) - (tipRect.width / 2);
      // flip below if no room above
      if (top < window.scrollY + 4) top = elRect.bottom + window.scrollY + margin;
      // clamp to viewport horizontally
      const minLeft = window.scrollX + 8;
      const maxLeft = window.scrollX + window.innerWidth - tipRect.width - 8;
      if (left < minLeft) left = minLeft;
      if (left > maxLeft) left = maxLeft;
      infoTip.style.top = top + "px";
      infoTip.style.left = left + "px";
      infoTip.classList.add("is-visible");
    }, 140);
  }
  function hideTip() {
    clearTimeout(state.tipTimer);
    infoTip.classList.remove("is-visible");
    // hide after fade so it's not in the way
    setTimeout(() => { if (!infoTip.classList.contains("is-visible")) infoTip.style.display = "none"; }, 140);
  }

  // hover shows learnable info; click plays sound (wired separately)
  function bindHoverInfo(el, getHtml) {
    el.addEventListener("mouseenter", (ev) => {
      if (!state.hoverInfo) return;
      ev.stopPropagation();
      const html = typeof getHtml === "function" ? getHtml() : getHtml;
      if (html) showTipFor(el, html);
    });
    el.addEventListener("mouseleave", hideTip);
  }

  // ---------- info-html generators ----------
  function escapeHtmlEarly(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function tipFooter(text) {
    return `<div class="tip-foot">${text || "💡 Click to play sound"}</div>`;
  }

  function infoForKana(item) {
    const groupName = ({
      a: "Vowels (あいうえお)", k: "K-row", s: "S-row", t: "T-row", n: "N-row", h: "H-row",
      m: "M-row", y: "Y-row", r: "R-row", w: "W-row", "n*": "Standalone ん",
      g: "G-row (dakuten of K)", z: "Z-row (dakuten of S)", d: "D-row (dakuten of T)",
      b: "B-row (dakuten of H)", p: "P-row (handakuten of H)", "yōon": "Combinations (yōon)"
    })[item.group] || item.group;
    return `
      <div class="tip-jp">${escapeHtmlEarly(item.ch)}</div>
      <div class="tip-ro">${escapeHtmlEarly(item.ro)}</div>
      <div class="tip-rows">
        <div class="tip-row"><b>Type</b> Syllable</div>
        <div class="tip-row"><b>Group</b> ${escapeHtmlEarly(groupName)}</div>
      </div>
      ${tipFooter()}
    `;
  }

  function infoForWord(w) {
    const np = (typeof NEPALI !== "undefined" && NEPALI[w.jp]) || "";
    return `
      <div class="tip-jp">${escapeHtmlEarly(w.jp)}</div>
      <div class="tip-ro">${escapeHtmlEarly(w.ro)}</div>
      <div class="tip-mean">${escapeHtmlEarly(w.en)}</div>
      <div class="tip-rows">
        <div class="tip-row"><b>Category</b> ${escapeHtmlEarly(w.tag || "")}</div>
        ${w.ex ? `<div class="tip-row"><b>Example</b> ${escapeHtmlEarly(w.ex)}</div>` : ""}
        ${np ? `<div class="tip-row"><b>NP</b> ${escapeHtmlEarly(np)}</div>` : ""}
      </div>
      ${tipFooter()}
    `;
  }

  function infoForSentence(s) {
    const np = (typeof NEPALI !== "undefined" && NEPALI[s.jp]) || "";
    return `
      <div class="tip-jp">${escapeHtmlEarly(s.jp)}</div>
      <div class="tip-ro">${escapeHtmlEarly(s.ro)}</div>
      <div class="tip-mean">${escapeHtmlEarly(s.en)}</div>
      <div class="tip-rows">
        ${s.scene ? `<div class="tip-row"><b>Scene</b> ${escapeHtmlEarly(s.scene)}</div>` : ""}
        ${np ? `<div class="tip-row"><b>NP</b> ${escapeHtmlEarly(np)}</div>` : ""}
      </div>
      ${tipFooter("💡 Click any word inside to play it alone, or click the card for the whole sentence")}
    `;
  }

  function infoForGrammarExample(ex) {
    const np = (typeof NEPALI !== "undefined" && NEPALI[ex.jp]) || "";
    return `
      <div class="tip-jp">${escapeHtmlEarly(ex.jp)}</div>
      <div class="tip-ro">${escapeHtmlEarly(ex.ro || "")}</div>
      <div class="tip-mean">${escapeHtmlEarly(ex.en || "")}</div>
      ${np ? `<div class="tip-rows"><div class="tip-row"><b>NP</b> ${escapeHtmlEarly(np)}</div></div>` : ""}
      ${tipFooter()}
    `;
  }

  function infoForConvoTurn(turn, conv) {
    const np = (typeof NEPALI !== "undefined" && NEPALI[turn.jp]) || "";
    const speaker = turn.s === "A" ? conv?.a : conv?.b;
    return `
      <div class="tip-jp">${escapeHtmlEarly(turn.jp)}</div>
      <div class="tip-ro">${escapeHtmlEarly(turn.ro || "")}</div>
      <div class="tip-mean">${escapeHtmlEarly(turn.en || "")}</div>
      <div class="tip-rows">
        ${speaker ? `<div class="tip-row"><b>Speaker</b> ${escapeHtmlEarly(speaker.name)} · ${escapeHtmlEarly(speaker.role || "")}</div>` : ""}
        ${np ? `<div class="tip-row"><b>NP</b> ${escapeHtmlEarly(np)}</div>` : ""}
      </div>
      ${tipFooter()}
    `;
  }

  // Token-level info — explains role / tense / polarity / form / person.
  // Reads from a token-like object: { t, ro, role, meaning }.
  function infoForToken(tk) {
    if (!tk || !tk.t) return "";
    const r = (tk.role || "").toLowerCase();
    const rows = [];

    let ptype = "";
    if (r.includes("particle"))                                 ptype = "Particle (small grammar word)";
    else if (r.includes("contraction"))                         ptype = "Particle contraction";
    else if (r.includes("copula"))                              ptype = "Copula (linking 'is/am/are')";
    else if (r.includes("politeness"))                          ptype = "Politeness marker";
    else if (r.includes("auxiliary"))                           ptype = "Auxiliary verb (helper)";
    else if (r.includes("verb"))                                ptype = "Verb (action word)";
    else if (r.includes("adjective"))                           ptype = "Adjective (describes a noun)";
    else if (r.includes("question word"))                       ptype = "Question word";
    else if (r.includes("demonstrative"))                       ptype = "Demonstrative (this / that)";
    else if (r.includes("pronoun"))                             ptype = "Pronoun (I / you / he / she)";
    else if (r.includes("proper noun"))                         ptype = "Proper noun (name)";
    else if (r.includes("honorific"))                           ptype = "Honorific (politeness)";
    else if (r.includes("suffix"))                              ptype = "Suffix";
    else if (r.includes("counter"))                             ptype = "Counter word";
    else if (r.includes("interjection"))                        ptype = "Interjection (yes / no etc.)";
    else if (r.includes("adverb"))                              ptype = "Adverb (modifies verb / adj)";
    else if (r.includes("time noun"))                           ptype = "Time noun";
    else if (r.includes("noun"))                                ptype = "Noun";
    if (ptype) rows.push({ k: "Type", v: ptype });

    // Tense
    if (r.includes("past"))                                     rows.push({ k: "Tense", v: "Past" });
    else if (r.includes("polite") || r.includes("present") || (ptype && (ptype.startsWith("Verb") || ptype.startsWith("Copula"))))
      rows.push({ k: "Tense", v: "Present / future" });

    // Polarity
    if (r.includes("negative"))                                 rows.push({ k: "Polarity", v: "Negative ('not ~')" });
    else if (r.includes("polite") || ptype.startsWith("Verb") || ptype.startsWith("Copula"))
      rows.push({ k: "Polarity", v: "Affirmative" });

    // Form
    if (r.includes("て-form") || r.includes("continuous"))      rows.push({ k: "Form", v: "て-form / continuous (-ing)" });
    if (r.includes("volitional"))                               rows.push({ k: "Form", v: "Volitional ('let's ~')" });
    if (r.includes("desire") || r.includes("たい"))             rows.push({ k: "Form", v: "Desire (たい — 'want to ~')" });
    if (r.includes("humble"))                                   rows.push({ k: "Form", v: "Humble (formal lowering)" });

    // Person
    if (r.includes("1st") || r.match(/\b1st\b/))                rows.push({ k: "Person", v: "1st person (I / we)" });
    else if (r.includes("2nd"))                                 rows.push({ k: "Person", v: "2nd person (you)" });
    else if (r.includes("3rd"))                                 rows.push({ k: "Person", v: "3rd person (he / she / they)" });
    if (r.includes("plural"))                                   rows.push({ k: "Number", v: "Plural" });

    // Particle sub-role
    if (r.includes("topic"))                                    rows.push({ k: "Particle role", v: "Topic marker (says 'as for ~')" });
    else if (r.includes("object"))                              rows.push({ k: "Particle role", v: "Object marker (the thing acted on)" });
    else if (r.includes("subject"))                             rows.push({ k: "Particle role", v: "Subject marker" });
    else if (r.includes("possessive") || r.includes("connector")) rows.push({ k: "Particle role", v: "Possessive / connector ('s, of)" });
    else if (r.includes("destination"))                         rows.push({ k: "Particle role", v: "Destination marker (to)" });
    else if (r.includes("location"))                            rows.push({ k: "Particle role", v: "Location marker (at, in)" });
    else if (r.includes("means"))                               rows.push({ k: "Particle role", v: "Means / instrument (by, with)" });
    else if (r.includes("origin"))                              rows.push({ k: "Particle role", v: "Origin (from)" });
    else if (r.includes("reason"))                              rows.push({ k: "Particle role", v: "Reason (because)" });
    else if (r.includes("question"))                            rows.push({ k: "Particle role", v: "Question marker (?)" });

    // Adjective subtype
    if (r.includes("i-adjective"))                              rows.push({ k: "Adj type", v: "i-adjective (ends in い)" });
    else if (r.includes("na-adjective"))                        rows.push({ k: "Adj type", v: "na-adjective (uses な before noun)" });

    return `
      <div class="tip-jp">${escapeHtmlEarly(tk.t)}</div>
      ${tk.ro ? `<div class="tip-ro">${escapeHtmlEarly(tk.ro)}</div>` : ""}
      ${tk.meaning ? `<div class="tip-mean">${escapeHtmlEarly(tk.meaning)}</div>` : ""}
      ${rows.length ? `<div class="tip-rows">
        ${rows.map(r => `<div class="tip-row"><b>${escapeHtmlEarly(r.k)}</b> ${escapeHtmlEarly(r.v)}</div>`).join("")}
      </div>` : ""}
      ${tipFooter()}
    `;
  }

  // ---------- tabs ----------
  // Top-level tabs are <a href="#name"> so right-click → "Open in new tab"
  // works natively and ctrl/cmd-click opens a new tab. On normal left-click
  // we prevent default and switch panels SPA-style, also updating the URL
  // hash so the current tab is reflected in the address bar and bookmarkable.
  const VALID_TABS = ["kana", "chapters", "quiz", "phrases", "cheat"];

  function activateTab(name, opts) {
    opts = opts || {};
    if (!VALID_TABS.includes(name)) name = "kana";
    $$(".tab").forEach(t => t.classList.toggle("is-active", t.dataset.tab === name));
    $$(".panel").forEach(p => p.classList.toggle("is-active", p.id === `panel-${name}`));
    state.lastTab = name;
    localStorage.setItem("jp.tab", name);
    // Reflect in URL hash (without scrolling/pushing history)
    if (!opts.skipHash && location.hash.slice(1) !== name) {
      history.replaceState(null, "", "#" + name);
    }
  }

  $("#tabs").addEventListener("click", (e) => {
    const a = e.target.closest(".tab");
    if (!a) return;
    // Let modifier-clicks (cmd / ctrl / shift / middle-click) follow the
    // link normally — that's how the user gets "open in new tab".
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    activateTab(a.dataset.tab);
  });

  // React to the URL hash changing (forward/back navigation, manual edits)
  window.addEventListener("hashchange", () => {
    const tab = location.hash.slice(1).split("?")[0]; // strip any subtab fragment
    if (VALID_TABS.includes(tab)) activateTab(tab, { skipHash: true });
  });

  // ---------- sub-tabs (segmented control inside Kana / Phrases) ----------
  function activateSubtab(panelKey, subtab) {
    const wrap = document.querySelector(`.subtabs[data-panel="${panelKey}"]`);
    if (!wrap) return;
    $$(".subtab", wrap).forEach(t => t.classList.toggle("is-active", t.dataset.subtab === subtab));
    const panel = document.getElementById(`panel-${panelKey}`);
    if (!panel) return;
    $$(".subpanel", panel).forEach(p => p.classList.toggle("is-active", p.id === `subpanel-${subtab}`));
    localStorage.setItem(`jp.subtab.${panelKey}`, subtab);
  }
  $$(".subtabs").forEach(wrap => {
    const panelKey = wrap.dataset.panel;
    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".subtab");
      if (!btn) return;
      activateSubtab(panelKey, btn.dataset.subtab);
    });
    // restore saved sub-tab
    const saved = localStorage.getItem(`jp.subtab.${panelKey}`);
    if (saved) activateSubtab(panelKey, saved);
  });

  // ---------- controls ----------
  $("#voice").addEventListener("change", (e) => {
    state.voice = state.voices[parseInt(e.target.value, 10)];
    localStorage.setItem("jp.voiceIdx", e.target.value);
  });
  const rateEl = $("#rate"), rateVal = $("#rateVal");
  rateEl.value = state.rate; rateVal.textContent = state.rate.toFixed(2);
  rateEl.addEventListener("input", () => {
    state.rate = parseFloat(rateEl.value);
    rateVal.textContent = state.rate.toFixed(2);
    localStorage.setItem("jp.rate", String(state.rate));
  });
  const hoverChk = $("#hoverInfo");
  hoverChk.checked = state.hoverInfo;
  hoverChk.addEventListener("change", () => {
    state.hoverInfo = hoverChk.checked;
    localStorage.setItem("jp.hoverInfo", state.hoverInfo ? "1" : "0");
    if (!state.hoverInfo) hideTip();
  });

  // theme
  const themeBtn = $("#theme");
  const savedTheme = localStorage.getItem("jp.theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (cur === "dark") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("jp.theme", cur);
  });

  // ---------- kana table (mirrored: voiced left ← unvoiced right) ----------
  const VOWEL_ORDER = ["a", "i", "u", "e", "o"];
  function vowelCol(ro) {
    const r = ro.toLowerCase();
    if (r.startsWith("wo")) return 4;          // を sits in the 'o' column
    if (r === "n") return 0;                    // ん placed in first slot
    const matches = r.match(/[aiueo]/g);
    if (!matches) return -1;
    return VOWEL_ORDER.indexOf(matches[matches.length - 1]);
  }

  function makeKanaCard(item, kind) {
    const card = document.createElement("div");
    card.className = "kana";
    card.dataset.search = `${item.ch} ${item.ro} ${item.group}`.toLowerCase();
    card.dataset.group = item.group;
    const id = `${kind}:${item.ch}`;
    if (state.learned.has(id)) card.classList.add("learned");

    card.innerHTML = `
      <span class="group">${item.group}</span>
      <button class="learn" title="Mark as learned">✓</button>
      <span class="ch">${item.ch}</span>
      <span class="ro">${item.ro}</span>
    `;
    bindHoverInfo(card, () => infoForKana(item));
    card.addEventListener("click", (e) => {
      if (e.target.closest(".learn")) return;
      speak(item.ch, card);
    });
    card.querySelector(".learn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (state.learned.has(id)) state.learned.delete(id);
      else state.learned.add(id);
      card.classList.toggle("learned");
      localStorage.setItem("jp.learned", JSON.stringify([...state.learned]));
    });
    return card;
  }

  function makeSide(items, kind) {
    const side = document.createElement("div");
    side.className = "kana-side";
    const slots = new Array(5).fill(null);
    items.forEach(it => {
      const c = vowelCol(it.ro);
      if (c >= 0 && slots[c] == null) slots[c] = it;
    });
    slots.forEach(it => {
      side.appendChild(it ? makeKanaCard(it, kind) : Object.assign(document.createElement("div"), { className: "kana-empty" }));
    });
    return side;
  }

  function makeLabel(html, extraClass = "") {
    const el = document.createElement("div");
    el.className = "label" + (extraClass ? " " + extraClass : "");
    el.innerHTML = html;
    return el;
  }

  function buildKanaTable(rootSel, list, kind) {
    const root = $(rootSel);
    root.innerHTML = "";
    root.className = "kana-table";

    const byGroup = {};
    list.forEach(item => (byGroup[item.group] = byGroup[item.group] || []).push(item));

    // Each entry: voiced families (left, top→bottom) + unvoiced family (right)
    const PLAN = [
      { unvoiced: "a",  rowName: "あ"  },                                   // vowels
      { unvoiced: "k",  voiced: ["g"], rowName: "か",  arrow: "K → G" },
      { unvoiced: "s",  voiced: ["z"], rowName: "さ",  arrow: "S → Z" },
      { unvoiced: "t",  voiced: ["d"], rowName: "た",  arrow: "T → D" },
      { unvoiced: "n",  rowName: "な"  },
      { unvoiced: "h",  voiced: ["b","p"], rowName: "は", arrow: ["H → B","H → P"] },
      { unvoiced: "m",  rowName: "ま"  },
      { unvoiced: "y",  rowName: "や"  },
      { unvoiced: "r",  rowName: "ら"  },
      { unvoiced: "w",  rowName: "わ"  },
      { unvoiced: "n*", rowName: "ん"  }
    ];

    PLAN.forEach(p => {
      const row = document.createElement("div");
      row.className = "kana-row";
      const unvoiced = makeSide(byGroup[p.unvoiced] || [], kind);

      if (!p.voiced) {
        row.classList.add("no-voiced");
        const empty = document.createElement("div");
        empty.className = "kana-side empty";
        for (let i = 0; i < 5; i++) empty.appendChild(Object.assign(document.createElement("div"), { className: "kana-empty" }));
        const lbl = makeLabel(`<span class="nm">${p.rowName}</span>`);
        row.append(unvoiced, lbl, empty);
      } else if (p.voiced.length === 1) {
        const voiced = makeSide(byGroup[p.voiced[0]] || [], kind);
        const lbl = makeLabel(`<span class="nm">${p.arrow}</span><span class="arrow">→</span>`);
        row.append(unvoiced, lbl, voiced);
      } else {
        // dual voiced (h → b + p)
        row.classList.add("dual");
        const v1 = makeSide(byGroup[p.voiced[0]] || [], kind); v1.classList.add("v1");
        const v2 = makeSide(byGroup[p.voiced[1]] || [], kind); v2.classList.add("v2");
        const l1 = makeLabel(`<span class="nm">${p.arrow[0]}</span><span class="arrow">→</span>`, "l1");
        const l2 = makeLabel(`<span class="nm">${p.arrow[1]}</span><span class="arrow">→</span>`, "l2");
        unvoiced.classList.add("u");
        row.append(unvoiced, v1, v2, l1, l2);
      }
      root.appendChild(row);
    });

    // yōon section (combos) at the bottom
    if (byGroup["yōon"]) {
      const head = document.createElement("div");
      head.className = "kana-section-heading";
      head.textContent = "Combinations (yōon) — consonant + small ゃゅょ";
      root.appendChild(head);
      const yo = document.createElement("div");
      yo.className = "kana-yoon";
      byGroup["yōon"].forEach(it => yo.appendChild(makeKanaCard(it, kind)));
      root.appendChild(yo);
    }
  }

  function bindKanaSearch(inputSel, rootSel) {
    $(inputSel).addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      $$(".kana", $(rootSel)).forEach(el => {
        const hit = !q || (el.dataset.search || "").includes(q);
        el.classList.toggle("is-hidden", !hit);
      });
    });
  }

  // ---------- words ----------
  function buildWords() {
    const root = $("#wordGrid");
    root.innerHTML = "";
    const tags = [...new Set(DATA.words.map(w => w.tag))];
    const chips = $("#wordChips");
    chips.innerHTML = "";
    const allChip = makeChip("all", true);
    chips.appendChild(allChip);
    tags.forEach(t => chips.appendChild(makeChip(t)));
    let activeTag = "all";

    function makeChip(label, isActive) {
      const c = document.createElement("button");
      c.className = "chip" + (isActive ? " is-active" : "");
      c.textContent = label;
      c.addEventListener("click", () => {
        activeTag = label;
        $$(".chip", chips).forEach(x => x.classList.toggle("is-active", x === c));
        applyFilter();
      });
      return c;
    }

    DATA.words.forEach(w => {
      const card = document.createElement("div");
      card.className = "word";
      card.dataset.search = `${w.jp} ${w.ro} ${w.en} ${w.tag}`.toLowerCase();
      card.dataset.tag = w.tag;
      const em = (typeof EMOJI !== "undefined" && EMOJI[w.jp]) || "";
      card.innerHTML = `
        <span class="tag">${w.tag}</span>
        <div class="jp">${em ? `<span class="emoji">${em}</span>` : ""}${w.jp}</div>
        <div class="ro">${w.ro}</div>
        <div class="en">${w.en}</div>
        ${w.ex ? `<div class="ex">${w.ex}</div>` : ""}
      `;
      bindHoverInfo(card, () => infoForWord(w));
      card.addEventListener("click", () => {
        card.classList.toggle("is-open");
        speak(w.jp, card);
      });
      root.appendChild(card);
    });

    function applyFilter() {
      const q = $("#searchWord").value.trim().toLowerCase();
      $$(".word", root).forEach(el => {
        const matchTag = activeTag === "all" || el.dataset.tag === activeTag;
        const matchQ = !q || el.dataset.search.includes(q);
        el.classList.toggle("is-hidden", !(matchTag && matchQ));
      });
    }
    $("#searchWord").addEventListener("input", applyFilter);
  }

  // ---------- sentences ----------
  function buildSentences() {
    const root = $("#sentList");
    root.innerHTML = "";
    const scenes = [...new Set(DATA.sentences.map(s => s.scene))];
    const chips = $("#sentChips");
    chips.innerHTML = "";
    let activeScene = "all";
    const allChip = mkChip("all", true);
    chips.appendChild(allChip);
    scenes.forEach(s => chips.appendChild(mkChip(s)));

    function mkChip(label, on) {
      const c = document.createElement("button");
      c.className = "chip" + (on ? " is-active" : "");
      c.textContent = label;
      c.addEventListener("click", () => {
        activeScene = label;
        $$(".chip", chips).forEach(x => x.classList.toggle("is-active", x === c));
        applyFilter();
      });
      return c;
    }

    DATA.sentences.forEach(s => {
      const card = document.createElement("div");
      card.className = "sentence";
      card.dataset.search = `${s.jp} ${s.ro} ${s.en} ${s.scene}`.toLowerCase();
      card.dataset.scene = s.scene;

      // tokens (if provided) get individual hover-play
      let jpHtml;
      if (s.tokens) {
        jpHtml = s.tokens.map(tk => `<span class="tok" data-say="${tk.say || tk.t}">${tk.t}</span>`).join("");
      } else {
        jpHtml = s.jp;
      }

      card.innerHTML = `
        <span class="scene">${s.scene}</span>
        <div class="jp">${jpHtml}</div>
        <div class="ro">${s.ro}</div>
        <div class="en">${s.en}</div>
      `;
      bindHoverInfo(card, () => infoForSentence(s));
      card.addEventListener("click", (e) => {
        // if clicking a token, only play that token
        const tok = e.target.closest(".tok");
        if (tok) {
          e.stopPropagation();
          speak(tok.dataset.say || tok.textContent, tok);
          return;
        }
        speak(s.jp, card);
      });
      // per-token hover shows the token's pronunciation/role info
      $$(".tok", card).forEach(t => {
        bindHoverInfo(t, () => `
          <div class="tip-jp">${escapeHtmlEarly(t.textContent)}</div>
          <div class="tip-ro">${escapeHtmlEarly(t.dataset.say || "")}</div>
          ${tipFooter()}
        `);
      });
      root.appendChild(card);
    });

    function applyFilter() {
      const q = $("#searchSent").value.trim().toLowerCase();
      $$(".sentence", root).forEach(el => {
        const matchScene = activeScene === "all" || el.dataset.scene === activeScene;
        const matchQ = !q || el.dataset.search.includes(q);
        el.classList.toggle("is-hidden", !(matchScene && matchQ));
      });
    }
    $("#searchSent").addEventListener("input", applyFilter);
  }

  // (Grammar tab removed — Structure tab covers everything more deeply.
  //  DATA.grammar is still used by Chapters to render an inline grammar
  //  summary inside each lesson, so the data itself stays in data.js.)

  // ---------- chapters / curriculum ----------
  const sentLookup = new Map(DATA.sentences.map(s => [s.jp, s]));
  // also let chapters reference example sentences from grammar cards
  DATA.grammar.forEach(g => {
    g.examples.forEach(ex => {
      if (!sentLookup.has(ex.jp)) {
        sentLookup.set(ex.jp, { jp: ex.jp, ro: ex.ro || "", en: ex.en, scene: "grammar" });
      }
    });
  });
  // Combined grammar / structure lookup. Chapters can reference EITHER an
  // old grammar entry (title → {title, pattern, rule}) OR a new structure
  // (title → full {title, formula, description, main, examples, ...}).
  const gramLookup = new Map();
  const structureByTitle = new Map();   // title → full structure object
  DATA.grammar.forEach(g => {
    gramLookup.set(g.title, { title: g.title, pattern: g.pattern, rule: g.rule, source: "grammar" });
  });
  if (DATA.structures) {
    DATA.structures.forEach(s => {
      structureByTitle.set(s.title, s);
      gramLookup.set(s.title, { title: s.title, pattern: s.formula, rule: s.description, source: "structure" });
      // also surface main + example sentences so chapters can pull them
      if (s.main && !sentLookup.has(s.main.jp)) {
        sentLookup.set(s.main.jp, { jp: s.main.jp, ro: s.main.ro || "", en: s.main.en, scene: "structure" });
      }
      (s.examples || []).forEach(ex => {
        if (!sentLookup.has(ex.jp)) {
          sentLookup.set(ex.jp, { jp: ex.jp, ro: ex.ro || "", en: ex.en, scene: "structure" });
        }
      });
    });
  }
  // Reverse-lookup: which chapter day(s) reference each structure title.
  // Used to render "Practiced on Day X, Y" backlinks inside Structure cards.
  const structureUsage = new Map();
  DATA.chapters.forEach(ch => {
    (ch.grammar || []).forEach(title => {
      if (!structureUsage.has(title)) structureUsage.set(title, []);
      structureUsage.get(title).push(ch.day);
    });
  });
  const lookups = {
    hira: new Map(DATA.hiragana.map(k => [k.ch, k])),
    kata: new Map(DATA.katakana.map(k => [k.ch, k])),
    word: new Map(DATA.words.map(w => [w.jp, w])),
    sent: sentLookup,
    gram: gramLookup
  };

  // Cross-tab navigation — click a day badge inside Structure card to jump
  // to that chapter (Chapters tab → open the day → smooth scroll into view).
  function navigateToChapterDay(day) {
    activateTab("chapters");
    // Wait a tick so the panel is visible before scrolling
    setTimeout(() => {
      const chap = document.querySelector(`.chapter[data-day="${day}"]`);
      if (!chap) return;
      chap.classList.add("is-open");
      chap.scrollIntoView({ behavior: "smooth", block: "start" });
      chap.classList.add("flash");
      setTimeout(() => chap.classList.remove("flash"), 1500);
    }, 80);
  }

  function buildChapters() {
    const root = $("#chapList");
    root.innerHTML = "";
    const done = new Set(JSON.parse(localStorage.getItem("jp.chapDone") || "[]"));
    let chapTracker; // assigned below
    const refreshStreak = () => {
      $("#chapStreak").textContent = `Completed: ${done.size} / ${DATA.chapters.length}`;
      if (chapTracker && chapTracker.refresh) chapTracker.refresh();
    };

    // Inject the progress tracker dashboard at the top of the chapters panel
    const panel = root.parentNode;
    const oldTracker = panel.querySelector(".progress-tracker");
    if (oldTracker) oldTracker.remove();
    chapTracker = buildProgressTracker({
      kind: "chapters",
      total: DATA.chapters.length,
      items: DATA.chapters.map(c => ({ day: c.day, title: c.title })),
      doneSet: done,
      label: "30-Day Curriculum 課程",
      emoji: "📚",
      accent: "#ff7a86"
    });
    // Insert above the chapter-list (which is the snake timeline container)
    panel.insertBefore(chapTracker, root);

    refreshStreak();

    DATA.chapters.forEach((ch, chIdx) => {
      const card = document.createElement("div");
      // Snake-timeline: alternate left/right by index for a winding path layout
      const side = chIdx % 2 === 0 ? "is-left" : "is-right";
      card.className = "chapter " + side + (done.has(ch.day) ? " done" : "");
      card.dataset.day = ch.day;
      // Pick an emoji that hints at the day's theme — falls back to a star
      const dayEmoji = ch.title.startsWith("★") ? "⭐"
        : (ch.kana?.hira?.length ? "あ"
          : ch.kana?.kata?.length ? "ア"
          : (ch.grammar?.length ? "🧠"
          : ch.words?.length ? "📚"
          : "💬"));

      // ─ head ───────────────────────────
      const head = document.createElement("div");
      head.className = "chapter-head";
      head.innerHTML = `
        <div class="chapter-day">
          <span class="day-emoji" aria-hidden="true">${dayEmoji}</span>
          <span class="num">${ch.day}</span>
          <span class="week">Week ${ch.week}</span>
        </div>
        <div class="chapter-title">
          <h3>${ch.title}</h3>
          <span class="goal">${ch.goal}</span>
        </div>
        <div class="chapter-meta">
          <span class="meta-pill">📖 ${(ch.kana?.hira?.length || 0) + (ch.kana?.kata?.length || 0)} kana</span>
          <span class="meta-pill">🔤 ${(ch.words?.length || 0)} words</span>
          <span class="meta-pill">💬 ${(ch.sentences?.length || 0)} sentences</span>
          <span class="meta-pill min">⏱️ ${ch.minutes} min</span>
        </div>
        <button class="chapter-toggle" title="Mark complete">${done.has(ch.day) ? "✓" : "○"}</button>
      `;
      head.addEventListener("click", (e) => {
        if (e.target.closest(".chapter-toggle")) return;
        card.classList.toggle("is-open");
      });
      head.querySelector(".chapter-toggle").addEventListener("click", (e) => {
        e.stopPropagation();
        const wasDone = done.has(ch.day);
        if (wasDone) done.delete(ch.day); else { done.add(ch.day); logCompletion("chapter", ch.day); }
        localStorage.setItem("jp.chapDone", JSON.stringify([...done]));
        card.classList.toggle("done");
        e.currentTarget.textContent = done.has(ch.day) ? "✓" : "○";
        refreshStreak();
        if (typeof window.refreshTodayDashboard === "function") window.refreshTodayDashboard();
      });
      card.appendChild(head);

      // ─ body ───────────────────────────
      const body = document.createElement("div");
      body.className = "chapter-body";

      // hiragana / katakana
      const hira = (ch.kana?.hira || []).map(c => lookups.hira.get(c)).filter(Boolean);
      const kata = (ch.kana?.kata || []).map(c => lookups.kata.get(c)).filter(Boolean);
      if (hira.length) body.appendChild(makeChapterKanaSection("Hiragana", hira));
      if (kata.length) body.appendChild(makeChapterKanaSection("Katakana", kata));

      // words
      const words = (ch.words || []).map(w => lookups.word.get(w)).filter(Boolean);
      if (words.length) {
        const sec = mkSection("Vocabulary");
        const grid = document.createElement("div");
        grid.className = "chapter-words";
        words.forEach(w => {
          const item = document.createElement("div");
          item.className = "chapter-word";
          const em = (typeof EMOJI !== "undefined" && EMOJI[w.jp]) || "";
          item.innerHTML = `<div class="jp">${em ? `<span class="emoji">${em}</span>` : ""}${w.jp}</div><div class="ro">${w.ro}</div><div class="en">${w.en}</div>`;
          bindHoverInfo(item, () => infoForWord(w));
          item.addEventListener("click", () => speak(w.jp, item));
          grid.appendChild(item);
        });
        sec.appendChild(grid);
        body.appendChild(sec);
      }

      // grammar — render the FULL Structure card inline if a structure with
      // that title exists; otherwise fall back to the thin (legacy) grammar
      // entry. This is the chapter↔structure merge: you stay on the Chapters
      // tab and get the rich token breakdown + 7 examples + color coding +
      // hover info + Nepali, all in lesson context.
      const gramTitles = ch.grammar || [];
      if (gramTitles.length) {
        const sec = mkSection("Grammar — full breakdown");
        gramTitles.forEach(title => {
          const fullStruct = structureByTitle.get(title);
          if (fullStruct) {
            // collapsed by default to keep chapter card compact;
            // user clicks the header to expand into the full chart.
            const inlineCard = buildOneStructureCard(fullStruct, {
              isOpen: false,
              compact: true,
              currentDay: ch.day
            });
            // apply category color so the ribbon + accents match the
            // colors used on the Structures tab
            const palette = colorForCategory(fullStruct.category);
            inlineCard.style.setProperty("--cat-color", palette.c);
            inlineCard.style.setProperty("--cat-glow", palette.glow);
            sec.appendChild(inlineCard);
          } else {
            const g = lookups.gram.get(title);
            if (!g) return;
            const item = document.createElement("div");
            item.className = "chapter-grammar";
            item.innerHTML = `<b>${escapeHtml(g.title)}</b>
              <div class="pat">${escapeHtml(g.pattern || "")}</div>
              <div class="rule">${escapeHtml(g.rule || "")}</div>`;
            sec.appendChild(item);
          }
        });
        body.appendChild(sec);
      }

      // sentences
      const sents = (ch.sentences || []).map(s => lookups.sent.get(s)).filter(Boolean);
      if (sents.length) {
        const sec = mkSection("Sentences");
        const list = document.createElement("div");
        list.className = "chapter-sentences";
        sents.forEach(s => {
          const item = document.createElement("div");
          item.className = "chapter-sentence";
          item.innerHTML = `<div class="jp">${s.jp}</div><div class="ro">${s.ro}</div><div class="en">${s.en}</div>`;
          bindHoverInfo(item, () => infoForSentence(s));
          item.addEventListener("click", () => speak(s.jp, item));
          list.appendChild(item);
        });
        sec.appendChild(list);
        body.appendChild(sec);
      }

      // practice
      if (ch.practice) {
        const sec = mkSection("Practice");
        const p = document.createElement("div");
        p.className = "chapter-practice";
        p.innerHTML = `<b>→</b> ${ch.practice}`;
        sec.appendChild(p);
        body.appendChild(sec);
      }

      card.appendChild(body);
      root.appendChild(card);
    });

    // open the first incomplete chapter by default
    const firstOpen = DATA.chapters.find(c => !done.has(c.day)) || DATA.chapters[0];
    const target = root.querySelector(`.chapter[data-day="${firstOpen.day}"]`);
    if (target) target.classList.add("is-open");

    $("#chapReset").addEventListener("click", () => {
      if (!confirm("Clear all chapter completion marks?")) return;
      done.clear();
      localStorage.setItem("jp.chapDone", "[]");
      $$(".chapter", root).forEach(c => {
        c.classList.remove("done");
        const t = c.querySelector(".chapter-toggle");
        if (t) t.textContent = "○";
      });
      refreshStreak();
    });
  }

  function mkSection(title) {
    const sec = document.createElement("div");
    sec.className = "chapter-section";
    const h = document.createElement("h4");
    h.textContent = title;
    sec.appendChild(h);
    return sec;
  }

  function makeChapterKanaSection(label, items) {
    const sec = mkSection(label);
    const row = document.createElement("div");
    row.className = "chapter-kana-row";
    items.forEach(k => {
      const c = document.createElement("div");
      c.className = "chapter-kana";
      c.innerHTML = `<span class="ch">${k.ch}</span><span class="ro">${k.ro}</span>`;
      bindHoverInfo(c, () => infoForKana(k));
      c.addEventListener("click", () => speak(k.ch, c));
      row.appendChild(c);
    });
    sec.appendChild(row);
    return sec;
  }

  // ---------- kanji ----------
  function buildKanji() {
    if (!DATA.kanji) return;
    const root = $("#kanjiGrid");
    if (!root) return;
    root.innerHTML = "";
    DATA.kanji.forEach(k => {
      const card = document.createElement("div");
      card.className = "kanji";
      card.dataset.search = `${k.ch} ${k.on} ${k.kun} ${k.en} ${(k.words || []).join(" ")}`.toLowerCase();
      card.innerHTML = `
        <div class="kanji-ch">${escapeHtml(k.ch)}</div>
        <div class="kanji-meta">
          <div class="kanji-en">${escapeHtml(k.en)}</div>
          <div class="kanji-readings">
            <span class="kanji-on"><b>on</b> ${escapeHtml(k.on)}</span>
            <span class="kanji-kun"><b>kun</b> ${escapeHtml(k.kun)}</span>
          </div>
          <div class="kanji-strokes">${k.strokes} strokes</div>
        </div>
        <div class="kanji-words">
          ${(k.words || []).map(w => `<div class="kanji-word">${escapeHtml(w)}</div>`).join("")}
        </div>
      `;
      // Hover info, click plays the kanji using its on'yomi (first reading)
      const onReading = (k.on || "").split(/[・、]/)[0];
      bindHoverInfo(card, () => `
        <div class="tip-jp">${escapeHtml(k.ch)}</div>
        <div class="tip-mean">${escapeHtml(k.en)}</div>
        <div class="tip-rows">
          <div class="tip-row"><b>on</b> ${escapeHtml(k.on)}</div>
          <div class="tip-row"><b>kun</b> ${escapeHtml(k.kun)}</div>
          <div class="tip-row"><b>strokes</b> ${k.strokes}</div>
          ${(k.words || []).map(w => `<div class="tip-row"><b>ex</b> ${escapeHtml(w)}</div>`).join("")}
        </div>
        ${tipFooter()}
      `);
      card.addEventListener("click", () => speak(k.ch, card));
      root.appendChild(card);
    });
    $("#searchKanji").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      $$(".kanji", root).forEach(el => {
        el.classList.toggle("is-hidden", q && !el.dataset.search.includes(q));
      });
    });
  }

  // ---------- sentence structures ----------
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Map a free-text role string to CSS classes for color-coding.
  // Base color reflects the part of speech; tense/polarity overlays
  // (rt-past, rt-negative, rt-te, rt-want, rt-volitional) tint the
  // background so a learner sees both at a glance.
  function roleClass(role) {
    if (!role) return "";
    const r = role.toLowerCase();
    let base = "";
    if (r.includes("particle") || r.includes("contraction"))   base = "rt-particle";
    else if (r.includes("copula") || r.includes("politeness")) base = "rt-copula";
    else if (r.includes("auxiliary"))                          base = "rt-verb";
    else if (r.includes("verb"))                               base = "rt-verb";
    else if (r.includes("adjective"))                          base = "rt-adj";
    else if (r.includes("question word"))                      base = "rt-question";
    else if (r.includes("demonstrative"))                      base = "rt-demo";
    else if (r.includes("honorific") || r.includes("suffix") || r.includes("counter")) base = "rt-honor";
    else if (r.includes("time noun"))                          base = "rt-time";
    else if (r.includes("interjection") || r.includes("adverb")) base = "rt-adverb";
    else if (r.includes("pronoun") || r.includes("proper noun")) base = "rt-pronoun";
    else if (r.includes("noun"))                               base = "rt-noun";

    const mods = [];
    if (r.includes("past"))                                   mods.push("rt-past");
    if (r.includes("negative"))                               mods.push("rt-negative");
    if (r.includes("て-form") || r.includes("continuous"))    mods.push("rt-te");
    if (r.includes("desire") || r.includes("たい"))           mods.push("rt-want");
    if (r.includes("volitional"))                             mods.push("rt-volitional");
    return [base, ...mods].filter(Boolean).join(" ");
  }

  // Render the JP sentence with each token wrapped in a colored span.
  // All token fields are embedded as data attrs so the hover-info handler
  // can show rich grammar info without re-looking-up.
  function renderColoredJp(jp, tokens) {
    if (!tokens || !tokens.length) return escapeHtml(jp);
    const colored = tokens.map(tk => {
      const cls = roleClass(tk.role);
      return `<span class="jt ${cls}"
                    data-say="${escapeHtml(tk.t)}"
                    data-ro="${escapeHtml(tk.ro || "")}"
                    data-role="${escapeHtml(tk.role || "")}"
                    data-mean="${escapeHtml(tk.meaning || "")}"
              >${escapeHtml(tk.t)}</span>`;
    }).join("");
    // Restore any trailing punctuation that wasn't part of any token (。？)
    const joined = tokens.map(t => t.t).join("");
    const trailing = (jp || "").startsWith(joined) ? jp.slice(joined.length) : "";
    return colored + (trailing ? `<span class="jt jt-punct">${escapeHtml(trailing)}</span>` : "");
  }

  function renderBreakdown(tokens) {
    if (!tokens || !tokens.length) return "";
    const head = `
      <div class="struct-bd-head">
        <span>Word</span><span>Romaji</span><span>Role</span><span>Meaning</span>
      </div>`;
    const rows = tokens.map(tk => {
      const cls = roleClass(tk.role);
      return `
      <div class="struct-bd-row"
           data-say="${escapeHtml(tk.t)}"
           data-ro="${escapeHtml(tk.ro || "")}"
           data-role="${escapeHtml(tk.role || "")}"
           data-mean="${escapeHtml(tk.meaning || "")}">
        <span class="bd-jp ${cls}">${escapeHtml(tk.t)}</span>
        <span class="bd-ro">${escapeHtml(tk.ro || "")}</span>
        <span class="bd-role">${escapeHtml(tk.role || "")}</span>
        <span class="bd-mean">${escapeHtml(tk.meaning || "")}</span>
      </div>`;
    }).join("");
    return `<div class="struct-bd">${head}${rows}</div>`;
  }

  function renderSentenceBlock(s, label, extraClass) {
    const np = (typeof NEPALI !== "undefined" && NEPALI[s.jp]) || "";
    const cls = "struct-sent" + (extraClass ? " " + extraClass : "");
    return `
      <div class="${cls}" data-say="${escapeHtml(s.jp)}">
        ${label ? `<div class="struct-sent-label">${escapeHtml(label)}</div>` : ""}
        <div class="struct-sent-jp">${renderColoredJp(s.jp, s.tokens)}</div>
        <div class="struct-sent-ro">${escapeHtml(s.ro || "")}</div>
        <div class="struct-sent-en"><b>EN</b>${escapeHtml(s.en || "")}</div>
        ${np ? `<div class="struct-sent-np"><b>NP</b>${escapeHtml(np)}</div>` : ""}
        ${renderBreakdown(s.tokens)}
      </div>`;
  }

  // Color legend — sits at the top of the Structure panel.
  // Each item shows: a styled Japanese sample, the English label,
  // a romaji line for the sample, the role's English explanation,
  // and the Nepali (Devanagari + romanized) gloss.
  function buildLegend(root) {
    const items = [
      // ── role colors (text color on the word) ──
      // Each item shows: Japanese sample · romaji + Nepali transliteration ·
      // English explanation · Nepali explanation
      { sample: "は を の が",  ro: "wa, o, no, ga · व्याकरणीय कण",  cls: "rt-particle",  label: "Particle",
        en: "Tiny grammar word that marks a noun's role.",
        np: "व्याकरणीय शब्द — कसले के गर्‍यो भन्ने देखाउने (vyakaranik shabda)" },
      { sample: "飲みます", ro: "nomimasu · पिउँछु", cls: "rt-verb", label: "Verb",
        en: "Action word — eat, drink, go, write.",
        np: "क्रिया (kriya) — गर्ने काम (eat = खानु)" },
      { sample: "です", ro: "desu · हुँ / हो", cls: "rt-copula", label: "Copula",
        en: "Linking 'is / am / are' for noun sentences.",
        np: "सहायक क्रिया — हुँ / हो / हुन् (saune)" },
      { sample: "私 彼", ro: "watashi · म,  kare · ऊ", cls: "rt-pronoun", label: "Pronoun / Name",
        en: "Words for people: I, he, she, names like 田中.",
        np: "सर्वनाम / नाम — म, ऊ, उनी, मानिसको नाम (sarvanam)" },
      { sample: "本 会議", ro: "hon · किताब,  kaigi · मिटिङ", cls: "rt-noun", label: "Noun",
        en: "Thing word — book, meeting, email.",
        np: "नाम (naam) — वस्तु: किताब, मिटिङ" },
      { sample: "難しい", ro: "muzukashii · गाह्रो", cls: "rt-adj", label: "Adjective",
        en: "Describes a noun — difficult, big, tasty.",
        np: "विशेषण (visheshan) — गाह्रो, ठूलो, मीठो" },
      { sample: "何 誰", ro: "nani · के,  dare · को", cls: "rt-question", label: "Question word",
        en: "Asks something — what, who, where, when, how much.",
        np: "प्रश्नवाचक (prashnavachak) — के, को, कहाँ, कहिले, कति" },
      { sample: "これ あれ", ro: "kore · यो,  are · त्यो", cls: "rt-demo", label: "Demonstrative",
        en: "Points at something — this, that.",
        np: "देखाउने शब्द (dekhauane) — यो, त्यो, उ" },
      { sample: "今日 明日", ro: "kyō · आज,  ashita · भोलि", cls: "rt-time", label: "Time noun",
        en: "When it happened — today, tomorrow, yesterday, now.",
        np: "समय (samaya) — आज, भोलि, हिजो, अहिले" },
      { sample: "さん", ro: "san · श्री / जी", cls: "rt-honor", label: "Honorific",
        en: "Politeness suffix attached to names — Mr/Ms.",
        np: "आदर सूचक (aadar suchak) — श्री / जी" },
      { sample: "とても", ro: "totemo · धेरै", cls: "rt-adverb", label: "Adverb",
        en: "Modifies a verb / adjective — very, slowly, a little.",
        np: "क्रिया-विशेषण (kriya-visheshan) — धेरै, बिस्तारै, अलिकति" },
      // ── tense / polarity (background wash on top of the role color) ──
      { sample: "ました", ro: "mashita · गरेँ (past)", cls: "rt-verb rt-past", label: "Past tense",
        en: "Already happened — verbs end ました/でした, adj end かった.",
        np: "विगत काल (vigat kaal) — भयो, थियो (already done)" },
      { sample: "ません", ro: "masen · गर्दिन (don't)", cls: "rt-verb rt-negative", label: "Negative",
        en: "Says 'not' — verbs end ません, casual ない.",
        np: "नकारात्मक (nakaratmak) — गर्दिन, छैन (don't / not)" },
      { sample: "ています", ro: "te imasu · गरिरहेको छु", cls: "rt-verb rt-te", label: "て-form / -ing",
        en: "Action in progress or resulting state — writing, broken.",
        np: "गरिरहेको / भइरहेको (-rakh) — लेखिरहेको छु" },
      { sample: "たい", ro: "tai · ~ मन छ", cls: "rt-verb rt-want", label: "Want (たい)",
        en: "Speaker's desire — 'want to do X'.",
        np: "इच्छा (ichchha) — मन छ / गर्न चाहन्छु" },
      { sample: "ましょう", ro: "mashō · गरौं", cls: "rt-verb rt-volitional", label: "Let's",
        en: "Invitation — 'let's do X / shall we?'",
        np: "साथमा गरौं (sangai garaau) — जाउँ, खाउँ" }
    ];

    const wrap = document.createElement("div");
    wrap.className = "legend is-open";
    wrap.innerHTML = `
      <div class="legend-head">
        <h4>🎨 Color legend — sample / English / Nepali</h4>
        <span class="hint">click to collapse</span>
        <button class="legend-toggle" title="Toggle legend">▼</button>
      </div>
      <div class="legend-body">
        ${items.map(it => `
          <div class="legend-item">
            <span class="legend-swatch"><span class="jt ${it.cls}">${escapeHtml(it.sample)}</span></span>
            <div class="legend-text">
              <div class="legend-label">${escapeHtml(it.label)} <span class="legend-ro">· ${escapeHtml(it.ro)}</span></div>
              <div class="legend-hint legend-en">${escapeHtml(it.en)}</div>
              <div class="legend-hint legend-np">${escapeHtml(it.np)}</div>
            </div>
          </div>`).join("")}
      </div>
    `;
    wrap.querySelector(".legend-head").addEventListener("click", () => {
      wrap.classList.toggle("is-open");
    });
    root.parentNode.insertBefore(wrap, root);
  }

  // Reusable: build a single Structure card (used both in the Structure tab
  // and inline inside chapters). Returns the DOM element with all event
  // handlers wired. Optional opts: { isOpen, compact, currentDay }.
  function buildOneStructureCard(s, opts) {
    opts = opts || {};
    const card = document.createElement("article");
    card.className = "struct"
      + (opts.isOpen ? " is-open" : "")
      + (opts.compact ? " is-compact" : "");
    card.dataset.cat = s.category;
    const allText = [
      s.title, s.formula, s.description, s.category, s.person, s.tense,
      s.main?.jp, s.main?.ro, s.main?.en,
      ...(s.examples || []).flatMap(e => [e.jp, e.ro, e.en]),
      ...(s.main?.tokens || []).flatMap(t => [t.t, t.ro, t.role, t.meaning]),
      ...((s.examples || []).flatMap(e => (e.tokens || []).flatMap(t => [t.t, t.ro, t.role, t.meaning])))
    ].filter(Boolean).join(" ").toLowerCase();
    card.dataset.search = allText;

    // Render main + all examples as a single 2-column grid.
    const gridParts = [];
    if (s.main) gridParts.push(renderSentenceBlock(s.main, "📌 Main pattern", "is-main"));
    (s.examples || []).forEach((ex, i) => {
      gridParts.push(renderSentenceBlock(ex, `Example ${i + 1}`));
    });

    // "Practiced on Day X" backlinks. When viewed inline inside a chapter
    // (currentDay set), the current day is omitted from the badge.
    const usedDays = (structureUsage.get(s.title) || []).filter(d => d !== opts.currentDay);
    const dayLinksHtml = usedDays.length
      ? `<div class="struct-day-links">📅 Also practiced on ${
          usedDays.map(d => `<button class="struct-day-link" data-day="${d}">Day ${d}</button>`).join(" ")
        }</div>`
      : "";

    card.innerHTML = `
      <header class="struct-head">
        <span class="struct-cat">${escapeHtml(s.category || "")}</span>
        <h3 class="struct-title">${escapeHtml(s.title || "")}</h3>
        <button class="struct-toggle" title="Expand / collapse">▼</button>
      </header>
      <div class="struct-body">
        <div class="struct-meta">
          <div class="struct-formula"><b>Formula:</b> <code>${escapeHtml(s.formula || "")}</code></div>
          <div class="struct-tags">
            ${s.person ? `<span class="struct-tag"><b>Person:</b> ${escapeHtml(s.person)}</span>` : ""}
            ${s.tense ? `<span class="struct-tag"><b>Tense:</b> ${escapeHtml(s.tense)}</span>` : ""}
          </div>
        </div>
        ${s.description ? `<p class="struct-desc">${escapeHtml(s.description)}</p>` : ""}

        <div class="struct-section-h">📌 Main pattern + 📚 Similar examples (compact chart)</div>
        <div class="struct-grid">${gridParts.join("")}</div>

        ${dayLinksHtml}
      </div>
    `;

    // expand / collapse on header click
    const head = $(".struct-head", card);
    head.addEventListener("click", (e) => {
      if (e.target.closest(".struct-toggle, .struct-cat")) {
        card.classList.toggle("is-open");
        return;
      }
      card.classList.toggle("is-open");
    });

    // each sentence: hover shows quick info, click plays the full sentence.
    const allSents = (s.main ? [{ ...s.main, _label: "Main pattern" }] : []).concat(
      (s.examples || []).map((e, i) => ({ ...e, _label: `Example ${i + 1}` }))
    );
    $$(".struct-sent", card).forEach((el, i) => {
      const sentData = allSents[i];
      const text = el.dataset.say;
      bindHoverInfo(el, () => infoForSentence({ jp: text, ro: sentData?.ro, en: sentData?.en, scene: s.title }));
      el.addEventListener("click", (e) => {
        const tok = e.target.closest(".jt:not(.jt-punct)");
        if (tok && tok.dataset.say) {
          e.stopPropagation();
          speak(tok.dataset.say, tok);
          return;
        }
        const row = e.target.closest(".struct-bd-row");
        if (row) {
          e.stopPropagation();
          speak(row.dataset.say, row);
          return;
        }
        speak(text, el);
      });
    });

    // hover-info on each colored JP token (rich grammar breakdown)
    $$(".struct-sent-jp .jt:not(.jt-punct)", card).forEach(tok => {
      if (!tok.dataset.say) return;
      bindHoverInfo(tok, () => infoForToken({
        t: tok.dataset.say, ro: tok.dataset.ro,
        role: tok.dataset.role, meaning: tok.dataset.mean
      }));
    });

    // hover-info on each breakdown row + click plays its single token
    $$(".struct-bd-row", card).forEach(row => {
      bindHoverInfo(row, () => infoForToken({
        t: row.dataset.say, ro: row.dataset.ro,
        role: row.dataset.role, meaning: row.dataset.mean
      }));
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        speak(row.dataset.say, row);
      });
    });

    // wire day backlinks
    $$(".struct-day-link", card).forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateToChapterDay(parseInt(btn.dataset.day, 10));
      });
    });

    return card;
  }

  // Refined 19-color palette — each color is visually distinct from
  // its neighbors (taken from the Tailwind 500/600-shade family which is
  // designed for maximum mutual contrast). Categories assigned to colors
  // by stable order so the same category always gets the same color.
  const CAT_PALETTE = [
    { c: "#ef4444", glow: "239,68,68" },     // red — foundation
    { c: "#3b82f6", glow: "59,130,246" },    // blue — declarative
    { c: "#22c55e", glow: "34,197,94" },     // green — verb sentences
    { c: "#a855f7", glow: "168,85,247" },    // violet — adjective
    { c: "#f97316", glow: "249,115,22" },    // orange — questions
    { c: "#ec4899", glow: "236,72,153" },    // pink — answers
    { c: "#06b6d4", glow: "6,182,212" },     // cyan — person
    { c: "#84cc16", glow: "132,204,22" },    // lime — other essentials
    { c: "#f59e0b", glow: "245,158,11" },    // amber — more particles
    { c: "#d946ef", glow: "217,70,239" },    // fuchsia — counters
    { c: "#14b8a6", glow: "20,184,166" },    // teal — conjugation refs
    { c: "#f43f5e", glow: "244,63,94" },     // rose — plain forms
    { c: "#0ea5e9", glow: "14,165,233" },    // sky — potential / volitional
    { c: "#eab308", glow: "234,179,8" },     // yellow — conditionals
    { c: "#10b981", glow: "16,185,129" },    // emerald — preferences
    { c: "#7c3aed", glow: "124,58,237" },    // deep purple — permission
    { c: "#6366f1", glow: "99,102,241" },    // indigo — time / experience
    { c: "#0891b2", glow: "8,145,178" },     // dark cyan — modifying
    { c: "#b45309", glow: "180,83,9" }       // bronze — keigo
  ];
  const catColorMap = new Map();
  function colorForCategory(cat) {
    if (!catColorMap.has(cat)) {
      const p = CAT_PALETTE[catColorMap.size % CAT_PALETTE.length];
      catColorMap.set(cat, p);
    }
    return catColorMap.get(cat);
  }

  // One emoji per category for instant visual recognition in the header.
  const CAT_EMOJI = {
    "Foundation — read first":               "🧠",
    "Declarative — Identity (A is B)":       "🆔",
    "Verb sentences — Action (SOV)":         "⚡",
    "Adjective sentences":                   "🎨",
    "Question sentences":                    "❓",
    "Answer sentences":                      "✅",
    "Person — 1st / 2nd / 3rd":              "👥",
    "Other essential structures":            "🔧",
    "More particles":                        "🔗",
    "Counters":                              "🔢",
    "Conjugation references":                "📋",
    "Plain forms (casual)":                  "💬",
    "Potential / Volitional":                "💪",
    "Conditionals / Comparison":             "🔀",
    "Preferences / Quotations":              "❤️",
    "Permission / Obligation":               "🚦",
    "Time / Experience / Plans":             "⏳",
    "Modifying & nuance":                    "🎯",
    "Keigo basics":                          "🎩"
  };

  // ───────────────────────────────────────────────────────────
  // TODAY — homepage dashboard. Shows today's date + greeting,
  // study streak, dual progress (chapters + struct-daily),
  // a "Continue" CTA jumping to your next incomplete day, and
  // calendar week-view grids of both tracks (click any cell to
  // jump to that day). Bird's-eye view of the whole journey.
  // ───────────────────────────────────────────────────────────
  function buildCalendarGrid(opts) {
    // opts: { kind: 'chapter'|'struct', items: [{day, week, title}], doneSet, accent }
    const wrap = document.createElement("div");
    wrap.className = "cal-grid cal-" + opts.kind;
    if (opts.accent) wrap.style.setProperty("--cal-color", opts.accent);

    // Group items by week
    const weeks = new Map();
    opts.items.forEach(it => {
      if (!weeks.has(it.week)) weeks.set(it.week, []);
      weeks.get(it.week).push(it);
    });

    // The Up-next day = lowest-numbered incomplete
    const focus = opts.items.find(it => !opts.doneSet.has(it.day));
    const focusDay = focus ? focus.day : -1;

    [...weeks.entries()].forEach(([week, items]) => {
      const row = document.createElement("div");
      row.className = "cal-row";
      row.innerHTML = `<div class="cal-week-label">W${week}</div><div class="cal-cells"></div>`;
      const cellsWrap = row.querySelector(".cal-cells");
      items.forEach(it => {
        const cell = document.createElement("button");
        const isDone = opts.doneSet.has(it.day);
        const isFocus = it.day === focusDay;
        cell.className = "cal-cell"
          + (isDone ? " is-done" : "")
          + (isFocus ? " is-focus" : "");
        cell.dataset.day = it.day;
        cell.title = `Day ${it.day}: ${it.title}`;
        cell.innerHTML = `
          <span class="cal-day-num">${it.day}</span>
          ${isDone ? '<span class="cal-tick">✓</span>' : ''}
        `;
        cell.addEventListener("click", () => {
          // Navigate to the right tab + sub-tab + open the day
          if (opts.kind === "chapter") {
            activateTab("chapters");
          } else {
            activateTab("structures");
            activateSubtab("structures", "daily");
          }
          // Wait a tick for the panel to be visible, then scroll + open
          setTimeout(() => {
            const sel = opts.kind === "chapter"
              ? `.chapter[data-day="${it.day}"]`
              : `.struct-day[data-day="${it.day}"]`;
            const target = document.querySelector(sel);
            if (target) {
              target.classList.add("is-open");
              target.scrollIntoView({ behavior: "smooth", block: "start" });
              target.classList.add("flash");
              setTimeout(() => target.classList.remove("flash"), 1300);
            }
          }, 100);
        });
        cellsWrap.appendChild(cell);
      });
      wrap.appendChild(row);
    });

    return wrap;
  }

  function buildToday() {
    const root = $("#todayContent");
    if (!root) return;

    const refresh = () => {
      const chapDone = new Set(JSON.parse(localStorage.getItem("jp.chapDone") || "[]"));
      const structDone = new Set(JSON.parse(localStorage.getItem("jp.structDailyDone") || "[]"));
      const totalChap = DATA.chapters.length;
      const totalStruct = STRUCT_CURRICULUM.length;
      const today = new Date();
      const greetingHour = today.getHours();
      const greeting = greetingHour < 5 ? "🌙 こんばんは"
        : greetingHour < 11 ? "🌅 おはよう"
        : greetingHour < 17 ? "☀️ こんにちは"
        : greetingHour < 21 ? "🌆 こんばんは"
        : "🌙 おやすみ前に";
      const dateStr = today.toLocaleDateString(undefined, {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
      });
      const streak = computeStreak();
      const totalCompletions = getCompletionLog().length;

      const focusChap = DATA.chapters.find(c => !chapDone.has(c.day));
      const focusStruct = STRUCT_CURRICULUM.find(s => !structDone.has(s.day));
      // Pick the "Continue" target: prefer whichever track is BEHIND in % done.
      // If both at same %, prefer chapter.
      const chapPct = chapDone.size / totalChap;
      const structPct = structDone.size / totalStruct;
      const continueKind = focusStruct && (structPct < chapPct || !focusChap)
        ? "struct" : "chapter";
      const continueDay = continueKind === "struct" ? focusStruct : focusChap;
      const continueAccent = continueKind === "struct" ? "#a855f7" : "#ff7a86";

      // Greeting + date
      const greetingEl = document.getElementById("todayGreeting");
      if (greetingEl) greetingEl.textContent = `${greeting} Shishir`;
      const subEl = document.getElementById("todaySubtitle");
      if (subEl) subEl.textContent = `${dateStr} · Your dashboard for today's study.`;

      const recent = getCompletionLog().slice(-5).reverse().map(e => {
        const which = e.kind === "chapter" ? "Chapters" : "Structures";
        const item = e.kind === "chapter"
          ? DATA.chapters.find(c => c.day === e.day)
          : STRUCT_CURRICULUM.find(c => c.day === e.day);
        const when = new Date(e.ts).toLocaleDateString(undefined, { month: "short", day: "numeric" });
        return `<li class="recent-item">
          <span class="recent-when">${escapeHtml(when)}</span>
          <span class="recent-tag recent-tag-${e.kind}">${which} · Day ${e.day}</span>
          <span class="recent-title">${escapeHtml(item ? item.title : "")}</span>
        </li>`;
      }).join("") || `<li class="recent-empty">Nothing yet — tick a day complete to see it here.</li>`;

      root.innerHTML = `
        <!-- Streak + total -->
        <div class="today-strip">
          <div class="streak-box">
            <span class="streak-num">${streak}</span>
            <span class="streak-label">🔥 day${streak === 1 ? "" : "s"} streak</span>
          </div>
          <div class="streak-box alt">
            <span class="streak-num">${totalCompletions}</span>
            <span class="streak-label">📒 total completions</span>
          </div>
          <div class="streak-box alt">
            <span class="streak-num">${chapDone.size + structDone.size}</span>
            <span class="streak-label">✓ unique days done</span>
          </div>
        </div>

        <!-- CONTINUE CTA -->
        ${continueDay ? `
        <div class="continue-card" style="--ct-color: ${continueAccent}">
          <div class="continue-label">📍 Continue learning</div>
          <button class="continue-btn" data-kind="${continueKind}" data-day="${continueDay.day}">
            <span class="continue-track">${continueKind === "struct" ? "🧠 Structure" : "📚 Chapter"} · Day ${continueDay.day}</span>
            <span class="continue-title">${escapeHtml(continueDay.title)}</span>
            <span class="continue-arrow">▶</span>
          </button>
        </div>` : `
        <div class="continue-card complete">
          <div class="continue-label">🎉 You've completed both curriculums!</div>
        </div>`}

        <!-- Dual stats -->
        <div class="today-dual">
          <div class="today-stat" style="--st-color: #ff7a86">
            <div class="today-stat-head">
              <span class="emoji">📚</span>
              <span class="title">Chapters</span>
              <span class="pct">${Math.round(chapPct * 100)}%</span>
            </div>
            <div class="today-stat-bar"><div class="today-stat-fill" style="width: ${Math.round(chapPct * 100)}%"></div></div>
            <div class="today-stat-line">${chapDone.size} of ${totalChap} days complete · ${totalChap - chapDone.size} remaining</div>
          </div>
          <div class="today-stat" style="--st-color: #a855f7">
            <div class="today-stat-head">
              <span class="emoji">🧠</span>
              <span class="title">Structure Daily</span>
              <span class="pct">${Math.round(structPct * 100)}%</span>
            </div>
            <div class="today-stat-bar"><div class="today-stat-fill" style="width: ${Math.round(structPct * 100)}%"></div></div>
            <div class="today-stat-line">${structDone.size} of ${totalStruct} days complete · ${totalStruct - structDone.size} remaining</div>
          </div>
        </div>

        <!-- Calendar grids -->
        <div class="today-section">
          <div class="today-section-head">
            <h3>📚 Chapters — bird's-eye view</h3>
            <span class="hint">Click any day to jump there</span>
          </div>
          <div id="todayChapCal"></div>
        </div>

        <div class="today-section">
          <div class="today-section-head">
            <h3>🧠 Structure Daily — bird's-eye view</h3>
            <span class="hint">Click any day to jump there</span>
          </div>
          <div id="todayStructCal"></div>
        </div>

        <!-- Recent activity -->
        <div class="today-section">
          <div class="today-section-head">
            <h3>📒 Recent activity</h3>
            <span class="hint">Last 5 completions</span>
          </div>
          <ul class="recent-list">${recent}</ul>
        </div>

        <!-- Quick quiz CTA -->
        <div class="today-section">
          <div class="today-section-head">
            <h3>📝 Quick check</h3>
            <span class="hint">Practice what you've studied</span>
          </div>
          <button class="quiz-jump-btn" id="todayQuizJump">
            🎯 Open Quiz tab
            <span class="quiz-jump-sub">Random questions to drill what you know</span>
          </button>
        </div>

        <!-- Daily reminder setup -->
        <div class="today-section">
          <div class="today-section-head">
            <h3>🔔 Daily reminders to your phone</h3>
            <span class="hint">Free, runs server-side, works when the app is closed</span>
          </div>
          <div class="reminder-card">
            <p class="muted small" style="margin: 0 0 10px;">
              We send a daily push to your phone via <b>ntfy.sh</b> — a free, open-source
              push service. Install the ntfy app, subscribe to your private topic, and a
              Cloudflare Worker fires once a day at the time you set.
            </p>
            <div class="reminder-step">
              <span class="reminder-step-num">1</span>
              <div class="reminder-step-body">
                <b>Install ntfy on your phone</b>
                <div class="reminder-links">
                  <a href="https://play.google.com/store/apps/details?id=io.heckel.ntfy" target="_blank" rel="noopener">▷ Android (Play Store)</a>
                  <a href="https://apps.apple.com/us/app/ntfy/id1625396347" target="_blank" rel="noopener">▷ iOS (App Store)</a>
                  <a href="https://f-droid.org/en/packages/io.heckel.ntfy/" target="_blank" rel="noopener">▷ F-Droid (Android)</a>
                </div>
              </div>
            </div>
            <div class="reminder-step">
              <span class="reminder-step-num">2</span>
              <div class="reminder-step-body">
                <b>Your private topic name</b>
                <div class="reminder-topic">
                  <code id="reminderTopic">${escapeHtml(getOrCreateNtfyTopic())}</code>
                  <button class="ghost" id="copyTopicBtn" title="Copy to clipboard">📋 Copy</button>
                  <button class="ghost" id="regenTopicBtn" title="Generate a new random topic">🎲 New</button>
                </div>
                <span class="muted small">In the ntfy app: tap <b>+ Subscribe</b>, paste this topic name, save.</span>
              </div>
            </div>
            <div class="reminder-step">
              <span class="reminder-step-num">3</span>
              <div class="reminder-step-body">
                <b>Test it</b>
                <button class="primary" id="reminderTestBtn">🔔 Send test notification now</button>
                <span class="muted small" id="reminderTestResult"></span>
              </div>
            </div>
            <div class="reminder-step">
              <span class="reminder-step-num">4</span>
              <div class="reminder-step-body">
                <b>Schedule the daily reminder</b>
                <span class="muted small">Set the cron in <code>worker/wrangler.toml</code>, edit
                <code>NTFY_TOPIC</code> to match the topic above, then deploy:</span>
                <pre class="reminder-cmd">cd worker
wrangler deploy</pre>
                <span class="muted small">After deploy, the Worker fires daily at the time you configured.</span>
              </div>
            </div>
          </div>
        </div>
      `;

      // Mount calendar grids
      const chapCal = buildCalendarGrid({
        kind: "chapter",
        items: DATA.chapters.map(c => ({ day: c.day, week: c.week, title: c.title })),
        doneSet: chapDone,
        accent: "#ff7a86"
      });
      $("#todayChapCal").appendChild(chapCal);

      const structCal = buildCalendarGrid({
        kind: "struct",
        items: STRUCT_CURRICULUM.map(c => ({ day: c.day, week: c.week, title: c.title })),
        doneSet: structDone,
        accent: "#a855f7"
      });
      $("#todayStructCal").appendChild(structCal);

      // CTAs
      const continueBtn = root.querySelector(".continue-btn");
      if (continueBtn) {
        continueBtn.addEventListener("click", () => {
          const kind = continueBtn.dataset.kind;
          const day = parseInt(continueBtn.dataset.day, 10);
          if (kind === "struct") {
            activateTab("structures");
            activateSubtab("structures", "daily");
          } else {
            activateTab("chapters");
          }
          setTimeout(() => {
            const sel = kind === "chapter"
              ? `.chapter[data-day="${day}"]`
              : `.struct-day[data-day="${day}"]`;
            const target = document.querySelector(sel);
            if (target) {
              target.classList.add("is-open");
              target.scrollIntoView({ behavior: "smooth", block: "start" });
              target.classList.add("flash");
              setTimeout(() => target.classList.remove("flash"), 1300);
            }
          }, 100);
        });
      }
      const quizBtn = $("#todayQuizJump");
      if (quizBtn) quizBtn.addEventListener("click", () => activateTab("quiz"));

      // Reminder setup buttons
      const copyBtn = $("#copyTopicBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(getOrCreateNtfyTopic());
            copyBtn.textContent = "✓ Copied";
            setTimeout(() => copyBtn.textContent = "📋 Copy", 1500);
          } catch (_) {}
        });
      }
      const regenBtn = $("#regenTopicBtn");
      if (regenBtn) {
        regenBtn.addEventListener("click", () => {
          if (!confirm("Generate a new topic? You'll need to re-subscribe in the ntfy app and update wrangler.toml.")) return;
          const newTopic = regenNtfyTopic();
          $("#reminderTopic").textContent = newTopic;
        });
      }
      const testBtn = $("#reminderTestBtn");
      if (testBtn) {
        testBtn.addEventListener("click", async () => {
          const topic = getOrCreateNtfyTopic();
          const result = $("#reminderTestResult");
          result.textContent = "Sending…";
          try {
            const res = await fetch(`https://ntfy.sh/${topic}`, {
              method: "POST",
              body: "Test notification from Nihongo Lab. If you see this on your phone, the topic + ntfy app are correctly set up. 🎉",
              headers: { "Title": "🧪 Test — Nihongo Lab", "Tags": "white_check_mark,jp" }
            });
            if (res.ok) {
              result.innerHTML = `<span style="color: var(--good)">✓ Sent. Check your phone (allow up to ~30s).</span>`;
            } else {
              result.innerHTML = `<span style="color: var(--bad)">✗ Failed (${res.status}). Make sure your topic is set + ntfy server reachable.</span>`;
            }
          } catch (e) {
            result.innerHTML = `<span style="color: var(--bad)">✗ Network error. Check your connection.</span>`;
          }
        });
      }
    };

    // Expose for cross-component refresh (when day toggles elsewhere)
    window.refreshTodayDashboard = refresh;
    refresh();
  }

  // ───────────────────────────────────────────────────────────
  // STRUCTURE DAILY PLAN — 45-day curriculum focused PURELY on the
  // 60 grammar structures. Each day references 1-3 closely-related
  // structure titles + a practice prompt. Rendered as a snake-timeline
  // mirroring the Chapters tab so users can work both tracks in parallel.
  // ───────────────────────────────────────────────────────────
  const STRUCT_CURRICULUM = [
    { day: 1, week: 1, minutes: 20, title: "Foundation 1 — です vs ます families",
      structures: ["🧠 です-family vs ます-family — the two sentence types"],
      practice: "Identify whether each sentence in today's vocab is a NOUN sentence (です-family) or a VERB sentence (ます-family). Aim for 5 of each." },
    { day: 2, week: 1, minutes: 20, title: "Foundation 2 — three negatives",
      structures: ["🧠 ません vs ありません vs ではありません — the three negatives"],
      practice: "Take 3 affirmative statements you know and produce ALL three negative versions: verb-ません, existence-ありません, identity-ではありません." },
    { day: 3, week: 1, minutes: 25, title: "Foundation 3 — particles cheat sheet",
      structures: ["🧠 Confusing particles cheat sheet — は を の が に で から も"],
      practice: "Highlight every particle in 5 sentences from your phrasebook. Name what each one does." },
    { day: 4, week: 1, minutes: 20, title: "Identity present + 1st person",
      structures: ["A は B です — Present affirmative identity", "1st person — 私 / 僕 / 自分"],
      practice: "Write 5 self-introductions with different details (name, job, nationality, hobby, where you live)." },
    { day: 5, week: 1, minutes: 20, title: "Identity negative & past",
      structures: ["A は B じゃありません — Present negative identity", "A は B でした — Past affirmative identity"],
      practice: "Take 5 facts and write each as: present positive → present negative → past." },
    { day: 6, week: 1, minutes: 25, title: "Verb sentences — present + verb groups",
      structures: ["[Subject]は [Object]を [Verb]ます — Present/Future action", "Verb groups — godan, ichidan, irregular"],
      practice: "Identify whether 5 verbs are Group 1, 2, or 3. Make a SOV sentence with each." },
    { day: 7, week: 1, minutes: 20, title: "Verb negative + past",
      structures: ["[Verb]ません — Present/Future negative", "[Verb]ました — Past affirmative"],
      practice: "List 5 things you don't drink/eat/do, and 5 things you DID yesterday." },
    { day: 8, week: 2, minutes: 20, title: "Past negative + continuous",
      structures: ["[Verb]ませんでした — Past negative", "[Verb-て]います — Ongoing / Continuous"],
      practice: "Describe 3 things you didn't do yesterday + 3 things happening RIGHT NOW (using ています)." },
    { day: 9, week: 2, minutes: 30, title: "Adjective sentences (i + na)",
      structures: ["[Topic]は [i-adjective]です — i-adjective sentence", "[Topic]は [na-adjective]です — na-adjective sentence", "Adjective conjugation — i-adj vs na-adj"],
      practice: "Build i-adj and na-adj sentences with all four forms (positive, negative, past, past-negative)." },
    { day: 10, week: 2, minutes: 20, title: "Questions — yes/no + Wh",
      structures: ["[Statement] か？— Yes/No question", "Wh-questions (何 / 誰 / どこ / いつ / なぜ / いくら)"],
      practice: "Turn 3 statements into yes/no questions, then ask 5 wh-questions about objects on your desk." },
    { day: 11, week: 2, minutes: 20, title: "Answers + 1st person revisit",
      structures: ["はい / いいえ — Affirmative & negative answers"],
      practice: "Answer your own questions from yesterday with both affirmative and negative responses (use はい / いいえ / そうです / 違います)." },
    { day: 12, week: 2, minutes: 20, title: "2nd & 3rd person",
      structures: ["2nd person — [Name]さん (avoid あなた)", "3rd person — 彼 / 彼女 / あの人 / [Name]さん"],
      practice: "Address 3 people by name+さん. Then describe 3 third parties using 彼/彼女/あの人." },
    { day: 13, week: 2, minutes: 20, title: "Want to do — たい",
      structures: ["[Verb-stem]たいです — 'I want to do'"],
      practice: "Tell Claude 5 things you want to do this weekend." },
    { day: 14, week: 2, minutes: 20, title: "Polite request — てください",
      structures: ["[Verb-て]ください — Polite request"],
      practice: "Make 5 requests you'd actually use at work (review code, send file, explain again…)." },
    { day: 15, week: 3, minutes: 20, title: "Invitation & let's — ませんか / ましょう",
      structures: ["[Verb-stem]ませんか / ましょう — Invitation & 'let's'"],
      practice: "Invite a friend to do 3 different things (lunch, movie, study). End with one ましょう." },
    { day: 16, week: 3, minutes: 20, title: "Existence — あります / います",
      structures: ["あります / います — Existence ('there is')"],
      practice: "Describe what's in your room: 3 objects (あります) and 1 person/animal (います)." },
    { day: 17, week: 3, minutes: 20, title: "Possessive — A の B",
      structures: ["A の B — Possession & noun connector"],
      practice: "Build 5 chained possessives like 私の友達の家." },
    { day: 18, week: 3, minutes: 20, title: "Location — で vs に",
      structures: ["[Place]で / [Place]に — Action vs destination"],
      practice: "Make 3 sentences with で (where action happens) and 3 with に (destination/existence)." },
    { day: 19, week: 3, minutes: 20, title: "Reason — から",
      structures: ["[Reason]から、[Result] — Because (cause-and-effect)"],
      practice: "Give 5 reasons for doing/not doing things using から." },
    { day: 20, week: 3, minutes: 25, title: "Linking actions — て-form",
      structures: ["[Verb-て]、[Verb] — Linking actions (and / then)"],
      practice: "Describe your morning routine in one chain of て-form verbs (woke up て drank coffee て went to work)." },
    { day: 21, week: 3, minutes: 25, title: "Particles と + へ",
      structures: ["と (to) — With (companion) / and (listing)", "へ (e) — Direction marker (formal alternative to に)"],
      practice: "3 sentences using と (with someone), 3 using へ (toward a place)." },
    { day: 22, week: 4, minutes: 20, title: "Particle や (and others)",
      structures: ["や (ya) — And (non-exhaustive 'and others')"],
      practice: "List 3 collections of things using や + など (e.g. shopping list, foods you like)." },
    { day: 23, week: 4, minutes: 25, title: "Sentence-end particles よ + ね",
      structures: ["よ (yo) — Sentence-end emphasis (informing / asserting)", "ね (ne) — Sentence-end agreement-seeking"],
      practice: "5 sentences with よ (telling someone something they don't know), 5 with ね (seeking agreement)." },
    { day: 24, week: 4, minutes: 25, title: "Reasons & contrast — ので + けど/が",
      structures: ["ので (node) — Because (politer than から)", "けど / が — But / however (contrast)"],
      practice: "3 ので reasons in formal context + 3 けど contrasts." },
    { day: 25, week: 4, minutes: 30, title: "Counters — ~つ ~人 ~枚 ~本 ~個 ~時間",
      structures: ["Counters — counting things, people, time"],
      practice: "Order 3 things at a restaurant with proper counters. Then count: 5 people, 3 sheets, 4 pens, 2 hours." },
    { day: 26, week: 4, minutes: 25, title: "Plain dictionary form",
      structures: ["Plain dictionary form — the verb's base shape (飲む / 食べる / する)"],
      practice: "Take 5 ます-form verbs you know and convert each to plain form. Identify the group of each." },
    { day: 27, week: 4, minutes: 20, title: "Plain negative — 〜ない",
      structures: ["Plain negative — 〜ない (casual 'don't')"],
      practice: "Convert the same 5 verbs to plain negative. Speak each pair (ます↔ない) aloud." },
    { day: 28, week: 4, minutes: 25, title: "Plain past — 〜た / 〜だ",
      structures: ["Plain past — 〜た / 〜だ (casual 'did')"],
      practice: "Same 5 verbs to plain past. Now you can produce each in 4 forms: dict / neg / past / past-neg." },
    { day: 29, week: 5, minutes: 25, title: "Potential — 'I can do'",
      structures: ["Potential form — 'can do' / 'be able to do'"],
      practice: "Tell Claude 5 things you CAN do and 3 you CANNOT — remember, particle becomes が, not を." },
    { day: 30, week: 5, minutes: 20, title: "Plain volitional — let's (casual)",
      structures: ["Plain volitional — 'let's' / 'I will' (casual)"],
      practice: "3 casual let's-do invitations to a friend (eat, go, watch a movie)." },
    { day: 31, week: 5, minutes: 30, title: "Conditionals — ば / たら / なら / と",
      structures: ["Conditionals — ば / たら / なら / と (four ways to say 'if')"],
      practice: "Make ONE sentence using each of the four conditionals (4 sentences total). Different one per particle." },
    { day: 32, week: 5, minutes: 25, title: "Comparison — より / ほうが / 一番",
      structures: ["Comparison — より / ほうが / 一番 (more, more-of-the-two, most)"],
      practice: "3 comparisons (X is bigger/more X than Y) + 1 superlative (X is the best/most)." },
    { day: 33, week: 5, minutes: 20, title: "Preferences — 〜が好き",
      structures: ["〜が好き / 嫌い / 上手 / 下手 — preferences and skills (use が, not を)"],
      practice: "5 preferences using が. Mix 好き / 嫌い / 上手 / 下手." },
    { day: 34, week: 5, minutes: 25, title: "Giving / receiving — あげる / もらう / くれる",
      structures: ["Giving / receiving — あげる / もらう / くれる (direction matters!)"],
      practice: "Describe 3 gift exchanges: one you gave, one you received, one someone gave to you. Match the verb to direction." },
    { day: 35, week: 5, minutes: 25, title: "Quotations — 〜と言う / 〜と思う",
      structures: ["Quotations — 〜と言う / 〜と思う / 〜って (saying & thinking)"],
      practice: "5 things you THINK + 3 things others SAID. Mix と思う and と言う/って." },
    { day: 36, week: 6, minutes: 25, title: "Permission & prohibition — 〜てもいい / 〜てはいけない",
      structures: ["〜てもいい / 〜てはいけない — May / Must not"],
      practice: "3 permission requests (May I…?) + 3 prohibitions (You must not…)." },
    { day: 37, week: 6, minutes: 25, title: "Obligation — 〜なければなりません",
      structures: ["〜なければなりません — Must do (obligation)"],
      practice: "List 5 things you MUST do this week. Practice the casual contractions (なきゃ / なくちゃ) on 2 of them." },
    { day: 38, week: 6, minutes: 25, title: "Experience — 〜たことがある",
      structures: ["〜たことがある — Have done X before (experience)"],
      practice: "Make 5 statements about life experiences — 3 things you HAVE done, 2 things you HAVEN'T." },
    { day: 39, week: 6, minutes: 25, title: "Simultaneous — 〜ながら",
      structures: ["〜ながら — While doing X (simultaneous actions)"],
      practice: "Describe 3 things you regularly do at the same time (study while listening to music, etc.)." },
    { day: 40, week: 6, minutes: 25, title: "Listing — 〜たり〜たり",
      structures: ["〜たり〜たり する — Doing things like X and Y"],
      practice: "Describe a typical weekend with one たり sentence. Then a typical workday with another." },
    { day: 41, week: 6, minutes: 25, title: "Advice — 〜たほうがいい",
      structures: ["〜たほうがいい — You should do X (advice)"],
      practice: "Give 5 pieces of advice. Mix positive (should) and negative (shouldn't)." },
    { day: 42, week: 6, minutes: 25, title: "Intentions — 〜つもり",
      structures: ["〜つもり — Intend to / Plan to"],
      practice: "5 plans you have for next month. Vary the verbs." },
    { day: 43, week: 7, minutes: 30, title: "Relative clauses — modifying nouns",
      structures: ["Relative clauses — modifying nouns with verbs (私が読んだ本)"],
      practice: "Build 5 relative-clause noun phrases (e.g. 'the book I read', 'the person who came yesterday')." },
    { day: 44, week: 7, minutes: 30, title: "Nuance — やすい/にくい + すぎる + しか/だけ + そう/らしい",
      structures: ["〜やすい / 〜にくい — Easy / Hard to do", "〜すぎる — Too much / Excessively", "〜しか〜ない / 〜だけ — Only X (restriction)", "そうです / らしい — Hearsay (I heard / it seems)"],
      practice: "Build 1 sentence each using やすい/にくい, すぎる, しか, and そう/らしい. 4 sentences total mixing nuance." },
    { day: 45, week: 7, minutes: 35, title: "Keigo basics — 尊敬語 / 謙譲語",
      structures: ["Keigo intro — 尊敬語 (raise others) vs 謙譲語 (lower self)"],
      practice: "Replace 5 polite-form sentences with their keigo equivalents. Practice the most-used pairs (来る / 行く / 言う / 食べる / 知る)." }
  ];

  // ───────────────────────────────────────────────────────────
  // NTFY topic — random per-user, kept in localStorage. Anyone who
  // knows it can read your reminders, so we generate something
  // unguessable. Used by the Daily Reminders setup section.
  // ───────────────────────────────────────────────────────────
  function getOrCreateNtfyTopic() {
    const KEY = "jp.ntfyTopic";
    let t = localStorage.getItem(KEY);
    if (!t) {
      // 24 chars of base36, prefixed for readability
      const rand = (Math.random().toString(36) + Math.random().toString(36)).slice(2, 26);
      t = "nihongo-lab-" + rand;
      localStorage.setItem(KEY, t);
    }
    return t;
  }
  function regenNtfyTopic() {
    localStorage.removeItem("jp.ntfyTopic");
    return getOrCreateNtfyTopic();
  }

  // ───────────────────────────────────────────────────────────
  // COMPLETION LOG — every time a day is marked complete, push a
  // {kind, day, ts} entry into jp.completionLog. Used by the streak
  // counter and the Today dashboard's "recent activity" feed.
  // ───────────────────────────────────────────────────────────
  function logCompletion(kind, day) {
    try {
      const log = JSON.parse(localStorage.getItem("jp.completionLog") || "[]");
      log.push({ kind, day, ts: Date.now() });
      // keep last 500 entries (more than enough)
      if (log.length > 500) log.shift();
      localStorage.setItem("jp.completionLog", JSON.stringify(log));
    } catch (_) {}
  }
  function getCompletionLog() {
    try { return JSON.parse(localStorage.getItem("jp.completionLog") || "[]"); }
    catch (_) { return []; }
  }
  // Compute consecutive-days streak from the completion log.
  // A "day" is local-date YYYY-MM-DD; streak = consecutive days back from today.
  function computeStreak() {
    const log = getCompletionLog();
    if (!log.length) return 0;
    const dayKeys = new Set(log.map(e => new Date(e.ts).toLocaleDateString("en-CA")));
    let streak = 0;
    const cursor = new Date();
    // Allow today OR yesterday as the starting day (you may not have studied yet today)
    if (!dayKeys.has(cursor.toLocaleDateString("en-CA"))) {
      cursor.setDate(cursor.getDate() - 1);
      if (!dayKeys.has(cursor.toLocaleDateString("en-CA"))) return 0;
    }
    while (dayKeys.has(cursor.toLocaleDateString("en-CA"))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  // ───────────────────────────────────────────────────────────
  // PROGRESS TRACKER — reusable dashboard component. Shows today's
  // date, current focus day, fraction done, progress bar, and
  // remaining count. Used at the top of Chapters AND of the
  // Structure Daily plan so the user can track both in parallel.
  // ───────────────────────────────────────────────────────────
  function buildProgressTracker(opts) {
    // opts: { kind: 'chapters' | 'struct-daily', total, items: [{day, title}], doneSet, label, emoji, accent }
    const tracker = document.createElement("div");
    tracker.className = "progress-tracker";
    if (opts.accent) tracker.style.setProperty("--track-color", opts.accent);

    const refresh = () => {
      const done = opts.doneSet.size;
      const total = opts.total;
      const remaining = total - done;
      const pct = total ? Math.round((done / total) * 100) : 0;
      // current focus = lowest-numbered incomplete day, or last day if all done
      const focusItem = opts.items.find(it => !opts.doneSet.has(it.day)) || opts.items[opts.items.length - 1];
      const today = new Date();
      const dateStr = today.toLocaleDateString(undefined, {
        weekday: "long", year: "numeric", month: "short", day: "numeric"
      });

      tracker.innerHTML = `
        <div class="track-head">
          <div class="track-emoji">${opts.emoji || "📈"}</div>
          <div class="track-title">
            <h3>${escapeHtml(opts.label)}</h3>
            <div class="track-date">📅 ${escapeHtml(dateStr)}</div>
          </div>
          <div class="track-pct">${pct}%</div>
        </div>
        <div class="track-bar">
          <div class="track-bar-fill" style="width: ${pct}%"></div>
        </div>
        <div class="track-stats">
          <div class="track-stat track-stat-done"><span class="n">${done}</span><span class="l">✓ Done</span></div>
          <div class="track-stat track-stat-rem"><span class="n">${remaining}</span><span class="l">⏳ Remaining</span></div>
          <div class="track-stat track-stat-tot"><span class="n">${total}</span><span class="l">🎯 Total</span></div>
        </div>
        <div class="track-focus">
          <div class="track-focus-label">${done === total ? "🎉 All complete!" : "📍 Up next"}</div>
          ${done < total ? `
            <button class="track-focus-card" data-day="${focusItem.day}">
              <span class="focus-num">Day ${focusItem.day}</span>
              <span class="focus-title">${escapeHtml(focusItem.title)}</span>
              <span class="focus-arrow">→</span>
            </button>
          ` : `<div class="track-focus-card is-complete">All ${total} days complete. Time to celebrate 🎊</div>`}
        </div>
      `;

      const focusBtn = tracker.querySelector(".track-focus-card[data-day]");
      if (focusBtn) {
        focusBtn.addEventListener("click", () => {
          const day = parseInt(focusBtn.dataset.day, 10);
          const targetSelector = opts.kind === "chapters"
            ? `.chapter[data-day="${day}"]`
            : `.struct-day[data-day="${day}"]`;
          const target = document.querySelector(targetSelector);
          if (target) {
            target.classList.add("is-open");
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            target.classList.add("flash");
            setTimeout(() => target.classList.remove("flash"), 1400);
          }
        });
      }
    };

    tracker.refresh = refresh;
    refresh();
    return tracker;
  }

  // ───────────────────────────────────────────────────────────
  // STRUCTURE DAILY PLAN — render the snake-style timeline with the
  // 45-day curriculum. Each day card shows the day number, title,
  // meta pills, and a body that embeds the day's Structure cards
  // inline + a practice prompt. Mirrors buildChapters() logic.
  // ───────────────────────────────────────────────────────────
  function buildStructDailyPlan() {
    const root = $("#structDailyList");
    if (!root) return;
    root.innerHTML = "";

    const done = new Set(JSON.parse(localStorage.getItem("jp.structDailyDone") || "[]"));
    let tracker; // assigned below
    const refreshAll = () => {
      $("#structDailyStreak").textContent = `Completed: ${done.size} / ${STRUCT_CURRICULUM.length}`;
      if (tracker && tracker.refresh) tracker.refresh();
    };

    // Inject tracker at top of the daily sub-panel
    const subpanel = root.parentNode;
    const oldTracker = subpanel.querySelector(".progress-tracker");
    if (oldTracker) oldTracker.remove();
    tracker = buildProgressTracker({
      kind: "struct-daily",
      total: STRUCT_CURRICULUM.length,
      items: STRUCT_CURRICULUM.map(d => ({ day: d.day, title: d.title })),
      doneSet: done,
      label: "Structure Daily plan",
      emoji: "🧠",
      accent: "#a855f7"
    });
    subpanel.insertBefore(tracker, root.previousElementSibling); // insert above filter row

    refreshAll();

    STRUCT_CURRICULUM.forEach((d, idx) => {
      const card = document.createElement("div");
      const side = idx % 2 === 0 ? "is-left" : "is-right";
      card.className = "chapter struct-day " + side + (done.has(d.day) ? " done" : "");
      card.dataset.day = d.day;

      // Pick an emoji from the FIRST referenced structure's category
      const firstStruct = (d.structures || []).map(t => structureByTitle.get(t)).filter(Boolean)[0];
      const dayEmoji = firstStruct
        ? (CAT_EMOJI[firstStruct.category] || "🧠")
        : "🧠";

      const head = document.createElement("div");
      head.className = "chapter-head";
      head.innerHTML = `
        <div class="chapter-day">
          <span class="day-emoji" aria-hidden="true">${dayEmoji}</span>
          <span class="num">${d.day}</span>
          <span class="week">Week ${d.week}</span>
        </div>
        <div class="chapter-title">
          <h3>${escapeHtml(d.title)}</h3>
          <span class="goal">${escapeHtml((d.structures || []).join(" · "))}</span>
        </div>
        <div class="chapter-meta">
          <span class="meta-pill">🧠 ${(d.structures || []).length} pattern${(d.structures || []).length > 1 ? "s" : ""}</span>
          <span class="meta-pill min">⏱️ ${d.minutes} min</span>
        </div>
        <button class="chapter-toggle" title="Mark complete">${done.has(d.day) ? "✓" : "○"}</button>
      `;
      head.addEventListener("click", (e) => {
        if (e.target.closest(".chapter-toggle")) return;
        card.classList.toggle("is-open");
      });
      head.querySelector(".chapter-toggle").addEventListener("click", (e) => {
        e.stopPropagation();
        const wasDone = done.has(d.day);
        if (wasDone) done.delete(d.day); else { done.add(d.day); logCompletion("struct", d.day); }
        localStorage.setItem("jp.structDailyDone", JSON.stringify([...done]));
        card.classList.toggle("done");
        e.currentTarget.textContent = done.has(d.day) ? "✓" : "○";
        refreshAll();
        if (typeof window.refreshTodayDashboard === "function") window.refreshTodayDashboard();
      });
      card.appendChild(head);

      const body = document.createElement("div");
      body.className = "chapter-body";

      // Embed Structure cards inline
      const structSec = mkSection("Pattern" + ((d.structures || []).length > 1 ? "s" : ""));
      (d.structures || []).forEach(title => {
        const s = structureByTitle.get(title);
        if (!s) return;
        const inline = buildOneStructureCard(s, { isOpen: false, compact: true });
        const palette = colorForCategory(s.category);
        inline.style.setProperty("--cat-color", palette.c);
        inline.style.setProperty("--cat-glow", palette.glow);
        structSec.appendChild(inline);
      });
      body.appendChild(structSec);

      // Practice
      if (d.practice) {
        const sec = mkSection("Practice");
        const p = document.createElement("div");
        p.className = "chapter-practice";
        p.innerHTML = `<b>→</b> ${escapeHtml(d.practice)}`;
        sec.appendChild(p);
        body.appendChild(sec);
      }

      card.appendChild(body);
      root.appendChild(card);
    });

    // Reset button
    const resetBtn = $("#structDailyReset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (!confirm("Clear all Structure Daily completion marks?")) return;
        done.clear();
        localStorage.setItem("jp.structDailyDone", "[]");
        $$(".struct-day", root).forEach(c => {
          c.classList.remove("done");
          const t = c.querySelector(".chapter-toggle");
          if (t) t.textContent = "○";
        });
        refreshAll();
      });
    }
  }

  // Snake-style category quick-navigator. A row of cartoon badges (one per
  // category) you can click to smooth-scroll to that section. Highlights the
  // currently-visible section via IntersectionObserver. Mirrors the snake
  // aesthetic of the Chapters timeline without disrupting the random-access
  // nature of the Structure reference content.
  function buildStructureNav(root) {
    // remove any existing nav (rebuild safety)
    const old = root.parentNode.querySelector(".struct-nav");
    if (old) old.remove();

    const grouped = new Map();
    DATA.structures.forEach(s => {
      if (!grouped.has(s.category)) grouped.set(s.category, []);
      grouped.get(s.category).push(s);
    });

    const nav = document.createElement("nav");
    nav.className = "struct-nav";
    const dotsHtml = [...grouped.keys()].map((cat, i) => {
      const palette = colorForCategory(cat);
      const emoji = CAT_EMOJI[cat] || "📚";
      const count = grouped.get(cat).length;
      return `
        <button class="struct-nav-dot" data-cat="${escapeHtml(cat)}"
                style="--cat-color: ${palette.c}; --cat-glow: ${palette.glow}"
                title="${escapeHtml(cat)} · ${count} pattern${count > 1 ? "s" : ""}">
          <span class="dot-emoji">${emoji}</span>
          <span class="dot-num">${i + 1}</span>
        </button>`;
    }).join("");
    nav.innerHTML = `
      <div class="struct-nav-head">
        <span class="struct-nav-title">📌 Jump to category</span>
        <span class="struct-nav-hint">click any badge to jump</span>
      </div>
      <div class="struct-nav-path">${dotsHtml}</div>
    `;

    nav.addEventListener("click", (e) => {
      const btn = e.target.closest(".struct-nav-dot");
      if (!btn) return;
      const cat = btn.dataset.cat;
      const target = document.querySelector(`.struct-cat-section[data-cat="${escapeHtml(cat).replace(/"/g, '\\"')}"]`)
        || [...document.querySelectorAll(".struct-cat-section")].find(s => s.dataset.cat === cat);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("flash");
        setTimeout(() => target.classList.remove("flash"), 1300);
      }
    });

    root.parentNode.insertBefore(nav, root);
    return nav;
  }

  function buildStructures() {
    if (!DATA.structures) return;
    const root = $("#structList");
    if (!root) return;
    root.innerHTML = "";

    // remove any existing legend (rebuild safety) and add color legend at top
    const oldLegend = root.parentNode.querySelector(".legend");
    if (oldLegend) oldLegend.remove();
    buildLegend(root);

    // Pre-compute category colors in declaration order so colors are stable
    DATA.structures.forEach(s => colorForCategory(s.category));

    // Snake-style category navigator (sits between legend and content)
    const nav = buildStructureNav(root);

    // category chips
    const cats = [...new Set(DATA.structures.map(s => s.category))];
    const chips = $("#structChips");
    chips.innerHTML = "";
    let activeCat = "all";
    const allChip = mkSChip("all", true);
    chips.appendChild(allChip);
    cats.forEach(c => chips.appendChild(mkSChip(c)));

    function mkSChip(label, on) {
      const c = document.createElement("button");
      c.className = "chip" + (on ? " is-active" : "");
      c.textContent = label;
      c.addEventListener("click", () => {
        activeCat = label;
        $$(".chip", chips).forEach(x => x.classList.toggle("is-active", x === c));
        applyFilter();
      });
      return c;
    }

    // Group structures by category and render each as its own section
    // (tinted background, header, then a 2-col grid of cards). This makes
    // category boundaries unmistakable and keeps the user oriented.
    const grouped = new Map();
    DATA.structures.forEach(s => {
      if (!grouped.has(s.category)) grouped.set(s.category, []);
      grouped.get(s.category).push(s);
    });
    let catNum = 0;
    let firstCardSeen = false;
    grouped.forEach((items, category) => {
      catNum++;
      const palette = colorForCategory(category);
      const emoji = CAT_EMOJI[category] || "📚";

      const section = document.createElement("section");
      section.className = "struct-cat-section";
      section.dataset.cat = category;
      section.style.setProperty("--cat-color", palette.c);
      section.style.setProperty("--cat-glow", palette.glow);

      const header = document.createElement("div");
      header.className = "struct-cat-header";
      header.dataset.cat = category;
      header.style.setProperty("--cat-color", palette.c);
      header.style.setProperty("--cat-glow", palette.glow);
      header.innerHTML = `
        <span class="cat-num">${catNum}</span>
        <span class="cat-emoji" aria-hidden="true">${emoji}</span>
        <span class="cat-label">${escapeHtml(category)}</span>
        <span class="cat-count">${items.length} pattern${items.length > 1 ? "s" : ""}</span>
      `;
      section.appendChild(header);

      items.forEach(s => {
        const card = buildOneStructureCard(s, { isOpen: !firstCardSeen });
        firstCardSeen = true;
        card.style.setProperty("--cat-color", palette.c);
        card.style.setProperty("--cat-glow", palette.glow);
        section.appendChild(card);
      });

      root.appendChild(section);
    });

    function applyFilter() {
      const q = ($("#searchStruct").value || "").trim().toLowerCase();
      $$(".struct", root).forEach(el => {
        const matchCat = activeCat === "all" || el.dataset.cat === activeCat;
        const matchQ = !q || (el.dataset.search || "").includes(q);
        el.classList.toggle("is-hidden", !(matchCat && matchQ));
      });
      // Hide an entire category section (header + cards) if no card inside is visible.
      $$(".struct-cat-section", root).forEach(section => {
        const anyVisible = $$(".struct", section).some(s => !s.classList.contains("is-hidden"));
        section.classList.toggle("is-hidden", !anyVisible);
      });
    }
    $("#searchStruct").addEventListener("input", applyFilter);

    // Scroll-spy: as the user scrolls, highlight the corresponding nav badge.
    // Watches sections that are crossing the middle of the viewport.
    if (nav && "IntersectionObserver" in window) {
      const navDots = $$(".struct-nav-dot", nav);
      const setActive = (cat) => {
        navDots.forEach(d => d.classList.toggle("is-active", d.dataset.cat === cat));
      };
      const observer = new IntersectionObserver((entries) => {
        // Pick the topmost intersecting section and mark its dot active.
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.dataset.cat);
      }, { rootMargin: "-25% 0px -55% 0px", threshold: 0 });
      $$(".struct-cat-section", root).forEach(s => observer.observe(s));
    }
  }

  // ---------- conversations ----------
  function buildConversations() {
    const root = $("#convoList");
    root.innerHTML = "";

    DATA.conversations.forEach((c, idx) => {
      const card = document.createElement("div");
      card.className = "convo";

      const head = document.createElement("div");
      head.className = "convo-head";
      head.innerHTML = `
        <h3>${c.title}</h3>
        <span class="scene">${c.scene}</span>
        <p class="summary">${c.summary || ""}</p>
        <div class="actions">
          <button data-act="play">▶ Play all</button>
          <button data-act="stop">■ Stop</button>
          <button data-act="hideJp">Hide JP</button>
          <button data-act="hideEn">Hide EN</button>
        </div>
      `;
      card.appendChild(head);

      const body = document.createElement("div");
      body.className = "convo-body";

      c.turns.forEach((turn, i) => {
        const t = document.createElement("div");
        t.className = `convo-turn from-${turn.s}`;
        t.dataset.idx = i;
        const speakerInfo = turn.s === "A" ? c.a : c.b;
        const initial = (speakerInfo?.name || turn.s).slice(0, 1);
        t.innerHTML = `
          <div class="convo-avatar">${initial}</div>
          <div class="convo-bubble">
            <div class="speaker">${speakerInfo?.name || turn.s} · ${speakerInfo?.role || ""}</div>
            <div class="jp">${turn.jp}</div>
            <div class="ro">${turn.ro}</div>
            <div class="en">${turn.en}</div>
          </div>
        `;
        bindHoverInfo(t, () => infoForConvoTurn(turn, c));
        t.addEventListener("click", () => {
          t.classList.add("revealed");
          speak(turn.jp, t);
        });
        body.appendChild(t);
      });
      card.appendChild(body);

      if (c.notes) {
        const n = document.createElement("div");
        n.className = "convo-notes";
        n.innerHTML = `<b>Note:</b> ${c.notes}`;
        card.appendChild(n);
      }

      // action buttons
      let playToken = 0;
      head.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        const act = btn.dataset.act;
        if (act === "play") playAll(card, c, ++playToken, () => playToken);
        else if (act === "stop") { playToken++; synth?.cancel(); $$(".convo-turn.playing", card).forEach(x => x.classList.remove("playing")); }
        else if (act === "hideJp") { card.classList.toggle("hide-jp"); btn.classList.toggle("is-on", card.classList.contains("hide-jp")); }
        else if (act === "hideEn") { card.classList.toggle("hide-en"); btn.classList.toggle("is-on", card.classList.contains("hide-en")); }
      });

      root.appendChild(card);
    });
  }

  function playAll(card, c, myToken, getToken) {
    const turns = $$(".convo-turn", card);
    let i = 0;
    const next = () => {
      if (getToken() !== myToken) return; // a newer play/stop superseded us
      $$(".convo-turn.playing", card).forEach(x => x.classList.remove("playing"));
      if (i >= c.turns.length) return;
      const turnEl = turns[i];
      const turn = c.turns[i];
      turnEl.classList.add("playing");
      const u = new SpeechSynthesisUtterance(turn.jp);
      if (state.voice) u.voice = state.voice;
      u.lang = state.voice ? state.voice.lang : "ja-JP";
      u.rate = state.rate;
      // alternate pitch slightly per speaker for character feel
      u.pitch = turn.s === "A" ? 1.05 : 0.92;
      u.onend = () => {
        if (getToken() !== myToken) return;
        turnEl.classList.remove("playing");
        i++;
        setTimeout(next, 350); // brief pause between turns
      };
      u.onerror = u.onend;
      synth.cancel();
      synth.speak(u);
    };
    next();
  }

  // ---------- today calendar widget (top of Chapters) ----------
  // Interactive month grid. Each calendar date maps to a chapter day
  // based on a per-user "curriculum start" date stored locally. Each
  // cell shows status (done / today / missed / planned / future) and
  // is clickable — clicking jumps to that chapter card and opens it.
  function getCurriculumStart() {
    let iso = localStorage.getItem("jp.curriculumStart");
    if (!iso) {
      iso = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD local
      localStorage.setItem("jp.curriculumStart", iso);
    }
    return new Date(iso + "T00:00:00");
  }
  function chapDayForDate(date) {
    const start = getCurriculumStart();
    const a = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const b = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const diff = Math.floor((a - b) / 86400000) + 1;
    if (!DATA.chapters || diff < 1 || diff > DATA.chapters.length) return null;
    return diff;
  }

  function buildTodayCal() {
    const root = $("#todayCal");
    if (!root) return;
    const now = new Date();
    const y = now.getFullYear(), m = now.getMonth(), today = now.getDate();
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dow = ["S","M","T","W","T","F","S"];
    const first = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const todayStart = new Date(y, m, today);

    const chapDone = new Set(JSON.parse(localStorage.getItem("jp.chapDone") || "[]"));
    const totalChaps = (DATA.chapters || []).length;
    const streak = (typeof computeStreak === "function") ? computeStreak() : 0;

    let cellsHtml = dow.map(d => `<div class="dow">${d}</div>`).join("");
    for (let i = 0; i < first; i++) cellsHtml += `<div class="cell empty"></div>`;
    let monthDone = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(y, m, d);
      const chapDay = chapDayForDate(cellDate);
      const ch = chapDay !== null ? DATA.chapters.find(c => c.day === chapDay) : null;
      const isToday = d === today;
      const isPast = cellDate < todayStart;
      const isDone = chapDay !== null && chapDone.has(chapDay);
      if (isDone && cellDate.getMonth() === m) monthDone++;

      let status = "empty";
      if (isDone)                        status = "done";
      else if (isToday)                  status = "today";
      else if (isPast && chapDay !== null) status = "missed";
      else if (chapDay !== null)         status = "planned";

      const title = ch ? `Day ${chapDay}: ${ch.title}` : (isToday ? "Today" : "");
      const tipParts = [];
      if (ch)        tipParts.push(`📖 ${title}`);
      if (status === "done")    tipParts.push("✅ Completed");
      if (status === "missed")  tipParts.push("⚠️ Missed — click to catch up");
      if (status === "today")   tipParts.push("⭐ Today");
      if (status === "planned") tipParts.push("🗓 Planned");
      const tip = tipParts.join("\n");

      cellsHtml += `<button type="button"
        class="cell ${status}"
        data-chap="${chapDay || ""}"
        data-day-num="${d}"
        ${tip ? `title="${escapeHtml(tip)}"` : ""}
        ${!ch && !isToday ? "tabindex=\"-1\"" : ""}
      ><span class="n">${d}</span></button>`;
    }
    const totalCells = first + daysInMonth;
    const trail = (7 - (totalCells % 7)) % 7;
    for (let i = 0; i < trail; i++) cellsHtml += `<div class="cell empty"></div>`;

    const todayChap = chapDayForDate(now);
    const todayCh = todayChap !== null ? DATA.chapters.find(c => c.day === todayChap) : null;
    const todayLabel = todayCh
      ? `Day ${todayChap}: ${todayCh.title}`
      : (totalChaps && todayChap !== null && todayChap > totalChaps ? "Curriculum complete 🎉" : "Open a chapter to start");

    root.innerHTML = `
      <div class="today-cal">
        <div class="today-cal-summary">
          <div class="today-cal-head">
            <div class="today-cal-date">${monthNames[m]} ${y}</div>
            <div class="today-cal-day">${today}</div>
          </div>
          <div class="today-cal-target" id="todayTarget" data-chap="${todayChap || ""}">
            <span class="lbl">Today's target</span>
            <span class="ttl">${escapeHtml(todayLabel)}</span>
          </div>
          <div class="today-cal-stats">
            <span class="stat">🔥 <b>${streak}</b> streak</span>
            <span class="stat">✅ <b>${monthDone}</b> this month</span>
          </div>
          <div class="today-cal-legend">
            <span><i class="dot today"></i>today</span>
            <span><i class="dot done"></i>done</span>
            <span><i class="dot missed"></i>missed</span>
            <span><i class="dot planned"></i>planned</span>
          </div>
        </div>
        <div class="today-cal-grid">${cellsHtml}</div>
      </div>
    `;

    // Click a target / cell → switch to chapters tab and open that card
    const goToChap = (day) => {
      if (!day) return;
      activateTab("chapters");
      const card = document.querySelector(`#chapList .chapter[data-day="${day}"]`);
      if (card) {
        card.classList.add("is-open");
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    const targetEl = $("#todayTarget");
    if (targetEl && targetEl.dataset.chap) {
      targetEl.addEventListener("click", () => goToChap(parseInt(targetEl.dataset.chap, 10)));
    }
    root.querySelectorAll(".today-cal-grid .cell").forEach(cell => {
      const chap = parseInt(cell.dataset.chap || "0", 10);
      if (!chap) return;
      cell.addEventListener("click", () => goToChap(chap));
    });
  }
  // Expose so the chapter handler can refresh after a mark-complete
  window.refreshTodayDashboard = buildTodayCal;

  // ---------- quick cheat tables ----------
  // Renders all 6 cheat-sheet tables from the global CHEAT object
  // (defined in cheat-data.js). Each JP cell is wired for click-to-speak.
  function buildCheat() {
    if (typeof CHEAT === "undefined") return;
    const sp = (jp, ro) => {
      if (!jp || jp === "—") return jp || "";
      return `<span class="jp" data-say="${escapeHtml(jp)}" title="Click to hear">${escapeHtml(jp)}</span>`
           + (ro ? ` <span class="ro">${escapeHtml(ro)}</span>` : "");
    };
    const intro = (text) => `<div class="cheat-intro">${escapeHtml(text)}</div>`;

    // ── Tenses ──
    {
      const t = CHEAT.tenses;
      let h = intro(t.intro);
      h += `<table class="cheat-table"><thead><tr>
        <th>Tense</th><th>Polite (〜ます)</th><th>Plain (dictionary)</th><th>Copula (です)</th><th>Example</th><th>Nepali</th>
      </tr></thead><tbody>`;
      t.rows.forEach(r => {
        h += `<tr>
          <td><b>${escapeHtml(r.tense)}</b></td>
          <td>${sp(r.polite, r.politeRo)}</td>
          <td>${sp(r.plain, r.plainRo)}</td>
          <td>${sp(r.copula, r.copulaRo)}</td>
          <td>${sp(r.example, r.exampleRo)}</td>
          <td class="ne">${escapeHtml(r.ne)}</td>
        </tr>`;
      });
      h += `</tbody></table>`;
      $("#cheatTenses").innerHTML = h;
    }

    // ── Particles ──
    {
      const t = CHEAT.particles;
      let h = intro(t.intro);
      h += `<table class="cheat-table"><thead><tr>
        <th>Particle</th><th>Role</th><th>Example</th><th>Nepali</th><th>Note</th>
      </tr></thead><tbody>`;
      t.rows.forEach(r => {
        h += `<tr>
          <td>${sp(r.p, r.ro)}</td>
          <td><b>${escapeHtml(r.role)}</b></td>
          <td>${sp(r.ex, r.exRo)}</td>
          <td class="ne">${escapeHtml(r.exNe)}</td>
          <td class="note">${escapeHtml(r.note)}</td>
        </tr>`;
      });
      h += `</tbody></table>`;
      $("#cheatParticles").innerHTML = h;
    }

    // ── Persons ──
    {
      const t = CHEAT.persons;
      let h = intro(t.intro);
      h += `<table class="cheat-table"><thead><tr>
        <th>Person</th><th>Casual</th><th>Polite</th><th>Plural</th><th>Note</th>
      </tr></thead><tbody>`;
      t.rows.forEach(r => {
        h += `<tr>
          <td><b>${escapeHtml(r.person)}</b></td>
          <td>${sp(r.casual, r.casualRo)}</td>
          <td>${sp(r.polite, r.politeRo)}</td>
          <td>${sp(r.plural, r.pluralRo)}</td>
          <td class="note">${escapeHtml(r.note)}</td>
        </tr>`;
      });
      h += `</tbody></table>`;
      $("#cheatPersons").innerHTML = h;
    }

    // ── Question words ──
    {
      const t = CHEAT.questions;
      let h = intro(t.intro);
      h += `<table class="cheat-table"><thead><tr>
        <th>Word</th><th>Meaning</th><th>Example</th><th>Nepali</th><th>Note</th>
      </tr></thead><tbody>`;
      t.rows.forEach(r => {
        h += `<tr>
          <td>${sp(r.q, r.ro)}</td>
          <td><b>${escapeHtml(r.meaning)}</b></td>
          <td>${sp(r.ex, r.exRo)}</td>
          <td class="ne">${escapeHtml(r.exNe)}</td>
          <td class="note">${escapeHtml(r.note)}</td>
        </tr>`;
      });
      h += `</tbody></table>`;
      $("#cheatQuestions").innerHTML = h;
    }

    // ── Confusing pairs ──
    {
      const t = CHEAT.pairs;
      let h = intro(t.intro);
      t.rows.forEach(r => {
        h += `<table class="cheat-table"><caption>${escapeHtml(r.pair)}</caption><thead><tr>
          <th style="width:50%">Use it when…</th><th>Example</th>
        </tr></thead><tbody>
          <tr><td><b>A.</b> ${escapeHtml(r.a)}</td><td>${sp(r.aEx, r.aRo)}<br><span class="ne">${escapeHtml(r.aNe)}</span></td></tr>
          <tr><td><b>B.</b> ${escapeHtml(r.b)}</td><td>${sp(r.bEx, r.bRo)}<br><span class="ne">${escapeHtml(r.bNe)}</span></td></tr>
        </tbody></table>`;
      });
      $("#cheatPairs").innerHTML = h;
    }

    // ── Counters ──
    {
      const t = CHEAT.counters;
      let h = intro(t.intro);
      h += `<table class="cheat-table"><thead><tr>
        <th>Counter</th><th>Used for</th><th>1</th><th>2</th><th>3</th><th>Note</th>
      </tr></thead><tbody>`;
      t.rows.forEach(r => {
        h += `<tr>
          <td>${sp(r.c, r.cRo)}</td>
          <td><b>${escapeHtml(r.use)}</b></td>
          <td>${sp(r.one, r.oneRo)}</td>
          <td>${sp(r.two, r.twoRo)}</td>
          <td>${sp(r.three, r.threeRo)}</td>
          <td class="note">${escapeHtml(r.note)}</td>
        </tr>`;
      });
      h += `</tbody></table>`;
      $("#cheatCounters").innerHTML = h;
    }

    // Wire click-to-speak on every JP cell
    document.querySelectorAll(".cheat-table .jp").forEach(el => {
      el.addEventListener("click", () => speak(el.dataset.say, el));
    });
  }

  // ---------- quiz ----------
  function pick(arr, n) {
    const copy = arr.slice();
    const out = [];
    while (out.length < n && copy.length) {
      out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
    }
    return out;
  }

  function refreshScore() {
    $("#quizScore").textContent = `Score: ${state.score.right} / ${state.score.total}`;
  }
  refreshScore();

  // Conjugation drill — each item presents a dictionary-form verb (or
  // adjective) and asks for a target form (polite, past, negative, ~たい, ~て).
  // Built from DATA.words to keep the data source single.
  const CONJ_VERBS = [
    // godan (Group 1) — drop -u, add -i + masu
    { dict: "飲む", ro: "nomu", group: 1, masu: "飲みます",   nai: "飲みません",   ta: "飲みました",   te: "飲んで",   tai: "飲みたい",   en: "to drink" },
    { dict: "書く", ro: "kaku", group: 1, masu: "書きます",   nai: "書きません",   ta: "書きました",   te: "書いて",   tai: "書きたい",   en: "to write" },
    { dict: "話す", ro: "hanasu", group: 1, masu: "話します", nai: "話しません",  ta: "話しました", te: "話して", tai: "話したい", en: "to speak" },
    { dict: "読む", ro: "yomu", group: 1, masu: "読みます", nai: "読みません", ta: "読みました", te: "読んで", tai: "読みたい", en: "to read" },
    { dict: "聞く", ro: "kiku", group: 1, masu: "聞きます", nai: "聞きません", ta: "聞きました", te: "聞いて", tai: "聞きたい", en: "to listen" },
    { dict: "買う", ro: "kau", group: 1, masu: "買います", nai: "買いません", ta: "買いました", te: "買って", tai: "買いたい", en: "to buy" },
    { dict: "行く", ro: "iku", group: 1, masu: "行きます", nai: "行きません", ta: "行きました", te: "行って", tai: "行きたい", en: "to go (irreg. te)" },
    { dict: "持つ", ro: "motsu", group: 1, masu: "持ちます", nai: "持ちません", ta: "持ちました", te: "持って", tai: "持ちたい", en: "to hold" },
    { dict: "走る", ro: "hashiru", group: 1, masu: "走ります", nai: "走りません", ta: "走りました", te: "走って", tai: "走りたい", en: "to run" },
    // ichidan (Group 2) — drop -ru, add -masu
    { dict: "食べる", ro: "taberu", group: 2, masu: "食べます", nai: "食べません", ta: "食べました", te: "食べて", tai: "食べたい", en: "to eat" },
    { dict: "見る", ro: "miru", group: 2, masu: "見ます", nai: "見ません", ta: "見ました", te: "見て", tai: "見たい", en: "to see" },
    { dict: "起きる", ro: "okiru", group: 2, masu: "起きます", nai: "起きません", ta: "起きました", te: "起きて", tai: "起きたい", en: "to wake up" },
    { dict: "寝る", ro: "neru", group: 2, masu: "寝ます", nai: "寝ません", ta: "寝ました", te: "寝て", tai: "寝たい", en: "to sleep" },
    { dict: "教える", ro: "oshieru", group: 2, masu: "教えます", nai: "教えません", ta: "教えました", te: "教えて", tai: "教えたい", en: "to teach" },
    // irregular (Group 3)
    { dict: "する", ro: "suru", group: 3, masu: "します", nai: "しません", ta: "しました", te: "して", tai: "したい", en: "to do" },
    { dict: "来る", ro: "kuru", group: 3, masu: "来ます", nai: "来ません", ta: "来ました", te: "来て", tai: "来たい", en: "to come" }
  ];
  const CONJ_FORMS = [
    { key: "masu", label: "Polite present (~ます)" },
    { key: "nai",  label: "Polite negative (~ません)" },
    { key: "ta",   label: "Polite past (~ました)" },
    { key: "te",   label: "て-form (connective / -ing)" },
    { key: "tai",  label: "Want-form (~たい)" }
  ];

  function newQuiz() {
    const mode = $("#quizMode").value;
    const card = $("#quizCard");
    card.innerHTML = "";

    let prompt, audio, options, correctIdx;
    if (mode === "hira" || mode === "kata") {
      const pool = mode === "hira" ? DATA.hiragana : DATA.katakana;
      const correct = pool[Math.floor(Math.random() * pool.length)];
      const wrong = pick(pool.filter(x => x.ro !== correct.ro), 3);
      const opts = pick([correct, ...wrong], 4);
      correctIdx = opts.indexOf(correct);
      prompt = `<div class="quiz-prompt">${correct.ch}</div>`;
      audio = correct.ch;
      options = opts.map(o => o.ro);
    } else if (mode === "kanji") {
      // Kanji → meaning. Show kanji + readings, ask for English meaning.
      const pool = (DATA.kanji || []);
      if (!pool.length) { card.innerHTML = "<p>No kanji data.</p>"; return; }
      const correct = pool[Math.floor(Math.random() * pool.length)];
      const wrong = pick(pool.filter(x => x.en !== correct.en), 3);
      const opts = pick([correct, ...wrong], 4);
      correctIdx = opts.indexOf(correct);
      prompt = `<div class="quiz-prompt">${correct.ch}</div>
                <div style="text-align:center;color:var(--fg-dim);font-size:13px;margin-bottom:14px">
                  on: ${correct.on} · kun: ${correct.kun}
                </div>`;
      audio = correct.ch;
      options = opts.map(o => o.en);
    } else if (mode === "conj") {
      // Conjugation drill: pick a verb and a target form, ask for the form.
      const verb = CONJ_VERBS[Math.floor(Math.random() * CONJ_VERBS.length)];
      const form = CONJ_FORMS[Math.floor(Math.random() * CONJ_FORMS.length)];
      const correctAnswer = verb[form.key];
      // Build 3 plausible distractors from other verbs' SAME form, plus
      // sometimes from the SAME verb's OTHER form (forces real attention)
      const sameFormOthers = CONJ_VERBS.filter(v => v.dict !== verb.dict).map(v => v[form.key]);
      const sameVerbOthers = CONJ_FORMS.filter(f => f.key !== form.key).map(f => verb[f.key]);
      const distractors = pick([...sameFormOthers, ...sameVerbOthers], 3);
      const opts = pick([correctAnswer, ...distractors], 4);
      correctIdx = opts.indexOf(correctAnswer);
      const groupBadge = verb.group === 1 ? "Group 1 godan" : verb.group === 2 ? "Group 2 ichidan" : "Group 3 irregular";
      prompt = `<div class="quiz-prompt small">${verb.dict} <span style="color:var(--fg-dim);font-size:13px">(${verb.ro} — ${verb.en})</span></div>
                <div style="text-align:center;color:var(--accent-2);font-size:14px;margin-bottom:6px">
                  Conjugate to: <b>${form.label}</b>
                </div>
                <div style="text-align:center;color:var(--fg-dim);font-size:11.5px;margin-bottom:14px">${groupBadge}</div>`;
      audio = correctAnswer;
      options = opts;
    } else if (mode === "word") {
      const correct = DATA.words[Math.floor(Math.random() * DATA.words.length)];
      const wrong = pick(DATA.words.filter(x => x.en !== correct.en), 3);
      const opts = pick([correct, ...wrong], 4);
      correctIdx = opts.indexOf(correct);
      prompt = `<div class="quiz-prompt small">${correct.jp}<br/><span style="color:var(--fg-dim);font-size:14px">(${correct.ro})</span></div>`;
      audio = correct.jp;
      options = opts.map(o => o.en);
    } else {
      const correct = DATA.sentences[Math.floor(Math.random() * DATA.sentences.length)];
      const wrong = pick(DATA.sentences.filter(x => x.en !== correct.en), 3);
      const opts = pick([correct, ...wrong], 4);
      correctIdx = opts.indexOf(correct);
      prompt = `<div class="quiz-prompt small">${correct.jp}</div>`;
      audio = correct.jp;
      options = opts.map(o => o.en);
    }

    card.innerHTML = `
      ${prompt}
      <div style="text-align:center;margin-bottom:14px">
        <button class="quiz-listen" id="quizListen">🔊 Play</button>
      </div>
      <div class="quiz-options">
        ${options.map((o, i) => `<button class="quiz-opt" data-i="${i}">${o}</button>`).join("")}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    `;

    $("#quizListen").addEventListener("click", () => speak(audio));
    speak(audio); // auto-play once

    state.quiz = { audio, correctIdx, answered: false };
    $$(".quiz-opt", card).forEach(btn => {
      btn.addEventListener("click", () => answerQuiz(parseInt(btn.dataset.i, 10), btn));
    });
  }

  function answerQuiz(i, btn) {
    if (!state.quiz || state.quiz.answered) return;
    state.quiz.answered = true;
    state.score.total += 1;
    const correct = i === state.quiz.correctIdx;
    if (correct) state.score.right += 1;
    localStorage.setItem("jp.score", JSON.stringify(state.score));
    refreshScore();

    const opts = $$(".quiz-opt");
    opts[state.quiz.correctIdx].classList.add("correct");
    if (!correct) btn.classList.add("wrong");
    $("#quizFeedback").textContent = correct
      ? "Correct! 正解 (seikai)."
      : "Not quite. The right answer is highlighted.";
    speak(state.quiz.audio);
  }

  $("#quizNew").addEventListener("click", newQuiz);
  $("#quizMode").addEventListener("change", newQuiz);

  // ---------- init ----------
  buildKanaTable("#hiraGrid", DATA.hiragana, "hira");
  buildKanaTable("#kataGrid", DATA.katakana, "kata");
  bindKanaSearch("#searchHira", "#hiraGrid");
  bindKanaSearch("#searchKata", "#kataGrid");
  buildWords();
  buildSentences();
  if (document.getElementById("structList")) buildStructures();
  buildKanji();
  buildChapters();
  buildConversations();
  buildTodayCal();
  if (typeof buildCheat === "function") buildCheat();
  // If the URL has a tab hash (e.g. #structures), honor it over the saved tab.
  // Lets users bookmark/share specific tabs and right-click-open them in
  // new windows that land on the intended tab.
  const hashTab = location.hash.slice(1).split("?")[0];
  if (VALID_TABS.includes(hashTab)) {
    state.lastTab = hashTab;
  }

  // redirect old saved tab names to the new consolidated tabs
  const TAB_REDIRECT = {
    "today": "kana",
    "grammar": "cheat", "structures": "cheat",
    "kanji": "kana",
    "hiragana": "kana", "katakana": "kana",
    "words": "phrases", "sentences": "phrases", "conversations": "phrases"
  };
  // also activate the matching sub-tab so the user lands where they expect
  const SUBTAB_FOR_OLD = {
    "hiragana": ["kana", "hira"], "katakana": ["kana", "kata"], "kanji": ["kana", "kanji"],
    "structures": ["cheat", "structures"], "grammar": ["cheat", "structures"],
    "conversations": ["phrases", "convo"], "sentences": ["phrases", "sent"], "words": ["phrases", "word"]
  };
  if (TAB_REDIRECT[state.lastTab]) {
    const oldTab = state.lastTab;
    state.lastTab = TAB_REDIRECT[oldTab];
    if (SUBTAB_FOR_OLD[oldTab]) {
      const [pk, sk] = SUBTAB_FOR_OLD[oldTab];
      activateSubtab(pk, sk);
    }
  }
  activateTab(state.lastTab);

  // friendly nudge if voices never load
  setTimeout(() => {
    if (state.voices.length === 0) {
      const f = document.querySelector(".footer span");
      if (f) f.textContent = "⚠ No Japanese voice found. On Windows: Settings → Time & Language → Speech → Add a Japanese voice. Then reload.";
    }
  }, 1500);
})();
