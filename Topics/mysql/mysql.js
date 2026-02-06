const questions = {
  mysql: {
    easy: [
      {
        q: "What is SQL?",
        a: "SQL stands for Structured Query Language. It's a standardized programming language specifically designed for managing and manipulating relational databases. We use SQL to perform operations like querying data, inserting records, updating existing data, deleting records, and creating database structures like tables and views. It's the backbone of database communication in applications.",
      },
      {
        q: "What is a database?",
        a: "A database is an organized collection of structured data stored electronically in a computer system. It's designed to efficiently store, organize, retrieve, and manage large amounts of information. Databases allow multiple users to access data simultaneously while maintaining data integrity and security through ACID properties and access controls.",
      },
      {
        q: "What is a primary key?",
        a: "A primary key is a column or set of columns that uniquely identifies each row in a table. It has two important characteristics: it must contain unique values (no duplicates) and it cannot contain NULL values. The primary key enforces entity integrity, ensuring that each record in the table can be uniquely identified. For example, in a Users table, 'user_id' would typically be the primary key.",
        example: `CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  email VARCHAR(100),
  name VARCHAR(50)
);

-- Composite Primary Key
CREATE TABLE OrderItems (
  order_id INT,
  product_id INT,
  quantity INT,
  PRIMARY KEY (order_id, product_id)
);`,
      },
      {
        q: "What is a foreign key?",
        a: "A foreign key is a column or set of columns in one table that references the primary key of another table. It establishes and enforces a link between the data in two tables, ensuring referential integrity. This means you can't have a value in the foreign key column that doesn't exist in the referenced primary key column. Foreign keys are essential for maintaining relationships in relational databases.",
        example: `CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  order_date DATE,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);`,
      },
      {
        q: "What is the difference between a primary key and a unique key?",
        a: "While both ensure uniqueness, they have key differences: A primary key uniquely identifies each record and cannot be NULL - a table can have only ONE primary key. A unique key also ensures uniqueness but CAN accept NULL values (usually one NULL), and a table can have MULTIPLE unique keys. Primary keys are used for identification, while unique keys are used to prevent duplicate values in specific columns like email addresses or phone numbers.",
        example: `CREATE TABLE Users (
  user_id INT PRIMARY KEY,        -- Only one primary key
  email VARCHAR(100) UNIQUE,      -- Can have multiple unique keys
  phone VARCHAR(15) UNIQUE,       -- Another unique key
  ssn VARCHAR(11) UNIQUE          -- Can accept one NULL value
);`,
      },
      {
        q: "What is normalization?",
        a: "Normalization is the systematic process of organizing data in a database to reduce redundancy and improve data integrity. It involves decomposing larger tables into smaller, related tables and establishing relationships between them. The goal is to eliminate data duplication, ensure data dependencies make sense, and make the database more flexible and maintainable. This process follows specific normal forms, each with its own rules.",
        example: `-- Before Normalization (Redundant data)
Orders: order_id, customer_name, customer_email, product_name, price

-- After Normalization (1NF, 2NF, 3NF)
Customers: customer_id, customer_name, customer_email
Products: product_id, product_name, price
Orders: order_id, customer_id, product_id`,
      },
      {
        q: "What are the different types of normalization?",
        a: "Normalization follows progressive normal forms: \n• First Normal Form (1NF): Eliminate repeating groups, ensure atomic values \n• Second Normal Form (2NF): Remove partial dependencies on composite keys \n• Third Normal Form (3NF): Remove transitive dependencies \n• Boyce-Codd Normal Form (BCNF): A stricter version of 3NF \n• Fourth Normal Form (4NF): Remove multi-valued dependencies \n• Fifth Normal Form (5NF/PJNF): Remove join dependencies. \n\nMost applications typically normalize up to 3NF, which provides a good balance between data integrity and query performance.",
      },
      {
        q: "What is a join in SQL?",
        a: "A JOIN is an SQL operation that combines rows from two or more tables based on a related column between them. It's fundamental for retrieving data from multiple tables in a single query. The main types are INNER JOIN (returns matching rows), LEFT JOIN (all rows from left table plus matches), RIGHT JOIN (all rows from right table plus matches), and FULL OUTER JOIN (all rows from both tables).",
        example: `-- INNER JOIN - only matching records
SELECT Orders.order_id, Customers.name
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id;

-- LEFT JOIN - all from left + matches from right
SELECT Customers.name, Orders.order_id
FROM Customers
LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id;`,
      },
      {
        q: "What is the difference between DELETE and TRUNCATE in SQL?",
        a: "DELETE and TRUNCATE both remove data, but differently: \n\nDELETE: Removes specific rows based on a WHERE condition, can be rolled back (transactional), triggers fire, slower as it logs each row deletion, and identity counters are not reset. \n\nTRUNCATE: Removes ALL rows from a table, cannot be rolled back (DDL operation), triggers don't fire, much faster as it deallocates data pages, and resets identity counters to their seed value. Use TRUNCATE when you need to quickly empty a table and don't need transaction support.",
        example: `-- DELETE - Removes specific rows, can rollback
DELETE FROM Users WHERE last_login < '2020-01-01';

-- TRUNCATE - Removes all rows, cannot rollback, faster
TRUNCATE TABLE TempLogs;

-- DELETE logs each row, TRUNCATE deallocates pages`,
      },
      {
        q: "What is the difference between UNION and UNION ALL?",
        a: "Both combine result sets from multiple SELECT statements vertically, but UNION removes duplicate rows while UNION ALL includes all rows including duplicates. UNION is slower because it performs a DISTINCT operation to eliminate duplicates, whereas UNION ALL is faster as it simply appends all results. Use UNION when you need unique results, and UNION ALL when you know there are no duplicates or duplicates are acceptable.",
        example: `-- UNION - Removes duplicates (slower)
SELECT name FROM Customers
UNION
SELECT name FROM Suppliers;

-- UNION ALL - Keeps all duplicates (faster)
SELECT name FROM Customers
UNION ALL
SELECT name FROM Suppliers;`,
      },
      {
        q: "What is the difference between the HAVING clause and the WHERE clause?",
        a: "WHERE and HAVING both filter data, but at different stages: \n\nWHERE filters individual rows BEFORE grouping occurs. It operates on raw data and cannot use aggregate functions. \n\nHAVING filters grouped results AFTER the GROUP BY clause. It works on aggregated data and CAN use aggregate functions like COUNT, SUM, AVG. \n\nThink of it as: WHERE filters rows, HAVING filters groups.",
        example: `-- WHERE - filters before grouping
SELECT department, COUNT(*) as emp_count
FROM Employees
WHERE salary > 50000  -- Filter individual rows first
GROUP BY department;

-- HAVING - filters after grouping
SELECT department, AVG(salary) as avg_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) > 60000;  -- Filter grouped results

-- Both together
SELECT department, COUNT(*) as count
FROM Employees
WHERE status = 'active'      -- Filter rows first
GROUP BY department
HAVING COUNT(*) > 5;         -- Then filter groups`,
      },
      {
        q: "What is a transaction in SQL?",
        a: "A transaction is a logical unit of work consisting of one or more SQL operations that are executed as a single unit. Transactions follow the ACID properties to ensure data consistency and integrity. They either complete entirely (COMMIT) or rollback completely if any error occurs (ROLLBACK), ensuring the database never remains in an inconsistent state. Transactions are critical for maintaining data integrity in concurrent environments.",
        example: `-- Transaction example: Transfer money
START TRANSACTION;

UPDATE Accounts 
SET balance = balance - 100 
WHERE account_id = 1;

UPDATE Accounts 
SET balance = balance + 100 
WHERE account_id = 2;

-- If both succeed
COMMIT;

-- If any fails
ROLLBACK;`,
      },
      {
        q: "What is the difference between a clustered and a non-clustered index?",
        a: "Clustered Index: Determines the physical order of data storage in the table. The table data is sorted and stored based on the clustered index key. A table can have only ONE clustered index, typically on the primary key. Searching is faster as data is physically ordered. \n\nNon-Clustered Index: Creates a separate structure with pointers to the actual data. Doesn't affect physical data order. A table can have MULTIPLE non-clustered indexes. It stores the index key and a pointer to the data row. Useful for frequently searched columns.",
        example: `-- Clustered Index (only one per table)
CREATE CLUSTERED INDEX idx_user_id 
ON Users(user_id);

-- Non-Clustered Index (multiple allowed)
CREATE NONCLUSTERED INDEX idx_email 
ON Users(email);

CREATE NONCLUSTERED INDEX idx_lastname 
ON Users(last_name);

-- Clustered: Physical order = Index order
-- Non-Clustered: Separate structure with pointers`,
      },
      {
        q: "What is ACID in the context of database transactions?",
        a: "ACID is a set of four properties that guarantee reliable database transaction processing: \n\n• Atomicity: All operations in a transaction succeed or all fail - no partial completion. It's 'all or nothing'. \n\n• Consistency: Transaction brings the database from one valid state to another, maintaining all defined rules and constraints. \n\n• Isolation: Concurrent transactions don't interfere with each other. Each transaction executes as if it's the only one. \n\n• Durability: Once committed, changes are permanent and survive system failures, crashes, or power outages. \n\nThese properties ensure data reliability and integrity in multi-user database environments.",
        example: `-- Atomicity Example
BEGIN TRANSACTION;
  UPDATE Inventory SET quantity = quantity - 1 WHERE product_id = 10;
  INSERT INTO Orders VALUES (101, 10, 1);
COMMIT;  -- Both succeed or both fail

-- Isolation Levels
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Prevents dirty reads

-- Durability
-- Once COMMIT is executed, data is written to disk
-- and survives system crashes`,
      },
      {
        q: "What is a deadlock?",
        a: "A deadlock is a situation where two or more transactions are waiting indefinitely for each other to release locks on resources, creating a circular dependency. For example, Transaction A holds Lock 1 and waits for Lock 2, while Transaction B holds Lock 2 and waits for Lock 1. Neither can proceed, causing the system to hang. Database systems typically detect deadlocks and automatically kill one transaction (the 'victim') to break the deadlock, allowing the other to complete.",
        example: `-- Deadlock Scenario
-- Transaction 1:
BEGIN TRANSACTION;
UPDATE TableA SET value = 1 WHERE id = 1;  -- Locks TableA
-- waiting...
UPDATE TableB SET value = 2 WHERE id = 1;  -- Needs lock on TableB
COMMIT;

-- Transaction 2 (running simultaneously):
BEGIN TRANSACTION;
UPDATE TableB SET value = 3 WHERE id = 1;  -- Locks TableB
-- waiting...
UPDATE TableA SET value = 4 WHERE id = 1;  -- Needs lock on TableA
COMMIT;

-- Deadlock! Both waiting for each other's locks`,
      },
      {
        q: "What is the difference between a database and a schema?",
        a: "A database is the highest-level container that holds all database objects and represents a complete data storage system. It contains multiple schemas, tables, views, procedures, etc. \n\nA schema is a logical container within a database that organizes and groups related objects like tables, views, and procedures. It acts as a namespace and defines ownership and access boundaries. For example, in MySQL, database and schema are often used interchangeably, but in SQL Server or PostgreSQL, a database can contain multiple schemas like 'sales_schema' and 'hr_schema'.",
        example: `-- In PostgreSQL/SQL Server
CREATE DATABASE CompanyDB;

CREATE SCHEMA sales;
CREATE SCHEMA hr;

-- Tables in different schemas
CREATE TABLE sales.customers (...);
CREATE TABLE hr.employees (...);

-- In MySQL (database = schema)
CREATE DATABASE sales_db;
USE sales_db;
CREATE TABLE customers (...);`,
      },
      {
        q: "What is the difference between a temporary table and a table variable?",
        a: "Temporary Table: Created with CREATE TABLE or SELECT INTO, exists for the duration of a session or transaction, stored in tempdb, can have indexes and constraints, supports transactions, and can be explicitly dropped or automatically removed when session ends. Prefixed with # (local) or ## (global). \n\nTable Variable: Declared with DECLARE @tableName TABLE, exists only within the scope of a batch, function, or stored procedure, limited in scope, automatically deallocated, has limited indexing support, and generally faster for small datasets. Used for temporary data manipulation within procedures.",
        example: `-- Temporary Table (SQL Server)
CREATE TABLE #TempOrders (
  order_id INT,
  total DECIMAL(10,2)
);
INSERT INTO #TempOrders VALUES (1, 100.50);
DROP TABLE #TempOrders;  -- Explicit drop

-- Table Variable
DECLARE @OrderVar TABLE (
  order_id INT,
  total DECIMAL(10,2)
);
INSERT INTO @OrderVar VALUES (1, 100.50);
-- Automatically deallocated at end of scope`,
      },
      {
        q: "What is the purpose of the GROUP BY clause?",
        a: "The GROUP BY clause groups rows that have the same values in specified columns into summary rows. It's primarily used with aggregate functions (COUNT, SUM, AVG, MAX, MIN) to perform calculations on each group of rows. For example, you can group sales by region to calculate total sales per region, or group employees by department to count employees in each department. Each unique value combination in the GROUP BY columns creates one output row.",
        example: `-- Count employees per department
SELECT department, COUNT(*) as employee_count
FROM Employees
GROUP BY department;

-- Multiple columns
SELECT department, job_title, AVG(salary) as avg_salary
FROM Employees
GROUP BY department, job_title;

-- With HAVING to filter groups
SELECT product_id, SUM(quantity) as total_sold
FROM Sales
GROUP BY product_id
HAVING SUM(quantity) > 100;`,
      },
      {
        q: "What is the difference between CHAR and VARCHAR data types?",
        a: "CHAR is a fixed-length character data type. If you define CHAR(10), it always uses 10 bytes of storage, padding with spaces if the value is shorter. It's faster for fixed-length data but wastes space. \n\nVARCHAR is variable-length. VARCHAR(10) uses only as much storage as needed (plus 1-2 bytes for length). It's more space-efficient but slightly slower due to variable storage. \n\nUse CHAR for fixed-length data like country codes (US, UK), and VARCHAR for variable-length data like names, emails, or descriptions.",
        example: `-- CHAR - Fixed length
CREATE TABLE Codes (
  country_code CHAR(2),      -- Always 2 bytes: 'US', 'UK'
  state_code CHAR(2)         -- Always 2 bytes
);

-- VARCHAR - Variable length
CREATE TABLE Users (
  name VARCHAR(50),          -- Uses actual length + 1-2 bytes
  email VARCHAR(100),        -- More flexible
  description VARCHAR(500)
);

-- Storage comparison
CHAR(10) stores 'Hi' as 'Hi        ' (10 bytes)
VARCHAR(10) stores 'Hi' as 'Hi' (2 bytes + overhead)`,
      },
      {
        q: "What is a stored procedure?",
        a: "A stored procedure is a pre-compiled collection of SQL statements stored in the database that can be executed repeatedly. It's like a function in programming - you can pass parameters, perform complex operations, and return results. Benefits include code reusability, improved performance (compiled once), better security (users can execute without direct table access), reduced network traffic, and centralized business logic. Stored procedures are essential for complex database operations and maintaining consistent business rules.",
        example: `-- Create stored procedure
DELIMITER //
CREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(50))
BEGIN
  SELECT employee_id, name, salary
  FROM Employees
  WHERE department = dept_name
  ORDER BY salary DESC;
END //
DELIMITER ;

-- Execute procedure
CALL GetEmployeesByDept('Sales');

-- With output parameters
CREATE PROCEDURE GetEmployeeCount(
  IN dept_name VARCHAR(50),
  OUT emp_count INT
)
BEGIN
  SELECT COUNT(*) INTO emp_count
  FROM Employees
  WHERE department = dept_name;
END;`,
      },
      {
        q: "What is a subquery?",
        a: "A subquery (also called an inner query or nested query) is a query embedded within another SQL query. It's enclosed in parentheses and can be used in SELECT, FROM, WHERE, or HAVING clauses. Subqueries can return a single value, a single row, multiple rows, or even a table. They're useful for complex filtering, calculations, and breaking down complex problems into simpler steps. The inner query executes first, and its result is used by the outer query.",
        example: `-- Subquery in WHERE clause
SELECT name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- Subquery in FROM clause (derived table)
SELECT dept, avg_salary
FROM (
  SELECT department as dept, AVG(salary) as avg_salary
  FROM Employees
  GROUP BY department
) AS dept_avg
WHERE avg_salary > 50000;

-- Subquery with IN
SELECT name
FROM Employees
WHERE department_id IN (
  SELECT department_id 
  FROM Departments 
  WHERE location = 'New York'
);`,
      },
      {
        q: "What is a view?",
        a: "A view is a virtual table based on the result of a SELECT query. It doesn't store data physically but provides a logical representation of data from one or more tables. Views act as saved queries that can be queried like regular tables. Benefits include security (hide sensitive columns), simplification (present complex joins as simple tables), data abstraction, and consistency. Views are automatically updated when the underlying table data changes.",
        example: `-- Create view
CREATE VIEW EmployeeView AS
SELECT employee_id, name, department, salary
FROM Employees
WHERE status = 'active';

-- Query the view like a table
SELECT * FROM EmployeeView WHERE department = 'Sales';

-- Complex view with joins
CREATE VIEW OrderDetails AS
SELECT o.order_id, c.customer_name, p.product_name, o.quantity
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
JOIN Products p ON o.product_id = p.product_id;

-- Update through view (if updatable)
UPDATE EmployeeView SET salary = 60000 WHERE employee_id = 101;`,
      },
      {
        q: "What is the difference between a cross join and an inner join?",
        a: "CROSS JOIN (Cartesian Product): Combines every row from the first table with every row from the second table. If Table A has 10 rows and Table B has 5 rows, the result will have 50 rows (10 × 5). No join condition is specified. Rarely used in practice but useful for generating combinations. \n\nINNER JOIN: Returns only rows where there's a match based on the join condition. It filters the cartesian product to show only related records. Most commonly used join type for retrieving related data from multiple tables.",
        example: `-- CROSS JOIN - All combinations (Cartesian product)
SELECT Products.name, Colors.color_name
FROM Products
CROSS JOIN Colors;
-- If 10 products × 5 colors = 50 rows

-- INNER JOIN - Only matching rows
SELECT Customers.name, Orders.order_id
FROM Customers
INNER JOIN Orders ON Customers.customer_id = Orders.customer_id;
-- Only customers who have orders

-- CROSS JOIN is equivalent to:
SELECT * FROM TableA, TableB;`,
      },
      {
        q: "What is the purpose of the COMMIT statement?",
        a: "The COMMIT statement permanently saves all changes made during the current transaction to the database. Once committed, the changes become visible to other users and cannot be undone with ROLLBACK. It marks the successful completion of a transaction, releases locks held during the transaction, and ensures durability - the changes will survive system failures. COMMIT is essential for finalizing multi-step operations and maintaining data consistency.",
        example: `-- Transaction with COMMIT
START TRANSACTION;

INSERT INTO Accounts (account_id, balance) VALUES (101, 1000);
UPDATE Accounts SET balance = balance - 100 WHERE account_id = 101;
INSERT INTO Transactions (account_id, amount) VALUES (101, -100);

-- All operations successful, save permanently
COMMIT;

-- Auto-commit mode (each statement commits automatically)
SET autocommit = 1;
INSERT INTO Users VALUES (1, 'John');  -- Automatically committed`,
      },
      {
        q: "What is the purpose of the ROLLBACK statement?",
        a: "The ROLLBACK statement undoes all changes made during the current transaction, reverting the database to its state before the transaction began. It's used when an error occurs or when you need to cancel a transaction. ROLLBACK releases all locks and ensures that no partial changes are saved, maintaining data integrity. It's crucial for error handling and ensuring transactions follow the 'all or nothing' principle of atomicity.",
        example: `-- Transaction with error handling
START TRANSACTION;

UPDATE Accounts SET balance = balance - 500 WHERE account_id = 1;

-- Check if balance is sufficient
IF (SELECT balance FROM Accounts WHERE account_id = 1) < 0 THEN
  ROLLBACK;  -- Undo the withdrawal
  SELECT 'Insufficient funds' AS message;
ELSE
  UPDATE Accounts SET balance = balance + 500 WHERE account_id = 2;
  COMMIT;    -- Save the transfer
END IF;

-- Explicit rollback on error
START TRANSACTION;
-- operations...
-- Error occurred!
ROLLBACK;  -- Undo everything`,
      },
      {
        q: "What is the purpose of the NULL value in SQL?",
        a: "NULL represents the absence of a value or an unknown value in SQL. It's distinctly different from zero (0), empty string (''), or false. NULL means 'no data' or 'value not applicable'. You cannot use regular comparison operators (=, !=) with NULL; instead, you must use IS NULL or IS NOT NULL. NULL values are ignored in aggregate functions (except COUNT(*)), and any arithmetic operation with NULL returns NULL. Understanding NULL handling is crucial for data integrity.",
        example: `-- Checking for NULL (correct way)
SELECT * FROM Employees WHERE phone IS NULL;
SELECT * FROM Employees WHERE phone IS NOT NULL;

-- This won't work (incorrect)
SELECT * FROM Employees WHERE phone = NULL;  -- Always false!

-- NULL in operations
SELECT 10 + NULL;        -- Returns NULL
SELECT NULL = NULL;      -- Returns NULL (not true!)

-- COALESCE to handle NULL
SELECT name, COALESCE(phone, 'Not Provided') as phone
FROM Employees;

-- NULL in aggregate functions
SELECT AVG(salary) FROM Employees;  -- Ignores NULL salaries`,
      },
      {
        q: "What is the difference between a view and a materialized view?",
        a: "Regular View: A virtual table with no physical data storage. It executes the underlying query every time it's accessed, always showing current data. Fast to create/update but can be slow to query if the underlying query is complex. \n\nMaterialized View: A physical copy of the query result stored on disk. The data is pre-computed and cached, making queries very fast. However, the data can become stale and needs to be refreshed periodically (manually or scheduled). It trades data freshness for query performance. Use materialized views for complex, resource-intensive queries on data that doesn't change frequently.",
        example: `-- Regular View (no physical storage)
CREATE VIEW ActiveEmployees AS
SELECT * FROM Employees WHERE status = 'active';
-- Query executes every time you SELECT from this view

-- Materialized View (PostgreSQL syntax)
CREATE MATERIALIZED VIEW SalesSummary AS
SELECT 
  product_id, 
  SUM(quantity) as total_sold,
  AVG(price) as avg_price
FROM Sales
GROUP BY product_id;

-- Query is fast (data already computed)
SELECT * FROM SalesSummary;

-- Refresh when data changes
REFRESH MATERIALIZED VIEW SalesSummary;`,
      },
      {
        q: "What is a correlated subquery?",
        a: "A correlated subquery is a subquery that references columns from the outer query. Unlike regular subqueries that execute once, a correlated subquery executes once for EACH row processed by the outer query. The inner query depends on the outer query for its values. While powerful for complex filtering, correlated subqueries can be slower than joins for large datasets because they run repeatedly. They're useful when you need row-by-row comparison with aggregated or filtered data.",
        example: `-- Find employees earning more than their department average
SELECT name, salary, department
FROM Employees e1
WHERE salary > (
  SELECT AVG(salary)
  FROM Employees e2
  WHERE e2.department = e1.department  -- References outer query
);

-- Find products with above-average prices in their category
SELECT product_name, price, category
FROM Products p1
WHERE price > (
  SELECT AVG(price)
  FROM Products p2
  WHERE p2.category = p1.category  -- Correlated reference
);

-- Find customers with more than 3 orders
SELECT customer_name
FROM Customers c
WHERE (
  SELECT COUNT(*)
  FROM Orders o
  WHERE o.customer_id = c.customer_id  -- Correlated
) > 3;`,
      },
      {
        q: "What is the purpose of the DISTINCT keyword?",
        a: "The DISTINCT keyword eliminates duplicate rows from the query result set, returning only unique values. It works on the entire row (all selected columns) or specific columns. DISTINCT is useful when you want to see unique values, such as unique customer names, distinct product categories, or unique email addresses. Note that DISTINCT can slow down queries on large datasets as it requires sorting or hashing to identify duplicates. It's often used in data analysis and reporting.",
        example: `-- Get unique departments
SELECT DISTINCT department FROM Employees;
-- Returns: Sales, Marketing, IT (no duplicates)

-- DISTINCT on multiple columns
SELECT DISTINCT department, job_title FROM Employees;
-- Returns unique combinations

-- Count unique values
SELECT COUNT(DISTINCT customer_id) as unique_customers
FROM Orders;

-- Without DISTINCT (shows duplicates)
SELECT department FROM Employees;
-- Returns: Sales, Sales, Marketing, IT, Sales...

-- DISTINCT with other clauses
SELECT DISTINCT city FROM Customers
WHERE country = 'USA'
ORDER BY city;`,
      },
      {
        q: "What is the difference between the IN and EXISTS operators?",
        a: "IN Operator: Checks if a value matches any value in a list or subquery result. It evaluates the subquery completely first, then checks membership. Better for small result sets. Returns the full result set from the subquery. \n\nEXISTS Operator: Checks for the existence of rows returned by a subquery. Returns true as soon as it finds the first matching row (short-circuits). Generally faster for large datasets because it stops at the first match. Used with correlated subqueries. \n\nRule of thumb: Use EXISTS for large datasets and correlated subqueries; use IN for small, static lists.",
        example: `-- IN - checks if value is in the list
SELECT name FROM Employees
WHERE department_id IN (1, 2, 3);

-- IN with subquery (evaluates subquery fully)
SELECT name FROM Employees
WHERE department_id IN (
  SELECT department_id FROM Departments WHERE location = 'NYC'
);

-- EXISTS - checks if any rows exist (stops at first match)
SELECT name FROM Customers c
WHERE EXISTS (
  SELECT 1 FROM Orders o
  WHERE o.customer_id = c.customer_id
);

-- NOT EXISTS
SELECT name FROM Customers c
WHERE NOT EXISTS (
  SELECT 1 FROM Orders o
  WHERE o.customer_id = c.customer_id
);
-- Customers with no orders

-- Performance difference:
-- EXISTS: Stops at first match (faster for large sets)
-- IN: Evaluates entire subquery (better for small sets)`,
      },
    ],
    medium: [
      {
        q: "What is the purpose of the TRIGGER statement?",
        a: "A trigger is a special type of stored procedure that automatically executes (fires) in response to specific events on a table or view. Triggers are defined for INSERT, UPDATE, or DELETE operations and can execute BEFORE or AFTER the event. They're commonly used for: enforcing complex business rules, maintaining audit trails, enforcing referential integrity, automatically updating derived columns, and logging changes. Triggers help maintain data consistency and automate database tasks without application-level code.",
        example: `-- Audit trigger - log all changes
CREATE TRIGGER employee_audit_trigger
AFTER UPDATE ON Employees
FOR EACH ROW
BEGIN
  INSERT INTO EmployeeAudit (employee_id, old_salary, new_salary, changed_at)
  VALUES (NEW.employee_id, OLD.salary, NEW.salary, NOW());
END;

-- BEFORE INSERT trigger - validate data
CREATE TRIGGER validate_salary
BEFORE INSERT ON Employees
FOR EACH ROW
BEGIN
  IF NEW.salary < 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Salary cannot be negative';
  END IF;
END;

-- Auto-update timestamp
CREATE TRIGGER update_timestamp
BEFORE UPDATE ON Products
FOR EACH ROW
SET NEW.updated_at = NOW();`,
      },
      {
        q: "What is the difference between a unique constraint and a unique index?",
        a: "Unique Constraint: A logical constraint that enforces uniqueness at the table level. It's part of the table definition and clearly expresses business rules. When you create a unique constraint, the database automatically creates a unique index to enforce it. Prevents duplicate values and can be referenced by foreign keys. \n\nUnique Index: A physical database structure that enforces uniqueness and improves query performance. Can exist independently of constraints. Primarily for performance optimization but also prevents duplicates. \n\nIn practice, they're very similar - creating a unique constraint usually creates a unique index behind the scenes. The main difference is conceptual: constraints express business rules, indexes optimize performance.",
        example: `-- Unique Constraint (logical rule)
CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  email VARCHAR(100),
  CONSTRAINT uk_email UNIQUE (email)  -- Can name it
);

-- Unique Index (physical structure)
CREATE UNIQUE INDEX idx_username ON Users(username);

-- Composite unique constraint
CREATE TABLE Orders (
  order_id INT,
  customer_id INT,
  product_id INT,
  CONSTRAINT uk_customer_product UNIQUE (customer_id, product_id)
);

-- Both prevent duplicates:
-- INSERT INTO Users VALUES (1, 'test@test.com');
-- INSERT INTO Users VALUES (2, 'test@test.com'); -- Error!`,
      },
      {
        q: "What is the purpose of the TOP or LIMIT clause?",
        a: "The TOP (SQL Server) or LIMIT (MySQL, PostgreSQL) clause restricts the number of rows returned by a query. It's essential for pagination, getting top/bottom N results, sampling data, and improving performance by limiting result sets. Often combined with ORDER BY to get the highest/lowest values (top salaries, most recent orders, etc.). LIMIT also supports OFFSET for pagination, allowing you to skip rows and retrieve the next batch.",
        example: `-- MySQL LIMIT - Get first 10 rows
SELECT * FROM Employees
ORDER BY salary DESC
LIMIT 10;

-- Pagination with LIMIT and OFFSET
SELECT * FROM Products
ORDER BY product_id
LIMIT 10 OFFSET 20;  -- Skip first 20, get next 10 (page 3)

-- SQL Server TOP
SELECT TOP 5 * FROM Orders
ORDER BY order_date DESC;

-- Get top 10% of records
SELECT TOP 10 PERCENT * FROM Employees
ORDER BY salary DESC;

-- LIMIT with variable
SET @page_size = 10;
SET @page_number = 2;
SELECT * FROM Users
LIMIT @page_size OFFSET (@page_number - 1) * @page_size;`,
      },
      {
        q: "What is the difference between the UNION and JOIN operators?",
        a: "UNION: Combines result sets from multiple SELECT statements VERTICALLY (stacking rows). All SELECT statements must have the same number of columns with compatible data types. Creates a single result set with more rows. Used to combine similar data from different sources. \n\nJOIN: Combines data from multiple tables HORIZONTALLY (adding columns). Matches rows based on related columns. Creates a wider result set with columns from multiple tables. Used to retrieve related data across tables. \n\nThink of it as: UNION adds more rows, JOIN adds more columns.",
        example: `-- UNION - Combines rows vertically
SELECT name, 'Customer' as type FROM Customers
UNION
SELECT name, 'Supplier' as type FROM Suppliers;
-- Result: All names from both tables in one column

-- JOIN - Combines columns horizontally
SELECT c.name, o.order_id, o.total
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id;
-- Result: Customer info + their order info side by side

-- Visual difference:
-- UNION:        JOIN:
-- Name  Type    Name    OrderID  Total
-- John  Cust    John    101      $100
-- Sara  Cust    Sara    102      $200
-- Mike  Supp`,
      },
      {
        q: "What is a data warehouse?",
        a: "A data warehouse is a large, centralized repository designed specifically for analytical processing and business intelligence. It consolidates data from multiple operational sources (databases, CRM, ERP systems) into a single, consistent format. Unlike transactional databases (OLTP) optimized for frequent updates, data warehouses (OLAP) are optimized for complex queries and analysis. They store historical data, support decision-making, enable trend analysis, and use star/snowflake schemas. Data is ETL'd (Extracted, Transformed, Loaded) from source systems into the warehouse.",
        example: `-- Typical Data Warehouse Structure (Star Schema)

-- Fact Table (center) - Measures/Metrics
CREATE TABLE FactSales (
  sale_id INT PRIMARY KEY,
  date_key INT,
  product_key INT,
  customer_key INT,
  store_key INT,
  quantity INT,
  revenue DECIMAL(10,2),
  profit DECIMAL(10,2)
);

-- Dimension Tables (branches)
CREATE TABLE DimDate (
  date_key INT PRIMARY KEY,
  full_date DATE,
  year INT,
  quarter INT,
  month INT,
  day_name VARCHAR(10)
);

CREATE TABLE DimProduct (
  product_key INT PRIMARY KEY,
  product_name VARCHAR(100),
  category VARCHAR(50),
  subcategory VARCHAR(50)
);

-- Analytical Queries
SELECT 
  d.year, 
  d.quarter,
  p.category,
  SUM(f.revenue) as total_revenue
FROM FactSales f
JOIN DimDate d ON f.date_key = d.date_key
JOIN DimProduct p ON f.product_key = p.product_key
GROUP BY d.year, d.quarter, p.category;`,
      },
      {
        q: "What is the difference between a primary key and a candidate key?",
        a: "Candidate Key: Any column or set of columns that could potentially serve as a unique identifier for a table. A table can have multiple candidate keys - all columns that satisfy uniqueness and minimal properties. Each candidate key is a potential choice for the primary key. \n\nPrimary Key: The chosen candidate key that actually serves as the main unique identifier for the table. A table has only ONE primary key, selected from the available candidate keys. It cannot contain NULL values and is often used in foreign key relationships. \n\nExample: In a Users table, email, username, and SSN might all be candidate keys, but you choose user_id as the primary key.",
        example: `-- Table with multiple candidate keys
CREATE TABLE Employees (
  employee_id INT,           -- Candidate Key 1
  email VARCHAR(100),        -- Candidate Key 2
  ssn VARCHAR(11),           -- Candidate Key 3
  name VARCHAR(100),
  department VARCHAR(50),
  
  PRIMARY KEY (employee_id), -- Chosen as PRIMARY KEY
  UNIQUE (email),            -- Remaining candidate keys as UNIQUE
  UNIQUE (ssn)
);

-- All three can uniquely identify a row:
-- employee_id, email, and ssn are candidate keys
-- employee_id is the PRIMARY KEY (chosen one)
-- email and ssn remain as UNIQUE constraints

-- Only one primary key allowed
-- PRIMARY KEY (employee_id),  -- OK
-- PRIMARY KEY (email),         -- Error! Can't have two`,
      },
      {
        q: "What is the purpose of the GRANT statement?",
        a: "The GRANT statement assigns specific permissions or privileges to database users or roles. It's fundamental for database security and access control. You can grant permissions on different levels: entire database, specific tables, specific columns, or stored procedures. Common privileges include SELECT (read), INSERT, UPDATE, DELETE (modify), CREATE, DROP, ALTER, and EXECUTE. GRANT helps implement the principle of least privilege, ensuring users have only the access they need for their job functions.",
        example: `-- Grant SELECT permission on a table
GRANT SELECT ON Employees TO user_john;

-- Grant multiple privileges
GRANT SELECT, INSERT, UPDATE ON Orders TO sales_team;

-- Grant all privileges on database
GRANT ALL PRIVILEGES ON sales_db.* TO admin_user;

-- Grant specific column access
GRANT SELECT (name, email) ON Users TO marketing_user;

-- Grant with grant option (user can grant to others)
GRANT SELECT ON Products TO manager_role WITH GRANT OPTION;

-- Grant to a role
CREATE ROLE analyst_role;
GRANT SELECT ON reports.* TO analyst_role;
GRANT analyst_role TO user_sarah;

-- Revoke permissions
REVOKE INSERT, UPDATE ON Orders FROM sales_team;

-- Check granted privileges
SHOW GRANTS FOR user_john;`,
      },
      {
        q: "What is a correlated update?",
        a: "A correlated update is an UPDATE statement that uses a subquery referencing the same table being updated. The subquery executes once for each row being updated, using values from the current row to determine the new value. It's useful for updating rows based on calculations or comparisons with other rows in the same table. While powerful, correlated updates can be slow on large tables because the subquery runs for every row. Common use cases include updating running totals, rankings, or values based on related rows.",
        example: `-- Update salary based on department average
UPDATE Employees e1
SET salary = salary * 1.1
WHERE salary < (
  SELECT AVG(salary)
  FROM Employees e2
  WHERE e2.department = e1.department  -- Correlated reference
);

-- Update product prices based on category average
UPDATE Products p1
SET price = (
  SELECT AVG(price) * 1.05
  FROM Products p2
  WHERE p2.category = p1.category
  AND p2.product_id != p1.product_id  -- Exclude current row
)
WHERE price < (SELECT AVG(price) FROM Products p2 WHERE p2.category = p1.category);

-- Set employee rank based on salary within department
UPDATE Employees e1
SET rank_in_dept = (
  SELECT COUNT(*) + 1
  FROM Employees e2
  WHERE e2.department = e1.department
  AND e2.salary > e1.salary
);`,
      },
      {
        q: "What is the purpose of the CASE statement?",
        a: "The CASE statement is SQL's conditional expression, similar to if-else in programming. It allows you to implement conditional logic directly in queries to return different values based on conditions. There are two forms: Simple CASE (compares an expression to values) and Searched CASE (evaluates boolean conditions). CASE is incredibly versatile - use it in SELECT for conditional columns, in WHERE for complex filtering, in ORDER BY for custom sorting, and in UPDATE for conditional updates. It makes queries more powerful and reduces the need for multiple queries.",
        example: `-- Simple CASE - compare to values
SELECT 
  name,
  salary,
  CASE department
    WHEN 'Sales' THEN salary * 1.1
    WHEN 'IT' THEN salary * 1.15
    WHEN 'HR' THEN salary * 1.05
    ELSE salary
  END as adjusted_salary
FROM Employees;

-- Searched CASE - boolean conditions (more flexible)
SELECT 
  name,
  salary,
  CASE 
    WHEN salary < 30000 THEN 'Entry Level'
    WHEN salary BETWEEN 30000 AND 60000 THEN 'Mid Level'
    WHEN salary > 60000 THEN 'Senior Level'
    ELSE 'Not Specified'
  END as salary_category
FROM Employees;

-- CASE in WHERE clause
SELECT * FROM Orders
WHERE 
  CASE 
    WHEN status = 'urgent' THEN priority = 1
    WHEN status = 'normal' THEN priority <= 3
    ELSE priority <= 5
  END;

-- CASE in ORDER BY
SELECT name, department FROM Employees
ORDER BY 
  CASE department
    WHEN 'Executive' THEN 1
    WHEN 'Management' THEN 2
    WHEN 'Staff' THEN 3
  END;

-- CASE in aggregates
SELECT 
  department,
  COUNT(CASE WHEN salary > 50000 THEN 1 END) as high_earners,
  COUNT(CASE WHEN salary <= 50000 THEN 1 END) as low_earners
FROM Employees
GROUP BY department;`,
      },
      {
        q: "What is the purpose of the COALESCE function?",
        a: "COALESCE returns the first non-NULL value from a list of expressions. It's essential for NULL handling and providing default values. COALESCE evaluates arguments left to right and returns the first non-NULL value it encounters. If all arguments are NULL, it returns NULL. It's cleaner and more flexible than nested IFNULL or ISNULL functions. Common uses include: displaying default values for missing data, combining multiple nullable columns, ensuring a non-NULL result, and implementing fallback values in reports.",
        example: `-- Basic usage - return first non-NULL
SELECT 
  name,
  COALESCE(phone, mobile, email, 'No contact') as contact_info
FROM Users;
-- Returns phone if exists, else mobile, else email, else 'No contact'

-- Provide defaults for NULL values
SELECT 
  product_name,
  COALESCE(discount, 0) as discount,  -- Default to 0 if NULL
  price * (1 - COALESCE(discount, 0)) as final_price
FROM Products;

-- Combine multiple nullable columns
SELECT 
  COALESCE(nickname, firstname, 'Anonymous') as display_name
FROM Users;

-- In calculations (prevent NULL propagation)
SELECT 
  employee_id,
  salary + COALESCE(bonus, 0) + COALESCE(commission, 0) as total_comp
FROM Employees;

-- Alternative to CASE for simple NULL handling
-- Instead of:
CASE WHEN phone IS NOT NULL THEN phone ELSE 'N/A' END
-- Use:
COALESCE(phone, 'N/A')

-- Multiple fallbacks
SELECT COALESCE(NULL, NULL, 'third', 'fourth');  -- Returns 'third'`,
      },
      {
        q: "What is the purpose of the ROW_NUMBER() function?",
        a: "ROW_NUMBER() is a window function that assigns a unique sequential integer to each row within a partition of a result set. The numbering starts at 1 for each partition and increments by 1. It's commonly used for pagination, removing duplicates, ranking, and assigning sequential IDs. Unlike RANK() which can have gaps and ties, ROW_NUMBER() always assigns unique numbers. The PARTITION BY clause creates separate numbering for each group, and ORDER BY determines the numbering sequence.",
        example: `-- Basic ROW_NUMBER - sequential numbering
SELECT 
  ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
  name,
  salary
FROM Employees;

-- Partition by department (restart numbering for each dept)
SELECT 
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank,
  department,
  name,
  salary
FROM Employees;
-- Each department gets its own ranking: 1, 2, 3...

-- Pagination (get rows 11-20)
SELECT * FROM (
  SELECT 
    ROW_NUMBER() OVER (ORDER BY created_at DESC) as row_num,
    *
  FROM Orders
) as numbered
WHERE row_num BETWEEN 11 AND 20;

-- Remove duplicates (keep first occurrence)
DELETE FROM Employees
WHERE employee_id IN (
  SELECT employee_id FROM (
    SELECT 
      employee_id,
      ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) as rn
    FROM Employees
  ) as ranked
  WHERE rn > 1  -- Delete all except first (rn=1)
);

-- Difference from RANK()
-- ROW_NUMBER: 1, 2, 3, 4, 5 (always unique)
-- RANK:       1, 2, 2, 4, 5 (can have ties and gaps)
-- DENSE_RANK: 1, 2, 2, 3, 4 (ties but no gaps)`,
      },
      {
        q: "What is the difference between a natural join and an inner join?",
        a: "NATURAL JOIN: Automatically joins tables based on columns with identical names in both tables. The database determines which columns to join on without explicit specification. It returns only one copy of the common columns. While convenient, it's risky because adding a new column with the same name in both tables can break the join unexpectedly. Rarely used in production due to lack of explicit control. \n\nINNER JOIN: Explicitly specifies the join condition using ON or USING clause. You have full control over which columns to match. More verbose but safer and clearer. This is the standard and recommended approach for joining tables as it's explicit, maintainable, and less prone to unexpected behavior.",
        example: `-- NATURAL JOIN - automatic based on column names
SELECT *
FROM Employees
NATURAL JOIN Departments;
-- Automatically joins on any columns with same name (dept_id, etc.)
-- Risky: if you add a 'name' column to both tables later, join breaks!

-- INNER JOIN - explicit join condition (recommended)
SELECT e.name, d.department_name
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id;
-- Clear, explicit, safe

-- Problem with NATURAL JOIN:
-- If Employees has: emp_id, name, dept_id
-- If Departments has: dept_id, dept_name
-- NATURAL JOIN works on dept_id ✓

-- Later, you add 'created_date' to both tables:
-- Now NATURAL JOIN tries to match on dept_id AND created_date ✗
-- Unexpected behavior!

-- Always prefer INNER JOIN with explicit ON clause`,
      },
      {
        q: "What is the purpose of the CASCADE DELETE constraint?",
        a: "CASCADE DELETE is a referential action that automatically deletes rows in child tables when the referenced row in the parent table is deleted. It maintains referential integrity by preventing orphaned records. When you delete a parent record, all related child records are automatically removed without manual intervention. This is powerful but dangerous - use it carefully as it can delete large amounts of data. Alternatives include SET NULL (set foreign key to NULL) or RESTRICT (prevent deletion if child records exist). CASCADE DELETE is useful for hierarchical data where child records are meaningless without their parent.",
        example: `-- Define CASCADE DELETE on foreign key
CREATE TABLE Departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50)
);

CREATE TABLE Employees (
  emp_id INT PRIMARY KEY,
  name VARCHAR(100),
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
    ON DELETE CASCADE  -- Delete employees when department is deleted
);

-- When you delete a department:
DELETE FROM Departments WHERE dept_id = 10;
-- All employees in dept 10 are AUTOMATICALLY deleted

-- Other options:
-- ON DELETE RESTRICT  - Prevent delete if child records exist
-- ON DELETE SET NULL  - Set foreign key to NULL
-- ON DELETE NO ACTION - Same as RESTRICT

-- Example with orders hierarchy
CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
    ON DELETE CASCADE
);

CREATE TABLE OrderItems (
  item_id INT PRIMARY KEY,
  order_id INT,
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
    ON DELETE CASCADE
);

-- Delete customer → deletes all orders → deletes all order items
DELETE FROM Customers WHERE customer_id = 100;`,
      },
      {
        q: "What is the purpose of the ALL keyword in SQL?",
        a: "The ALL keyword is used with comparison operators (>, <, >=, <=, =, <>) to compare a value against ALL values returned by a subquery. The condition must be true for ALL values in the subquery for the row to be included. It's the opposite of ANY/SOME which require the condition to be true for at least one value. ALL is useful for finding extremes: values greater than all others, less than all others, etc. Common pattern: 'salary > ALL (subquery)' means salary must be greater than every value returned by the subquery.",
        example: `-- Find employees earning more than ALL employees in Sales
SELECT name, salary
FROM Employees
WHERE salary > ALL (
  SELECT salary 
  FROM Employees 
  WHERE department = 'Sales'
);
-- Must earn more than the highest Sales salary

-- Equivalent to:
SELECT name, salary
FROM Employees
WHERE salary > (
  SELECT MAX(salary) 
  FROM Employees 
  WHERE department = 'Sales'
);

-- Find products cheaper than ALL products in category 'Premium'
SELECT product_name, price
FROM Products
WHERE price < ALL (
  SELECT price 
  FROM Products 
  WHERE category = 'Premium'
);
-- Must be cheaper than the cheapest Premium product

-- ALL vs ANY comparison:
-- > ALL: greater than the maximum
-- > ANY: greater than the minimum
-- < ALL: less than the minimum
-- < ANY: less than the maximum

-- Find departments where ALL employees earn > 50000
SELECT department
FROM Departments d
WHERE 50000 < ALL (
  SELECT salary 
  FROM Employees e 
  WHERE e.dept_id = d.dept_id
);`,
      },
      {
        q: "What is the difference between the EXISTS and NOT EXISTS operators?",
        a: "EXISTS: Returns TRUE if the subquery returns at least one row. It doesn't care about the actual data, just whether rows exist. Stops executing as soon as it finds the first matching row (short-circuits), making it very efficient. Typically used with correlated subqueries. \n\nNOT EXISTS: Returns TRUE if the subquery returns zero rows (no matches found). Also short-circuits, stopping as soon as it finds any row (which makes the condition false). Perfect for finding records that don't have related records in another table. \n\nBoth are more efficient than IN/NOT IN for large datasets because they stop at the first match/non-match instead of evaluating the entire subquery.",
        example: `-- EXISTS - Find customers who have placed orders
SELECT c.customer_name
FROM Customers c
WHERE EXISTS (
  SELECT 1  -- Can use any expression, typically just 1 or *
  FROM Orders o
  WHERE o.customer_id = c.customer_id
);
-- Stops at first order found per customer

-- NOT EXISTS - Find customers with NO orders
SELECT c.customer_name
FROM Customers c
WHERE NOT EXISTS (
  SELECT 1
  FROM Orders o
  WHERE o.customer_id = c.customer_id
);
-- Returns customers with zero orders

-- EXISTS vs IN performance:
-- EXISTS: Stops at first match (faster for large sets)
SELECT * FROM Employees e
WHERE EXISTS (
  SELECT 1 FROM Departments d 
  WHERE d.dept_id = e.dept_id AND d.location = 'NYC'
);

-- IN: Evaluates entire subquery first (slower)
SELECT * FROM Employees
WHERE dept_id IN (
  SELECT dept_id FROM Departments WHERE location = 'NYC'
);

-- Complex example - employees without dependents
SELECT e.name
FROM Employees e
WHERE NOT EXISTS (
  SELECT 1
  FROM Dependents d
  WHERE d.employee_id = e.employee_id
);

-- Use SELECT 1 or SELECT * - doesn't matter, EXISTS only checks existence
-- SELECT 1 is just a convention`,
      },
      {
        q: "What is the purpose of the CROSS APPLY operator?",
        a: "CROSS APPLY (SQL Server/T-SQL) is similar to INNER JOIN but specifically designed for table-valued functions or correlated subqueries. It invokes a table-valued function or subquery for each row from the left table and returns matching results. Unlike a regular join, APPLY operators can reference columns from the left table in the right table expression. CROSS APPLY returns only rows where the right expression returns results (like INNER JOIN). Its counterpart, OUTER APPLY, returns all left rows even if the right expression returns nothing (like LEFT JOIN). Very useful for dynamic, row-by-row operations.",
        example: `-- CROSS APPLY with table-valued function
CREATE FUNCTION GetEmployeeProjects(@emp_id INT)
RETURNS TABLE
AS
RETURN (
  SELECT project_name, hours
  FROM Projects
  WHERE employee_id = @emp_id
);

-- Use CROSS APPLY to get each employee with their projects
SELECT e.name, p.project_name, p.hours
FROM Employees e
CROSS APPLY GetEmployeeProjects(e.employee_id) AS p;
-- Only employees with projects are returned

-- CROSS APPLY with correlated subquery
SELECT e.name, top_orders.*
FROM Employees e
CROSS APPLY (
  SELECT TOP 3 order_id, total
  FROM Orders o
  WHERE o.sales_person_id = e.employee_id
  ORDER BY total DESC
) AS top_orders;
-- Get each employee with their top 3 orders

-- OUTER APPLY vs CROSS APPLY
-- OUTER APPLY (like LEFT JOIN) - includes employees with no projects
SELECT e.name, p.project_name
FROM Employees e
OUTER APPLY GetEmployeeProjects(e.employee_id) AS p;

-- CROSS APPLY (like INNER JOIN) - only employees with projects
SELECT e.name, p.project_name
FROM Employees e
CROSS APPLY GetEmployeeProjects(e.employee_id) AS p;

-- Split comma-separated values
SELECT e.name, skills.value
FROM Employees e
CROSS APPLY STRING_SPLIT(e.skills, ',') AS skills;
-- Returns one row per skill per employee`,
      },
      {
        q: "What is a self-join?",
        a: "A self-join is when a table is joined with itself. You treat the same table as if it were two different tables by using table aliases. Self-joins are useful for comparing rows within the same table, finding hierarchical relationships (like employee-manager structures), detecting duplicates, or finding related records. Common use cases include organizational charts, finding pairs or relationships within data, comparing current vs. previous values, and building recursive hierarchies. You must use aliases to distinguish between the two 'instances' of the same table.",
        example: `-- Employee-Manager hierarchy (self-join)
SELECT 
  e.name AS employee,
  m.name AS manager
FROM Employees e
LEFT JOIN Employees m ON e.manager_id = m.employee_id;
-- Joins Employees table to itself to show who reports to whom

-- Find employees in the same department
SELECT 
  e1.name AS employee1,
  e2.name AS employee2,
  e1.department
FROM Employees e1
JOIN Employees e2 ON e1.department = e2.department
WHERE e1.employee_id < e2.employee_id;  -- Avoid duplicates and self-pairs
-- Shows all pairs of employees in same department

-- Find duplicate emails
SELECT 
  e1.employee_id,
  e1.name,
  e1.email
FROM Employees e1
JOIN Employees e2 ON e1.email = e2.email
WHERE e1.employee_id != e2.employee_id;

-- Find employees earning more than their colleagues in same dept
SELECT 
  e1.name,
  e1.salary,
  e1.department
FROM Employees e1
JOIN Employees e2 ON e1.department = e2.department
WHERE e1.salary > e2.salary
GROUP BY e1.employee_id, e1.name, e1.salary, e1.department;

-- Hierarchical query - all levels of management
WITH RECURSIVE OrgChart AS (
  SELECT employee_id, name, manager_id, 1 as level
  FROM Employees
  WHERE manager_id IS NULL
  
  UNION ALL
  
  SELECT e.employee_id, e.name, e.manager_id, oc.level + 1
  FROM Employees e
  JOIN OrgChart oc ON e.manager_id = oc.employee_id
)
SELECT * FROM OrgChart;`,
      },
      {
        q: "What is an ALIAS command?",
        a: "An alias is a temporary name given to a table or column in a SQL query using the AS keyword (which is optional). Aliases make queries more readable, especially with long table/column names, and are essential when using joins, self-joins, or when you need to distinguish between multiple instances of the same table. Column aliases appear in the result set headers. Table aliases are required in self-joins and convenient in complex joins. Aliases exist only for the duration of the query. They're a fundamental SQL feature that improves code readability and maintainability.",
        example: `-- Column alias - rename columns in result
SELECT 
  employee_id AS id,
  CONCAT(first_name, ' ', last_name) AS full_name,
  salary * 12 AS annual_salary
FROM Employees;
-- Result columns: id, full_name, annual_salary

-- Table alias - shorter names for tables
SELECT e.name, d.department_name
FROM Employees AS e
JOIN Departments AS d ON e.dept_id = d.dept_id;
-- 'AS' keyword is optional:
-- FROM Employees e is same as FROM Employees AS e

-- Required for self-joins
SELECT 
  e1.name AS employee,
  e2.name AS manager
FROM Employees e1
JOIN Employees e2 ON e1.manager_id = e2.employee_id;
-- Without aliases e1 and e2, can't distinguish them

-- Alias in WHERE clause (must use original name or derived table)
SELECT salary * 12 AS annual_salary
FROM Employees
WHERE salary * 12 > 60000;  -- Can't use annual_salary here in WHERE

-- But can use in ORDER BY and HAVING
SELECT department, AVG(salary) AS avg_sal
FROM Employees
GROUP BY department
HAVING avg_sal > 50000  -- Can use alias here
ORDER BY avg_sal DESC;  -- And here

-- Alias for complex expressions
SELECT 
  product_name,
  price,
  quantity,
  price * quantity AS total_value,
  CASE 
    WHEN price * quantity > 1000 THEN 'High Value'
    ELSE 'Standard'
  END AS value_category
FROM Products;`,
      },
      {
        q: "Why are SQL functions used?",
        a: "SQL functions are pre-built operations that perform specific tasks and return values. They're essential for data manipulation, transformation, and analysis directly within queries. Main categories include: \n\n• Aggregate Functions (COUNT, SUM, AVG, MAX, MIN) - perform calculations on groups of rows \n• String Functions (CONCAT, SUBSTRING, UPPER, LOWER, TRIM) - manipulate text data \n• Date/Time Functions (NOW, DATE_FORMAT, DATEDIFF, DATE_ADD) - handle temporal data \n• Numeric Functions (ROUND, CEIL, FLOOR, ABS, POWER) - mathematical operations \n• Conversion Functions (CAST, CONVERT) - change data types \n• Conditional Functions (CASE, IF, COALESCE, NULLIF) - implement logic \n\nFunctions eliminate the need for application-level processing, improve performance by processing data at the database level, ensure consistency, and make queries more powerful and concise.",
        example: `-- Aggregate Functions - calculations on groups
SELECT 
  department,
  COUNT(*) AS employee_count,
  AVG(salary) AS avg_salary,
  MAX(salary) AS max_salary,
  SUM(salary) AS total_payroll
FROM Employees
GROUP BY department;

-- String Functions - text manipulation
SELECT 
  UPPER(name) AS name_upper,
  LOWER(email) AS email_lower,
  CONCAT(first_name, ' ', last_name) AS full_name,
  SUBSTRING(phone, 1, 3) AS area_code,
  LENGTH(description) AS desc_length,
  TRIM(address) AS clean_address
FROM Users;

-- Date/Time Functions - temporal operations
SELECT 
  order_date,
  NOW() AS current_time,
  DATEDIFF(NOW(), order_date) AS days_since_order,
  DATE_FORMAT(order_date, '%Y-%m-%d') AS formatted_date,
  YEAR(order_date) AS order_year,
  MONTH(order_date) AS order_month,
  DATE_ADD(order_date, INTERVAL 30 DAY) AS due_date
FROM Orders;

-- Numeric Functions - math operations
SELECT 
  price,
  ROUND(price, 2) AS rounded_price,
  CEIL(price) AS ceiling,
  FLOOR(price) AS floor,
  ABS(profit) AS absolute_profit,
  POWER(quantity, 2) AS quantity_squared,
  SQRT(area) AS side_length
FROM Products;

-- Conversion Functions - type changes
SELECT 
  CAST(price AS DECIMAL(10,2)) AS decimal_price,
  CONVERT(order_date, CHAR) AS date_string,
  CAST('123' AS UNSIGNED) AS number_from_string
FROM Orders;

-- Conditional Functions - logic in queries
SELECT 
  name,
  salary,
  CASE 
    WHEN salary > 80000 THEN 'High'
    WHEN salary > 50000 THEN 'Medium'
    ELSE 'Low'
  END AS salary_grade,
  COALESCE(bonus, 0) AS bonus_with_default,
  IF(status = 'active', 'Yes', 'No') AS is_active
FROM Employees;`,
      },
    ],
  },
};
