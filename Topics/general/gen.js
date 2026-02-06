const questions = {
  general: {
    easy: [
      {
        q: "What is Node.js?",
        a: "Node.js is a JavaScript runtime environment built on Chrome's V8 engine, allowing JS to run on the server side.",
      },
      {
        q: "Is Node.js single or multi-threaded?",
        a: "Single-threaded (for handling requests) but can perform multi-threaded I/O internally via libuv.",
      },
      {
        q: "Benefits of Node.js?",
        a: "Fast (V8 engine), Non-blocking I/O, Scalable, Cross-platform, and a huge npm ecosystem.",
      },
      {
        q: "Is Node.js I/O bound or process intensive?",
        a: "I/O bound. It's ideal for handling many concurrent I/O tasks, not CPU-heavy ones.",
      },
      {
        q: "What is an EventEmitter?",
        a: "A class that handles events in Node.js; allows you to emit and listen for custom events.",
      },
      {
        q: "What are streams?",
        a: "Objects that handle data reading/writing in chunks, ideal for large files or continuous data.",
      },
      {
        q: "What are assets in Node.js?",
        a: "Static files like images, CSS, JS served using middleware (e.g., express.static('public')).",
      },
      {
        q: "How to check performance in Node.js?",
        a: "Use tools like Node.js Profiler, PM2, or the built-in console.time().",
      },
      {
        q: "How to check security in Node.js?",
        a: "Run npm audit, use Helmet.js, input validation, and avoid hard-coded secrets.",
      },
      {
        q: "What happens if you don't use next() in Express middleware?",
        a: "The request cycle hangs — no further middleware or response will be executed.",
      },
      {
        q: "Express.js and its features?",
        a: "Minimal framework for Node.js providing routing, middleware, templating, and RESTful API support.",
      },
      {
        q: "Difference between Express and Node.js?",
        a: "Node.js = runtime environment. Express = framework that runs inside Node.js to simplify web app development.",
      },
      {
        q: "What is CORS?",
        a: "Cross-Origin Resource Sharing — a mechanism to allow or restrict resources based on domain origin. Controlled via cors middleware.",
      },
      {
        q: "What is a closure?",
        a: "A function that remembers its lexical scope, even when executed outside it.",
      },
      {
        q: "What is hoisting?",
        a: "JS mechanism that moves variable and function declarations to the top of their scope during compilation.",
      },
      {
        q: "What are Promises and async/await?",
        a: "Promises handle async operations with .then() / .catch(). async/await makes async code look synchronous.",
      },
      {
        q: "What is currying?",
        a: "Breaking a function with multiple parameters into a series of single-parameter functions.",
      },
      {
        q: "Difference between primitive and non-primitive data types?",
        a: "Primitives store values directly (e.g., number, string), while non-primitives store references (e.g., object, array).",
      },
      {
        q: "JavaScript data types?",
        a: "7 primitives (string, number, bigint, boolean, undefined, symbol, null) + objects.",
      },
      {
        q: "Arrow functions?",
        a: "Concise function syntax that lexically binds 'this', often used for callbacks.",
      },
      {
        q: "What is IIFE?",
        a: "Immediately Invoked Function Expression — executes immediately after definition.",
      },
      {
        q: "What is the Temporal Dead Zone?",
        a: "The period between variable declaration and initialization when using let or const.",
      },
      {
        q: "Spread operator?",
        a: "... used to expand arrays/objects or collect rest arguments.",
      },
      {
        q: "Difference between static and dynamic languages?",
        a: "Static: Types checked at compile time (C++, Java). Dynamic: Types checked at runtime (JS, Python).",
      },
      {
        q: "First-class functions?",
        a: "Functions treated like values — can be passed, stored, or returned.",
      },
      {
        q: "Function() constructor?",
        a: "Used to dynamically create functions at runtime.",
      },
      {
        q: "Prototypes?",
        a: "Objects from which other objects inherit properties and methods.",
      },
      {
        q: "Event propagation and delegation?",
        a: "Propagation: Bubbling/capturing of events through the DOM. Delegation: Handling events at a parent element using bubbling.",
      },
    ],
    intermediate: [
      {
        q: "What are middlewares?",
        a: "Functions in Express that handle requests, responses, or pass control to the next middleware.",
      },
      {
        q: "Middleware with 4 parameters?",
        a: "Error-handling middleware: (err, req, res, next).",
      },
      {
        q: "What is the 'next' parameter?",
        a: "A callback to pass control to the next middleware in the stack.",
      },
      {
        q: "What is REST?",
        a: "Representational State Transfer — an API architecture using stateless HTTP communication.",
      },
      {
        q: "What are HTTP methods?",
        a: "GET, POST, PUT, PATCH, DELETE — correspond to CRUD operations.",
      },
      {
        q: "Common HTTP status codes?",
        a: "200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error).",
      },
      {
        q: "REST vs SOAP?",
        a: "REST: Lightweight, uses JSON over HTTP. SOAP: XML-based, strict, heavier protocol.",
      },
      {
        q: "Stateless vs Stateful?",
        a: "Stateless: No session info stored on server (REST). Stateful: Session maintained (traditional apps).",
      },
      {
        q: "What is JWT?",
        a: "JSON Web Token — compact token used for authentication, signed to ensure integrity.",
      },
      {
        q: "Tokens vs Sessions?",
        a: "Tokens are stateless and stored client-side; sessions are stateful and stored on the server.",
      },
      {
        q: "What is callback hell?",
        a: "Nested callbacks that make code unreadable; solved using Promises or async/await.",
      },
      {
        q: "States of a promise?",
        a: "Pending, Fulfilled (Resolved), Rejected.",
      },
      {
        q: "What are microtasks and macrotasks?",
        a: "Microtasks: Promise callbacks. Macrotasks: setTimeout, I/O tasks in the event loop.",
      },
      {
        q: "Where is MongoDB data stored?",
        a: "In collections inside databases, physically stored as BSON files on disk.",
      },
      {
        q: "What is data binding?",
        a: "Linking data between UI and backend (in frameworks like Mongoose or Angular).",
      },
      {
        q: "Difference between insert and upsert?",
        a: "Insert: Adds new data. Upsert: Updates existing document or inserts new one if not found.",
      },
      {
        q: "Types of indexes in MongoDB?",
        a: "Single field, compound, multikey, text, hashed, geo-spatial.",
      },
      {
        q: "What is a Document in MongoDB?",
        a: "A record in JSON-like format (BSON) inside a collection.",
      },
      {
        q: "Can I create a view in MongoDB?",
        a: "Yes — a read-only query result created using aggregation.",
      },
      {
        q: "What is a cursor in MongoDB?",
        a: "A pointer that allows iteration over query results.",
      },
      {
        q: "What is an index?",
        a: "A data structure that improves query performance by quickly locating data.",
      },
    ],
    hard: [
      {
        q: "What is a database?",
        a: "A structured collection of data stored electronically and accessible via queries.",
      },
      {
        q: "Types of databases?",
        a: "Relational (SQL) and Non-relational (NoSQL).",
      },
      {
        q: "Difference between relational and non-relational DBs?",
        a: "SQL uses tables and schemas, while NoSQL uses collections and flexible documents.",
      },
      {
        q: "Common SQL vs NoSQL queries?",
        a: "SQL → SELECT * FROM users; NoSQL → db.users.find({})",
      },
      {
        q: "How do you define a database?",
        a: "In SQL: CREATE DATABASE test; In NoSQL: use test; creates it automatically when used.",
      },
      {
        q: "What is the event loop? (Very important)",
        a: "It's the core of Node.js that handles asynchronous callbacks and manages the non-blocking I/O execution. The event loop continuously checks for pending callbacks, I/O operations, or timers and executes them asynchronously.",
      },
      {
        q: "Explain authentication vs authorization.",
        a: "Authentication verifies who you are (login). Authorization determines what you can access (permissions).",
      },
      {
        q: "What is token-based authentication?",
        a: "Authentication method where server generates a token (like JWT) after login, which client sends with subsequent requests instead of credentials.",
      },
      {
        q: "What is SQL injection and how to prevent it?",
        a: "A security vulnerability where malicious SQL code is injected into queries. Prevent using parameterized queries, ORMs, input validation, and prepared statements.",
      },
      {
        q: "What is XSS (Cross-Site Scripting)?",
        a: "An attack where malicious scripts are injected into web pages. Prevent by sanitizing input, escaping output, and using Content Security Policy (CSP).",
      },
    ],
  },
};
