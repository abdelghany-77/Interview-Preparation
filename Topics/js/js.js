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
        q: "What are let and const in ES6?",
        a: "In ES6, `let` and `const` declare block-scoped variables. `let` creates mutable variables that can be reassigned, while `const` creates read-only references that cannot be reassigned. Both are scoped to the nearest block (e.g., if statements), unlike var which is function-scoped.",
        example: `// Block scoping
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
console.log(z); // 30
console.log(x); // ReferenceError: x is not defined

// const with objects - reference is immutable, not content
const person = { name: 'John' };
person.name = 'Jane'; // ✓ Allowed
person = {}; // ✗ TypeError: Assignment to constant variable`,
      },
      {
        q: "What are arrow functions in ES6?",
        a: "Arrow functions provide concise syntax for function expressions using `=>`. They omit `function` and `return` keywords for single expressions, and do not bind their own `this` (lexical binding). Parentheses can be skipped for single parameters, and braces for multi-line bodies.",
        example: `// Traditional function
const sum1 = function(a, b) {
  return a + b;
};

// Arrow function - concise
const sum2 = (a, b) => a + b;

// Single parameter - no parentheses needed
const double = x => x * 2;

// No parameters - empty parentheses required
const greet = () => console.log('Hello!');

// Lexical 'this' binding
function Timer() {
  this.seconds = 0;
  
  // Arrow function inherits 'this' from Timer
  setInterval(() => {
    this.seconds++;
  }, 1000);
}`,
      },
      {
        q: "What are template literals in ES6?",
        a: "Template literals use backticks (`` ` ``) for multi-line strings and embedded expressions via `${expression}`. Tagged template literals prefix a function before the template for custom processing (e.g., CSS-in-JS).",
        example: `// Multi-line strings
const message = \`Hello,
this is a
multi-line string\`;

// Expression interpolation
const name = 'John';
const age = 30;
const greeting = \`My name is \${name} and I'm \${age} years old\`;

// Expression evaluation
const price = 19.99;
const tax = 0.1;
const total = \`Total: $\${(price * (1 + tax)).toFixed(2)}\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => 
    \`\${acc}\${str}<strong>\${values[i] || ''}</strong>\`, '');
}
const name = 'Alice';
const result = highlight\`Hello \${name}!\`;`,
      },
      {
        q: "What is destructuring in ES6?",
        a: "Destructuring extracts values from arrays/objects into variables. Used in declarations, assignments, parameters, and for-of loops. For objects: `{prop}`; for arrays: `[val]`.",
        example: `// Object destructuring
const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = person;

// With renaming
const { name: fullName, age: years } = person;

// With default values
const { name, country = 'USA' } = person;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;

// Skip elements
const [, , third] = colors;

// Rest operator
const [primary, ...others] = colors;

// Nested destructuring
const user = {
  id: 1,
  profile: { name: 'Alice', email: 'alice@example.com' }
};
const { profile: { name, email } } = user;

// Function parameters
function displayUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}`,
      },
      {
        q: "What are default parameters in ES6?",
        a: "Functions can have default values for parameters if undefined is passed, avoiding manual checks.",
        example: `// Without default parameters (ES5)
function greet(name) {
  name = name || 'Guest';
  return 'Hello ' + name;
}

// With default parameters (ES6)
function greet(name = 'Guest') {
  return \`Hello \${name}\`;
}

// Default with expressions
function createUser(name, role = 'user', id = Date.now()) {
  return { name, role, id };
}

// Using previous parameters
function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}`,
      },
      {
        q: "What is the rest parameter in ES6?",
        a: "Rest parameters (`...args`) collect indefinite arguments into an array as the last parameter, replacing `arguments` object.",
        example: `// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// With regular parameters
function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]

// Difference from arguments object
function oldWay() {
  const args = Array.from(arguments); // Convert to array
  return args.reduce((a, b) => a + b);
}

function newWay(...args) {
  return args.reduce((a, b) => a + b); // Already an array
}`,
      },
      {
        q: "What is the spread operator in ES6?",
        a: "Spread (`...`) expands iterables (arrays/objects/strings) into arguments or elements. Opposite of rest.",
        example: `// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy arrays
const original = [1, 2, 3];
const copy = [...original];

// Object spreading
const person = { name: 'John', age: 30 };
const employee = { ...person, role: 'Developer', age: 31 };
// { name: 'John', age: 31, role: 'Developer' }

// Function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// String spreading
const str = 'Hello';
const chars = [...str]; // ['H', 'e', 'l', 'l', 'o']`,
      },
      {
        q: "What are enhanced object literals in ES6?",
        a: "ES6 enhances object literals with property shorthand (e.g., `a` instead of `a: a`), method shorthand (e.g., `sum(a, b) { ... }` without `function`), and computed property names using `[expression]`.",
        example: `const name = 'Alice';
const age = 25;

// ES5
const person1 = {
  name: name,
  age: age,
  greet: function() {
    return 'Hello';
  }
};

// ES6 - Property shorthand
const person2 = {
  name,
  age,
  greet() {  // Method shorthand
    return 'Hello';
  }
};

// Computed property names
const prop = 'firstName';
const user = {
  [prop]: 'John',
  ['last' + 'Name']: 'Doe',
  [\`age_\${Date.now()}\`]: 30
};`,
      },
      {
        q: "What is Set in ES6?",
        a: "Set stores unique values of any type. Methods: `add`, `has`, `size`, `delete`.",
        example: `// Creating a Set
const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Set(4) {1, 2, 3, 4}

// Add values
numbers.add(5);
numbers.add(3); // Ignored - already exists

// Check existence
console.log(numbers.has(3)); // true

// Size
console.log(numbers.size); // 5

// Delete
numbers.delete(2);

// Iterate
for (const num of numbers) {
  console.log(num);
}

// Remove duplicates from array
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)]; // [1, 2, 3, 4]`,
      },
      {
        q: "What is Map in ES6?",
        a: "Map stores key-value pairs with any type as keys (including objects/primitives), maintains insertion order. Methods: `set`, `get`, `has`, `size`.",
        example: `// Creating a Map
const map = new Map();

// Set values
map.set('name', 'John');
map.set('age', 30);
map.set(1, 'number key');

// Objects as keys
const keyObj = { id: 1 };
map.set(keyObj, 'object value');

// Get values
console.log(map.get('name')); // 'John'
console.log(map.get(keyObj)); // 'object value'

// Check existence
console.log(map.has('age')); // true

// Size
console.log(map.size); // 4

// Iterate
for (const [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}

// Convert to array
const entries = [...map]; // [[key, value], ...]`,
      },
      {
        q: "What are Symbols in ES6?",
        a: "Symbols are unique primitives for unique identifiers (e.g., object properties, constants). Created via `Symbol(description)`. Global registry via `Symbol.for`. Equality false unless from registry.",
        example: `// Create unique symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false (always unique)

// Use as object keys
const id = Symbol('id');
const user = {
  name: 'John',
  [id]: 123
};
console.log(user[id]); // 123

// Hidden from normal iteration
console.log(Object.keys(user)); // ['name']
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

// Global symbol registry
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
console.log(globalSym1 === globalSym2); // true

// Well-known symbols
const obj = {
  [Symbol.iterator]() {
    // Custom iterator
  }
};`,
      },
      {
        q: "What are Promises in ES6?",
        a: "Promises represent async operation outcomes (pending/fulfilled/rejected). Chain with `then`/`catch`/`finally`. Settled means fulfilled or rejected.",
        example: `// Creating a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed!');
    }
  }, 1000);
});

// Consuming promises
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));

// Promise.all - wait for all
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results));

// Promise.race - first to finish
Promise.race([promise1, promise2])
  .then(result => console.log(result));

// Promise.allSettled - wait for all, get all results
Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
// [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]`,
      },
      {
        q: "What are classes in ES6?",
        a: "Classes are syntactic sugar over prototype-based inheritance. They support constructors, getters/setters, inheritance via `extends`, and methods. Defined via class declarations or expressions. They do not introduce a new OOP model but simplify constructor functions.",
        example: `// Class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  // Getter
  get info() {
    return \`\${this.name}, \${this.age}\`;
  }
  
  // Setter
  set age(value) {
    if (value < 0) throw new Error('Invalid age');
    this._age = value;
  }
  
  // Static method
  static species() {
    return 'Homo sapiens';
  }
}

// Inheritance
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age); // Call parent constructor
    this.role = role;
  }
  
  greet() {
    return \`\${super.greet()}, I'm a \${this.role}\`;
  }
}

const emp = new Employee('John', 30, 'Developer');`,
      },
      {
        q: "What is a function in JS?",
        a: "A function is a reusable block of code designed to perform a specific task. Functions are first-class objects, meaning they can be assigned to variables, passed as arguments, returned from other functions, and have properties and methods.",
      },
      {
        q: "What is a prototype?",
        a: "A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has an internal link to another object called its prototype. When accessing a property, JavaScript first looks at the object itself, then its prototype chain.",
        example: `// Every function has a prototype property
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I'm John"
console.log(john.__proto__ === Person.prototype); // true

// Prototype chain
console.log(john.__proto__); // Person.prototype
console.log(john.__proto__.__proto__); // Object.prototype
console.log(john.__proto__.__proto__.__proto__); // null

// Adding methods to built-in prototypes (not recommended)
Array.prototype.last = function() {
  return this[this.length - 1];
};
[1, 2, 3].last(); // 3`,
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
        example: `console.log('1');

setTimeout(() => {
  console.log('2'); // Macrotask - goes to macrotask queue
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // Microtask - goes to microtask queue
});

console.log('4');

// Output: 1, 4, 3, 2
// Execution order:
// 1. Synchronous code: console.log('1'), console.log('4')
// 2. Microtask queue: Promise callback (3)
// 3. Macrotask queue: setTimeout callback (2)

// Event loop phases:
// 1. Call Stack → Execute sync code
// 2. Microtask Queue → Process all microtasks
// 3. Macrotask Queue → Process one macrotask
// 4. Repeat`,
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
        a: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures allow data privacy and factory patterns.",
        example: `// Basic closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Data privacy with closures
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return 'Insufficient funds';
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50); // 150
account.withdraw(30); // 120
console.log(account.balance); // undefined (private!)
console.log(account.getBalance()); // 120`,
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
        a: "Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument. Useful for partial application and creating specialized functions.",
        example: `// Basic currying
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6

// Practical example - partial application
const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6`,
      },
      {
        q: "What is debouncing?",
        a: "Debouncing limits the rate at which a function is executed. The function is only called after a certain amount of time has passed since the last invocation. Useful for search inputs, resize events, etc.",
        example: `// Debounce implementation
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage - search input
const searchAPI = (query) => {
  console.log('Searching for:', query);
  // API call here
};

const debouncedSearch = debounce(searchAPI, 300);

// User types: "h", "he", "hel", "hello"
// API is only called once after 300ms of no typing
input.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});

// Window resize example
const handleResize = debounce(() => {
  console.log('Window resized!');
}, 500);

window.addEventListener('resize', handleResize);`,
      },
      {
        q: "What is throttling?",
        a: "Throttling ensures a function is called at most once in a specified time period, regardless of how many times the event is triggered. Useful for scroll events, mouse movements, etc.",
        example: `// Throttle implementation
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage - scroll event
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY);
};

const throttledScroll = throttle(handleScroll, 1000);

// Function is called max once per second, even if user scrolls continuously
window.addEventListener('scroll', throttledScroll);

// Mouse move example
const trackMouse = throttle((e) => {
  console.log('Mouse at:', e.clientX, e.clientY);
}, 100);

document.addEventListener('mousemove', trackMouse);

// Difference: Debounce waits for quiet period, Throttle guarantees regular execution`,
      },
      {
        q: "What is event bubbling and capturing?",
        a: "Event bubbling is when an event propagates from the target element up through its ancestors to the root. Event capturing (trickling) is the opposite - from root down to target. By default, events bubble.",
        example: `// HTML: <div id="outer"><div id="inner"><button>Click</button></div></div>

// Event Bubbling (default)
document.querySelector('#outer').addEventListener('click', () => {
  console.log('Outer clicked');
});

document.querySelector('#inner').addEventListener('click', () => {
  console.log('Inner clicked');
});

document.querySelector('button').addEventListener('click', () => {
  console.log('Button clicked');
});

// Clicking button outputs: Button clicked → Inner clicked → Outer clicked

// Event Capturing (set third parameter to true)
document.querySelector('#outer').addEventListener('click', () => {
  console.log('Outer captured');
}, true);

// Event Delegation - efficient event handling
document.querySelector('#parent').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    // Handle delete for any child element with this class
    e.target.closest('li').remove();
  }
});

// Stop propagation
button.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents bubbling
  console.log('Only button handler runs');
});`,
      },
      {
        q: "What is CORS?",
        a: "CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts web pages from making requests to a different domain than the one serving the page. Browsers block cross-origin requests by default for security.",
        example: `// CORS headers (server-side)
// Server needs to send these headers:
// Access-Control-Allow-Origin: * or specific domain
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE
// Access-Control-Allow-Headers: Content-Type

// Client-side request (browser automatically handles CORS)
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'value' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('CORS error:', error));

// CORS preflight request (for complex requests)
// Browser sends OPTIONS request first to check if actual request is allowed

// Workarounds (development only):
// 1. CORS proxy
// 2. JSONP (old technique)
// 3. Server-side proxy
// 4. Browser extensions (disable CORS - NOT for production)`,
      },
      {
        q: "What is the difference between deep clone and shallow clone?",
        a: "Shallow clone copies only the first level of properties. Nested objects are copied by reference. Deep clone recursively copies all levels, creating completely independent copies.",
        example: `const original = {
  name: 'John',
  address: { city: 'NYC', zip: '10001' }
};

// Shallow clone methods
const shallow1 = { ...original };
const shallow2 = Object.assign({}, original);
const shallow3 = Array.from(original); // for arrays

shallow1.name = 'Jane'; // OK - primitive changed
shallow1.address.city = 'LA'; // Problem! Original also changed

console.log(original.address.city); // 'LA' - mutated!

// Deep clone methods

// 1. JSON (limitations: no functions, undefined, symbols, dates)
const deep1 = JSON.parse(JSON.stringify(original));

// 2. Custom recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// 3. structuredClone (modern browsers)
const deep2 = structuredClone(original);

deep2.address.city = 'LA';
console.log(original.address.city); // 'NYC' - not mutated!`,
      },
      {
        q: "What is MVC, MVP, MVVM?",
        a: "These are architectural patterns for organizing code. MVC (Model-View-Controller): User interacts with View, Controller updates Model, Model updates View. MVP (Model-View-Presenter): View is passive, Presenter handles all logic. MVVM (Model-View-ViewModel): ViewModel binds View and Model with two-way data binding.",
        example: `// MVC Pattern
class Model {
  constructor() {
    this.data = [];
  }
  
  addItem(item) {
    this.data.push(item);
  }
}

class View {
  render(data) {
    // Update DOM with data
    document.getElementById('list').innerHTML = 
      data.map(item => \`<li>\${item}</li>\`).join('');
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  
  addItem(item) {
    this.model.addItem(item);
    this.view.render(this.model.data);
  }
}

// Usage
const app = new Controller(new Model(), new View());
app.addItem('Task 1');

// MVVM Pattern (like Vue.js, Angular)
// ViewModel provides two-way data binding
class ViewModel {
  constructor() {
    this.data = reactive({ items: [] });
    this.addItem = (item) => {
      this.data.items.push(item);
      // View automatically updates due to reactivity
    };
  }
}`,
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
