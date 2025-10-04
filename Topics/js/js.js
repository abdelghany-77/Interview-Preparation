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
        example: `console.log(x); // undefined (var is hoisted)
var x = 5;

console.log(y); // ReferenceError (let is in TDZ)
let y = 10;

greet(); // "Hello!" (function declarations are fully hoisted)
function greet() { console.log("Hello!"); }`,
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
        example: `const person = { name: 'John' };

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

// call - invokes immediately, args individually
greet.call(person, 'Hello', '!'); // "Hello, John!"

// apply - invokes immediately, args as array
greet.apply(person, ['Hi', '?']); // "Hi, John?"

// bind - returns new function with 'this' bound
const boundGreet = greet.bind(person);
boundGreet('Hey', '.'); // "Hey, John."`,
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
        example: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Data loaded!');
    } else {
      reject('Error occurred');
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));`,
      },
      {
        q: "What is the difference between Promise and async/await?",
        a: "async/await is syntactic sugar over Promises. Promises use .then() chains, while async/await makes asynchronous code look synchronous and more readable. async functions always return a Promise, await pauses execution until Promise resolves.",
        example: `// Using Promises
fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Using async/await (cleaner syntax)
async function getData() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}`,
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
        a: "Yes, arrays can contain functions as elements since functions are first-class objects in JavaScript. Example: const arr = [function() { return 'hello'; }, () => 'world']; arr[0]() returns 'hello'.",
      },
    ],
    intermediate: [
      {
        q: "What is a function in JS?",
        a: "A function is a reusable block of code designed to perform a specific task. Functions are first-class objects in JavaScript, meaning they can be assigned to variables, passed as arguments, returned from other functions, and have properties and methods.",
      },
      {
        q: "What is a prototype?",
        a: "A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has an internal link to another object called its prototype. When accessing a property, JavaScript first looks at the object itself, then its prototype chain.",
      },
      {
        q: "What is the difference between __proto__, [[Prototype]], Object.getPrototypeOf() and Object.setPrototypeOf()?",
        a: "__proto__ is a property that provides access to an object's prototype (deprecated but widely supported). [[Prototype]] is the internal property (not directly accessible). Object.getPrototypeOf() is the standard way to get an object's prototype. Object.setPrototypeOf() sets an object's prototype.",
      },
      {
        q: "If I have an array, how can I access the filter method even though the array doesn't have a property called filter?",
        a: "Arrays inherit the filter method from Array.prototype through the prototype chain. When you call arr.filter(), JavaScript looks for 'filter' on the array object, doesn't find it, then looks up the prototype chain and finds it on Array.prototype.",
      },
      {
        q: "What is the event loop?",
        a: "The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks the call stack and task queues. When the call stack is empty, it takes the first task from the queue and pushes it to the call stack for execution.",
      },
      {
        q: "What is the difference between coercion and casting?",
        a: "Type coercion is the automatic conversion of values from one data type to another (implicit). Type casting is when you explicitly convert a value from one type to another. Example: '5' + 2 = '52' (coercion), Number('5') + 2 = 7 (casting).",
      },
      {
        q: "What is an IIFE?",
        a: "IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it's defined. It's used to create a private scope and avoid polluting the global namespace. Syntax: (function() { // code })() or (() => { // code })()",
      },
      {
        q: "What is a first-class function?",
        a: "In JavaScript, functions are first-class citizens, meaning they can be: assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures. This enables functional programming patterns.",
      },
      {
        q: "What is a higher-order function? Give examples.",
        a: "A higher-order function is a function that either takes one or more functions as arguments or returns a function. Examples: map(), filter(), reduce(), forEach(). Example: function higherOrder(fn) { return fn(5); }",
      },
      {
        q: "Explain closure.",
        a: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures allow data privacy and factory patterns. Example: function outer() { let count = 0; return function() { count++; } }",
      },
      {
        q: "What is prototypal inheritance? How does it differ from classical inheritance?",
        a: "Prototypal inheritance means objects inherit directly from other objects through the prototype chain. Classical inheritance (in languages like Java) uses classes as blueprints. JavaScript's inheritance is more flexible - objects can inherit from any other object without needing class definitions.",
      },
      {
        q: "Types of queues?",
        a: "JavaScript has two main types of task queues: Microtask queue (for Promises, process.nextTick) which has higher priority, and Macrotask queue (for setTimeout, setInterval, I/O operations) which has lower priority. Microtasks are executed before macrotasks.",
      },
      {
        q: "Difference between Set and Map?",
        a: "Set stores unique values of any type (no duplicates). Map stores key-value pairs where keys can be any type. Set is for checking membership, Map is for key-value associations. Example: new Set([1,2,2]) = {1,2}, new Map([['a',1],['b',2]])",
      },
      {
        q: "What is a pure function?",
        a: "A pure function is a function that: 1) Always returns the same output for the same inputs, 2) Has no side effects (doesn't modify external state). Pure functions are predictable, testable, and essential for functional programming. Example: (a, b) => a + b",
      },
      {
        q: "What is the difference between cookie, session storage, and local storage?",
        a: "Cookies: sent with every HTTP request, 4KB limit, can have expiration. Session Storage: 5-10MB, cleared when tab closes, not sent with requests. Local Storage: 5-10MB, persists until manually cleared, not sent with requests. All are domain-specific.",
      },
      {
        q: "What is the difference between null and undefined?",
        a: "undefined means a variable has been declared but not assigned a value, or a function doesn't return anything. null is an explicit assignment meaning 'no value' or 'empty'. typeof undefined = 'undefined', typeof null = 'object' (JavaScript quirk).",
      },
      {
        q: "How to check for an empty object?",
        a: "Several ways: 1) Object.keys(obj).length === 0, 2) JSON.stringify(obj) === '{}', 3) Object.entries(obj).length === 0. The first method is most efficient and commonly used.",
      },
      {
        q: "What is Object.freeze()?",
        a: "Object.freeze() makes an object immutable - you cannot add, delete, or modify its properties. It only does shallow freeze (nested objects aren't frozen). Example: const obj = Object.freeze({a: 1}); obj.a = 2; // fails silently or throws error in strict mode",
      },
      {
        q: "What is the difference between ?? and ||?",
        a: "?? (Nullish coalescing) returns the right operand only if left is null or undefined. || (OR) returns right operand if left is any falsy value (0, '', false, null, undefined, NaN). Example: 0 ?? 5 = 0, but 0 || 5 = 5",
      },
      {
        q: "What is the difference between Axios and Fetch?",
        a: "Fetch is native browser API, returns promise. Axios is a library with more features: automatic JSON transformation, request/response interceptors, timeout support, better error handling, works in older browsers. Fetch requires more manual handling of responses.",
      },
      {
        q: "How to remove falsy values from an array?",
        a: "Use filter with Boolean: arr.filter(Boolean). This removes all falsy values (false, 0, '', null, undefined, NaN). Example: [0, 1, false, 2, '', 3].filter(Boolean) returns [1, 2, 3]",
      },
      {
        q: "Is JS single or multi-threaded? Explain.",
        a: "JavaScript is single-threaded, meaning it executes one task at a time on the main thread. However, it can handle asynchronous operations through the event loop, callbacks, and Web APIs. Web Workers can be used for true multi-threading in browsers.",
      },
      {
        q: "What is the importance of the defer attribute?",
        a: "The defer attribute in script tags tells the browser to download the script in parallel with HTML parsing but execute it only after the HTML is fully parsed. This improves page load performance and ensures DOM is ready before script execution.",
      },
      {
        q: "Is JS asynchronous or synchronous?",
        a: "JavaScript is synchronous by default (executes line by line), but it has asynchronous capabilities through callbacks, Promises, async/await, and Web APIs. Asynchronous operations don't block the main thread and are handled via the event loop.",
      },
      {
        q: "3 < 2 < 1 → true or false? Why?",
        a: "True. Because: 3 < 2 evaluates to false, then false < 1. false is coerced to 0, so 0 < 1 is true. This demonstrates JavaScript's type coercion in comparisons.",
      },
      {
        q: "Solve the following OR operations: a) 1 || 0 b) false || 0 c) 'ITI' || true",
        a: "a) 1 (returns first truthy value), b) 0 (false is falsy, so returns second value), c) 'ITI' (returns first truthy value). The || operator returns the first truthy value or the last value if all are falsy.",
      },
      {
        q: "Why does a function expression get invoked immediately?",
        a: "A function expression gets invoked immediately when wrapped in parentheses and followed by () - this creates an IIFE. Example: (function() { console.log('runs immediately'); })(). The grouping operator () makes it an expression, then () invokes it.",
      },
      {
        q: "What is the output of let a = 5 === let b = new Number(5)?",
        a: "This is a syntax error. You cannot use 'let' on the right side of an expression like this. If it were 'let a = (5 === new Number(5))', it would be false because === compares type and value, and new Number(5) creates an object, not a primitive.",
      },
      {
        q: "What is starvation in JS?",
        a: "Starvation occurs when microtasks continuously generate new microtasks, preventing macrotasks from executing. Since the event loop prioritizes microtasks, macrotasks can be 'starved' and never get a chance to run if microtasks keep queuing infinitely.",
      },
    ],
    hard: [
      {
        q: "What is currying in JS?",
        a: "Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument. Example: function curry(a) { return function(b) { return function(c) { return a + b + c; }}}; curry(1)(2)(3) returns 6. Useful for partial application.",
      },
      {
        q: "What is Temporal Dead Zone?",
        a: "The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration of a let or const variable. Accessing the variable during TDZ throws a ReferenceError. This prevents using variables before declaration, unlike var which returns undefined.",
      },
      {
        q: "What is the difference between Promise.all and Promise.allSettled?",
        a: "Promise.all() rejects immediately if any promise rejects, and resolves only when all promises resolve. Promise.allSettled() waits for all promises to settle (resolve or reject) and returns an array of results with status and value/reason for each promise.",
      },
      {
        q: "What is event delegation, capturing, and bubbling?",
        a: "Event bubbling: events propagate from target element up to root. Event capturing: events propagate from root down to target. Event delegation: attaching a single event listener to a parent element to handle events from children (using bubbling). This improves performance with many elements.",
      },
      {
        q: "Why can't arrow functions be used as constructor functions?",
        a: "Arrow functions cannot be constructors because: 1) They don't have their own 'this' binding (inherit from enclosing scope), 2) They don't have a prototype property, 3) They can't be called with 'new' keyword - it will throw a TypeError.",
      },
      {
        q: "What is the scope chain?",
        a: "The scope chain is the mechanism JavaScript uses to resolve variable references. When accessing a variable, JavaScript looks in the current scope first, then moves up through outer scopes until it finds the variable or reaches global scope. Each function creates a new scope in the chain.",
      },
      {
        q: "What is lexical environment and execution scope?",
        a: "Lexical environment is a structure that holds identifier-variable mapping and a reference to the outer lexical environment. It's created when code is written (lexical scoping). Execution context is the runtime environment where code executes, containing the lexical environment, this binding, and variable environment.",
      },
      {
        q: "Is there namespace in JS like in Java?",
        a: "JavaScript doesn't have built-in namespaces like Java packages. However, you can create namespace-like structures using: objects (const MyNamespace = {}), modules (ES6 import/export), or IIFEs. ES6 modules are the modern approach for organizing code into separate namespaces.",
      },
      {
        q: "When to choose between closures or classes to encapsulate variables or methods?",
        a: "Use closures for: simple data privacy, factory functions, single instances. Use classes for: multiple instances with shared behavior, inheritance hierarchies, when you need instanceof checks, more explicit OOP patterns. Classes are clearer for complex object structures, closures for functional patterns.",
      },
      {
        q: "Throttling, Debouncing, Rate Limiting.",
        a: "Throttling: Executes function at most once per time interval (e.g., scroll events). Debouncing: Executes function only after a delay with no new calls (e.g., search input). Rate Limiting: Limits number of function calls in a time window. All optimize performance for frequent events.",
      },
      {
        q: "Scenario 1: Quiz app with countdown timer — how to design it?",
        a: "Use setInterval for countdown timer, store remaining time in state, clear interval when time reaches 0 or quiz completes. Handle edge cases: page refresh (use localStorage to persist time), pause functionality (clearInterval), and auto-submit when timer expires. Consider using requestAnimationFrame for smoother updates.",
      },
      {
        q: "Scenario 2: Search bar — trigger API after user stops typing (debounce).",
        a: "Implement debouncing: on each keystroke, clear previous timeout and set new timeout (e.g., 300ms). Only make API call if no new keystroke within timeout period. Cancel pending requests if new search starts. Consider showing loading state and handling race conditions with request IDs.",
      },
      {
        q: "Scenario 3: Profile page — fetch profile first, then fetch friends (promise chaining or async/await).",
        a: "Use async/await for cleaner code: const profile = await fetchProfile(); const friends = await fetchFriends(profile.id); Or Promise chaining: fetchProfile().then(profile => fetchFriends(profile.id)).then(friends => {...}). Handle errors with try-catch or .catch(). Consider Promise.all if requests are independent.",
      },
    ],
  },
};

// Function to render questions
function renderQuestions() {
  const content = document.getElementById("content");
  const topic = questions.javascript;

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
        <div class="question-card expanded" data-question-id="js-easy-${index}">
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
        <div class="question-card expanded" data-question-id="js-intermediate-${index}">
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
        <div class="question-card expanded" data-question-id="js-hard-${index}">
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
function updateProgress(questionId) {
  const progress = localStorage.getItem("questionProgress");
  const progressData = progress ? JSON.parse(progress) : {};

  if (!progressData.javascript) {
    progressData.javascript = [];
  }

  if (!progressData.javascript.includes(questionId)) {
    progressData.javascript.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
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

// Load questions on page load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuestions();
  initBackToTop();
});
