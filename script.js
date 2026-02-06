/* ===== StudyDash � Main Application Script ===== */

(() => {
  "use strict";

  // ========== Constants ==========
  const STORAGE_KEYS = {
    theme: "studydash-theme",
    progress: "studydash-progress",
    streak: "studydash-streak",
    lastVisit: "studydash-last-visit",
    studyMode: "studydash-study-mode",
  };

  const TOTAL_QUESTIONS = 820;

  // ========== DOM Refs ==========
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ========== Theme Management ==========
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark-mode");
    }
    updateThemeUI();
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    updateThemeUI();
  }

  function updateThemeUI() {
    const isDark = document.body.classList.contains("dark-mode");
    const toggle = $("#themeToggle");
    if (toggle) {
      const icon = $("i", toggle);
      const label = $("span", toggle);
      if (icon) icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
      if (label) label.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
  }

  // ========== Progress Management ==========
  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.progress)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(data));
  }

  function getCompletedCount() {
    const progress = getProgress();
    let count = 0;
    for (const topic in progress) {
      if (Array.isArray(progress[topic])) {
        count += progress[topic].length;
      }
    }
    return count;
  }

  function updateDashboardProgress() {
    const completed = getCompletedCount();
    const pct = Math.min(Math.round((completed / TOTAL_QUESTIONS) * 100), 100);

    // Progress ring
    const ring = $("#progressRing");
    if (ring) {
      const circumference = 2 * Math.PI * 34;
      ring.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    }

    // Percentage text
    const pctEl = $("#progressPercent");
    if (pctEl) pctEl.textContent = pct + "%";

    // Detail text
    const detailEl = $("#progressDetail");
    if (detailEl)
      detailEl.textContent = `${completed} / ${TOTAL_QUESTIONS} completed`;

    // Stats
    const completedEl = $("#completedCount");
    if (completedEl) completedEl.textContent = completed;

    // Per-card progress
    $$(".mini-progress-fill").forEach((fill) => {
      const topic = fill.dataset.topic;
      const card = fill.closest(".topic-card");
      const total = card ? parseInt(card.dataset.questions) || 0 : 0;
      const progress = getProgress();
      const done = (progress[topic] || []).length;
      fill.style.width = total ? Math.round((done / total) * 100) + "%" : "0%";
    });

    $$(".progress-count").forEach((el) => {
      const topic = el.dataset.topic;
      const card = el.closest(".topic-card");
      const total = card ? parseInt(card.dataset.questions) || 0 : 0;
      const progress = getProgress();
      const done = (progress[topic] || []).length;
      el.textContent = `${done}/${total}`;
    });
  }

  // ========== Streak ==========
  function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem(STORAGE_KEYS.lastVisit);
    let streak = parseInt(localStorage.getItem(STORAGE_KEYS.streak)) || 0;

    if (lastVisit !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastVisit === yesterday.toDateString()) {
        streak++;
      } else if (lastVisit !== today) {
        streak = 1;
      }
      localStorage.setItem(STORAGE_KEYS.streak, streak);
      localStorage.setItem(STORAGE_KEYS.lastVisit, today);
    }

    const streakEl = $("#streakCount");
    if (streakEl) streakEl.textContent = streak;
  }

  // ========== Sidebar ==========
  function initSidebar() {
    const sidebar = $("#sidebar");
    const overlay = $("#sidebarOverlay");
    const menuToggle = $("#menuToggle");
    const sidebarClose = $("#sidebarClose");

    function openSidebar() {
      sidebar?.classList.add("open");
      overlay?.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      sidebar?.classList.remove("open");
      overlay?.classList.remove("active");
      document.body.style.overflow = "";
    }

    menuToggle?.addEventListener("click", openSidebar);
    sidebarClose?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);

    // Category nav filters
    $$(".nav-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".nav-filter").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        filterTopics();
        closeSidebar();
      });
    });
  }

  // ========== Filtering ==========
  function filterTopics() {
    const searchTerm = ($("#searchInput")?.value || "").toLowerCase().trim();
    const activeCategory = $(".nav-filter.active")?.dataset.category || "all";
    const activeLevel = $(".diff-btn.active")?.dataset.level || "all";

    const cards = $$(".topic-card");
    let visible = 0;

    cards.forEach((card) => {
      const topic = (card.dataset.topic || "").toLowerCase();
      const category = card.dataset.category || "";
      const level = card.dataset.level || "";
      const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
      const desc = (card.querySelector("p")?.textContent || "").toLowerCase();

      const matchSearch =
        !searchTerm ||
        title.includes(searchTerm) ||
        desc.includes(searchTerm) ||
        topic.includes(searchTerm);
      const matchCategory =
        activeCategory === "all" || category === activeCategory;

      let matchLevel = true;
      if (activeLevel === "junior") matchLevel = level === "junior";
      else if (activeLevel === "mid")
        matchLevel = ["junior", "mid"].includes(level);
      else if (activeLevel === "senior") matchLevel = true; // senior sees all

      const show = matchSearch && matchCategory && matchLevel;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    // Section title update
    const sectionTitle = $("#sectionTitle");
    const visibleCount = $("#visibleCount");
    const emptyState = $("#emptyState");
    const grid = $("#topicsGrid");

    if (sectionTitle) {
      const catLabel =
        $(".nav-filter.active")?.textContent?.trim() || "All Topics";
      sectionTitle.textContent = catLabel;
    }
    if (visibleCount)
      visibleCount.textContent = `${visible} topic${visible !== 1 ? "s" : ""}`;

    if (emptyState) emptyState.classList.toggle("hidden", visible !== 0);
    if (grid) grid.style.display = visible === 0 ? "none" : "";
  }

  // ========== Search with debounce ==========
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  function initSearch() {
    const input = $("#searchInput");
    if (!input) return;

    input.addEventListener(
      "input",
      debounce(() => filterTopics(), 200),
    );

    // Keyboard shortcut: / to focus search
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
      if (e.key === "Escape") input.blur();
    });
  }

  // ========== Difficulty Filter ==========
  function initDifficultyFilter() {
    $$(".diff-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".diff-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        filterTopics();
      });
    });
  }

  // ========== Study Mode ==========
  function initStudyMode() {
    const saved = localStorage.getItem(STORAGE_KEYS.studyMode) === "true";
    if (saved) document.body.classList.add("study-mode");

    const toggle = $("#studyModeToggle");
    if (toggle) {
      if (saved) toggle.classList.add("active");
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("study-mode");
        toggle.classList.toggle("active");
        const isOn = document.body.classList.contains("study-mode");
        localStorage.setItem(STORAGE_KEYS.studyMode, isOn);
      });
    }
  }

  // ========== Reset Progress ==========
  function initReset() {
    const btn = $("#resetProgress");
    if (!btn) return;

    btn.addEventListener("click", () => {
      if (confirm("Reset all progress? This cannot be undone.")) {
        localStorage.removeItem(STORAGE_KEYS.progress);
        localStorage.removeItem(STORAGE_KEYS.streak);
        localStorage.removeItem(STORAGE_KEYS.lastVisit);
        updateDashboardProgress();
        updateStreak();
      }
    });
  }

  // ========== Service Worker ==========
  function registerSW() {
    if ("serviceWorker" in navigator) {
      // Try GitHub Pages path first, then root-relative fallback
      const paths = [
        "/Interview-Preparation/service-worker.js",
        "/service-worker.js",
      ];
      (function tryRegister(i) {
        if (i >= paths.length) return;
        navigator.serviceWorker
          .register(paths[i])
          .catch(() => tryRegister(i + 1));
      })(0);
    }
  }

  // ========== Initialize ==========
  function init() {
    initTheme();
    initSidebar();
    initSearch();
    initDifficultyFilter();
    initStudyMode();
    initReset();
    updateDashboardProgress();
    updateStreak();
    registerSW();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for topic pages
  window.StudyDash = {
    getProgress,
    saveProgress,
    toggleTheme,
    STORAGE_KEYS,
    getCompletedCount,
    updateDashboardProgress,
  };
})();
