const questions = {
  mongodb: {
    easy: [
      {
        q: "What is the difference between SQL and NoSQL databases?",
        a: "SQL databases are relational, table-based, and use structured query language (SQL). They are ACID-compliant and suited for structured data and complex queries. NoSQL databases are non-relational, flexible, and can store data in formats like key-value, document, graph, or column. They prioritize scalability and performance for large, unstructured datasets.",
      },
      {
        q: "Why did we create NoSQL databases?",
        a: "To handle scalability, flexibility, and performance challenges from massive and unstructured data, especially for real-time and distributed web apps.",
      },
      {
        q: "Give examples of SQL and NoSQL databases.",
        a: "SQL: MySQL, PostgreSQL, Oracle, SQL Server. NoSQL: MongoDB, Cassandra, Redis, CouchDB.",
      },
      {
        q: "Explain MongoDB structure.",
        a: "Database → Collections → Documents. Database: top-level container. Collection: similar to tables but schema-less. Document: JSON-like key-value pairs (stored as BSON).",
      },
      {
        q: "What are collections in MongoDB?",
        a: "Collections are groups of documents, like tables in SQL.",
      },
      {
        q: "What is a document in MongoDB?",
        a: "A document is a BSON (Binary JSON) record — a set of key-value pairs.",
      },
      {
        q: "How do you create a database?",
        a: "Use 'use <databaseName>'. MongoDB creates it automatically once data is stored.",
      },
      {
        q: "What is the primary key in MongoDB?",
        a: "_id — unique for every document, automatically generated.",
      },
      {
        q: "How do you insert data?",
        a: "db.collection.insertOne() or insertMany().",
      },
      {
        q: "How do you delete documents?",
        a: "db.collection.deleteOne() or deleteMany().",
      },
      {
        q: "How do you list all databases?",
        a: "show dbs.",
      },
      {
        q: "How do you limit query results?",
        a: "Use .limit(<number>).",
      },
      {
        q: "How is data stored on disk?",
        a: "In BSON format, optimized for speed and efficient reading.",
      },
      {
        q: "What does find() return? What is a cursor?",
        a: "Returns a cursor, an iterator object pointing to query results. By default, it returns 20 documents per batch.",
      },
      {
        q: "What are the types of indexes?",
        a: "Single field, compound, multikey, text, geospatial.",
      },
      {
        q: "How can we make an update query insert if not found?",
        a: "Add { upsert: true } in the options object.",
      },
      {
        q: "What are cursor functions?",
        a: "Functions applied to cursor objects like .sort(), .limit(), .forEach().",
      },
      {
        q: "Structure of the find command?",
        a: "find({filter}, {projection}, {options}).",
      },
      {
        q: "What is aggregation and why pipeline?",
        a: "Aggregation processes documents in stages (pipeline). Each stage's output is input for the next — used for analytics and transformations.",
      },
      {
        q: "What does explain() do?",
        a: "Shows query execution plan — e.g., index usage, stages, time.",
      },
      {
        q: "Can we modify _id field?",
        a: "No, it's immutable.",
      },
      {
        q: "Does MongoDB have views?",
        a: "Yes, use db.createView().",
      },
      {
        q: "Difference between findOneAndUpdate and updateOne?",
        a: "findOneAndUpdate() returns the updated document, updateOne() returns a status acknowledgment.",
      },
      {
        q: "Difference between $set and $unset?",
        a: "$set updates or adds fields; $unset removes them.",
      },
    ],
    intermediate: [
      {
        q: "How to improve query performance?",
        a: "Indexing, caching, and query optimization.",
      },
      {
        q: "Can you $push and $pull in the same query?",
        a: "No.",
      },
      {
        q: "Can you $set and $unset the same field in one query?",
        a: "No.",
      },
      {
        q: "Explain ACID transactions.",
        a: "Atomicity, Consistency, Isolation, Durability — ensure reliable transactions.",
      },
      {
        q: "Difference between embedded documents and references?",
        a: "Embedded: store data directly inside a document (better for reads). References: store links (IDs) to other documents (better for modular design).",
      },
      {
        q: "What are virtual properties in Mongoose?",
        a: "Non-persisted properties used for computed or derived values.",
      },
      {
        q: "Would Mongo use index scan if only _id index exists?",
        a: "No, unless the query filters by _id.",
      },
      {
        q: "What is a covered query?",
        a: "Query where all required fields are within the index (no disk fetch needed).",
      },
      {
        q: "What is a single-field multikey index?",
        a: "An index on an array field (one index entry per array element).",
      },
      {
        q: "Can we create an empty document?",
        a: "Yes — db.collection.insertOne({}) creates an empty document with _id.",
      },
      {
        q: "Are insertMany and updateMany atomic?",
        a: "insertMany() is atomic by default (use { ordered: true } to change), updateMany() is not.",
      },
      {
        q: "What is in-memory sort?",
        a: "Sorting done in server memory; can be avoided by indexing sort fields.",
      },
      {
        q: "Mention some array operators.",
        a: "$addToSet, $push, $pull, $pop.",
      },
      {
        q: "Difference between $pull and $pop?",
        a: "$pop removes first or last element, $pull removes specific matching elements.",
      },
      {
        q: "How to search using text index?",
        a: "db.collection.find({ $text: { $search: 'mongodb database' } }).",
      },
      {
        q: "Importance of order in compound index?",
        a: "The index order affects how efficiently queries can use it (prefix rule).",
      },
    ],
    hard: [
      {
        q: "How to maintain high availability?",
        a: "Through replication or sharding.",
      },
      {
        q: "Explain MongoDB replication architecture.",
        a: "A replica set has one primary node and multiple secondary nodes for redundancy and failover.",
      },
      {
        q: "What is sharding, and why is key selection crucial?",
        a: "Sharding splits data across multiple servers for scalability. Choosing the right shard key avoids uneven data distribution and bottlenecks.",
      },
      {
        q: "Difference between horizontal and vertical scaling?",
        a: "Horizontal: add more machines. Vertical: add more power (CPU, RAM) to one machine.",
      },
      {
        q: "Difference between JSON and BSON?",
        a: "JSON is human-readable text; BSON is binary, faster, and supports more data types.",
      },
      {
        q: "Difference between cursor.count() and countDocuments()?",
        a: "cursor.count() counts in-memory results; countDocuments() counts from disk (more accurate).",
      },
      {
        q: "When should you add or avoid indexes?",
        a: "Add indexes for selective queries. Avoid if queries scan >70% of documents — collection scan might be faster.",
      },
      {
        q: "What are capped collections?",
        a: "Fixed-size collections that overwrite oldest data when full.",
      },
      {
        q: "In multikey index, can we search by second field only?",
        a: "No — must follow the index prefix.",
      },
      {
        q: "Backup and restore utilities?",
        a: "mongoimport, mongoexport, mongodump, mongorestore.",
      },
      {
        q: "Read & Write concerns?",
        a: "Control consistency and durability. Write concern: { w, j, wtimeout }. Read concern: { level }.",
      },
      {
        q: "Difference between journal (WAL) and oplog?",
        a: "Journal: write-ahead log for durability. Oplog: records all operations for replication.",
      },
      {
        q: "What is TDD (Test-Driven Development)?",
        a: "Development approach where tests are written before code implementation.",
      },
      {
        q: "What are types of testing?",
        a: "Unit, integration, system, acceptance, regression.",
      },
      {
        q: "What is a memory leak?",
        a: "When memory is not released after being used, causing reduced performance.",
      },
      {
        q: "Common caching strategies in HTTP APIs?",
        a: "Cache-Control, ETags, Redis caching, CDN edge caching.",
      },
      {
        q: "What is 'Definition of Done (DoD)'?",
        a: "A clear checklist that defines when a feature is considered complete, including testing, documentation, and review.",
      },
    ],
  },
};

// Function to render questions
function renderQuestions() {
  const content = document.getElementById("content");
  const topic = questions.mongodb;

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
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="mongodb-easy-${index}">
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
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="mongodb-intermediate-${index}">
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
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="mongodb-hard-${index}">
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

  if (!progressData.mongodb) {
    progressData.mongodb = [];
  }

  if (!progressData.mongodb.includes(questionId)) {
    progressData.mongodb.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressData = getProgress();
  const totalAnswered = progressData.mongodb ? progressData.mongodb.length : 0;
  const totalQuestions = 57;
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

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuestions();
  updateProgressBar();

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
