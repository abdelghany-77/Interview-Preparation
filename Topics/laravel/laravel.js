const questions = {
  laravel: {
    easy: [
      {
        q: "What is Laravel?",
        a: "Laravel is a free, open-source PHP web framework designed for building web applications following the MVC (Model-View-Controller) architectural pattern. It provides elegant syntax, powerful tools, and features like routing, authentication, and database management out of the box.",
      },
      {
        q: "What are the main features of Laravel?",
        a: "Key features include: Eloquent ORM, Blade templating engine, Artisan CLI, Built-in authentication and authorization, Database migrations and seeding, Queue management, Task scheduling, Event broadcasting, and a comprehensive testing suite.",
      },
      {
        q: "What is Artisan?",
        a: "Artisan is Laravel's command-line interface. It provides helpful commands for common tasks like generating models, controllers, migrations, running tests, and managing the application.",
        example: `// Generate a controller
php artisan make:controller UserController

// Run migrations
php artisan migrate

// Create a model with migration
php artisan make:model User -m

// Clear cache
php artisan cache:clear

// List all routes
php artisan route:list`,
      },
      {
        q: "What is routing in Laravel?",
        a: "Routing defines URL patterns and maps them to controller actions or closures. Routes are defined in routes/web.php for web routes and routes/api.php for API routes.",
        example: `// Basic route
Route::get('/users', [UserController::class, 'index']);

// Route with parameter
Route::get('/users/{id}', [UserController::class, 'show']);

// Route with multiple HTTP methods
Route::match(['get', 'post'], '/form', function () {
    // Handle both GET and POST
});

// Named routes
Route::get('/profile', [ProfileController::class, 'show'])->name('profile');

// Route groups
Route::prefix('admin')->group(function () {
    Route::get('/users', [AdminController::class, 'users']);
    Route::get('/posts', [AdminController::class, 'posts']);
});`,
      },
      {
        q: "What is Blade templating?",
        a: "Blade is Laravel's powerful templating engine. It provides convenient shortcuts for common PHP tasks and allows template inheritance. Blade files use .blade.php extension.",
        example: `<!-- Layout file: layout.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    @yield('content')
</body>
</html>

<!-- Child view: home.blade.php -->
@extends('layout')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome</h1>
    @if($user)
        <p>Hello, {{ $user->name }}</p>
    @else
        <p>Please log in</p>
    @endif
    
    @foreach($items as $item)
        <li>{{ $item->name }}</li>
    @endforeach
@endsection`,
      },
      {
        q: "What is Eloquent ORM?",
        a: "Eloquent is Laravel's ActiveRecord ORM implementation. It provides an elegant, simple API for interacting with databases, where each database table has a corresponding Model.",
        example: `// Define a model
class User extends Model {
    protected $fillable = ['name', 'email', 'password'];
}

// Query using Eloquent
$users = User::all();
$user = User::find(1);
$user = User::where('email', 'john@example.com')->first();

// Create
User::create([
    'name' => 'John',
    'email' => 'john@example.com'
]);

// Update
$user->name = 'Jane';
$user->save();

// Delete
$user->delete();`,
      },
      {
        q: "What are migrations?",
        a: "Migrations are version control for your database. They allow you to define and modify database schema using PHP code, making it easy to share and track database changes.",
        example: `// Create migration
php artisan make:migration create_users_table

// Migration file
public function up() {
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->timestamps();
    });
}

public function down() {
    Schema::dropIfExists('users');
}

// Run migrations
php artisan migrate

// Rollback
php artisan migrate:rollback`,
      },
      {
        q: "What is middleware in Laravel?",
        a: "Middleware provides a mechanism for filtering HTTP requests entering your application. Common uses include authentication, CORS, logging, and request modification.",
        example: `// Create middleware
php artisan make:middleware CheckAge

// In middleware
public function handle($request, Closure $next) {
    if ($request->age < 18) {
        return redirect('home');
    }
    return $next($request);
}

// Register in Kernel.php
protected $routeMiddleware = [
    'checkAge' => \\App\\Http\\Middleware\\CheckAge::class,
];

// Apply to route
Route::get('/dashboard', function () {
    //
})->middleware('checkAge');`,
      },
      {
        q: "What is a controller in Laravel?",
        a: "Controllers group related request handling logic into a single class. They're stored in app/Http/Controllers and handle incoming requests, process data, and return responses.",
        example: `// Create controller
php artisan make:controller UserController

// Controller class
namespace App\\Http\\Controllers;

class UserController extends Controller {
    public function index() {
        $users = User::all();
        return view('users.index', compact('users'));
    }
    
    public function show($id) {
        $user = User::findOrFail($id);
        return view('users.show', compact('user'));
    }
    
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users'
        ]);
        
        User::create($validated);
        return redirect()->route('users.index');
    }
}`,
      },
      {
        q: "What is validation in Laravel?",
        a: "Laravel provides several approaches to validate incoming data. The most common method is using the validate() method on requests.",
        example: `// In controller
$validated = $request->validate([
    'title' => 'required|unique:posts|max:255',
    'body' => 'required',
    'email' => 'required|email',
    'age' => 'required|numeric|min:18',
    'website' => 'url'
]);

// Custom error messages
$validated = $request->validate([
    'email' => 'required|email'
], [
    'email.required' => 'Email is mandatory',
    'email.email' => 'Invalid email format'
]);

// Display errors in view
@if ($errors->any())
    <div class="alert">
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </div>
@endif`,
      },
      {
        q: "What are seeders in Laravel?",
        a: "Seeders allow you to populate your database with test data. They're useful for development and testing environments.",
        example: `// Create seeder
php artisan make:seeder UserSeeder

// Seeder class
class UserSeeder extends Seeder {
    public function run() {
        User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password')
        ]);
        
        // Or use factories
        User::factory()->count(50)->create();
    }
}

// Run seeder
php artisan db:seed
php artisan db:seed --class=UserSeeder`,
      },
      {
        q: "What is the service container?",
        a: "The service container is a powerful tool for managing class dependencies and performing dependency injection. It's the core of Laravel's architecture.",
        example: `// Binding in a service provider
$this->app->bind('App\\Contracts\\UserRepository', 'App\\Repositories\\EloquentUserRepository');

// Resolving from container
$repository = app('App\\Contracts\\UserRepository');

// Constructor injection
class UserController extends Controller {
    public function __construct(UserRepository $repository) {
        $this->repository = $repository;
    }
}`,
      },
      {
        q: "What are sessions in Laravel?",
        a: "Sessions provide a way to store information about the user across multiple requests. Laravel supports various session backends including file, cookie, database, and Redis.",
        example: `// Store data
session(['key' => 'value']);
$request->session()->put('user_id', 123);

// Retrieve data
$value = session('key');
$userId = $request->session()->get('user_id');

// Check if exists
if ($request->session()->has('user_id')) {
    //
}

// Remove data
$request->session()->forget('user_id');

// Flash data (available for next request only)
$request->session()->flash('status', 'Task was successful!');`,
      },
      {
        q: "What is CSRF protection?",
        a: "CSRF (Cross-Site Request Forgery) protection prevents unauthorized commands from being transmitted from a user that the web application trusts. Laravel automatically generates CSRF tokens for each active session.",
        example: `<!-- In Blade forms -->
<form method="POST" action="/profile">
    @csrf
    <!-- Form fields -->
</form>

<!-- Or manually -->
<input type="hidden" name="_token" value="{{ csrf_token() }}">

// Exclude routes from CSRF (in VerifyCsrfToken middleware)
protected $except = [
    'api/*',
    'webhook/*'
];`,
      },
      {
        q: "What are Laravel collections?",
        a: "Collections provide a fluent, convenient wrapper for working with arrays of data. They provide dozens of helpful methods for filtering, mapping, and reducing data.",
        example: `$collection = collect([1, 2, 3, 4, 5]);

// Map
$multiplied = $collection->map(function ($item) {
    return $item * 2;
});

// Filter
$filtered = $collection->filter(function ($item) {
    return $item > 2;
});

// Sum, average, etc.
$sum = $collection->sum();
$avg = $collection->avg();

// Chain methods
$result = User::all()
    ->filter(fn($user) => $user->active)
    ->sortBy('name')
    ->values();`,
      },
    ],
    medium: [
      {
        q: "What are relationships in Eloquent?",
        a: "Eloquent relationships define how database tables are related to each other. Common relationships include One-to-One, One-to-Many, Many-to-Many, and polymorphic relationships.",
        example: `// One-to-Many (User has many Posts)
class User extends Model {
    public function posts() {
        return $this->hasMany(Post::class);
    }
}

class Post extends Model {
    public function user() {
        return $this->belongsTo(User::class);
    }
}

// Usage
$user = User::find(1);
$posts = $user->posts;

// Many-to-Many (User belongs to many Roles)
class User extends Model {
    public function roles() {
        return $this->belongsToMany(Role::class);
    }
}

// Attach/Detach
$user->roles()->attach($roleId);
$user->roles()->detach($roleId);`,
      },
      {
        q: "What are service providers?",
        a: "Service providers are the central place for bootstrapping Laravel applications. They bind services into the service container, register event listeners, middleware, and routes.",
        example: `// Create service provider
php artisan make:provider RepositoryServiceProvider

class RepositoryServiceProvider extends ServiceProvider {
    public function register() {
        // Bind interfaces to implementations
        $this->app->bind(
            UserRepositoryInterface::class,
            EloquentUserRepository::class
        );
    }
    
    public function boot() {
        // Bootstrap services
        View::composer('*', function ($view) {
            $view->with('siteName', 'My App');
        });
    }
}

// Register in config/app.php
'providers' => [
    App\\Providers\\RepositoryServiceProvider::class,
]`,
      },
      {
        q: "What is eager loading and how does it prevent N+1 queries?",
        a: "Eager loading loads relationships upfront to avoid N+1 query problems where you make one query for the main model and N queries for related models.",
        example: `// N+1 Problem (Bad)
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->user->name; // N queries for users
}

// Eager Loading (Good)
$posts = Post::with('user')->get();
foreach ($posts as $post) {
    echo $post->user->name; // Only 2 queries total
}

// Multiple relationships
$posts = Post::with(['user', 'comments'])->get();

// Nested relationships
$posts = Post::with('user.profile')->get();

// Conditional eager loading
$posts = Post::with(['user' => function($query) {
    $query->where('active', true);
}])->get();`,
      },
      {
        q: "What are queues and jobs?",
        a: "Queues allow you to defer time-consuming tasks like sending emails or processing uploads. Jobs are the tasks that get queued.",
        example: `// Create a job
php artisan make:job SendEmailJob

class SendEmailJob implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    protected $user;
    
    public function __construct($user) {
        $this->user = $user;
    }
    
    public function handle() {
        Mail::to($this->user->email)->send(new WelcomeEmail($this->user));
    }
}

// Dispatch job
SendEmailJob::dispatch($user);

// Delayed dispatch
SendEmailJob::dispatch($user)->delay(now()->addMinutes(10));

// Run queue worker
php artisan queue:work`,
      },
      {
        q: "What is Laravel's request lifecycle?",
        a: "The request lifecycle starts with index.php, bootstraps the application, loads service providers, sends request through middleware, routes to controller, and returns response. Understanding this helps debug and optimize applications.",
        example: `1. public/index.php (entry point)
2. Bootstrap (bootstrap/app.php)
3. Kernel handles request (HTTP or Console)
4. Service providers registered and booted
5. Request sent through middleware stack
6. Router dispatches to appropriate controller
7. Controller processes request
8. Response sent back through middleware
9. Response sent to browser
10. Terminate middleware runs`,
      },
      {
        q: "What are accessors and mutators?",
        a: "Accessors transform model attributes when retrieving them. Mutators transform attributes when setting them. They're defined as methods on the model.",
        example: `class User extends Model {
    // Accessor - get attribute
    public function getFirstNameAttribute($value) {
        return ucfirst($value); // Capitalize first letter
    }
    
    // Mutator - set attribute
    public function setFirstNameAttribute($value) {
        $this->attributes['first_name'] = strtolower($value);
    }
    
    // Accessor for computed attribute
    public function getFullNameAttribute() {
        return "{$this->first_name} {$this->last_name}";
    }
}

// Usage
$user->first_name = 'JOHN'; // Stored as 'john'
echo $user->first_name;      // Outputs 'John'
echo $user->full_name;       // Outputs 'John Doe'`,
      },
      {
        q: "What are events and listeners?",
        a: "Events provide a simple observer pattern implementation. Events allow you to decouple various aspects of your application, making code more maintainable.",
        example: `// Create event
php artisan make:event UserRegistered

class UserRegistered {
    public $user;
    
    public function __construct($user) {
        $this->user = $user;
    }
}

// Create listener
php artisan make:listener SendWelcomeEmail

class SendWelcomeEmail {
    public function handle(UserRegistered $event) {
        Mail::to($event->user->email)->send(new WelcomeEmail($event->user));
    }
}

// Register in EventServiceProvider
protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
        LogUserRegistration::class,
    ],
];

// Dispatch event
event(new UserRegistered($user));`,
      },
      {
        q: "What are factories in Laravel?",
        a: "Factories define how to generate fake data for models. They're useful for testing and seeding databases.",
        example: `// Define factory
namespace Database\\Factories;

class UserFactory extends Factory {
    public function definition() {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ];
    }
}

// Use in tests or seeders
User::factory()->count(50)->create();

// With custom state
User::factory()->admin()->create();

// Define state
public function admin() {
    return $this->state(fn (array $attributes) => [
        'role' => 'admin',
    ]);
}`,
      },
      {
        q: "What are policies and gates?",
        a: "Policies organize authorization logic around a particular model or resource. Gates provide a simple closure-based approach to authorization.",
        example: `// Create policy
php artisan make:policy PostPolicy

class PostPolicy {
    public function update(User $user, Post $post) {
        return $user->id === $post->user_id;
    }
    
    public function delete(User $user, Post $post) {
        return $user->id === $post->user_id || $user->isAdmin();
    }
}

// Register in AuthServiceProvider
protected $policies = [
    Post::class => PostPolicy::class,
];

// Use in controller
$this->authorize('update', $post);

// Gates
Gate::define('update-post', function ($user, $post) {
    return $user->id === $post->user_id;
});

// Check gate
if (Gate::allows('update-post', $post)) {
    // Update post
}`,
      },
      {
        q: "What is Laravel Sanctum?",
        a: "Sanctum provides a simple authentication system for SPAs (Single Page Applications), mobile applications, and token-based APIs. It's lighter than Passport for simple token authentication.",
        example: `// Install
composer require laravel/sanctum

// Generate token
$token = $user->createToken('token-name')->plainTextToken;

// Protect routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API request with token
fetch('/api/user', {
    headers: {
        'Authorization': 'Bearer ' + token
    }
});

// Revoke tokens
$user->tokens()->delete();
$user->currentAccessToken()->delete();`,
      },
      {
        q: "What are scopes in Eloquent?",
        a: "Scopes allow you to define commonly used query constraints that can be easily reused. Local scopes are defined on the model, global scopes apply to all queries.",
        example: `// Local scope
class User extends Model {
    public function scopeActive($query) {
        return $query->where('active', 1);
    }
    
    public function scopePopular($query, $threshold = 100) {
        return $query->where('votes', '>', $threshold);
    }
}

// Usage
$users = User::active()->get();
$popular = User::popular(200)->get();
$active = User::active()->popular()->get();

// Global scope
class ActiveScope implements Scope {
    public function apply(Builder $builder, Model $model) {
        $builder->where('active', 1);
    }
}

// Apply global scope
protected static function booted() {
    static::addGlobalScope(new ActiveScope);
}`,
      },
      {
        q: "What is the repository pattern in Laravel?",
        a: "The repository pattern abstracts data access logic, separating business logic from data access. It makes code more testable and maintainable.",
        example: `// Interface
interface UserRepositoryInterface {
    public function all();
    public function find($id);
    public function create(array $data);
}

// Implementation
class EloquentUserRepository implements UserRepositoryInterface {
    public function all() {
        return User::all();
    }
    
    public function find($id) {
        return User::findOrFail($id);
    }
    
    public function create(array $data) {
        return User::create($data);
    }
}

// Bind in service provider
$this->app->bind(UserRepositoryInterface::class, EloquentUserRepository::class);

// Use in controller
class UserController {
    public function __construct(UserRepositoryInterface $users) {
        $this->users = $users;
    }
    
    public function index() {
        return $this->users->all();
    }
}`,
      },
    ],
    hard: [
      {
        q: "Explain Laravel's pipeline pattern",
        a: "The pipeline pattern passes an object through a series of 'pipes' (classes or closures), each performing an operation. Middleware uses this pattern.",
        example: `use Illuminate\\Pipeline\\Pipeline;

class ProcessPayment {
    public function handle($payment, $next) {
        // Process payment
        $payment->processed = true;
        return $next($payment);
    }
}

class ValidatePayment {
    public function handle($payment, $next) {
        if ($payment->amount <= 0) {
            throw new Exception('Invalid amount');
        }
        return $next($payment);
    }
}

// Use pipeline
$result = app(Pipeline::class)
    ->send($payment)
    ->through([
        ValidatePayment::class,
        ProcessPayment::class,
        NotifyUser::class,
    ])
    ->then(function ($payment) {
        return $payment;
    });`,
      },
      {
        q: "What is the difference between dependency injection and service locator pattern?",
        a: "Dependency injection passes dependencies to a class, while service locator retrieves them from a container. DI is more testable and explicit, but service locator can be more flexible.",
        example: `// Dependency Injection (Preferred)
class UserController {
    private $userRepo;
    
    public function __construct(UserRepository $userRepo) {
        $this->userRepo = $userRepo;
    }
}

// Service Locator (Use sparingly)
class UserController {
    public function index() {
        $userRepo = app(UserRepository::class);
        return $userRepo->all();
    }
}

// Facades (Service Locator pattern)
DB::table('users')->get();
Cache::get('key');`,
      },
      {
        q: "How do you implement multi-tenancy in Laravel?",
        a: "Multi-tenancy allows a single application to serve multiple tenants. Common approaches include separate databases, shared database with tenant_id column, or subdomain-based routing.",
        example: `// Database per tenant approach
class TenantManager {
    public function setConnection($tenant) {
        $database = "tenant_{$tenant->id}";
        
        config(['database.connections.tenant' => [
            'driver' => 'mysql',
            'database' => $database,
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
        ]]);
        
        DB::purge('tenant');
        DB::reconnect('tenant');
    }
}

// Middleware
class SetTenantConnection {
    public function handle($request, Closure $next) {
        $tenant = $this->resolveTenant($request);
        app(TenantManager::class)->setConnection($tenant);
        return $next($request);
    }
}

// Shared database approach
class Post extends Model {
    protected static function booted() {
        static::addGlobalScope('tenant', function ($query) {
            $query->where('tenant_id', auth()->user()->tenant_id);
        });
    }
}`,
      },
      {
        q: "Explain Laravel's macroable trait and how to use it",
        a: "The Macroable trait allows you to add methods to classes at runtime. It's used in collections, query builders, and other Laravel classes.",
        example: `use Illuminate\\Support\\Str;

// Add macro to Str class
Str::macro('partNumber', function ($value) {
    return collect(str_split($value, 3))->implode('-');
});

// Usage
Str::partNumber('123456789'); // 123-456-789

// Collection macro
Collection::macro('toUpper', function () {
    return $this->map(function ($value) {
        return strtoupper($value);
    });
});

$collection = collect(['hello', 'world']);
$upper = $collection->toUpper();

// Request macro
Request::macro('hasHeader', function ($header) {
    return $this->headers->has($header);
});

// In service provider
public function boot() {
    Builder::macro('whereLike', function ($column, $search) {
        return $this->where($column, 'LIKE', "%{$search}%");
    });
}`,
      },
      {
        q: "How do you implement database sharding in Laravel?",
        a: "Database sharding distributes data across multiple databases. Laravel doesn't have built-in sharding, but you can implement it using dynamic database connections.",
        example: `class ShardManager {
    public function getShardForUser($userId) {
        $shardId = $userId % config('database.shard_count');
        return "shard_{$shardId}";
    }
    
    public function getConnection($userId) {
        $shard = $this->getShardForUser($userId);
        
        if (!config("database.connections.{$shard}")) {
            config(["database.connections.{$shard}" => [
                'driver' => 'mysql',
                'host' => env("DB_SHARD_{$shardId}_HOST"),
                'database' => "shard_{$shardId}",
                // ... other config
            ]]);
        }
        
        return DB::connection($shard);
    }
}

// Usage
class User extends Model {
    public function newQuery() {
        $shard = app(ShardManager::class)->getConnection($this->id);
        return $shard->table($this->getTable());
    }
}`,
      },
      {
        q: "Explain how to implement read-write database splitting",
        a: "Read-write splitting directs read queries to read replicas and write queries to the master database, improving performance and scalability.",
        example: `// config/database.php
'mysql' => [
    'read' => [
        'host' => [
            '192.168.1.2',
            '192.168.1.3',
        ],
    ],
    'write' => [
        'host' => [
            '192.168.1.1',
        ],
    ],
    'sticky' => true,
    'driver' => 'mysql',
    'database' => 'database',
    'username' => 'root',
    'password' => '',
],

// Queries automatically use correct connection
User::all(); // Read from replica
User::create([...]); // Write to master

// Force write connection for read
User::onWriteConnection()->get();

// Sticky sessions (read from master after write)
'sticky' => true,`,
      },
      {
        q: "How do you implement event sourcing in Laravel?",
        a: "Event sourcing stores all changes to application state as a sequence of events. Instead of storing current state, you store events that led to that state.",
        example: `class AggregateRoot {
    protected $events = [];
    
    protected function recordEvent($event) {
        $this->events[] = $event;
    }
    
    public function getRecordedEvents() {
        return $this->events;
    }
}

class BankAccount extends AggregateRoot {
    private $balance = 0;
    
    public function deposit($amount) {
        $this->recordEvent(new MoneyDeposited($amount));
        $this->balance += $amount;
    }
    
    public function withdraw($amount) {
        if ($this->balance < $amount) {
            throw new InsufficientFundsException();
        }
        $this->recordEvent(new MoneyWithdrawn($amount));
        $this->balance -= $amount;
    }
}

// Event store
class EventStore {
    public function persist(AggregateRoot $aggregate) {
        foreach ($aggregate->getRecordedEvents() as $event) {
            DB::table('events')->insert([
                'aggregate_id' => $aggregate->id,
                'type' => get_class($event),
                'payload' => json_encode($event),
                'created_at' => now(),
            ]);
        }
    }
    
    public function reconstitute($aggregateId) {
        $events = DB::table('events')
            ->where('aggregate_id', $aggregateId)
            ->orderBy('created_at')
            ->get();
            
        $aggregate = new BankAccount();
        foreach ($events as $event) {
            $aggregate->apply($event);
        }
        return $aggregate;
    }
}`,
      },
      {
        q: "Explain Laravel Octane and how it improves performance",
        a: "Laravel Octane supercharges your application by serving it using high-powered application servers like Swoole or RoadRunner. It keeps your application in memory between requests.",
        example: `// Install Octane
composer require laravel/octane

// Install Swoole
php artisan octane:install --server=swoole

// Start Octane server
php artisan octane:start

// Performance benefits:
// 1. Application bootstrap happens once
// 2. Faster request handling (no PHP process restart)
// 3. Concurrent request handling
// 4. WebSocket support
// 5. Task scheduling in memory

// Managing state (important!)
class UserController {
    // Bad - retains state between requests
    private $user;
    
    public function index() {
        $this->user = User::first();
    }
    
    // Good - no shared state
    public function index() {
        $user = User::first();
        return view('users.index', ['user' => $user]);
    }
}`,
      },
      {
        q: "How do you implement CQRS pattern in Laravel?",
        a: "CQRS (Command Query Responsibility Segregation) separates read and write operations into different models. Commands modify state, queries read state.",
        example: `// Command
class CreateUserCommand {
    public $name;
    public $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
}

// Command Handler
class CreateUserHandler {
    public function handle(CreateUserCommand $command) {
        $user = User::create([
            'name' => $command->name,
            'email' => $command->email,
        ]);
        
        event(new UserCreated($user));
        
        return $user;
    }
}

// Query
class GetUserQuery {
    public $userId;
    
    public function __construct($userId) {
        $this->userId = $userId;
    }
}

// Query Handler
class GetUserHandler {
    public function handle(GetUserQuery $query) {
        return DB::table('users_read_model')
            ->where('id', $query->userId)
            ->first();
    }
}

// Command Bus
class CommandBus {
    public function dispatch($command) {
        $handler = $this->resolveHandler($command);
        return $handler->handle($command);
    }
}`,
      },
      {
        q: "Explain how to implement domain-driven design (DDD) in Laravel",
        a: "DDD focuses on complex business logic by modeling the domain. It uses concepts like entities, value objects, aggregates, and bounded contexts.",
        example: `// Directory structure
app/
  Domain/
    Order/
      Models/
        Order.php
        OrderItem.php
      ValueObjects/
        Money.php
        Address.php
      Repositories/
        OrderRepositoryInterface.php
      Services/
        OrderService.php
      Events/
        OrderPlaced.php

// Value Object
class Money {
    private $amount;
    private $currency;
    
    public function __construct($amount, $currency) {
        $this->amount = $amount;
        $this->currency = $currency;
    }
    
    public function add(Money $other) {
        if ($this->currency !== $other->currency) {
            throw new CurrencyMismatchException();
        }
        return new Money(
            $this->amount + $other->amount,
            $this->currency
        );
    }
}

// Aggregate Root
class Order {
    private $items = [];
    
    public function addItem($product, $quantity) {
        $this->items[] = new OrderItem($product, $quantity);
        $this->recalculateTotal();
    }
    
    private function recalculateTotal() {
        $this->total = array_reduce($this->items, 
            fn($carry, $item) => $carry->add($item->getTotal()),
            new Money(0, 'USD')
        );
    }
}`,
      },
    ],
  },
};
