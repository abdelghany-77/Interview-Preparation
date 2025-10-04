const questions = {
  git: {
    easy: [
      {
        q: "What is the difference between git pull and git fetch?",
        a: "git fetch downloads changes from the remote repository to your local branch without merging them. git pull fetches changes from the remote repository and immediately merges them into the current branch.",
      },
      {
        q: "What is a branch in Git? How do you create and switch between branches?",
        a: "A branch is a pointer to a specific commit. You can create one using 'git branch <branch-name>' and switch using 'git checkout <branch-name>' or 'git switch <branch-name>'.",
      },
      {
        q: "What is the purpose of the .gitignore file?",
        a: ".gitignore tells Git which files or directories to ignore (not track) in a project, such as logs, environment files, or compiled assets.",
      },
      {
        q: "What is git stash?",
        a: "git stash temporarily saves your uncommitted changes (both staged and unstaged) so you can work on something else, and then restore them later using 'git stash pop' or 'git stash apply'.",
      },
      {
        q: "How do you clone a repository from GitHub?",
        a: "Use 'git clone <repository-url>' replacing <repository-url> with the actual link of the remote repository.",
      },
      {
        q: "How can you check the status of your local Git repository?",
        a: "Run 'git status' to see which files are staged, unstaged, or untracked.",
      },
    ],
    intermediate: [
      {
        q: "Does git rebase change the commit SHA?",
        a: "Yes, rebasing rewrites commit history, which changes the SHA of affected commits.",
      },
      {
        q: "What does the git cherry-pick command do?",
        a: "git cherry-pick applies a specific commit from one branch to another without merging the whole branch — useful for applying bug fixes or single changes.",
      },
      {
        q: "Do commits take a snapshot of all previous commits too?",
        a: "No. Each commit is an independent snapshot of the project at that point in time. Commits store only the differences (deltas) but reference their parent commits to build history.",
      },
      {
        q: "What is the HEAD pointer?",
        a: "HEAD is a pointer to the current commit (or the latest commit in the current branch). It represents your current working position in the repository.",
      },
      {
        q: "What is the difference between merge and rebase?",
        a: "Merge combines branches and creates a new merge commit preserving history. Rebase rewrites commits on top of another branch, creating a linear history.",
      },
      {
        q: "How do you revert a commit that has already been pushed to the remote repository?",
        a: "Use 'git revert <commit-hash>' to create a new commit that undoes the changes made by the specified commit, then push the new commit.",
      },
      {
        q: "Describe the process of rebasing in Git.",
        a: "Rebasing moves or reapplies a sequence of commits to a new base commit. Use 'git rebase <base>' to apply commits from your branch on top of another branch, creating a cleaner, linear history.",
      },
    ],
    hard: [
      {
        q: "What are Git hooks?",
        a: "Git hooks are scripts that run automatically before or after specific Git actions (like commit, push, merge). They're stored in the .git/hooks directory and can automate tasks like code formatting or testing.",
      },
      {
        q: "Can we perform cherry-pick from another repository?",
        a: "Yes, as long as the commit SHA exists in that repo. Commit SHAs are globally unique, so you can cherry-pick across different remotes if they share history or commit references.",
      },
      {
        q: "Explain the difference between merge and rebase and when to prefer one.",
        a: "Merge creates a new merge commit preserving the true branching history. Rebase rewrites history to make it linear. Prefer merge for shared/public branches (to preserve context), and rebase for private branches (to clean up history).",
      },
      {
        q: "What is the difference between git reset, git revert, and git restore?",
        a: "git reset moves HEAD and optionally changes the index/working directory. git revert creates a new commit that undoes another. git restore restores file content to a previous state without affecting history.",
      },
      {
        q: "What is a detached HEAD state?",
        a: "It occurs when you check out a specific commit instead of a branch, meaning you're no longer on a branch — new commits won't belong to any branch unless you create one from there.",
      },
      {
        q: "What is git reflog used for?",
        a: "git reflog records all changes to HEAD, allowing you to recover lost commits or branches after resets or rebases.",
      },
      {
        q: "What is a bare repository?",
        a: "A repository without a working directory — mainly used as a remote to store and share code. You can create one using 'git init --bare'.",
      },
    ],
  },
};

// Function to render questions
function renderQuestions() {
  const content = document.getElementById("content");
  const topic = questions.git;

  if (!topic) {
    content.innerHTML =
      '<div class="welcome-message"><h2>No questions available yet.</h2></div>';
    return;
  }

  let html = "";

  // Render Easy Questions
  if (topic.easy && topic.easy.length > 0) {
    html += '<div class="difficulty-section easy">';
    html += '<div class="difficulty-header">';
    html += '<span class="difficulty-icon">🟢</span>';
    html += "<h2>Easy Questions</h2>";
    html += "</div>";

    topic.easy.forEach((item, index) => {
      html += `
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="git-easy-${index}">
          <div class="question-header">
            <span class="question-number">${index + 1}</span>
            <span class="question-text">${item.q}</span>
            <span class="toggle-icon">▼</span>
          </div>
          <div class="answer-section">
            <span class="answer-label">Answer</span>
            <div class="answer-text">${item.a}</div>
          </div>
        </div>
      `;
    });

    html += "</div>";
  }

  // Render Intermediate Questions
  if (topic.intermediate && topic.intermediate.length > 0) {
    html += '<div class="difficulty-section intermediate">';
    html += '<div class="difficulty-header">';
    html += '<span class="difficulty-icon">🟡</span>';
    html += "<h2>Intermediate Questions</h2>";
    html += "</div>";

    topic.intermediate.forEach((item, index) => {
      html += `
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="git-intermediate-${index}">
          <div class="question-header">
            <span class="question-number">${index + 1}</span>
            <span class="question-text">${item.q}</span>
            <span class="toggle-icon">▼</span>
          </div>
          <div class="answer-section">
            <span class="answer-label">Answer</span>
            <div class="answer-text">${item.a}</div>
          </div>
        </div>
      `;
    });

    html += "</div>";
  }

  // Render Hard Questions
  if (topic.hard && topic.hard.length > 0) {
    html += '<div class="difficulty-section hard">';
    html += '<div class="difficulty-header">';
    html += '<span class="difficulty-icon">🔴</span>';
    html += "<h2>Hard Questions</h2>";
    html += "</div>";

    topic.hard.forEach((item, index) => {
      html += `
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="git-hard-${index}">
          <div class="question-header">
            <span class="question-number">${index + 1}</span>
            <span class="question-text">${item.q}</span>
            <span class="toggle-icon">▼</span>
          </div>
          <div class="answer-section">
            <span class="answer-label">Answer</span>
            <div class="answer-text">${item.a}</div>
          </div>
        </div>
      `;
    });

    html += "</div>";
  }

  if (html === "") {
    content.innerHTML =
      '<div class="welcome-message"><h2>No questions available yet. Questions will be added soon!</h2></div>';
  } else {
    content.innerHTML = html;
  }
}

// Progress tracking
function getProgress() {
  const progress = localStorage.getItem("questionProgress");
  return progress ? JSON.parse(progress) : {};
}

function updateProgress(questionId) {
  const progressData = getProgress();

  if (!progressData.git) {
    progressData.git = [];
  }

  if (!progressData.git.includes(questionId)) {
    progressData.git.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressData = getProgress();
  const totalAnswered = progressData.git ? progressData.git.length : 0;
  const totalQuestions = 20;
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

// Toggle answer visibility
function toggleAnswer(card) {
  card.classList.toggle("expanded");

  // Track progress when answer is viewed
  const questionId = card.dataset.questionId;
  if (questionId && card.classList.contains("expanded")) {
    updateProgress(questionId);
  }
}

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  updateThemeIcon();
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
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }
}

// Load questions on page load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuestions();
  updateProgressBar();

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
