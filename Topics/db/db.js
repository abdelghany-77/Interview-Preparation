const questions = {
  database: {
    easy: [
      {
        q: "What is the difference between a primary key and a foreign key?",
        a: "A primary key uniquely identifies each record in a table. A foreign key is a field (or collection of fields) in one table that refers to the primary key in another table. It's used to establish a relationship between two tables.",
        example: `CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);`,
      },
      {
        q: "Can you explain what normalization is and why it is important?",
        a: "Normalization is the process of organizing data to minimize redundancy and dependency. It's important because it makes databases more efficient and ensures data integrity.",
      },
      {
        q: "What is the difference between DELETE, TRUNCATE, and DROP?",
        a: "DELETE: removes rows (can be filtered), can be rolled back. TRUNCATE: removes all rows, cannot be rolled back. DROP: removes the entire table from the DB.",
        example: `-- DELETE (removes specific rows, can be rolled back)
DELETE FROM Users WHERE age < 18;

-- TRUNCATE (removes all rows, cannot be rolled back)
TRUNCATE TABLE Users;

-- DROP (removes entire table structure)
DROP TABLE Users;`,
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
        example: `-- CREATE
INSERT INTO Users (name, email) VALUES ('John', 'john@example.com');

-- READ
SELECT * FROM Users WHERE name = 'John';

-- UPDATE
UPDATE Users SET email = 'newemail@example.com' WHERE name = 'John';

-- DELETE
DELETE FROM Users WHERE name = 'John';`,
      },
    ],
    intermediate: [
      {
        q: "What are ACID properties in a database system?",
        a: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity: Ensures that all operations within a transaction are completed successfully; otherwise, the transaction is aborted. Consistency: Ensures that a transaction can only bring the database from one valid state to another. Isolation: Ensures that concurrent transactions result in a system state as if transactions were executed serially. Durability: Ensures that once a transaction has been committed, it will remain so, even in the event of a system failure.",
        example: `-- ATOMICITY: All or nothing
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;
-- If either fails, both rollback
COMMIT; -- Or ROLLBACK if error

-- CONSISTENCY: Rules always enforced
CREATE TABLE accounts (
  balance DECIMAL(10,2) CHECK (balance >= 0) -- Can't go negative
);

-- ISOLATION: Transactions don't interfere
-- Transaction 1:
START TRANSACTION;
SELECT balance FROM accounts WHERE user_id = 1; -- Reads 1000
UPDATE accounts SET balance = 900 WHERE user_id = 1;
-- Transaction 2 won't see this until committed
COMMIT;

-- DURABILITY: Changes persist after commit
START TRANSACTION;
INSERT INTO users VALUES (1, 'John');
COMMIT; -- Data survives even if server crashes after this

-- Isolation levels (from weakest to strongest):
-- READ UNCOMMITTED: Can read uncommitted data (dirty reads)
-- READ COMMITTED: Only committed data visible (prevents dirty reads)
-- REPEATABLE READ: Same read gives same result (prevents non-repeatable reads)
-- SERIALIZABLE: Full isolation (prevents phantom reads)

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`,
      },
      {
        q: "What is an index? What are the pros and cons?",
        a: "An index is a data structure (like a lookup table) that improves the speed of data retrieval operations on a database table. Pros: Faster SELECT queries. Cons: Slower INSERT/UPDATE/DELETE because every change must also update the index, which adds overhead.",
        example: `-- Create index on frequently queried column
CREATE INDEX idx_email ON users(email);

-- Query uses index (fast lookup)
SELECT * FROM users WHERE email = 'john@example.com';
-- Without index: O(n) table scan
-- With index: O(log n) B-tree lookup

-- Composite index (multiple columns)
CREATE INDEX idx_name_age ON users(last_name, first_name);

-- Query benefits from composite index
SELECT * FROM users WHERE last_name = 'Smith' AND first_name = 'John';

-- Unique index (enforces uniqueness)
CREATE UNIQUE INDEX idx_username ON users(username);

-- View existing indexes
SHOW INDEXES FROM users;

-- Drop index
DROP INDEX idx_email ON users;

-- Performance comparison:
-- Without index:
-- SELECT * FROM users WHERE email = 'test@example.com';
-- Rows examined: 1,000,000 (full table scan)
-- Time: 2.5s

-- With index:
-- CREATE INDEX idx_email ON users(email);
-- SELECT * FROM users WHERE email = 'test@example.com';
-- Rows examined: 1 (index lookup)
-- Time: 0.001s

-- Cost: Every INSERT/UPDATE/DELETE must update index
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
-- Updates both table AND index (slower)`,
      },
      {
        q: "Can indexes slow down performance?",
        a: "Yes — they make reads faster but slow down inserts/updates/deletes due to extra maintenance.",
      },
      {
        q: "What is the difference between a clustered and a non-clustered index?",
        a: "Clustered index sorts data physically; only one per table. Non-clustered stores pointers to actual rows; multiple allowed.",
        example: `-- CLUSTERED INDEX:
-- Physical order of data matches index order
-- Only ONE per table (usually on primary key)
-- Faster for range queries

CREATE TABLE users (
  id INT PRIMARY KEY, -- Automatically creates clustered index
  name VARCHAR(100),
  email VARCHAR(100)
);

-- Data stored physically in order of id:
-- Row 1: id=1, name='Alice'
-- Row 2: id=2, name='Bob'
-- Row 3: id=3, name='Charlie'

SELECT * FROM users WHERE id BETWEEN 10 AND 20;
-- Fast: Data is physically contiguous

-- NON-CLUSTERED INDEX:
-- Separate structure with pointers to actual rows
-- Can have MULTIPLE per table
-- Index stores: [indexed_value -> row_pointer]

CREATE INDEX idx_email ON users(email);

-- Index structure (simplified):
-- 'alice@example.com' -> pointer to row with id=1
-- 'bob@example.com' -> pointer to row with id=2

SELECT * FROM users WHERE email = 'alice@example.com';
-- 1. Lookup in index (find pointer)
-- 2. Follow pointer to actual row
-- Slightly slower than clustered for single lookups

-- COMPOSITE INDEX:
CREATE INDEX idx_name_age ON users(name, age);
-- Efficient for: WHERE name = 'John' AND age = 25
-- Less efficient for: WHERE age = 25 (doesn't use index)

-- Covering index (includes all needed columns)
CREATE INDEX idx_covering ON users(email) INCLUDE (name, age);
SELECT name, age FROM users WHERE email = 'test@example.com';
-- All data in index - no need to access table!`,
      },
      {
        q: "Difference between relational and non-relational databases?",
        a: "Relational databases (SQL) use structured tables with predefined schemas, support complex joins, and follow ACID properties. Non-relational databases (NoSQL) use flexible schemas (documents, key-value, graphs), are horizontally scalable, and prioritize performance and flexibility over strict consistency.",
      },
      {
        q: "What are common SQL queries?",
        a: "SELECT: retrieves data from tables. INSERT: adds new records. UPDATE: modifies existing records. DELETE: removes records. JOIN: combines data from multiple tables. WHERE: filters results. GROUP BY: groups rows. ORDER BY: sorts results.",
        example: `-- SELECT with WHERE and ORDER BY
SELECT name, email FROM Users WHERE age > 18 ORDER BY name;

-- INSERT
INSERT INTO Users (name, email) VALUES ('John', 'john@email.com');

-- UPDATE
UPDATE Users SET email = 'new@email.com' WHERE user_id = 1;

-- DELETE
DELETE FROM Users WHERE user_id = 1;`,
      },
      {
        q: "What are common NoSQL queries (MongoDB example)?",
        a: "find(): retrieves documents. insertOne()/insertMany(): adds documents. updateOne()/updateMany(): modifies documents. deleteOne()/deleteMany(): removes documents. aggregate(): performs complex data transformations and analytics.",
      },
      {
        q: "What is a JOIN in SQL?",
        a: "JOIN combines rows from two or more tables based on a related column. Types: INNER JOIN (matching records), LEFT JOIN (all from left + matches), RIGHT JOIN (all from right + matches), FULL JOIN (all records).",
        example: `-- INNER JOIN
SELECT Users.name, Orders.order_date
FROM Users
INNER JOIN Orders ON Users.user_id = Orders.user_id;

-- LEFT JOIN
SELECT Users.name, Orders.order_date
FROM Users
LEFT JOIN Orders ON Users.user_id = Orders.user_id;`,
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
        <div class="question-card expanded" data-question-id="db-easy-${index}">
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
        <div class="question-card expanded" data-question-id="db-intermediate-${index}">
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

  // Render Hard Questions
  if (topic.hard && topic.hard.length > 0) {
    html += '<div class="difficulty-section hard">';
    html += '<div class="difficulty-header">';
    html += '<span class="difficulty-icon">🔴</span>';
    html += "<h2>Hard Questions</h2>";
    html += "</div>";

    topic.hard.forEach((item, index) => {
      html += `
        <div class="question-card expanded" data-question-id="db-hard-${index}">
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
