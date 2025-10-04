const questions = {
  nodejs: {
    easy: [
      {
        q: "What is the difference between Node.js and Express.js?",
        a: "Node.js is a runtime environment for executing JavaScript on the server, built on Chrome's V8 engine. Express.js is a lightweight framework that runs on top of Node.js, simplifying API and web application development with built-in routing, middleware, and HTTP utilities.",
      },
      {
        q: "Is Node.js single-threaded?",
        a: "Yes. Node.js uses a single-threaded event loop for handling concurrent requests asynchronously, making it highly scalable despite using one thread.",
      },
      {
        q: "Explain some features of Node.js.",
        a: "• Asynchronous & Event-Driven • Single-Threaded but Scalable • Non-blocking I/O Model • Cross-platform • NPM ecosystem for rich open-source libraries.",
      },
      {
        q: "What is middleware in Express?",
        a: "Middleware functions are functions with access to req, res, and next. They can execute code, modify requests/responses, end the cycle, or pass control using next().",
        example: `// Logging middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Pass control to next middleware
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Protected data');
});`,
      },
      {
        q: "How is error handling done in Express?",
        a: "By defining error-handling middleware (4 parameters: err, req, res, next) after all routes. It catches and handles any thrown or unhandled errors.",
        example: `// Routes
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error-handling middleware (must have 4 params)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: err.message,
    status: 'error'
  });
});`,
      },
      {
        q: "What is CORS and how is it controlled in Express?",
        a: "CORS (Cross-Origin Resource Sharing) restricts resource access from different origins. Controlled via the cors middleware in Express: app.use(cors({ origin: '*' })).",
      },
      {
        q: "What can a request and response include?",
        a: "Request: method, URL, headers, params, query, and body. Response: status code, headers, and response body (data, HTML, JSON).",
      },
      {
        q: "What is REST?",
        a: "REST (Representational State Transfer) is an architectural style that uses HTTP for stateless client-server communication, with resources identified by URLs.",
      },
      {
        q: "What are the main REST API methods?",
        a: "GET → Read, POST → Create, PUT → Update (replace), PATCH → Partially update, DELETE → Remove",
      },
      {
        q: "What is the difference between PUT and PATCH?",
        a: "PUT replaces the entire resource. PATCH updates only specific fields.",
      },
      {
        q: "What do status codes 200, 300, 400, 500 mean?",
        a: "200: OK, 300: Redirection, 400: Bad Request (client error), 500: Internal Server Error (server issue).",
      },
      {
        q: "Give an example of Express app structure.",
        a: "const express = require('express'); const app = express(); app.use(express.json()); app.get('/', (req,res)=>res.send('Hello')); app.listen(3000);",
      },
      {
        q: "What is 'next' in Express?",
        a: "A function that passes control to the next middleware in the stack. If not called, the request will hang.",
      },
      {
        q: "What is the difference between stateless and stateful?",
        a: "Stateless: Server doesn't store session data (e.g., REST APIs). Stateful: Server maintains session info across requests.",
      },
      {
        q: "Explain JWT.",
        a: "JWT (JSON Web Token) is a compact, signed token used for authentication. It consists of Header, Payload, and Signature, and allows servers to verify user identity without storing session data.",
        example: `const jwt = require('jsonwebtoken');

// Create token
const token = jwt.sign(
  { userId: 123, email: 'user@example.com' },
  'secret_key',
  { expiresIn: '1h' }
);

// Verify token
try {
  const decoded = jwt.verify(token, 'secret_key');
  console.log(decoded); // { userId: 123, email: '...', iat: ..., exp: ... }
} catch (err) {
  console.log('Invalid token');
}`,
      },
      {
        q: "What is NPM?",
        a: "Node Package Manager, used to install, manage, and publish packages for Node.js.",
      },
      {
        q: "How to manage environment variables?",
        a: "Use the dotenv package: create .env, then load with require('dotenv').config() to access variables via process.env.",
      },
      {
        q: "What are modules in Node.js?",
        a: "Modules are reusable blocks of code. Node supports: Built-in modules (fs, http, path), Custom modules, and Third-party modules via npm.",
      },
    ],
    intermediate: [
      {
        q: "Explain the event loop. How does Node.js handle async operations?",
        a: "The event loop continuously checks for pending callbacks, I/O operations, or timers and executes them asynchronously. Node offloads I/O tasks to libuv's thread pool, freeing the main thread to handle more requests.",
      },
      {
        q: "Difference between concurrency and parallelism (with examples).",
        a: "Concurrency: Multiple tasks progress at once (Node.js async I/O). Parallelism: Tasks run simultaneously on multiple cores (multi-threading).",
      },
      {
        q: "Difference between Stream and Buffer.",
        a: "Buffer: Temporary fixed-size memory for data transfer. Stream: Continuous data flow over time (ideal for large files).",
      },
      {
        q: "Types of streams in Node.js?",
        a: "Readable, Writable, Duplex, Transform.",
      },
      {
        q: "Is Node.js I/O bound or CPU intensive?",
        a: "I/O bound. Node excels at I/O operations (network, file). CPU-heavy tasks block the event loop.",
      },
      {
        q: "Explain event-driven architecture in Node.js.",
        a: "Execution is based on events and listeners using EventEmitter. It enables asynchronous communication and scalability.",
      },
      {
        q: "Blocking vs Non-blocking functions.",
        a: "Blocking: Waits until task completes (e.g., fs.readFileSync). Non-blocking: Executes asynchronously with callbacks or Promises (fs.readFile).",
      },
      {
        q: "Difference between module.exports and exports.",
        a: "Both are used for exporting modules. exports is a shortcut to module.exports. Reassigning exports breaks the reference; use module.exports for exporting entire objects/functions.",
      },
      {
        q: "What is EventEmitter?",
        a: "A core Node.js class (in events module) that enables custom event creation and handling with emit() and on().",
      },
      {
        q: "Difference between salt and pepper in password hashing?",
        a: "Salt: Unique random value added to each password before hashing. Pepper: A secret value (same for all passwords) stored separately from the database for extra security.",
      },
    ],
    hard: [
      {
        q: "What is the difference between fork and spawn?",
        a: "fork(): Creates a new Node.js process with its own event loop and memory (used for running multiple instances of a Node app). spawn(): Launches a new process to run an external command or script (used for system-level tasks).",
      },
      {
        q: "What are Node bindings and libuv?",
        a: "Node bindings: The bridge between JavaScript and C/C++ code for system-level functionality. libuv: A C library that provides the event loop and handles asynchronous I/O operations across platforms.",
      },
      {
        q: "Difference between encoding, hashing, and encryption.",
        a: "Encoding: Converts data to another format (e.g., Base64) — reversible. Hashing: One-way transformation (e.g., SHA-256) — for data integrity/passwords. Encryption: Two-way transformation using keys — for confidentiality.",
      },
      {
        q: "What is OAuth 2.0?",
        a: "An authorization framework that allows applications to access user resources on another service (like Google, GitHub) with user consent, without sharing passwords.",
      },
      {
        q: "Explain the cluster module.",
        a: "The cluster module allows you to create multiple worker processes that share the same server port, utilizing multiple CPU cores for better scalability.",
      },
      {
        q: "What are child processes in Node.js?",
        a: "Separate processes created using child_process module (via exec, spawn, or fork) to handle CPU-intensive tasks outside the main thread.",
      },
      {
        q: "What is process.nextTick()?",
        a: "A method that defers execution of a callback until the next iteration of the event loop, before any I/O events.",
      },
      {
        q: "Explain memory leaks in Node.js.",
        a: "Memory that is allocated but not released — caused by unclosed listeners, large caches, or global variables — leading to performance degradation.",
      },
      {
        q: "How to improve performance in Node.js?",
        a: "Use caching (Redis), clustering, async I/O, efficient queries, compression middleware, and proper error handling.",
      },
      {
        q: "Explain microservices in Node.js.",
        a: "Microservices are small, independent services that communicate via APIs. Node.js is ideal for building lightweight microservices using frameworks like Express or Fastify.",
      },
    ],
  },
};

// Function to render questions
function renderQuestions() {
  const content = document.getElementById("content");
  const topic = questions.nodejs;

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
        <div class="question-card expanded" data-question-id="nodejs-easy-${index}">
          <div class="question-header">
            <span class="question-number">${index + 1}</span>
            <span class="question-text">${item.q}</span>
          </div>
          <div class="answer-section">
            <span class="answer-label">Answer</span>
            <div class="answer-text">${item.a}</div>
            ${
              item.example
                ? `<div class="example-section"><div class="example-label">💡 Example:</div><pre class="example-code">${item.example}</pre></div>`
                : ""
            }
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
        <div class="question-card expanded" data-question-id="nodejs-intermediate-${index}">
          <div class="question-header">
            <span class="question-number">${index + 1}</span>
            <span class="question-text">${item.q}</span>
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
        <div class="question-card expanded" data-question-id="nodejs-hard-${index}">
          <div class="question-header">
            <span class="question-number">${index + 1}</span>
            <span class="question-text">${item.q}</span>
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

  if (!progressData.nodejs) {
    progressData.nodejs = [];
  }

  if (!progressData.nodejs.includes(questionId)) {
    progressData.nodejs.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressData = getProgress();
  const totalAnswered = progressData.nodejs ? progressData.nodejs.length : 0;
  const totalQuestions = 38;
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

// Back to top functionality
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuestions();
  updateProgressBar();
  initBackToTop();

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
