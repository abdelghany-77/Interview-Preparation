const questions = {
  database: {
    easy: [
      {
        q: "What is the difference between a primary key and a foreign key?",
        a: "A primary key uniquely identifies each record in a table. A foreign key is a field (or collection of fields) in one table that refers to the primary key in another table. It's used to establish a relationship between two tables.",
      },
      {
        q: "Can you explain what normalization is and why it is important?",
        a: "Normalization is the process of organizing data to minimize redundancy and dependency. It's important because it makes databases more efficient and ensures data integrity.",
      },
      {
        q: "What is the difference between DELETE, TRUNCATE, and DROP?",
        a: "DELETE: removes rows (can be filtered), can be rolled back. TRUNCATE: removes all rows, cannot be rolled back. DROP: removes the entire table from the DB.",
      },
      {
        q: "What is a database?",
        a: "A database is an organized collection of structured data stored electronically that can be easily accessed, managed, and updated.",
      },
      {
        q: "What are the types of databases?",
        a: "Two main types: Relational databases (SQL) - use structured tables with predefined schemas, and Non-relational databases (NoSQL) - use flexible, document-based or key-value storage.",
      },
      {
        q: "What is SQL?",
        a: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.",
      },
      {
        q: "What is a table in a database?",
        a: "A table is a collection of related data organized in rows and columns. Each row represents a record, and each column represents a field or attribute.",
      },
      {
        q: "What is a schema?",
        a: "A schema is the structure that defines the organization of data in a database, including tables, columns, data types, and relationships between tables.",
      },
      {
        q: "What is a query?",
        a: "A query is a request for data or information from a database. It's typically written in SQL to retrieve, insert, update, or delete data.",
      },
      {
        q: "What is CRUD?",
        a: "CRUD stands for Create, Read, Update, and Delete - the four basic operations that can be performed on database data.",
      },
    ],
    intermediate: [
      {
        q: "What are ACID properties in a database system?",
        a: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity: Ensures that all operations within a transaction are completed successfully; otherwise, the transaction is aborted. Consistency: Ensures that a transaction can only bring the database from one valid state to another. Isolation: Ensures that concurrent transactions result in a system state as if transactions were executed serially. Durability: Ensures that once a transaction has been committed, it will remain so, even in the event of a system failure.",
      },
      {
        q: "What is an index? What are the pros and cons?",
        a: "An index is a data structure (like a lookup table) that improves the speed of data retrieval operations on a database table. Pros: Faster SELECT queries. Cons: Slower INSERT/UPDATE/DELETE because every change must also update the index, which adds overhead.",
      },
      {
        q: "Can indexes slow down performance?",
        a: "Yes — they make reads faster but slow down inserts/updates/deletes due to extra maintenance.",
      },
      {
        q: "What is the difference between a clustered and a non-clustered index?",
        a: "Clustered index sorts data physically; only one per table. Non-clustered stores pointers to actual rows; multiple allowed.",
      },
      {
        q: "Difference between relational and non-relational databases?",
        a: "Relational databases (SQL) use structured tables with predefined schemas, support complex joins, and follow ACID properties. Non-relational databases (NoSQL) use flexible schemas (documents, key-value, graphs), are horizontally scalable, and prioritize performance and flexibility over strict consistency.",
      },
      {
        q: "What are common SQL queries?",
        a: "SELECT: retrieves data from tables. INSERT: adds new records. UPDATE: modifies existing records. DELETE: removes records. JOIN: combines data from multiple tables. WHERE: filters results. GROUP BY: groups rows. ORDER BY: sorts results.",
      },
      {
        q: "What are common NoSQL queries (MongoDB example)?",
        a: "find(): retrieves documents. insertOne()/insertMany(): adds documents. updateOne()/updateMany(): modifies documents. deleteOne()/deleteMany(): removes documents. aggregate(): performs complex data transformations and analytics.",
      },
      {
        q: "What is a JOIN in SQL?",
        a: "JOIN combines rows from two or more tables based on a related column. Types: INNER JOIN (matching records), LEFT JOIN (all from left + matches), RIGHT JOIN (all from right + matches), FULL JOIN (all records).",
      },
      {
        q: "What is a transaction?",
        a: "A transaction is a sequence of database operations that are treated as a single unit of work. Either all operations succeed (commit) or all fail (rollback), ensuring data consistency.",
      },
      {
        q: "What is database denormalization?",
        a: "The process of intentionally introducing redundancy into a database to improve read performance by reducing the need for complex joins. It's the opposite of normalization.",
      },
      {
        q: "What is a stored procedure?",
        a: "A stored procedure is a precompiled set of SQL statements stored in the database that can be executed as a single unit. It improves performance and allows code reusability.",
      },
      {
        q: "What is a view in SQL?",
        a: "A view is a virtual table based on the result of an SQL query. It doesn't store data itself but provides a way to simplify complex queries and control data access.",
      },
    ],
    hard: [
      {
        q: "How would you design a database schema for a simple e-commerce store (products, users, orders)?",
        a: "Users table: (user_id, name, email, password). Products table: (product_id, name, description, price, stock). Orders table: (order_id, user_id, order_date). OrderItems table: (order_item_id, order_id, product_id, quantity, price_at_purchase). Relationships: One User can have many Orders (one-to-many). Each Order can have many OrderItems (one-to-many). Each OrderItem references a Product.",
      },
      {
        q: "What is database sharding?",
        a: "Sharding is a horizontal partitioning technique that splits a large database into smaller, more manageable pieces called shards, distributed across multiple servers. Each shard contains a subset of the data, improving scalability and performance.",
      },
      {
        q: "What is database replication?",
        a: "Replication is the process of copying and maintaining database objects in multiple databases. It provides high availability, fault tolerance, and load balancing by creating redundant copies of data.",
      },
      {
        q: "Explain CAP theorem.",
        a: "CAP theorem states that a distributed database can only guarantee two out of three properties: Consistency (all nodes see the same data), Availability (system remains operational), Partition Tolerance (system continues despite network failures). You must choose which property to sacrifice.",
      },
      {
        q: "What is database connection pooling?",
        a: "Connection pooling is a technique where a cache of database connections is maintained so they can be reused for future requests, rather than opening a new connection each time. This improves performance and reduces overhead.",
      },
      {
        q: "What is optimistic vs pessimistic locking?",
        a: "Optimistic locking assumes conflicts are rare and checks for conflicts only at commit time. Pessimistic locking assumes conflicts are likely and locks resources immediately when accessed, preventing other transactions from modifying them.",
      },
      {
        q: "What is database partitioning?",
        a: "Partitioning divides a large table into smaller, more manageable pieces while keeping them in the same database instance. Types include horizontal (rows), vertical (columns), and functional partitioning.",
      },
      {
        q: "Explain the N+1 query problem and how to solve it.",
        a: "The N+1 problem occurs when you execute one query to fetch N records, then N additional queries to fetch related data for each record. Solution: Use JOIN queries, eager loading, or batch fetching to retrieve all needed data in fewer queries.",
      },
      {
        q: "What is a deadlock in databases?",
        a: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency that prevents any of them from proceeding. Database systems typically detect and resolve deadlocks by rolling back one transaction.",
      },
      {
        q: "What are database isolation levels?",
        a: "Isolation levels define how transaction integrity is visible to other users/systems. Levels: READ UNCOMMITTED (lowest isolation), READ COMMITTED, REPEATABLE READ, SERIALIZABLE (highest isolation). Higher levels prevent more concurrency issues but reduce performance.",
      },
    ],
  },
};

// Function to render questions
function renderQuestions() {
  const content = document.getElementById("content");
  const topic = questions.database;

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
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="db-easy-${index}">
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
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="db-intermediate-${index}">
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
        <div class="question-card" onclick="toggleAnswer(this)" data-question-id="db-hard-${index}">
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

  if (!progressData.database) {
    progressData.database = [];
  }

  if (!progressData.database.includes(questionId)) {
    progressData.database.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressData = getProgress();
  const totalAnswered = progressData.database
    ? progressData.database.length
    : 0;
  const totalQuestions = 32;
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
