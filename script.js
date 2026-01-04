// ============================================
// DARK MODE & THEME MANAGEMENT
// ============================================
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon();
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const isDark = document.body.classList.contains("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
  }
}

// ============================================
// PROGRESS TRACKING
// ============================================
function getProgress() {
  const progress = localStorage.getItem("questionProgress");
  return progress ? JSON.parse(progress) : {};
}

function updateProgress(topic, questionId) {
  const progress = getProgress();
  if (!progress[topic]) {
    progress[topic] = [];
  }
  if (!progress[topic].includes(questionId)) {
    progress[topic].push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progress));
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progress = getProgress();
  const totalAnswered = Object.values(progress).reduce(
    (sum, arr) => sum + arr.length,
    0
  );
  const totalQuestions = 320; // Update if questions are added
  const percentage = Math.round((totalAnswered / totalQuestions) * 100);

  const progressFill = document.querySelector(".progress-fill");
  const progressText = document.querySelector(".progress-text");

  if (progressFill) {
    progressFill.style.width = percentage + "%";
  }
  if (progressText) {
    progressText.textContent = `${totalAnswered}/${totalQuestions} Questions Answered (${percentage}%)`;
  }
}

// ============================================
// SEARCH FUNCTIONALITY (Debounced for performance)
// ============================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function filterTopics(searchTerm) {
  const topicCards = document.querySelectorAll(".topic-card");
  const term = searchTerm.toLowerCase();

  // Use requestAnimationFrame for smooth rendering
  requestAnimationFrame(() => {
    topicCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(term) || description.includes(term)) {
        card.style.display = "block";
        card.style.animation = "fadeInUp 0.5s ease";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Debounced version for better performance
const debouncedFilterTopics = debounce(filterTopics, 300);

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateProgressBar();

  // Register service worker for offline support
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("✅ Service Worker registered:", registration.scope);
        })
        .catch((error) => {
          console.log("❌ Service Worker registration failed:", error);
        });
    });
  }

  // Theme toggle listener
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Search listener
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      debouncedFilterTopics(e.target.value);
    });
  }

  // Prefetch topic pages on hover
  const topicCards = document.querySelectorAll(".topic-card");
  topicCards.forEach((card) => {
    card.addEventListener(
      "mouseenter",
      function () {
        const link = this.querySelector("a");
        if (link && link.href) {
          const prefetchLink = document.createElement("link");
          prefetchLink.rel = "prefetch";
          prefetchLink.href = link.href;
          document.head.appendChild(prefetchLink);
        }
      },
      { once: true }
    );
  });
});
