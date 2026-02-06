const questions = {
  php: {
    easy: [
      {
        q: "What is PHP?",
        a: "PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It's embedded in HTML and executed on the server, generating dynamic web content.",
      },
      {
        q: "What are the main features of PHP?",
        a: "Key features include: Cross-platform compatibility, Open source, Supports multiple databases, Easy to learn, Strong community support, Object-oriented programming support, Built-in security features, and extensive library functions.",
      },
      {
        q: "What is the difference between echo and print?",
        a: "Both output data to the screen. echo is faster and can take multiple parameters without parentheses. print returns a value (1) and can only take one argument, making it slightly slower.",
        example: `// echo - no return value, faster
echo "Hello", " ", "World";

// print - returns 1, slower
print "Hello World";
$result = print "Hello"; // $result = 1`,
      },
      {
        q: "What are PHP data types?",
        a: "PHP supports: String, Integer, Float, Boolean, Array, Object, NULL, and Resource. PHP is loosely typed, meaning variables don't need explicit type declaration.",
        example: `$string = "Hello";        // String
$integer = 42;           // Integer
$float = 3.14;           // Float
$boolean = true;         // Boolean
$array = [1, 2, 3];      // Array
$null = null;            // NULL`,
      },
      {
        q: "How do you declare a variable in PHP?",
        a: "Variables start with $ followed by the variable name. PHP is case-sensitive for variable names. Variables don't need type declaration.",
        example: `$name = "John";
$age = 25;
$isStudent = true;

// Variable variables
$var = "name";
$$var = "John"; // Creates $name = "John"`,
      },
      {
        q: "What is the difference between single and double quotes?",
        a: "Single quotes treat strings literally. Double quotes parse variables and escape sequences. Double quotes are slightly slower but more flexible.",
        example: `$name = "World";
echo 'Hello $name';    // Output: Hello $name
echo "Hello $name";    // Output: Hello World
echo 'Line 1\\nLine 2'; // \\n printed literally
echo "Line 1\\nLine 2"; // New line created`,
      },
      {
        q: "What are constants in PHP?",
        a: "Constants are identifiers for fixed values that cannot be changed during script execution. Defined using define() function or const keyword.",
        example: `// Using define()
define("SITE_NAME", "My Website");
echo SITE_NAME;

// Using const (PHP 5.3+)
const DB_HOST = "localhost";

// Magic constants
echo __FILE__;     // Current file path
echo __LINE__;     // Current line number
echo __DIR__;      // Current directory`,
      },
      {
        q: "What is the difference between include and require?",
        a: "Both include files. include produces a warning if the file is missing but continues execution. require produces a fatal error and stops execution. Use require for critical files.",
        example: `include 'header.php';    // Warning if not found
require 'config.php';    // Fatal error if not found

include_once 'file.php'; // Include only once
require_once 'db.php';   // Require only once`,
      },
      {
        q: "What are PHP superglobals?",
        a: "Superglobals are built-in variables always available in all scopes. They include: $_GET, $_POST, $_REQUEST, $_SESSION, $_COOKIE, $_SERVER, $_FILES, $_ENV, and $GLOBALS.",
        example: `// Access form data
$username = $_POST['username'];

// Access URL parameters
$id = $_GET['id'];

// Access session data
$_SESSION['user_id'] = 123;

// Server information
$serverName = $_SERVER['SERVER_NAME'];`,
      },
      {
        q: "How do you create an array in PHP?",
        a: "Arrays can be created using array() function or short syntax []. PHP supports indexed, associative, and multidimensional arrays.",
        example: `// Indexed array
$fruits = array("Apple", "Banana", "Orange");
$colors = ["Red", "Green", "Blue"];

// Associative array
$person = array(
  "name" => "John",
  "age" => 30,
  "city" => "New York"
);

// Multidimensional array
$users = [
  ["John", 25],
  ["Jane", 30]
];`,
      },
      {
        q: "What is the difference between GET and POST?",
        a: "GET sends data in the URL (visible, limited size, can be bookmarked). POST sends data in the request body (invisible, unlimited size, cannot be bookmarked). Use GET for retrieving data, POST for sensitive or large data.",
        example: `// GET - data in URL
// URL: page.php?name=John&age=25
$name = $_GET['name'];

// POST - data in request body
// <form method="post">
$username = $_POST['username'];
$password = $_POST['password'];`,
      },
      {
        q: "How do you connect to a MySQL database?",
        a: "Use mysqli (MySQL Improved) or PDO (PHP Data Objects). PDO is recommended for its flexibility and support for multiple databases.",
        example: `// Using mysqli
$conn = new mysqli("localhost", "username", "password", "database");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Using PDO (recommended)
try {
  $pdo = new PDO("mysql:host=localhost;dbname=mydb", "username", "password");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}`,
      },
      {
        q: "What are PHP loops?",
        a: "PHP supports for, foreach, while, and do-while loops for iterating over data or executing code repeatedly.",
        example: `// for loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// foreach loop
foreach ($array as $value) {
  echo $value;
}

// foreach with key
foreach ($array as $key => $value) {
  echo "$key: $value";
}

// while loop
while ($i < 10) {
  echo $i++;
}

// do-while loop
do {
  echo $i++;
} while ($i < 10);`,
      },
      {
        q: "How do you handle errors in PHP?",
        a: "Use try-catch blocks for exceptions, error_reporting() to set error levels, and custom error handlers with set_error_handler().",
        example: `// Try-catch
try {
  throw new Exception("Error message");
} catch(Exception $e) {
  echo "Caught: " . $e->getMessage();
}

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Custom error handler
function customError($errno, $errstr) {
  echo "Error [$errno]: $errstr";
}
set_error_handler("customError");`,
      },
      {
        q: "What is a PHP session?",
        a: "Sessions store user data across multiple pages. Data is stored on the server and identified by a session ID stored in a cookie or URL parameter.",
        example: `// Start session
session_start();

// Set session variables
$_SESSION['username'] = 'john_doe';
$_SESSION['user_id'] = 123;

// Access session variables
echo $_SESSION['username'];

// Destroy session
session_destroy();`,
      },
    ],
    medium: [
      {
        q: "What is the difference between == and ===?",
        a: "== compares values with type coercion (loose comparison). === compares both value and type without coercion (strict comparison). Always prefer === for predictable results.",
        example: `$a = 5;
$b = "5";

var_dump($a == $b);   // true (values equal after coercion)
var_dump($a === $b);  // false (different types)

var_dump(0 == false);  // true
var_dump(0 === false); // false`,
      },
      {
        q: "What are magic methods in PHP?",
        a: "Magic methods are special methods that start with __ (double underscore). They're automatically called in specific situations, like __construct(), __destruct(), __get(), __set(), __call(), etc.",
        example: `class User {
  private $data = [];
  
  // Constructor
  public function __construct($name) {
    $this->data['name'] = $name;
  }
  
  // Getter
  public function __get($property) {
    return $this->data[$property] ?? null;
  }
  
  // Setter
  public function __set($property, $value) {
    $this->data[$property] = $value;
  }
  
  // String representation
  public function __toString() {
    return $this->data['name'];
  }
}`,
      },
      {
        q: "Explain object-oriented programming in PHP",
        a: "PHP supports OOP with classes, objects, inheritance, polymorphism, and encapsulation. Use class keyword to define classes, new to create objects.",
        example: `class Animal {
  protected $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function speak() {
    return "Some sound";
  }
}

class Dog extends Animal {
  public function speak() {
    return "Woof! I'm " . $this->name;
  }
}

$dog = new Dog("Rex");
echo $dog->speak(); // Woof! I'm Rex`,
      },
      {
        q: "What are namespaces in PHP?",
        a: "Namespaces organize code and prevent naming conflicts. They're declared with the namespace keyword and accessed using backslashes.",
        example: `// File: App/Models/User.php
namespace App\\Models;

class User {
  // Class code
}

// File: App/Controllers/UserController.php
namespace App\\Controllers;

use App\\Models\\User;

class UserController {
  public function index() {
    $user = new User();
    // Or without 'use'
    $user = new \\App\\Models\\User();
  }
}`,
      },
      {
        q: "What is the difference between abstract classes and interfaces?",
        a: "Abstract classes can have implementation and properties. Interfaces only declare method signatures. A class can implement multiple interfaces but extend only one class.",
        example: `// Abstract class
abstract class Shape {
  protected $color;
  
  abstract public function area();
  
  public function setColor($color) {
    $this->color = $color;
  }
}

// Interface
interface Drawable {
  public function draw();
}

class Circle extends Shape implements Drawable {
  private $radius;
  
  public function area() {
    return pi() * $this->radius ** 2;
  }
  
  public function draw() {
    echo "Drawing circle";
  }
}`,
      },
      {
        q: "What are traits in PHP?",
        a: "Traits are a mechanism for code reuse. They allow you to include methods in multiple classes without using inheritance.",
        example: `trait Logger {
  public function log($message) {
    echo date('Y-m-d H:i:s') . ": $message\\n";
  }
}

trait Validator {
  public function validate($data) {
    // Validation logic
  }
}

class User {
  use Logger, Validator;
  
  public function save() {
    $this->log("Saving user");
    // Save logic
  }
}`,
      },
      {
        q: "How do you prevent SQL injection?",
        a: "Use prepared statements with PDO or mysqli. Never concatenate user input directly into SQL queries.",
        example: `// Bad - vulnerable to SQL injection
$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = $id";

// Good - using prepared statements (PDO)
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);

// Good - using named parameters
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
$stmt->execute(['id' => $id]);

// Good - using mysqli
$stmt = $mysqli->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();`,
      },
      {
        q: "What is autoloading in PHP?",
        a: "Autoloading automatically loads class files when they're needed, eliminating manual require/include statements. Use spl_autoload_register() or Composer's autoloader.",
        example: `// Manual autoloader
spl_autoload_register(function ($class) {
  $file = __DIR__ . '/classes/' . $class . '.php';
  if (file_exists($file)) {
    require $file;
  }
});

// Composer autoloader (composer.json)
{
  "autoload": {
    "psr-4": {
      "App\\\\": "src/"
    }
  }
}

// Then in code
require 'vendor/autoload.php';
$user = new App\\Models\\User();`,
      },
      {
        q: "What are closures (anonymous functions)?",
        a: "Closures are anonymous functions that can capture variables from the parent scope using 'use' keyword. They're useful for callbacks and functional programming.",
        example: `// Basic closure
$greet = function($name) {
  return "Hello, $name!";
};
echo $greet("John");

// Closure with 'use'
$message = "Welcome";
$greet = function($name) use ($message) {
  return "$message, $name!";
};

// As callback
$numbers = [1, 2, 3, 4, 5];
$squared = array_map(function($n) {
  return $n * $n;
}, $numbers);`,
      },
      {
        q: "How do you handle file uploads?",
        a: "Use $_FILES superglobal to access uploaded files. Always validate file type, size, and move uploaded files to a secure location.",
        example: `if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $file = $_FILES['uploaded_file'];
  
  // Validate
  $allowed = ['jpg', 'png', 'gif'];
  $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
  
  if (!in_array($ext, $allowed)) {
    die("Invalid file type");
  }
  
  if ($file['size'] > 5000000) { // 5MB
    die("File too large");
  }
  
  // Move file
  $destination = 'uploads/' . basename($file['name']);
  move_uploaded_file($file['tmp_name'], $destination);
}`,
      },
      {
        q: "What is the difference between serialize() and json_encode()?",
        a: "serialize() converts PHP values to a storable string (PHP-specific). json_encode() converts to JSON format (language-agnostic). Use JSON for API responses, serialize for PHP-only storage.",
        example: `$data = ['name' => 'John', 'age' => 30];

// Serialize (PHP-specific)
$serialized = serialize($data);
$unserialized = unserialize($serialized);

// JSON (cross-platform)
$json = json_encode($data);
$decoded = json_decode($json, true); // true for array`,
      },
      {
        q: "What are generators in PHP?",
        a: "Generators allow you to iterate over data without building an array in memory. They use 'yield' keyword and are memory-efficient for large datasets.",
        example: `// Generator function
function getNumbers($max) {
  for ($i = 1; $i <= $max; $i++) {
    yield $i; // Yields one value at a time
  }
}

// Usage
foreach (getNumbers(1000000) as $number) {
  echo $number;
  // Memory-efficient - doesn't create array of 1M items
}`,
      },
    ],
    hard: [
      {
        q: "Explain the concept of dependency injection",
        a: "Dependency Injection is a design pattern where dependencies are passed to a class rather than created inside it. This promotes loose coupling, testability, and maintainability.",
        example: `// Without DI - tight coupling
class UserController {
  private $db;
  
  public function __construct() {
    $this->db = new Database(); // Hard-coded dependency
  }
}

// With DI - loose coupling
class UserController {
  private $db;
  
  public function __construct(DatabaseInterface $db) {
    $this->db = $db; // Injected dependency
  }
}

// Usage
$db = new MySQLDatabase();
$controller = new UserController($db);`,
      },
      {
        q: "What are design patterns in PHP?",
        a: "Design patterns are reusable solutions to common problems. Popular patterns include Singleton, Factory, Observer, Strategy, and Repository patterns.",
        example: `// Singleton pattern
class Database {
  private static $instance = null;
  
  private function __construct() {}
  
  public static function getInstance() {
    if (self::$instance === null) {
      self::$instance = new self();
    }
    return self::$instance;
  }
}

// Factory pattern
class UserFactory {
  public static function create($type) {
    switch($type) {
      case 'admin':
        return new AdminUser();
      case 'guest':
        return new GuestUser();
      default:
        return new RegularUser();
    }
  }
}`,
      },
      {
        q: "Explain PSR standards",
        a: "PSR (PHP Standard Recommendations) are coding standards developed by PHP-FIG. Key PSRs include PSR-4 (autoloading), PSR-12 (coding style), PSR-7 (HTTP messages), and PSR-11 (container interface).",
        example: `// PSR-4 Autoloading structure
// Namespace: App\\Controllers\\UserController
// File: src/Controllers/UserController.php

// PSR-12 Coding style
namespace App\\Controllers;

use App\\Models\\User;

class UserController
{
    private $userModel;

    public function __construct(User $userModel)
    {
        $this->userModel = $userModel;
    }

    public function index(): array
    {
        return $this->userModel->all();
    }
}`,
      },
      {
        q: "What is reflection in PHP?",
        a: "Reflection allows you to inspect and modify class structures, methods, and properties at runtime. It's useful for building frameworks, documentation generators, and dependency injection containers.",
        example: `class User {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function getName() {
    return $this->name;
  }
}

// Using reflection
$reflector = new ReflectionClass('User');

// Get methods
foreach ($reflector->getMethods() as $method) {
  echo $method->getName();
}

// Create instance
$instance = $reflector->newInstanceArgs(['John']);

// Call method
$method = $reflector->getMethod('getName');
echo $method->invoke($instance);`,
      },
      {
        q: "How do you implement caching in PHP?",
        a: "Caching improves performance by storing frequently accessed data. Common methods include opcode caching (OPcache), file caching, and memory caching (Redis, Memcached).",
        example: `// Using Redis
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

// Set cache
$redis->setex('user:1', 3600, json_encode($userData));

// Get from cache
$cached = $redis->get('user:1');
if ($cached) {
  $user = json_decode($cached, true);
} else {
  $user = $db->query("SELECT * FROM users WHERE id = 1");
  $redis->setex('user:1', 3600, json_encode($user));
}

// File caching
$cacheFile = 'cache/data.cache';
if (file_exists($cacheFile) && time() - filemtime($cacheFile) < 3600) {
  $data = unserialize(file_get_contents($cacheFile));
} else {
  $data = fetchDataFromDatabase();
  file_put_contents($cacheFile, serialize($data));
}`,
      },
      {
        q: "Explain middleware pattern in PHP",
        a: "Middleware acts as a layer between request and response, processing requests before they reach the controller. It's used for authentication, logging, CORS, etc.",
        example: `interface Middleware {
  public function handle($request, $next);
}

class AuthMiddleware implements Middleware {
  public function handle($request, $next) {
    if (!isset($_SESSION['user_id'])) {
      return redirect('/login');
    }
    return $next($request);
  }
}

class LoggingMiddleware implements Middleware {
  public function handle($request, $next) {
    error_log('Request: ' . $request->getUri());
    $response = $next($request);
    error_log('Response: ' . $response->getStatusCode());
    return $response;
  }
}

// Pipeline
class Pipeline {
  private $middlewares = [];
  
  public function pipe(Middleware $middleware) {
    $this->middlewares[] = $middleware;
    return $this;
  }
  
  public function process($request) {
    $next = function($request) {
      return $request;
    };
    
    foreach (array_reverse($this->middlewares) as $middleware) {
      $next = function($request) use ($middleware, $next) {
        return $middleware->handle($request, $next);
      };
    }
    
    return $next($request);
  }
}`,
      },
      {
        q: "What is the difference between early and late static binding?",
        a: "Late static binding (LSB) allows static methods to be resolved at runtime rather than compile time. Use static:: instead of self:: for late static binding.",
        example: `class A {
  public static function who() {
    return __CLASS__;
  }
  
  public static function testSelf() {
    return self::who(); // Early binding
  }
  
  public static function testStatic() {
    return static::who(); // Late binding
  }
}

class B extends A {
  public static function who() {
    return __CLASS__;
  }
}

echo B::testSelf();   // Output: A (early binding)
echo B::testStatic(); // Output: B (late binding)`,
      },
      {
        q: "How do you implement event-driven architecture?",
        a: "Event-driven architecture uses events to trigger and communicate between decoupled services. Implement using observer pattern or event dispatcher libraries.",
        example: `class EventDispatcher {
  private $listeners = [];
  
  public function addListener($event, callable $callback) {
    $this->listeners[$event][] = $callback;
  }
  
  public function dispatch($event, $data = []) {
    if (isset($this->listeners[$event])) {
      foreach ($this->listeners[$event] as $callback) {
        call_user_func($callback, $data);
      }
    }
  }
}

// Usage
$dispatcher = new EventDispatcher();

$dispatcher->addListener('user.created', function($data) {
  sendWelcomeEmail($data['email']);
});

$dispatcher->addListener('user.created', function($data) {
  logUserCreation($data);
});

// Trigger event
$dispatcher->dispatch('user.created', [
  'email' => 'user@example.com',
  'name' => 'John Doe'
]);`,
      },
    ],
  },
};
