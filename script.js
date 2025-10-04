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
    themeToggle.textContent = isDark ? "☀️" : "🌙";
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
// SEARCH FUNCTIONALITY
// ============================================
function filterTopics(searchTerm) {
  const topicCards = document.querySelectorAll(".topic-card");
  const term = searchTerm.toLowerCase();

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
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateProgressBar();

  // Theme toggle listener
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Search listener
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterTopics(e.target.value);
    });
  }
});

// ============================================
// QUESTION DATA
// ============================================
const questions = {
  javascript: {
    easy: [
      {
        q: "Is JS statically or dynamically typed? Explain.",
        a: "JavaScript is dynamically typed. This means variables can hold values of any type, and the type can change at runtime without explicit type declarations.",
      },
      {
        q: "What are the data types in JS? How to know the type of a variable?",
        a: "JavaScript has 8 data types: String, Number, BigInt, Boolean, Undefined, Null, Symbol, and Object. You can check the type using the 'typeof' operator. Example: typeof 'hello' returns 'string'.",
      },
      {
        q: "Explain Hoisting.",
        a: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. Variables declared with 'var' are hoisted and initialized with undefined, while 'let' and 'const' are hoisted but remain in a Temporal Dead Zone until initialization.",
      },
      {
        q: "What is the difference between == and ===?",
        a: "== (loose equality) compares values after type coercion, while === (strict equality) compares both value and type without coercion. Example: '5' == 5 is true, but '5' === 5 is false.",
      },
      {
        q: "What is the difference between let, var, and const?",
        a: "'var' is function-scoped and hoisted, 'let' is block-scoped and not hoisted in the same way, 'const' is also block-scoped but creates immutable bindings (the value can't be reassigned, but objects/arrays can be mutated).",
      },
      {
        q: "Explain pass by value and pass by reference in JS.",
        a: "Primitives (numbers, strings, booleans) are passed by value - a copy is created. Objects (including arrays) are passed by reference - the reference to the memory location is passed, not a copy of the object.",
      },
      {
        q: "What is the 'this' keyword in JS?",
        a: "'this' refers to the object that is executing the current function. Its value depends on how the function is called: in methods it refers to the owner object, alone it refers to the global object, in functions it refers to the global object (or undefined in strict mode).",
      },
      {
        q: "What is the difference between call, bind, and apply?",
        a: "All three are used to set the 'this' context. 'call' invokes the function immediately with arguments passed individually, 'apply' invokes immediately with arguments as an array, 'bind' returns a new function with 'this' bound permanently.",
      },
      {
        q: "What are the types of scope in JS?",
        a: "JavaScript has three types of scope: Global scope (accessible everywhere), Function scope (accessible within the function), and Block scope (accessible within curly braces, applies to let and const).",
      },
      {
        q: "How to create a constructor function?",
        a: "Constructor functions are created using regular functions with a capital first letter by convention, and called with the 'new' keyword. Example: function Person(name) { this.name = name; } const person1 = new Person('John');",
      },
      {
        q: "Explain callback and callback hell.",
        a: "A callback is a function passed as an argument to another function. Callback hell (pyramid of doom) occurs when multiple nested callbacks make code hard to read and maintain. Example: asyncOp1(() => { asyncOp2(() => { asyncOp3(() => {...}) }) })",
      },
      {
        q: "Types of errors in JS?",
        a: "Main error types: SyntaxError (invalid syntax), ReferenceError (invalid reference), TypeError (wrong type), RangeError (value out of range), URIError (invalid URI), EvalError (error in eval()), and generic Error.",
      },
      {
        q: "What is DOM?",
        a: "DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page structure as a tree of objects that can be manipulated with JavaScript to change document structure, style, and content.",
      },
      {
        q: "Mention some concepts introduced in ES6.",
        a: "ES6 introduced: let/const, arrow functions, template literals, destructuring, default parameters, rest/spread operators, classes, modules, promises, Map/Set, Symbol, iterators/generators, and enhanced object literals.",
      },
      {
        q: "What are arrow functions?",
        a: "Arrow functions are a concise syntax for writing functions using =>. They don't have their own 'this' binding (they inherit from parent scope), can't be used as constructors, and don't have arguments object. Example: const add = (a, b) => a + b;",
      },
      {
        q: "Rest and spread operators?",
        a: "Rest operator (...) collects multiple elements into an array (in function parameters). Spread operator (...) expands an array/object into individual elements. Example Rest: function sum(...nums), Example Spread: [...arr1, ...arr2]",
      },
      {
        q: "What is a Promise? Why use it? States?",
        a: "A Promise represents a value that may be available now, later, or never. It's used for asynchronous operations. Three states: Pending (initial), Fulfilled (success), Rejected (failure). Helps avoid callback hell and provides better error handling.",
      },
      {
        q: "What is the difference between Promise and async/await?",
        a: "async/await is syntactic sugar over Promises. Promises use .then() chains, while async/await makes asynchronous code look synchronous and more readable. async functions always return a Promise, await pauses execution until Promise resolves.",
      },
      {
        q: "What is the difference between slice and splice?",
        a: "slice() returns a shallow copy of a portion of an array without modifying the original. splice() changes the original array by adding/removing elements and returns the removed elements. slice(start, end), splice(start, deleteCount, items...)",
      },
      {
        q: "Explain some array methods.",
        a: "Common array methods: map() transforms elements, filter() selects elements, reduce() accumulates values, forEach() iterates, find() finds first match, some() checks if any match, every() checks if all match, push/pop for end, shift/unshift for start.",
      },
      {
        q: "Does JS run natively on the server?",
        a: "No, JavaScript doesn't run natively on servers. It requires a runtime environment like Node.js (built on Chrome's V8 engine) to execute JavaScript code on the server side.",
      },
      {
        q: "Why does {a:1, b:2} == {a:1, b:2} return false?",
        a: "Objects are compared by reference, not by value. Even if two objects have identical properties, they are stored in different memory locations, so the comparison returns false. Each object literal creates a new object in memory.",
      },
      {
        q: "Can we assign undefined to a variable? Should we?",
        a: "Yes, you can assign undefined to a variable, but it's not recommended. It's better to use null when you want to explicitly indicate 'no value'. undefined should represent uninitialized variables, not intentional absence.",
      },
      {
        q: "Difference between expression and statement.",
        a: "An expression produces a value and can be written wherever a value is expected (e.g., 2+2, x=5). A statement performs an action and doesn't produce a value (e.g., if, for, while). Expressions can be part of statements.",
      },
      {
        q: "Can arrays have functions inside them?",
        a: "Yes, arrays in JavaScript can contain any type of data, including functions. Example: const arr = [1, 'hello', function() { console.log('Hi'); }]; You can call it like: arr[2]();",
      },
    ],
    intermediate: [
      {
        q: "What is a function in JS?",
        a: "A function is a reusable block of code designed to perform a specific task. Functions are first-class objects, meaning they can be assigned to variables, passed as arguments, returned from other functions, and have properties and methods.",
      },
      {
        q: "What is a prototype?",
        a: "A prototype is an object from which other objects inherit properties. Every JavaScript object has a prototype property that points to another object. This forms the prototype chain used for inheritance.",
      },
      {
        q: "What is the difference between __proto__, [[Prototype]], Object.getPrototypeOf() and Object.setPrototypeOf()?",
        a: "__proto__ is a legacy accessor property for [[Prototype]] (internal slot). Object.getPrototypeOf() is the standard way to retrieve an object's prototype. Object.setPrototypeOf() sets the prototype. Use getPrototypeOf/setPrototypeOf instead of __proto__.",
      },
      {
        q: "If I have an array, how can I access the filter method even though the array doesn't have a property called filter?",
        a: "Through the prototype chain. Arrays inherit from Array.prototype, which contains methods like filter(). When you call arr.filter(), JavaScript looks up the prototype chain and finds the method on Array.prototype.",
      },
      {
        q: "What is the event loop?",
        a: "The event loop is the mechanism that handles asynchronous operations in JavaScript. It continuously checks the call stack and task queues, pushing callbacks from completed async operations onto the call stack when it's empty.",
      },
      {
        q: "What is the difference between coercion and casting?",
        a: "Type coercion is automatic/implicit type conversion done by JavaScript (e.g., '5' + 1 = '51'). Type casting is explicit conversion done by the programmer using functions like Number(), String(), Boolean().",
      },
      {
        q: "What is an IIFE?",
        a: "IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it's defined. Syntax: (function() { /* code */ })(); Used to create private scope and avoid polluting global namespace. Common in pre-ES6 code.",
      },
      {
        q: "What is a first-class function?",
        a: "Functions are first-class citizens in JavaScript, meaning they can be: assigned to variables, passed as arguments to other functions, returned from functions, stored in data structures, and have properties/methods.",
      },
      {
        q: "What is a higher-order function? Give examples.",
        a: "A higher-order function either takes one or more functions as arguments or returns a function. Examples: map, filter, reduce (take functions), function makeMultiplier(x) { return (y) => x * y; } (returns function).",
      },
      {
        q: "Explain closure.",
        a: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are created when a function is defined inside another function. Used for data privacy and factory functions.",
      },
      {
        q: "What is prototypal inheritance? How does it differ from classical inheritance?",
        a: "Prototypal inheritance: objects inherit directly from other objects via the prototype chain. Classical inheritance: classes inherit from classes. JavaScript uses prototypal (even with class syntax, it's syntactic sugar). Prototypal is more flexible and dynamic.",
      },
      {
        q: "Types of queues?",
        a: "JavaScript has two main queues: Macrotask queue (task queue) for callbacks like setTimeout, setInterval, I/O operations; and Microtask queue for Promises, queueMicrotask, MutationObserver. Microtasks have higher priority than macrotasks.",
      },
      {
        q: "Difference between Set and Map?",
        a: "Set stores unique values (no duplicates) of any type. Map stores key-value pairs where keys can be any type (not just strings). Set: new Set([1,2,2,3]) → {1,2,3}. Map: new Map([['key', 'value']]).",
      },
      {
        q: "What is a pure function?",
        a: "A pure function always returns the same output for the same input and has no side effects (doesn't modify external state, no I/O operations). Example: const add = (a, b) => a + b; (pure) vs const addAndLog = (a, b) => { console.log(a); return a + b; } (impure).",
      },
      {
        q: "What is the difference between cookie, session storage, and local storage?",
        a: "Cookies: 4KB, sent with every HTTP request, can set expiration. localStorage: 5-10MB, persists until manually cleared, not sent with requests. sessionStorage: 5-10MB, cleared when tab closes, not sent with requests. All are origin-specific.",
      },
      {
        q: "What is the difference between null and undefined?",
        a: "undefined means a variable has been declared but not assigned a value (default state). null is an assignment value representing intentional absence of value. typeof undefined is 'undefined', typeof null is 'object' (JavaScript quirk).",
      },
      {
        q: "How to check for an empty object?",
        a: "Multiple ways: Object.keys(obj).length === 0, Object.entries(obj).length === 0, JSON.stringify(obj) === '{}', or use a for...in loop to check if there are any enumerable properties.",
      },
      {
        q: "What is Object.freeze()?",
        a: "Object.freeze() makes an object immutable - you can't add, delete, or modify properties. It's a shallow freeze (nested objects are not frozen). Use Object.isFrozen() to check if an object is frozen.",
      },
      {
        q: "What is the difference between ?? and ||?",
        a: "?? (Nullish Coalescing) returns right operand only if left is null or undefined. || (Logical OR) returns right operand if left is any falsy value (0, '', false, null, undefined, NaN). Example: 0 ?? 5 = 0, but 0 || 5 = 5.",
      },
      {
        q: "What is the difference between Axios and Fetch?",
        a: "Fetch is built-in browser API, returns promises, needs manual JSON parsing, doesn't reject on HTTP errors. Axios is a library, auto-transforms JSON, rejects HTTP errors, has request/response interceptors, timeout support, better browser support.",
      },
      {
        q: "How to remove falsy values from an array?",
        a: "Use filter with Boolean: arr.filter(Boolean) removes all falsy values (false, 0, '', null, undefined, NaN). Example: [0, 1, false, 2, '', 3].filter(Boolean) → [1, 2, 3].",
      },
      {
        q: "Is JS single or multi-threaded? Explain.",
        a: "JavaScript is single-threaded (one call stack), but can handle async operations through the event loop and Web APIs (in browsers) or libuv (in Node.js). Web Workers allow true parallel execution but can't access DOM.",
      },
      {
        q: "What is the importance of the defer attribute?",
        a: "The defer attribute in <script> tags makes scripts load in parallel with HTML parsing but execute only after parsing completes, maintaining script order. Better than async for dependent scripts. Doesn't block HTML parsing.",
      },
      {
        q: "Is JS asynchronous or synchronous?",
        a: "JavaScript is synchronous and single-threaded by nature (executes code line by line). However, it can handle asynchronous operations (callbacks, promises, async/await) through the event loop and Web APIs/Node APIs.",
      },
      {
        q: "3 < 2 < 1 → true or false? Why?",
        a: "True. Evaluated left to right: (3 < 2) < 1 → false < 1 → 0 < 1 → true. false is coerced to 0 in numeric comparison. This shows why chaining comparisons doesn't work as expected in JavaScript.",
      },
      {
        q: "Solve the following OR operations: a) 1 || 0  b) false || 0  c) 'ITI' || true",
        a: "a) 1 || 0 = 1 (returns first truthy value), b) false || 0 = 0 (returns last value if all falsy), c) 'ITI' || true = 'ITI' (returns first truthy value, non-empty string is truthy).",
      },
      {
        q: "Why does a function expression get invoked immediately?",
        a: "Function expressions don't get invoked immediately by default. In an IIFE, we wrap the function in parentheses to make it an expression, then add () to invoke it immediately: (function() {})(); The wrapping parens force it to be treated as an expression.",
      },
      {
        q: "What is the output of let a = 5 === let b = new Number(5)?",
        a: "This would cause a SyntaxError. You can't use let in an expression like this. If corrected to: let a = 5; let b = new Number(5); console.log(a === b); → false (primitive vs object). Even a == b would be false with ===.",
      },
      {
        q: "What is starvation in JS?",
        a: "Starvation occurs when microtasks continuously add more microtasks to the queue, preventing macrotasks (like setTimeout) from ever executing. The event loop prioritizes microtasks, so they can 'starve' macrotasks if they keep being added.",
      },
    ],
    hard: [
      {
        q: "What is currying in JS?",
        a: "Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. Example: const add = a => b => c => a + b + c; add(1)(2)(3) = 6. Useful for partial application and function composition.",
      },
      {
        q: "What is Temporal Dead Zone?",
        a: "TDZ is the time between entering a scope and the actual declaration of let/const variables. During this time, the variable exists but can't be accessed, resulting in a ReferenceError. TDZ ensures variables are used only after declaration, preventing hoisting issues.",
      },
      {
        q: "What is the difference between Promise.all and Promise.allSettled?",
        a: "Promise.all() rejects immediately if ANY promise rejects, returns array of values if all resolve. Promise.allSettled() waits for ALL promises regardless of outcome, returns array of objects with status ('fulfilled' or 'rejected') and value/reason.",
      },
      {
        q: "What is event delegation, capturing, and bubbling?",
        a: "Event bubbling: events propagate from target to root (default). Event capturing: events propagate from root to target (use capture: true). Event delegation: attach listener to parent, handle events from children using event.target. Improves performance and handles dynamic elements.",
      },
      {
        q: "Why can't arrow functions be used as constructor functions?",
        a: "Arrow functions don't have their own 'this' binding (they inherit from parent scope), don't have prototype property, and can't be called with 'new' keyword. Constructors need to create new objects with 'this', which arrow functions can't do.",
      },
      {
        q: "What is the scope chain?",
        a: "The scope chain is the hierarchy of scopes that JavaScript searches when looking up variables. It starts from the current scope, moves to parent scopes, and ends at the global scope. Each function creates a new scope linked to its parent scope.",
      },
      {
        q: "What is lexical environment and execution scope?",
        a: "Lexical environment is a structure holding variable bindings (identifier-value mappings) and a reference to the outer environment. Execution context is created when code runs, containing the lexical environment. Lexical scope means nested functions can access parent function variables.",
      },
      {
        q: "Is there namespace in JS like in Java?",
        a: "JavaScript doesn't have built-in namespaces like Java packages. Common patterns to simulate namespaces: object literals (const MyNamespace = {}), IIFE, ES6 modules. Modules are now the standard way to organize and encapsulate code.",
      },
      {
        q: "When to choose between closures or classes to encapsulate variables or methods?",
        a: "Use closures for: data privacy, factory functions, simple state management, functional programming. Use classes for: complex objects with inheritance, multiple instances with shared methods, clearer OOP structure, when you need instanceof checks. Closures use more memory per instance.",
      },
      {
        q: "Throttling, Debouncing, Rate Limiting.",
        a: "Throttling: executes function at most once per time interval (e.g., scroll events). Debouncing: executes function only after quiet period (e.g., search input). Rate Limiting: limits number of function calls per time period (e.g., API requests). All optimize performance.",
      },
      {
        q: "Scenario 1: Quiz app with countdown timer — how to design it?",
        a: "Use setInterval for countdown, store remaining time in state. On each tick, update display and check if time expired. Clear interval on unmount or quiz end. Consider: pause/resume functionality, store start time for accuracy, handle visibility change (tab switching), sync with server for security.",
      },
      {
        q: "Scenario 2: Search bar — trigger API after user stops typing (debounce).",
        a: "Implement debouncing: create debounce function that delays API call using setTimeout. Clear previous timeout on each keystroke. Only when user stops typing for X ms (e.g., 300ms), make API call. Cancel pending requests if new input arrives. Example: const debounce = (fn, delay) => { let timeoutId; return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => fn(...args), delay); }; };",
      },
      {
        q: "Scenario 3: Profile page — fetch profile first, then fetch friends (promise chaining or async/await).",
        a: "Using async/await: async function loadProfile() { try { const profile = await fetchProfile(); setProfile(profile); const friends = await fetchFriends(profile.id); setFriends(friends); } catch(error) { handleError(error); } } Or promise chaining: fetchProfile().then(profile => { setProfile(profile); return fetchFriends(profile.id); }).then(setFriends).catch(handleError). Async/await is cleaner.",
      },
    ],
  },
  git: {
    easy: [
      {
        q: "What is the difference between git pull and git fetch?",
        a: "git fetch downloads changes from the remote repository to your local branch without merging them. git pull fetches changes from the remote repository and immediately merges them into the current branch. Pull = Fetch + Merge.",
      },
      {
        q: "What is a branch in Git? How do you create and switch between branches?",
        a: "A branch is a pointer to a specific commit. Create with: git branch <branch-name>. Switch with: git checkout <branch-name> or git switch <branch-name> (newer). Create and switch: git checkout -b <branch-name> or git switch -c <branch-name>.",
      },
      {
        q: "What is the purpose of the .gitignore file?",
        a: ".gitignore tells Git which files or directories to ignore (not track) in a project. Common examples: node_modules/, .env, *.log, build/, .DS_Store. Prevents unnecessary or sensitive files from being committed to version control.",
      },
      {
        q: "What is git stash?",
        a: "git stash temporarily saves your uncommitted changes (both staged and unstaged) so you can work on something else, then restore them later. Use: git stash (save), git stash pop (restore and remove from stash), git stash apply (restore but keep in stash), git stash list (view all stashes).",
      },
      {
        q: "How do you clone a repository from GitHub?",
        a: "Use git clone <repository-url> replacing <repository-url> with the actual URL. Example: git clone https://github.com/username/repo.git. This creates a local copy of the repository with all its history and branches.",
      },
      {
        q: "How can you check the status of your local Git repository?",
        a: "Run git status to see which files are staged, unstaged, or untracked. It also shows your current branch and if you're ahead/behind the remote branch. Very useful before committing to review what changes will be included.",
      },
    ],
    intermediate: [
      {
        q: "Does git rebase change the commit SHA?",
        a: "Yes, rebasing rewrites commit history, which changes the SHA of affected commits. Even if the content is the same, the parent commit changes, resulting in new SHA hashes. Never rebase commits that have been pushed to shared branches.",
      },
      {
        q: "What does the git cherry-pick command do?",
        a: "git cherry-pick applies a specific commit from one branch to another without merging the whole branch. Useful for applying bug fixes or single changes. Example: git cherry-pick <commit-hash>. Creates a new commit with the same changes but different SHA.",
      },
      {
        q: "Do commits take a snapshot of all previous commits too?",
        a: "No. Each commit is an independent snapshot of the project at that point in time. Commits store only the differences (deltas) but reference their parent commits to build history. Git reconstructs full snapshots by following the commit chain.",
      },
      {
        q: "What is the HEAD pointer?",
        a: "HEAD is a pointer to the current commit (or the latest commit in the current branch). It represents your current working position in the repository. Usually points to a branch reference, but can point directly to a commit (detached HEAD state).",
      },
      {
        q: "What is the difference between merge and rebase?",
        a: "Merge combines branches and creates a new merge commit preserving history (shows when branches diverged and merged). Rebase rewrites commits on top of another branch, creating a linear history (cleaner but changes commit SHAs). Merge is safer for shared branches, rebase for local cleanup.",
      },
      {
        q: "How do you revert a commit that has already been pushed to the remote repository?",
        a: "Use git revert <commit-hash> to create a new commit that undoes the changes made by the specified commit, then push the new commit. This is safer than reset for shared branches because it doesn't rewrite history. Example: git revert HEAD (revert last commit).",
      },
      {
        q: "Describe the process of rebasing in Git.",
        a: "Rebasing moves or reapplies a sequence of commits to a new base commit. Process: 1) git rebase <base-branch> 2) Git finds common ancestor 3) Applies commits one by one on top of base 4) Resolve conflicts if any 5) git rebase --continue. Creates linear history. Use for cleaning local history before merge.",
      },
    ],
    hard: [
      {
        q: "What are Git hooks?",
        a: "Git hooks are scripts that run automatically before or after specific Git actions (like commit, push, merge). Stored in .git/hooks directory. Examples: pre-commit (run tests/linting), pre-push (run builds), post-commit (notifications). Can automate workflows and enforce standards.",
      },
      {
        q: "Can we perform cherry-pick from another repository?",
        a: "Yes, as long as the commit SHA exists in that repo. Commit SHAs are globally unique based on content and metadata. Add the other repo as a remote, fetch it, then cherry-pick the commit: git remote add other <url>, git fetch other, git cherry-pick <commit-hash>.",
      },
      {
        q: "Explain the difference between merge and rebase and when to prefer one.",
        a: "Merge creates a new merge commit preserving the true branching history - use for shared/public branches to preserve context and collaboration. Rebase rewrites history to make it linear - use for private branches to clean up before merging. Golden rule: never rebase public history.",
      },
      {
        q: "What is the difference between git reset, git revert, and git restore?",
        a: "git reset moves HEAD and optionally changes index/working directory (--soft, --mixed, --hard). Rewrites history. git revert creates a new commit that undoes another commit, preserving history. git restore restores file content to a previous state without affecting commit history. Reset = rewrite, Revert = undo safely, Restore = file recovery.",
      },
      {
        q: "What is a detached HEAD state?",
        a: "Occurs when you check out a specific commit instead of a branch, meaning you're no longer on a branch. New commits won't belong to any branch unless you create one. Git warns: 'You are in detached HEAD state'. To keep changes: git branch <new-branch-name> then switch to it.",
      },
      {
        q: "What is git reflog used for?",
        a: "git reflog records all changes to HEAD, allowing you to recover lost commits or branches after resets or rebases. It's like an undo history for Git operations. Useful when you accidentally deleted a branch or reset too far. Entries expire after 90 days by default.",
      },
      {
        q: "What is a bare repository?",
        a: "A repository without a working directory - mainly used as a remote to store and share code. Created with: git init --bare. Contains only the .git directory contents. Used on servers (like GitHub) where you push/pull but don't directly edit files. Convention: name ends with .git (e.g., project.git).",
      },
    ],
  },
  nodejs: {
    easy: [
      {
        q: "What is Node.js?",
        a: "Node.js is a JavaScript runtime environment built on Chrome's V8 engine that allows JavaScript to run on the server side. It's event-driven, non-blocking, and ideal for building scalable network applications.",
      },
    ],
    intermediate: [],
    hard: [],
  },
  mongodb: {
    easy: [
      {
        q: "What is MongoDB?",
        a: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. It's designed for scalability and developer agility.",
      },
    ],
    intermediate: [],
    hard: [],
  },
  oop: {
    easy: [
      {
        q: "What is Object-Oriented Programming?",
        a: "OOP is a programming paradigm based on the concept of objects, which contain data (properties) and code (methods). Main principles: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      },
    ],
    intermediate: [],
    hard: [],
  },
  solid: {
    easy: [
      {
        q: "What does SOLID stand for?",
        a: "SOLID is an acronym for five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles make software designs more understandable, flexible, and maintainable.",
      },
    ],
    intermediate: [],
    hard: [],
  },
  general: {
    easy: [
      {
        q: "What is an API?",
        a: "API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. REST APIs are common for web services.",
      },
    ],
    intermediate: [],
    hard: [],
  },
};

const topicButtons = document.querySelectorAll(".topic-btn");
const content = document.getElementById("content");

// Topic selection handler
topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;

    // Update active button
    topicButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Display questions for the selected topic
    displayQuestions(topic);
  });
});

function displayQuestions(topic) {
  const topicData = questions[topic];

  if (!topicData) {
    content.innerHTML = "<p>Content coming soon for this topic!</p>";
    return;
  }

  let html = `<h1 style="color: #667eea; margin-bottom: 30px; text-transform: capitalize;">${topic} Interview Questions</h1>`;

  const difficulties = [
    { key: "easy", label: "Easy", icon: "🟢" },
    { key: "intermediate", label: "Intermediate", icon: "🟡" },
    { key: "hard", label: "Hard", icon: "🔴" },
  ];

  difficulties.forEach((diff) => {
    const questionsArray = topicData[diff.key];

    if (questionsArray && questionsArray.length > 0) {
      html += `
                <div class="difficulty-section ${diff.key}">
                    <div class="difficulty-header">
                        <span class="difficulty-icon">${diff.icon}</span>
                        <h2>${diff.label} Questions (${questionsArray.length})</h2>
                    </div>
            `;

      questionsArray.forEach((item, index) => {
        html += `
                    <div class="question-card" data-question-id="${
                      diff.key
                    }-${index}">
                        <div class="question-header">
                            <span class="question-number">${index + 1}</span>
                            <div class="question-text">${item.q}</div>
                            <span class="toggle-icon">▼</span>
                        </div>
                        <div class="answer-section">
                            <span class="answer-label">Answer:</span>
                            <div class="answer-text">${item.a}</div>
                            ${
                              item.example
                                ? `
                                <div class="example-section">
                                    <div class="example-label">💡 Example:</div>
                                    <div class="example-code">${item.example}</div>
                                </div>
                            `
                                : ""
                            }
                        </div>
                    </div>
                `;
      });

      html += `</div>`;
    }
  });

  content.innerHTML = html;

  // Add click handlers to question cards
  document.querySelectorAll(".question-card").forEach((card) => {
    card.querySelector(".question-header").addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });
}

// Optional: Display first topic by default
// displayQuestions('javascript');
