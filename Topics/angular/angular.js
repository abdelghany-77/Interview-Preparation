const questions = {
  angular: {
    easy: [
      {
        q: "What are components?",
        a: "Components are the most basic UI building block of an Angular app, which form a tree of Angular components. These components are a subset of directives. Unlike directives, components always have a template, and only one component can be instantiated per element in a template.",
      },
      {
        q: "What are the differences between Component and Directive?",
        a: "Components (@Component) are UI widgets with templates that create reusable UI elements. Directives (@Directive) add behavior to existing elements without templates. Components break down the app structure, while directives provide reusable design patterns. Only one component per DOM element, but many directives can be applied.",
      },
      {
        q: "What is a template?",
        a: "A template is an HTML view where you can display data by binding controls to properties of an Angular component. Templates can be inline (using template property) or external (using templateUrl property).",
      },
      {
        q: "What is the option to choose between inline and external template file?",
        a: "Use inline templates for small code snippets; use external template files for larger views. The Angular CLI generates external templates by default, but you can override this with the -it (inline template) flag.",
      },
      {
        q: "What are dynamic components?",
        a: "Dynamic components are components whose location in the application is not defined at build time. They are not used in any Angular template. Instead, the component is instantiated and placed in the application at runtime, typically for modals, popups, or dynamic content.",
      },
      {
        q: "What is a bootstrapped component?",
        a: "A bootstrapped component is the root component of the application that Angular loads and bootstraps first. It's typically the AppComponent and is specified in the bootstrap array of the main NgModule.",
      },
      {
        q: "How do you manually bootstrap an application?",
        a: "You can manually bootstrap an application by using platformBrowserDynamic().bootstrapModule(AppModule) in main.ts. However, this is typically done automatically via the bootstrap array in the @NgModule decorator.",
      },
      {
        q: "Is it necessary for bootstrapped component to be entry component?",
        a: "No, it is not necessary for the bootstrapped component to be an entry component because it is always included in the bootstrap process automatically.",
      },
      {
        q: "What is a routed entry component?",
        a: "A routed entry component is a component that is loaded dynamically via routing, such as through lazy loading or router navigation. These components are loaded on-demand when their route is activated.",
      },
      {
        q: "Why is it not necessary to use entryComponents array every time?",
        a: "It is not necessary to use the entryComponents array every time because Angular automatically discovers components used in templates. Only dynamically loaded components (like modals, dialogs, or lazy-loaded routes) that are not referenced in templates require explicit declaration in entryComponents.",
      },
      {
        q: "Do I still need to use entryComponents array in Angular 9+?",
        a: "No, in Angular 9 and later with the Ivy compiler, the entryComponents array is not needed. Ivy handles dynamic components automatically through improved tree-shaking and component resolution.",
      },
      {
        q: "Are all components generated in production build?",
        a: "Yes, in production builds with AOT (Ahead-of-Time) compilation, all components are generated and tree-shaken for optimization. Unused components are removed to reduce bundle size.",
      },
      {
        q: "How do you select an element within a component template?",
        a: "You can select an element within a component template using the @ViewChild decorator with a template reference variable or query selector. For example: @ViewChild('myElement') myElement: ElementRef;",
      },
      {
        q: "How do you control any DOM element via ElementRef?",
        a: "You can control any DOM element via ElementRef by injecting it into your component's constructor and accessing the nativeElement property. Use @ViewChild or inject ElementRef directly to manipulate the DOM element.",
      },
      {
        q: "Is it mandatory to pass static flag for ViewChild?",
        a: "Yes, in Angular 9+, the static flag is mandatory for @ViewChild to specify when the query should be resolved. Use static: true if the element is always present (resolved before change detection), or static: false if it's inside *ngIf or *ngFor (resolved after change detection).",
      },
      {
        q: "What is the purpose of hidden property?",
        a: "The hidden property is a property binding that sets the HTML hidden attribute, hiding an element without removing it from the DOM. It simply sets display: none on the element via CSS.",
      },
      {
        q: "What is the difference between ngIf and hidden property?",
        a: "ngIf removes or adds the element to the DOM based on a condition (structural change), while the hidden property only hides the element using CSS (display: none) but keeps it in the DOM. ngIf is better for performance when toggling large component trees.",
      },
      {
        q: "Is it possible to do aliasing for inputs and outputs?",
        a: "Yes, you can alias inputs and outputs using @Input('alias') propertyName and @Output('alias') eventName decorators. This allows you to use different names internally versus externally in templates.",
      },
      {
        q: "What is safe navigation operator?",
        a: "The safe navigation operator (?.) is used to guard against null or undefined values in property paths. For example, {{user?.name}} will not throw an error if user is null or undefined. It's also called the Elvis operator.",
      },
      {
        q: "What are standalone components?",
        a: "Standalone components are components that do not require an NgModule. They can be imported directly into other components or bootstrapped independently. This feature was introduced in Angular 14 to simplify the Angular architecture and reduce boilerplate.",
      },
      {
        q: "How to create a standalone component using CLI command?",
        a: "Use the Angular CLI command: ng generate component my-component --standalone. This creates a component with the standalone: true flag set in the @Component decorator.",
      },
      {
        q: "How to create a standalone component manually?",
        a: "Manually create a component class with the @Component decorator and set standalone: true in the decorator metadata. Then import it directly into other standalone components or modules without declaring it in an NgModule.",
      },
      {
        q: "What is a service?",
        a: "A service is a class used when common functionality needs to be provided to various modules. Services allow for greater separation of concerns and better modularity by extracting common functionality out of components. They're typically used for data fetching, business logic, and shared state.",
      },
      {
        q: "What is dependency injection in Angular?",
        a: "Dependency injection (DI) is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself. Angular comes with its own dependency injection framework for resolving dependencies (services or objects that a class needs to perform its function).",
      },
      {
        q: "What is a provider?",
        a: "A provider is a recipe used by the dependency injection system to provide instances of services or values. Providers are configured in @NgModule or @Component via the providers array and tell Angular how to create or obtain a dependency.",
      },
      {
        q: "What is the recommendation for provider scope?",
        a: "The recommendation is to provide services at the root level using providedIn: 'root' in @Injectable for singleton services shared across the application. Provide at module or component level only for scoped instances to avoid unnecessary recreation and to control service lifetime.",
      },
      {
        q: "How do you restrict provider scope to a module?",
        a: "Restrict provider scope to a module by adding the service to the providers array in the @NgModule decorator. This makes the service available only within that module's injector hierarchy and its children.",
      },
      {
        q: "How do you provide a singleton service?",
        a: "Provide a singleton service using providedIn: 'root' in the @Injectable decorator. This ensures one instance is shared across the entire application and enables tree-shaking for better optimization.",
      },
      {
        q: "What are directives?",
        a: "Directives add behavior to an existing DOM element or an existing component instance. They are markers on DOM elements that tell Angular to attach specified behavior or transform the element and its children.",
      },
      {
        q: "What are the various kinds of directives?",
        a: "There are three main kinds of directives: 1) Components - directives with a template, 2) Structural directives - change the DOM layout by adding/removing elements (like *ngIf, *ngFor), 3) Attribute directives - change the appearance or behavior of an element (like ngClass, ngStyle).",
      },
      {
        q: "How do you create directives using CLI?",
        a: "Use the CLI command: ng generate directive directiveName. It creates the directive class file (src/app/directivename.directive.ts), the test file (.spec.ts), and declares the directive in the root module automatically.",
      },
    ],
    medium: [
      {
        q: "What is the purpose of ngFor directive?",
        a: "The *ngFor directive is used in templates to display each item in a list by iterating over an iterable object. It creates a template for each item and can track items by index or custom trackBy function for performance optimization.",
        example: `<div *ngFor="let user of users; index as i; trackBy: trackByUserId">
  {{ i + 1 }}. {{ user.name }}
</div>`,
      },
      {
        q: "What is the purpose of ngIf directive?",
        a: "The *ngIf directive inserts or removes an element from the DOM based on a truthy/falsy condition. It's used to conditionally display views or portions of views. Unlike hiding with CSS, ngIf completely removes elements from the DOM, improving performance.",
        example: `<div *ngIf="isLoggedIn; else loginTemplate">
  Welcome back, {{ username }}!
</div>
<ng-template #loginTemplate>
  Please log in
</ng-template>`,
      },
      {
        q: "What happens if you use script tag inside template?",
        a: "Angular recognizes script tags as unsafe and automatically sanitizes them. It removes the script tag but keeps safe content such as text content. This eliminates the risk of script injection attacks and XSS vulnerabilities.",
      },
      {
        q: "What is type narrowing?",
        a: "Type narrowing in Angular templates occurs when the TypeScript compiler infers more specific types based on conditions. The expression used in an *ngIf directive allows the compiler to infer that data used in the binding expression will never be undefined within that block.",
        example: `<div *ngIf="user">
  <!-- TypeScript knows 'user' is not null/undefined here -->
  {{ user.name }}
</div>`,
      },
      {
        q: "What is the purpose of ngFor trackBy?",
        a: "The trackBy option in *ngFor is used for performance optimization. It provides a function that returns a unique identifier for each item, allowing Angular to track which items have changed, been added, or removed, minimizing DOM manipulations during re-renders.",
        example: `<div *ngFor="let item of items; trackBy: trackByItemId">
  {{ item.name }}
</div>

trackByItemId(index: number, item: any): number {
  return item.id;
}`,
      },
      {
        q: "What is the purpose of ngSwitch directive?",
        a: "The ngSwitch directive is similar to JavaScript's switch statement. It displays one element from among several possible elements based on a switch condition. It's more efficient than multiple *ngIf directives when choosing between many alternatives.",
        example: `<div [ngSwitch]="status">
  <p *ngSwitchCase="'active'">Active User</p>
  <p *ngSwitchCase="'inactive'">Inactive User</p>
  <p *ngSwitchCase="'pending'">Pending Approval</p>
  <p *ngSwitchDefault>Unknown Status</p>
</div>`,
      },
      {
        q: "What is index property in ngFor directive?",
        a: "The index property of the NgFor directive returns the zero-based index of the current item in each iteration. It can be captured using 'index as i' syntax and used in the template.",
        example: `<li *ngFor="let item of items; index as i">
  Item {{ i }}: {{ item.name }}
</li>`,
      },
      {
        q: "What is slice pipe?",
        a: "The slice pipe creates a new Array or String containing a subset (slice) of the elements. It takes a start index and optional end index as parameters, similar to JavaScript's slice method.",
        example: `<!-- Display first 5 items -->
<div *ngFor="let item of items | slice:0:5">
  {{ item }}
</div>

<!-- Display from 3rd character to 7th -->
{{ 'Hello World' | slice:2:7 }}  <!-- Output: llo W -->`,
      },
      {
        q: "What is the purpose of innerHTML?",
        a: "The innerHTML property allows you to set the HTML content of an element programmatically. However, Angular sanitizes the content to prevent XSS attacks, removing potentially dangerous code while preserving safe HTML.",
        example: `<div [innerHTML]="htmlContent"></div>

// Component
htmlContent = '<p>This is <strong>safe</strong> HTML</p>';`,
      },
      {
        q: "What is the difference between interpolated content and innerHTML?",
        a: "Interpolated content ({{ }}) is always escaped - HTML is not interpreted and displays as text. innerHTML interprets HTML markup but is sanitized for security. Use interpolation for text, innerHTML for trusted HTML content.",
      },
      {
        q: "How is Dependency Hierarchy formed?",
        a: "Angular's dependency injection has a hierarchical injector system. There are two injector hierarchies: Module injector hierarchy (root and lazy-loaded modules) and Element injector hierarchy (components and directives). Child injectors inherit services from parent injectors.",
      },
      {
        q: "What are the different ways to remove duplicate service registration?",
        a: "Remove duplicate service registration by: 1) Using providedIn: 'root' in @Injectable for singletons, 2) Using forRoot() and forChild() patterns in modules, 3) Providing services only in SharedModule and not re-providing in feature modules, 4) Using tree-shakable providers.",
      },
      {
        q: "How does forRoot method help avoid duplicate router instances?",
        a: "The forRoot() method configures the router at the root module level with providers and returns a module with routes. It prevents duplicate instances when the module is imported elsewhere. forChild() is used in feature modules to add routes without re-providing services.",
        example: `// AppRoutingModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// FeatureRoutingModule  
@NgModule({
  imports: [RouterModule.forChild(featureRoutes)],
  exports: [RouterModule]
})`,
      },
      {
        q: "Can I share services using modules?",
        a: "Yes, you can share services using modules by providing them in a SharedModule's providers array and importing that module into feature modules. However, be careful as each import creates a new instance unless using providedIn: 'root'.",
      },
      {
        q: "Is it mandatory to use injectable on every service class?",
        a: "No, @Injectable() is not strictly required if the class has other Angular decorators or doesn't inject dependencies. However, it's recommended to always use it for tree-shakability, future-proofing, and to enable dependency injection.",
      },
      {
        q: "What is an optional dependency?",
        a: "An optional dependency is marked with @Optional() decorator in the constructor. If the dependency is not provided, Angular injects null instead of throwing an error. This is useful for optional features or backward compatibility.",
        example: `constructor(@Optional() private logger: LoggerService) {
  if (this.logger) {
    this.logger.log('Service available');
  }
}`,
      },
      {
        q: "What are the types of injector hierarchies?",
        a: "Angular has two types of injector hierarchies: 1) Module injector hierarchy - root injector and lazy-loaded module injectors for NgModules, 2) Element injector hierarchy - created for each DOM element with components/directives, allows component-level service scoping.",
      },
      {
        q: "What are reactive forms?",
        a: "Reactive forms use a model-driven approach where you create form controls and validation in the component class using FormControl, FormGroup, and FormArray. They provide explicit and immutable management of form state, making them more scalable and testable.",
      },
      {
        q: "What are dynamic forms?",
        a: "Dynamic forms are a pattern where forms are built dynamically based on metadata or configuration. Instead of hardcoding form structure in templates, you generate form controls programmatically based on data models or JSON configuration.",
      },
      {
        q: "What are template driven forms?",
        a: "Template-driven forms are a declarative approach where you write form logic, validations, and controls in the template using directives like ngModel. They are simpler for basic forms but less scalable for complex scenarios.",
      },
      {
        q: "What are the differences between reactive forms and template driven forms?",
        a: "Reactive forms: Setup in component class, synchronous data updates, explicit validation, highly testable, immutable, scalable for complex forms. Template-driven forms: Setup in template, asynchronous data updates, directive-based validation, harder to test, mutable, better for simple forms.",
      },
    ],
    hard: [
      {
        q: "How do you optimize the performance of async validators?",
        a: "Since all validators run after every form value change, async validators can create performance issues. Optimize by: 1) Using updateOn: 'blur' or 'submit' instead of default 'change', 2) Debouncing user input, 3) Caching results, 4) Canceling previous requests, 5) Using switchMap operator.",
        example: `// Optimize with updateOn
this.form = this.fb.group({
  username: ['', {
    validators: [Validators.required],
    asyncValidators: [this.usernameValidator.bind(this)],
    updateOn: 'blur'  // Validate only on blur
  }]
});`,
      },
      {
        q: "How to set ngFor and ngIf on the same element?",
        a: "You cannot use *ngFor and *ngIf on the same element because both are structural directives. Instead, wrap the element with <ng-container> and apply one directive to the container and the other to the inner element, or use ngFor with a filter pipe.",
        example: `<!-- Solution 1: ng-container -->
<ng-container *ngIf="items">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>

<!-- Solution 2: Filter in component -->
<div *ngFor="let item of filteredItems">{{ item }}</div>`,
      },
      {
        q: "What is host property in CSS?",
        a: "The :host pseudo-class selector targets styles in the element that hosts the component. It allows you to style the component's host element from within the component's styles, enabling encapsulated styling.",
        example: `:host {
  display: block;
  border: 1px solid black;
}

:host(.active) {
  border-color: blue;
}

:host-context(.dark-theme) {
  background: black;
  color: white;
}`,
      },
      {
        q: "How do you get the current route?",
        a: "You can get the current route using the Router service's url property, or subscribe to router events. The ActivatedRoute service provides information about the active route including parameters, query params, and data.",
        example: `constructor(private router: Router, private route: ActivatedRoute) {
  // Get current URL
  console.log(this.router.url);
  
  // Subscribe to route changes
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    console.log(event.url);
  });
}`,
      },
      {
        q: "What are Route Parameters and their types?",
        a: "Route parameters are used to pass dynamic values in the URL. Types: 1) Path parameters (/user/:id) - required parts of the route, 2) Query parameters (/search?q=angular) - optional key-value pairs, 3) Optional parameters - passed as matrix URL notation.",
        example: `// Path parameter
{ path: 'user/:id', component: UserComponent }
this.route.params.subscribe(params => console.log(params['id']));

// Query parameter
this.router.navigate(['/search'], { queryParams: { q: 'angular' } });
this.route.queryParams.subscribe(params => console.log(params['q']));`,
      },
      {
        q: "What is Component Test Harnesses?",
        a: "Component harnesses are a testing API around Angular components that provide a robust way to interact with components in tests. They abstract the component's template structure and provide a clean API for testing, making tests more maintainable and resistant to template changes.",
      },
      {
        q: "What is the benefit of Automatic Inlining of Fonts?",
        a: "During compile time with Angular CLI, fonts referenced in CSS are automatically downloaded and inlined into the application. This reduces the number of HTTP requests, improves performance, and ensures fonts are available immediately, preventing font loading delays (FOIT/FOUT).",
      },
      {
        q: "What is content projection?",
        a: "Content projection is a pattern where you insert or project content from a parent component into a child component's template. It allows creating reusable components that can accept custom content, similar to 'slots' in other frameworks.",
        example: `<!-- Child component template -->
<div class="card">
  <div class="header"><ng-content select="[header]"></ng-content></div>
  <div class="body"><ng-content></ng-content></div>
</div>

<!-- Parent using projection -->
<app-card>
  <h2 header>Card Title</h2>
  <p>Card content goes here</p>
</app-card>`,
      },
      {
        q: "What is ng-content and its purpose?",
        a: "ng-content is a directive used to insert content dynamically inside a component. It acts as a placeholder for projected content from parent components, enabling flexible and reusable component designs.",
      },
      {
        q: "What is hydration?",
        a: "Hydration is the process that restores a server-side rendered (SSR) application on the client. After the server sends pre-rendered HTML, Angular's hydration process attaches event listeners, initializes components, and makes the application interactive without re-rendering.",
      },
      {
        q: "What are Angular Signals?",
        a: "Signals are a reactive primitive in Angular that wrap values and notify consumers when values change. Introduced in Angular 16, they provide fine-grained reactivity, better change detection, and improved performance compared to Zone.js-based change detection.",
        example: `import { signal, computed } from '@angular/core';

// Create a signal
const count = signal(0);

// Read signal value
console.log(count()); // 0

// Update signal
count.set(1);
count.update(val => val + 1);

// Computed signal
const doubled = computed(() => count() * 2);`,
      },
    ],
  },
};

// Function to render questions
function renderQuestions() {
  const content = document.getElementById("content");
  const topic = questions.angular;

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
        <div class="question-card expanded" data-question-id="angular-easy-${index}">
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

  // Render Medium Questions
  if (topic.medium && topic.medium.length > 0) {
    html += '<div class="difficulty-section intermediate">';
    html += '<div class="difficulty-header">';
    html += '<span class="difficulty-icon">🟡</span>';
    html += "<h2>Medium Questions</h2>";
    html += "</div>";

    topic.medium.forEach((item, index) => {
      html += `
        <div class="question-card expanded" data-question-id="angular-medium-${index}">
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
        <div class="question-card expanded" data-question-id="angular-hard-${index}">
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

  if (!progressData.angular) {
    progressData.angular = [];
  }

  if (!progressData.angular.includes(questionId)) {
    progressData.angular.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressData = getProgress();
  const totalAnswered = progressData.angular ? progressData.angular.length : 0;
  const totalQuestions = 60;
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
