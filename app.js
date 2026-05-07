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
    lastTab: localStorage.getItem("jp.tab") || "chapters"
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
  function activateTab(name) {
    $$(".tab").forEach(t => t.classList.toggle("is-active", t.dataset.tab === name));
    $$(".panel").forEach(p => p.classList.toggle("is-active", p.id === `panel-${name}`));
    state.lastTab = name;
    localStorage.setItem("jp.tab", name);
  }
  $("#tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    activateTab(btn.dataset.tab);
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
  const lookups = {
    hira: new Map(DATA.hiragana.map(k => [k.ch, k])),
    kata: new Map(DATA.katakana.map(k => [k.ch, k])),
    word: new Map(DATA.words.map(w => [w.jp, w])),
    sent: sentLookup,
    gram: new Map(DATA.grammar.map(g => [g.title, g]))
  };

  function buildChapters() {
    const root = $("#chapList");
    root.innerHTML = "";
    const done = new Set(JSON.parse(localStorage.getItem("jp.chapDone") || "[]"));
    const refreshStreak = () => $("#chapStreak").textContent = `Completed: ${done.size} / ${DATA.chapters.length}`;
    refreshStreak();

    DATA.chapters.forEach(ch => {
      const card = document.createElement("div");
      card.className = "chapter" + (done.has(ch.day) ? " done" : "");
      card.dataset.day = ch.day;

      // ─ head ───────────────────────────
      const head = document.createElement("div");
      head.className = "chapter-head";
      head.innerHTML = `
        <div class="chapter-day">
          <span class="num">${ch.day}</span>
          <span class="week">W${ch.week}</span>
        </div>
        <div class="chapter-title">
          <h3>${ch.title}</h3>
          <span class="goal">${ch.goal}</span>
        </div>
        <div class="chapter-meta">
          ${(ch.kana?.hira?.length || 0) + (ch.kana?.kata?.length || 0)} kana ·
          ${(ch.words?.length || 0)} words ·
          ${(ch.sentences?.length || 0)} sentences
          <span class="min">~${ch.minutes} min</span>
        </div>
        <button class="chapter-toggle" title="Mark complete">${done.has(ch.day) ? "✓" : "○"}</button>
      `;
      head.addEventListener("click", (e) => {
        if (e.target.closest(".chapter-toggle")) return;
        card.classList.toggle("is-open");
      });
      head.querySelector(".chapter-toggle").addEventListener("click", (e) => {
        e.stopPropagation();
        if (done.has(ch.day)) done.delete(ch.day); else done.add(ch.day);
        localStorage.setItem("jp.chapDone", JSON.stringify([...done]));
        card.classList.toggle("done");
        e.currentTarget.textContent = done.has(ch.day) ? "✓" : "○";
        refreshStreak();
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

      // grammar
      const grams = (ch.grammar || []).map(t => lookups.gram.get(t)).filter(Boolean);
      if (grams.length) {
        const sec = mkSection("Grammar");
        grams.forEach(g => {
          const item = document.createElement("div");
          item.className = "chapter-grammar";
          item.innerHTML = `<b>${g.title}</b><div class="pat">${g.pattern}</div><div class="rule">${g.rule}</div>`;
          sec.appendChild(item);
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
      { sample: "は を の が",  ro: "wa, o, no, ga", cls: "rt-particle",  label: "Particle",
        en: "Tiny grammar word that marks a noun's role.",
        np: "व्याकरणीय शब्द — कसले के गर्‍यो भन्ने देखाउने (vyakaranik shabda)" },
      { sample: "飲みます", ro: "nomimasu", cls: "rt-verb", label: "Verb",
        en: "Action word — eat, drink, go, write.",
        np: "क्रिया (kriya) — गर्ने काम (eat = खानु)" },
      { sample: "です", ro: "desu", cls: "rt-copula", label: "Copula",
        en: "Linking 'is / am / are' for noun sentences.",
        np: "सहायक क्रिया — हुँ / हो / हुन् (saune)" },
      { sample: "私 彼", ro: "watashi, kare", cls: "rt-pronoun", label: "Pronoun / Name",
        en: "Words for people: I, he, she, names like 田中.",
        np: "सर्वनाम / नाम — म, ऊ, उनी, मानिसको नाम (sarvanam)" },
      { sample: "本 会議", ro: "hon, kaigi", cls: "rt-noun", label: "Noun",
        en: "Thing word — book, meeting, email.",
        np: "नाम (naam) — वस्तु: किताब, मिटिङ" },
      { sample: "難しい", ro: "muzukashii", cls: "rt-adj", label: "Adjective",
        en: "Describes a noun — difficult, big, tasty.",
        np: "विशेषण (visheshan) — गाह्रो, ठूलो, मीठो" },
      { sample: "何 誰", ro: "nani, dare", cls: "rt-question", label: "Question word",
        en: "Asks something — what, who, where, when, how much.",
        np: "प्रश्नवाचक (prashnavachak) — के, को, कहाँ, कहिले, कति" },
      { sample: "これ あれ", ro: "kore, are", cls: "rt-demo", label: "Demonstrative",
        en: "Points at something — this, that.",
        np: "देखाउने शब्द (dekhauane) — यो, त्यो, उ" },
      { sample: "今日 明日", ro: "kyō, ashita", cls: "rt-time", label: "Time noun",
        en: "When it happened — today, tomorrow, yesterday, now.",
        np: "समय (samaya) — आज, भोलि, हिजो, अहिले" },
      { sample: "さん", ro: "san", cls: "rt-honor", label: "Honorific",
        en: "Politeness suffix attached to names — Mr/Ms.",
        np: "आदर सूचक (aadar suchak) — श्री / जी" },
      { sample: "とても", ro: "totemo", cls: "rt-adverb", label: "Adverb",
        en: "Modifies a verb / adjective — very, slowly, a little.",
        np: "क्रिया-विशेषण (kriya-visheshan) — धेरै, बिस्तारै, अलिकति" },
      // ── tense / polarity (background wash on top of the role color) ──
      { sample: "ました", ro: "mashita", cls: "rt-verb rt-past", label: "Past tense",
        en: "Already happened — verbs end ました/でした, adj end かった.",
        np: "विगत काल (vigat kaal) — भयो, थियो (already done)" },
      { sample: "ません", ro: "masen", cls: "rt-verb rt-negative", label: "Negative",
        en: "Says 'not' — verbs end ません, casual ない.",
        np: "नकारात्मक (nakaratmak) — गर्दिन, छैन (don't / not)" },
      { sample: "ています", ro: "te imasu", cls: "rt-verb rt-te", label: "て-form / -ing",
        en: "Action in progress or resulting state — writing, broken.",
        np: "गरिरहेको / भइरहेको (-rakh) — लेखिरहेको छु" },
      { sample: "たい", ro: "tai", cls: "rt-verb rt-want", label: "Want (たい)",
        en: "Speaker's desire — 'want to do X'.",
        np: "इच्छा (ichchha) — मन छ / गर्न चाहन्छु" },
      { sample: "ましょう", ro: "mashō", cls: "rt-verb rt-volitional", label: "Let's",
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

  function buildStructures() {
    if (!DATA.structures) return;
    const root = $("#structList");
    if (!root) return;
    root.innerHTML = "";

    // remove any existing legend (rebuild safety) and add color legend at top
    const oldLegend = root.parentNode.querySelector(".legend");
    if (oldLegend) oldLegend.remove();
    buildLegend(root);

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

    let prevCat = null;
    let catNum = 0;
    DATA.structures.forEach((s, idx) => {
      // Insert a category header whenever the category changes — gives visual
      // grouping inside the Structure list (1 Foundation → 2 Declarative → …).
      if (s.category !== prevCat) {
        catNum++;
        const count = DATA.structures.filter(x => x.category === s.category).length;
        const header = document.createElement("div");
        header.className = "struct-cat-header";
        header.dataset.cat = s.category;
        header.innerHTML = `
          <span class="cat-num">${catNum}</span>
          <span class="cat-label">${escapeHtml(s.category)}</span>
          <span class="cat-count">${count} pattern${count > 1 ? "s" : ""}</span>
        `;
        root.appendChild(header);
        prevCat = s.category;
      }

      const card = document.createElement("article");
      card.className = "struct" + (idx === 0 ? " is-open" : "");
      card.dataset.cat = s.category;
      const allText = [
        s.title, s.formula, s.description, s.category, s.person, s.tense,
        s.main?.jp, s.main?.ro, s.main?.en,
        ...(s.examples || []).flatMap(e => [e.jp, e.ro, e.en]),
        ...(s.main?.tokens || []).flatMap(t => [t.t, t.ro, t.role, t.meaning]),
        ...((s.examples || []).flatMap(e => (e.tokens || []).flatMap(t => [t.t, t.ro, t.role, t.meaning])))
      ].filter(Boolean).join(" ").toLowerCase();
      card.dataset.search = allText;

      // Render main + all examples as a single 2-column grid; main gets
      // an accent border so it stays visually distinct from examples.
      const gridParts = [];
      if (s.main) gridParts.push(renderSentenceBlock(s.main, "📌 Main pattern", "is-main"));
      (s.examples || []).forEach((ex, i) => {
        gridParts.push(renderSentenceBlock(ex, `Example ${i + 1}`));
      });

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
      // Hovering a colored word/breakdown row inside surfaces THAT word's
      // role/tense/polarity. Clicking a word/row plays just that word.
      const allSents = (s.main ? [{ ...s.main, _label: "Main pattern" }] : []).concat(
        (s.examples || []).map((e, i) => ({ ...e, _label: `Example ${i + 1}` }))
      );
      $$(".struct-sent", card).forEach((el, idx) => {
        const sentData = allSents[idx];
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
          t: tok.dataset.say,
          ro: tok.dataset.ro,
          role: tok.dataset.role,
          meaning: tok.dataset.mean
        }));
      });

      // hover-info on each breakdown row (rich grammar breakdown)
      $$(".struct-bd-row", card).forEach(row => {
        bindHoverInfo(row, () => infoForToken({
          t: row.dataset.say,
          ro: row.dataset.ro,
          role: row.dataset.role,
          meaning: row.dataset.mean
        }));
        row.addEventListener("click", (e) => {
          e.stopPropagation();
          speak(row.dataset.say, row);
        });
      });

      root.appendChild(card);
    });

    function applyFilter() {
      const q = ($("#searchStruct").value || "").trim().toLowerCase();
      $$(".struct", root).forEach(el => {
        const matchCat = activeCat === "all" || el.dataset.cat === activeCat;
        const matchQ = !q || (el.dataset.search || "").includes(q);
        el.classList.toggle("is-hidden", !(matchCat && matchQ));
      });
      // Hide a category header if every structure in that category is hidden.
      $$(".struct-cat-header", root).forEach(h => {
        const cat = h.dataset.cat;
        const anyVisible = $$(`.struct[data-cat="${cat}"]`, root).some(s => !s.classList.contains("is-hidden"));
        h.classList.toggle("is-hidden", !anyVisible);
      });
    }
    $("#searchStruct").addEventListener("input", applyFilter);
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
  buildStructures();
  buildChapters();
  buildConversations();
  // redirect old saved tab names to the new consolidated tabs
  const TAB_REDIRECT = {
    "grammar": "structures",
    "hiragana": "kana", "katakana": "kana",
    "words": "phrases", "sentences": "phrases", "conversations": "phrases"
  };
  // also activate the matching sub-tab so the user lands where they expect
  const SUBTAB_FOR_OLD = {
    "hiragana": ["kana", "hira"], "katakana": ["kana", "kata"],
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
