/* ===== StudyDash — Shared Topic Page Renderer ===== */
/* This file is loaded LAST on every topic page. It overrides any old rendering. */

(function () {
  "use strict";

  // ---- Helpers ----
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function getTopicKey() {
    // Detect topic from URL path: /Topics/nodejs/nodejs.html -> nodejs
    const path = window.location.pathname;
    const match = path.match(/Topics\/([^/]+)\//);
    return match ? match[1].toLowerCase() : null;
  }

  // Map folder names to progress keys
  const FOLDER_TO_KEY = {
    fronend: "frontend",
    js: "javascript",
    oop: "oop",
    db: "database",
    general: "general",
    react: "react",
    nodejs: "nodejs",
    laravel: "laravel",
    php: "php",
    angular: "angular",
    git: "git",
    mongodb: "mongodb",
    mysql: "mysql",
    docker: "docker",
    problemsolving: "problemsolving",
    systemdesign: "systemdesign",
  };

  function getProgressKey() {
    const folder = getTopicKey();
    return FOLDER_TO_KEY[folder] || folder;
  }

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem("studydash-progress")) || {};
    } catch {
      return {};
    }
  }

  function saveProgress(progress) {
    localStorage.setItem("studydash-progress", JSON.stringify(progress));
  }

  function isChecked(topicKey, qId) {
    const progress = getProgress();
    return (progress[topicKey] || []).includes(qId);
  }

  function toggleCheck(topicKey, qId) {
    const progress = getProgress();
    if (!progress[topicKey]) progress[topicKey] = [];
    const idx = progress[topicKey].indexOf(qId);
    if (idx > -1) progress[topicKey].splice(idx, 1);
    else progress[topicKey].push(qId);
    saveProgress(progress);
  }

  // ---- Data Detection ----
  function getQuestionData() {
    // Check both variable names used across topics
    let raw = null;
    try {
      raw = typeof defined_questions !== "undefined" ? defined_questions : null;
    } catch {}
    if (!raw) {
      try {
        raw = typeof questions !== "undefined" ? questions : null;
      } catch {}
    }
    return raw;
  }

  function detectStructure(data) {
    if (Array.isArray(data)) return "array"; // problemsolving format

    // data is an object like { topicName: { ... } }
    const keys = Object.keys(data);
    if (keys.length === 0) return null;

    const topicData = data[keys[0]];
    if (!topicData || typeof topicData !== "object") return null;

    const subKeys = Object.keys(topicData);
    const difficultyKeys = ["easy", "medium", "intermediate", "hard"];
    const hasDifficulty = subKeys.some((k) =>
      difficultyKeys.includes(k.toLowerCase()),
    );

    return hasDifficulty ? "difficulty" : "sections";
  }

  // ---- Rendering ----
  function renderQuestionCard(item, topicKey, qId, questionNum) {
    const checked = isChecked(topicKey, qId);
    const card = document.createElement("div");
    card.className = "question-card" + (checked ? " checked-done" : "");
    card.id = "q-" + qId;

    // Determine question text and answer
    let questionText = item.q || item.question || item.problemStatement || "";
    let answerHTML = "";

    if (item.a) {
      answerHTML = `<p>${item.a}</p>`;
    } else if (item.answer) {
      // problemsolving format
      answerHTML = "";
      if (item.problemStatement && item.question) {
        answerHTML += `<p><strong>Problem:</strong> ${escapeHTML(item.problemStatement)}</p>`;
      }
      if (item.approach) {
        answerHTML += `<p><strong>Approach:</strong> ${escapeHTML(item.approach)}</p>`;
      }
      if (item.complexity) {
        answerHTML += `<p><strong>Complexity:</strong> ${escapeHTML(item.complexity)}</p>`;
      }
      if (item.answer) {
        answerHTML += `<pre class="code-example">${escapeHTML(item.answer)}</pre>`;
      }
    }

    if (item.example) {
      answerHTML += `<pre class="code-example">${escapeHTML(item.example)}</pre>`;
    }

    card.innerHTML = `
      <div class="question-header">
        <div class="question-checkbox ${checked ? "checked" : ""}" data-qid="${qId}">
          <i class="fas fa-check"></i>
        </div>
        <div class="question-title">${questionNum}. ${escapeHTML(questionText)}</div>
        <i class="fas fa-chevron-down question-toggle-icon"></i>
      </div>
      <div class="question-answer">${answerHTML}</div>
    `;

    // Toggle expand
    const header = card.querySelector(".question-header");
    header.addEventListener("click", (e) => {
      if (e.target.closest(".question-checkbox")) return;
      card.classList.toggle("expanded");
    });

    // Checkbox
    const checkbox = card.querySelector(".question-checkbox");
    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCheck(topicKey, qId);
      checkbox.classList.toggle("checked");
      card.classList.toggle("checked-done");
    });

    return card;
  }

  function renderDifficultyBased(container, topicData, topicKey) {
    const levels = [
      { key: "easy", label: "Easy", icon: "🟢", css: "easy-header" },
      { key: "medium", label: "Medium", icon: "🟡", css: "medium-header" },
      {
        key: "intermediate",
        label: "Medium",
        icon: "🟡",
        css: "medium-header",
      },
      { key: "hard", label: "Hard", icon: "🔴", css: "hard-header" },
    ];

    let globalIndex = 0;

    levels.forEach((level) => {
      const qs = topicData[level.key];
      if (!qs || qs.length === 0) return;

      const section = document.createElement("div");
      section.className = "difficulty-section";

      const header = document.createElement("div");
      header.className = `difficulty-header ${level.css}`;
      header.innerHTML = `<span>${level.icon} ${level.label} (${qs.length})</span><i class="fas fa-chevron-down toggle-icon"></i>`;

      const content = document.createElement("div");
      content.className = "difficulty-content";

      header.addEventListener("click", () => {
        header.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
      });

      qs.forEach((item, i) => {
        globalIndex++;
        const qId = `${level.key}_${i}`;
        content.appendChild(
          renderQuestionCard(item, topicKey, qId, globalIndex),
        );
      });

      section.appendChild(header);
      section.appendChild(content);
      container.appendChild(section);
    });
  }

  function renderSectionBased(container, topicData, topicKey) {
    const sectionNames = Object.keys(topicData);
    const colors = ["easy-header", "medium-header", "hard-header"];
    const icons = ["🟢", "🟡", "🔴"];
    let globalIndex = 0;

    sectionNames.forEach((sectionKey, si) => {
      const qs = topicData[sectionKey];
      if (!qs || qs.length === 0) return;

      const section = document.createElement("div");
      section.className = "difficulty-section";

      const colorIdx = si % colors.length;
      const sectionLabel =
        sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);

      const header = document.createElement("div");
      header.className = `difficulty-header ${colors[colorIdx]}`;
      header.innerHTML = `<span>${icons[colorIdx]} ${sectionLabel} (${qs.length})</span><i class="fas fa-chevron-down toggle-icon"></i>`;

      const content = document.createElement("div");
      content.className = "difficulty-content";

      header.addEventListener("click", () => {
        header.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
      });

      qs.forEach((item, i) => {
        globalIndex++;
        const qId = `${sectionKey}_${i}`;
        content.appendChild(
          renderQuestionCard(item, topicKey, qId, globalIndex),
        );
      });

      section.appendChild(header);
      section.appendChild(content);
      container.appendChild(section);
    });
  }

  function renderArrayBased(container, dataArray, topicKey) {
    // Group by category (Easy/Medium/Hard)
    const groups = {};
    dataArray.forEach((item) => {
      const cat = (item.category || "General").toLowerCase();
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });

    const order = ["easy", "medium", "hard"];
    const allKeys = [
      ...new Set([
        ...order.filter((k) => groups[k]),
        ...Object.keys(groups).filter((k) => !order.includes(k)),
      ]),
    ];

    const levelConfig = {
      easy: { label: "Easy", icon: "🟢", css: "easy-header" },
      medium: { label: "Medium", icon: "🟡", css: "medium-header" },
      hard: { label: "Hard", icon: "🔴", css: "hard-header" },
    };

    let globalIndex = 0;

    allKeys.forEach((key) => {
      const qs = groups[key];
      if (!qs || qs.length === 0) return;

      const config = levelConfig[key] || {
        label: key.charAt(0).toUpperCase() + key.slice(1),
        icon: "📝",
        css: "medium-header",
      };

      const section = document.createElement("div");
      section.className = "difficulty-section";

      const header = document.createElement("div");
      header.className = `difficulty-header ${config.css}`;
      header.innerHTML = `<span>${config.icon} ${config.label} (${qs.length})</span><i class="fas fa-chevron-down toggle-icon"></i>`;

      const content = document.createElement("div");
      content.className = "difficulty-content";

      header.addEventListener("click", () => {
        header.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
      });

      qs.forEach((item, i) => {
        globalIndex++;
        const qId = `${key}_${i}`;
        content.appendChild(
          renderQuestionCard(item, topicKey, qId, globalIndex),
        );
      });

      section.appendChild(header);
      section.appendChild(content);
      container.appendChild(section);
    });
  }

  // ---- Theme & Study Mode ----
  function initTopicTheme() {
    const saved = localStorage.getItem("studydash-theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark-mode");
    }
    updateTopicThemeIcon();

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
          "studydash-theme",
          document.body.classList.contains("dark-mode") ? "dark" : "light",
        );
        updateTopicThemeIcon();
      });
    }
  }

  function updateTopicThemeIcon() {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;
    const icon = toggle.querySelector("i");
    if (icon)
      icon.className = document.body.classList.contains("dark-mode")
        ? "fas fa-sun"
        : "fas fa-moon";
  }

  function initStudyMode() {
    const saved = localStorage.getItem("studydash-study-mode") === "true";
    if (saved) document.body.classList.add("study-mode");

    const toggle = document.getElementById("studyToggle");
    if (toggle) {
      if (saved) toggle.classList.add("active");
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("study-mode");
        toggle.classList.toggle("active");
        localStorage.setItem(
          "studydash-study-mode",
          document.body.classList.contains("study-mode"),
        );
      });
    }
  }

  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    });
    btn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }

  // ---- Main Init (runs after all other scripts) ----
  function init() {
    const container = document.getElementById("content");
    if (!container) return;

    const data = getQuestionData();
    if (!data) return;

    const topicKey = getProgressKey();
    if (!topicKey) return;

    const structure = detectStructure(data);

    // Clear any existing content (from old renderers)
    container.innerHTML = "";

    if (structure === "array") {
      renderArrayBased(container, data, topicKey);
    } else if (structure === "difficulty") {
      const topicData = data[Object.keys(data)[0]];
      renderDifficultyBased(container, topicData, topicKey);
    } else if (structure === "sections") {
      const topicData = data[Object.keys(data)[0]];
      renderSectionBased(container, topicData, topicKey);
    }

    initTopicTheme();
    initStudyMode();
    initBackToTop();
  }

  // Use setTimeout to ensure this runs AFTER any other DOMContentLoaded handlers
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(init, 0));
  } else {
    setTimeout(init, 0);
  }
})();
