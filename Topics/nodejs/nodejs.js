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
        q: "What are streams in Node.js?",
        a: "Streams are objects that enable reading/writing data in chunks rather than all at once. Types: Readable (read data), Writable (write data), Duplex (read & write), Transform (modify data while reading/writing). Efficient for large files and real-time data.",
        example: `const fs = require('fs');

// Readable stream - reading file in chunks
const readStream = fs.createReadStream('largefile.txt', {
  encoding: 'utf8',
  highWaterMark: 1024 // chunk size in bytes
});

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length, 'bytes');
});

readStream.on('end', () => {
  console.log('Finished reading');
});

// Writable stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello ');
writeStream.write('World');
writeStream.end();

// Piping - connect readable to writable
const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
input.pipe(output);

// Transform stream - modify data
const { Transform } = require('stream');
const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(uppercase).pipe(process.stdout);`,
      },
      {
        q: "What is back pressure in streams?",
        a: "Back pressure is a mechanism that prevents overwhelming the consumer when the producer sends data faster than it can be processed. Streams automatically handle this by pausing the readable stream when the writable stream's buffer is full.",
        example: `const fs = require('fs');

// Without back pressure handling (BAD - may cause memory issues)
const readable = fs.createReadStream('huge-file.txt');
const writable = fs.createWriteStream('output.txt');

readable.on('data', (chunk) => {
  writable.write(chunk); // May cause buffer overflow
});

// With back pressure handling (GOOD)
readable.on('data', (chunk) => {
  const canContinue = writable.write(chunk);
  if (!canContinue) {
    // Buffer is full, pause reading
    readable.pause();
  }
});

writable.on('drain', () => {
  // Buffer is drained, resume reading
  readable.resume();
});

// Using pipe (handles back pressure automatically)
readable.pipe(writable); // Best practice!`,
      },
      {
        q: "What is the difference between stateless and stateful in Node.js?",
        a: "Stateless: Each request is independent, no session data stored on server (uses tokens like JWT). Scalable and easier to load balance. Stateful: Server stores session data (in memory or database). Requires sticky sessions for load balancing.",
        example: `// Stateless approach (REST API with JWT)
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Login - create token
app.post('/login', (req, res) => {
  const user = { id: 1, email: 'user@example.com' };
  const token = jwt.sign(user, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

// Protected route - verify token
app.get('/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const user = jwt.verify(token, 'secret');
    res.json({ user });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Stateful approach (using express-session)
const session = require('express-session');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.post('/login', (req, res) => {
  req.session.userId = 1;
  res.send('Logged in');
});

app.get('/profile', (req, res) => {
  if (req.session.userId) {
    res.json({ userId: req.session.userId });
  } else {
    res.status(401).send('Not logged in');
  }
});`,
      },
      {
        q: "What are sticky sessions and when are they needed?",
        a: "Sticky sessions (session affinity) ensure all requests from a user go to the same server instance. Needed for stateful applications where session data is stored in server memory. Not needed for stateless apps using JWT/tokens.",
        example: `// Load balancer configuration (Nginx example)
// With sticky sessions
upstream backend {
  ip_hash; // Routes same IP to same server
  server server1.example.com;
  server server2.example.com;
  server server3.example.com;
}

// Better approach: Use Redis for shared sessions (no sticky sessions needed)
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Now any server can access the session data from Redis`,
      },
      {
        q: "What is the Event Emitter in Node.js?",
        a: "EventEmitter is a class that enables objects to emit named events and register listeners. Core to Node.js's event-driven architecture. Used extensively in Node.js core modules.",
        example: `const EventEmitter = require('events');

// Create custom event emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register listeners
myEmitter.on('event', (data) => {
  console.log('Event occurred:', data);
});

// One-time listener
myEmitter.once('connect', () => {
  console.log('Connected!');
});

// Emit events
myEmitter.emit('event', { message: 'Hello' });
myEmitter.emit('connect');
myEmitter.emit('connect'); // Won't trigger (once)

// Real-world example - HTTP Server
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Hello');
});

server.on('connection', (socket) => {
  console.log('New connection');
});

server.listen(3000);`,
      },
      {
        q: "What is async/await and how is it better than callbacks?",
        a: "async/await is syntactic sugar over Promises that makes asynchronous code look synchronous and more readable. It avoids callback hell, provides better error handling with try/catch, and makes code flow clearer.",
        example: `// Callback hell (bad)
fs.readFile('file1.txt', (err, data1) => {
  if (err) return console.error(err);
  fs.readFile('file2.txt', (err, data2) => {
    if (err) return console.error(err);
    fs.readFile('file3.txt', (err, data3) => {
      if (err) return console.error(err);
      console.log(data1 + data2 + data3);
    });
  });
});

// Promises (better)
const fs = require('fs/promises');

fs.readFile('file1.txt')
  .then(data1 => fs.readFile('file2.txt'))
  .then(data2 => fs.readFile('file3.txt'))
  .then(data3 => console.log(data1 + data2 + data3))
  .catch(err => console.error(err));

// async/await (best)
async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt');
    const data2 = await fs.readFile('file2.txt');
    const data3 = await fs.readFile('file3.txt');
    console.log(data1 + data2 + data3);
  } catch (err) {
    console.error(err);
  }
}

// Parallel execution
async function readParallel() {
  try {
    const [data1, data2, data3] = await Promise.all([
      fs.readFile('file1.txt'),
      fs.readFile('file2.txt'),
      fs.readFile('file3.txt')
    ]);
    console.log(data1 + data2 + data3);
  } catch (err) {
    console.error(err);
  }
}`,
      },
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
        example: `const { fork, spawn } = require('child_process');

// fork() - for Node.js files
const child = fork('child.js');

// Send message to child
child.send({ task: 'processData', data: [1, 2, 3] });

// Receive message from child
child.on('message', (msg) => {
  console.log('Result from child:', msg);
});

// child.js
process.on('message', (msg) => {
  const result = msg.data.reduce((a, b) => a + b, 0);
  process.send({ result });
});

// spawn() - for system commands
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(\`Output: \${data}\`);
});

ls.stderr.on('data', (data) => {
  console.error(\`Error: \${data}\`);
});

ls.on('close', (code) => {
  console.log(\`Process exited with code \${code}\`);
});

// spawn() for long-running processes
const python = spawn('python', ['script.py']);
python.stdout.pipe(process.stdout); // Stream output`,
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
        example: `const cluster = require('cluster');
const http = require('http');
const os = require('os');
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);
  
  // Fork workers for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    // Restart worker
    cluster.fork();
  });
  
  // Communication with workers
  Object.values(cluster.workers).forEach(worker => {
    worker.send({ msg: 'Hello from master' });
  });
  
} else {
  // Workers share the same TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(\`Handled by worker \${process.pid}\`);
  }).listen(8000);
  
  console.log(\`Worker \${process.pid} started\`);
  
  process.on('message', (msg) => {
    console.log('Message from master:', msg);
  });
}

// Advanced: Load balancing with PM2 (process manager)
// pm2 start app.js -i max  // Uses all CPUs`,
      },
      {
        q: "What are child processes in Node.js?",
        a: "Separate processes created using child_process module (via exec, spawn, or fork) to handle CPU-intensive tasks outside the main thread.",
      },
      {
        q: "What is process.nextTick()?",
        a: "A method that defers execution of a callback until the next iteration of the event loop, before any I/O events.",
        example: `// Event loop phases: timers → I/O callbacks → poll → check → close
// nextTick executes BEFORE all phases

console.log('1');

setTimeout(() => console.log('2 - setTimeout'), 0);
setImmediate(() => console.log('3 - setImmediate'));

process.nextTick(() => console.log('4 - nextTick'));

Promise.resolve().then(() => console.log('5 - Promise'));

console.log('6');

// Output: 1, 6, 4, 5, 2, 3
// nextTick > Promises > timers > setImmediate

// Use case: Ensure async execution after current operation
function asyncFunction(callback) {
  process.nextTick(callback); // Ensures callback is async
}

asyncFunction(() => {
  console.log('This runs asynchronously');
});

// Warning: Can cause I/O starvation if overused
// Bad: Recursive nextTick blocks event loop
function recursiveNextTick() {
  process.nextTick(recursiveNextTick); // BLOCKS EVENT LOOP!
}`,
      },
      {
        q: "Explain memory leaks in Node.js.",
        a: "Memory that is allocated but not released — caused by unclosed listeners, large caches, or global variables — leading to performance degradation.",
        example: `// Common memory leak causes:

// 1. Unclosed event listeners
const EventEmitter = require('events');
const emitter = new EventEmitter();

function badFunction() {
  emitter.on('event', () => {
    // Listener never removed - LEAK!
  });
}
for (let i = 0; i < 10000; i++) badFunction(); // 10k listeners!

// Fix: Remove listeners
function goodFunction() {
  const handler = () => console.log('handled');
  emitter.on('event', handler);
  // Clean up
  emitter.removeListener('event', handler);
}

// 2. Global variables and closures
let cache = []; // Global array
function addToCache(data) {
  cache.push(data); // Never cleared - LEAK!
}

// Fix: Use LRU cache with size limit
const LRU = require('lru-cache');
const cache = new LRU({ max: 500 });

// 3. Timers not cleared
function leakyTimer() {
  setInterval(() => {
    console.log('Running...');
  }, 1000); // Never cleared - LEAK!
}

// Fix: Clear timers
const timer = setInterval(() => {}, 1000);
clearInterval(timer);

// Detect memory leaks:
// 1. Monitor with process.memoryUsage()
setInterval(() => {
  const used = process.memoryUsage();
  console.log('Memory:', Math.round(used.heapUsed / 1024 / 1024), 'MB');
}, 5000);

// 2. Use --inspect and Chrome DevTools
// node --inspect app.js
// 3. Use clinic.js or memwatch-next`,
      },
      {
        q: "How to improve performance in Node.js?",
        a: "Use caching (Redis), clustering, async I/O, efficient queries, compression middleware, and proper error handling.",
        example: `const express = require('express');
const redis = require('redis');
const compression = require('compression');
const cluster = require('cluster');
const app = express();

// 1. Enable gzip compression
app.use(compression());

// 2. Use caching with Redis
const redisClient = redis.createClient();

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const cacheKey = \`user:\${id}\`;
  
  // Check cache first
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  // If not cached, fetch from DB
  const user = await db.findUser(id);
  
  // Cache for 1 hour
  await redisClient.setEx(cacheKey, 3600, JSON.stringify(user));
  res.json(user);
});

// 3. Use clustering (multi-core)
if (cluster.isMaster) {
  const numCPUs = require('os').cpus().length;
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  app.listen(3000);
}

// 4. Database optimization
// Use indexes, limit fields, pagination
const users = await db.users.find(
  { status: 'active' },
  { projection: { name: 1, email: 1 } } // Only needed fields
).limit(50);

// 5. Use Promise.all for parallel operations
const [users, posts, comments] = await Promise.all([
  db.users.find(),
  db.posts.find(),
  db.comments.find()
]);

// 6. Stream large responses
app.get('/large-file', (req, res) => {
  const stream = fs.createReadStream('large-file.json');
  stream.pipe(res);
});

// 7. Use connection pooling
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri, { 
  maxPoolSize: 50 
});`,
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
