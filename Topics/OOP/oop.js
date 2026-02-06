const questions = {
  oop: {
    easy: [
      {
        q: "What are primitive data types? Give examples.",
        a: "Primitives are data that are not objects and have no methods or properties. They store simple values directly. Example in JavaScript: string, number, bigint, boolean, undefined, symbol, null.",
      },
      {
        q: "What is an object?",
        a: "An object is an instance of a class that contains data (attributes) and behavior (methods).",
      },
      {
        q: "What is a class?",
        a: "A class is a template or blueprint used to create objects. It defines properties and methods shared by all instances.",
      },
      {
        q: "What's the difference between a class and an object?",
        a: "A class defines structure and behavior (a blueprint), while an object is an actual instance of that blueprint with real data.",
      },
      {
        q: "What are the main pillars (core principles) of OOP?",
        a: "Encapsulation, Abstraction, Inheritance, and Polymorphism.",
      },
      {
        q: "Explain Encapsulation.",
        a: "Encapsulation means bundling data and related methods together and restricting direct access to internal data using access modifiers.",
      },
      {
        q: "Explain Abstraction.",
        a: "Abstraction hides complex implementation details and exposes only essential features to the user.",
      },
      {
        q: "Explain Inheritance.",
        a: "Inheritance allows a class to reuse properties and methods from another class.",
      },
      {
        q: "Explain Polymorphism.",
        a: "Polymorphism means one interface, many forms — methods can behave differently based on the object calling them.",
      },
      {
        q: "What are access modifiers?",
        a: "Keywords that define the visibility of class members. • public: accessible everywhere • private: accessible only inside the class • protected: accessible in the class and subclasses",
      },
      {
        q: "What are static methods or attributes?",
        a: "Static members belong to the class itself, not an instance. They can be accessed directly using the class name.",
      },
      {
        q: "What is a friend function? Can it be inherited?",
        a: "A friend function in C++ can access private/protected members of a class but is not a class member. It cannot be inherited, as friendship isn't transitive or mutual.",
      },
      {
        q: "Difference between abstraction and encapsulation.",
        a: "Abstraction hides complexity from the user. Encapsulation hides internal details within a class using access control.",
      },
      {
        q: "What is a programming paradigm?",
        a: "A style of programming — e.g., Imperative (C, Python) or Declarative (SQL, HTML).",
      },
      {
        q: "What is Garbage Collection?",
        a: "Automatic memory management — unused objects are destroyed to free memory.",
      },
      {
        q: "What is an abstract class?",
        a: "A class that cannot be instantiated. It may include abstract methods that must be implemented in derived classes.",
      },
      {
        q: "Explain Association, Aggregation, and Composition.",
        a: "Association: Loose relationship between classes. Aggregation: 'Has-a' relationship, both can exist independently. Composition: Strong 'Has-a' relationship; child cannot exist without the parent.",
      },
      {
        q: "S — Single Responsibility Principle (SRP)",
        a: "A class should have only one reason to change, meaning it should handle a single responsibility or functionality. Example: A User class should only handle user data, not email sending. Benefit: Simplifies maintenance, debugging, and testing by isolating changes.",
      },
      {
        q: "O — Open/Closed Principle (OCP)",
        a: "Software entities (classes, modules, functions) should be open for extension but closed for modification. Example: Use inheritance or interfaces to add new features without changing existing code. Benefit: Enables adding new features without altering existing code, reducing the risk of new bugs.",
      },
      {
        q: "L — Liskov Substitution Principle (LSP)",
        a: "Subclasses should be replaceable for their base classes without altering program correctness. Example: If a method expects a Bird object, passing a Penguin (subclass) shouldn't break functionality. Benefit: Ensures consistency, reusability, and reliability in class hierarchies.",
      },
      {
        q: "I — Interface Segregation Principle (ISP)",
        a: "Clients should not be forced to depend on interfaces they do not use. Example: Instead of one large interface, create smaller, specific ones. Benefit: Promotes clean, focused interfaces and minimizes unnecessary dependencies.",
      },
      {
        q: "D — Dependency Inversion Principle (DIP)",
        a: "High-level modules should depend on abstractions, not on concrete implementations. Example: Use interfaces or abstract classes instead of concrete classes for dependencies. Benefit: Increases flexibility, testability, and decouples system components for easier modification.",
      },
    ],
    intermediate: [
      {
        q: "Why do we need objects?",
        a: "To group related data and methods together for modularity and easier maintenance.",
      },
      {
        q: "Compare overriding and overloading (compile-time vs runtime polymorphism).",
        a: "Overloading: Same method name, different parameters — happens at compile-time. Overriding: Redefining a parent method in a subclass — happens at runtime.",
      },
      {
        q: "Can an abstract class be instantiated?",
        a: "No, because it's incomplete and meant to be subclassed.",
      },
      {
        q: "What is the final keyword used for?",
        a: "Prevents inheritance for classes, overriding for methods, and reassignment for variables.",
      },
      {
        q: "What is the return type of a constructor?",
        a: "Constructors don't have a return type, not even void.",
      },
      {
        q: "Can a constructor be overloaded?",
        a: "Yes — by defining multiple constructors with different parameter lists.",
      },
      {
        q: "Can a destructor be overloaded?",
        a: "No — only one destructor per class is allowed.",
      },
      {
        q: "How much memory does a class occupy?",
        a: "Zero, until an object (instance) of that class is created.",
      },
      {
        q: "How can you call a base class method without creating an instance?",
        a: "By using inheritance (super or BaseClass::methodName()) or static methods.",
      },
      {
        q: "Why is encapsulation important?",
        a: "It reduces coupling and increases maintainability — changes in one class don't break others.",
      },
      {
        q: "What is a function signature?",
        a: "The unique combination of function name, parameter count, types, and return type.",
      },
      {
        q: "What are the types of polymorphism?",
        a: "Static (compile-time): Method overloading. Dynamic (runtime): Method overriding.",
      },
      {
        q: "Do all languages have destructors?",
        a: "No. Some (like Python or Java) rely on garbage collection instead.",
      },
      {
        q: "Data hiding vs Data binding.",
        a: "Data hiding: Restricting direct access to object data. Data binding: Linking data with its behavior (methods).",
      },
      {
        q: "When you pass an object to a method in Java, are you passing a copy or reference?",
        a: "The reference is passed by value — the method works on the same object.",
      },
      {
        q: "What is the keyword 'this' used for?",
        a: "Refers to the current object instance of a class.",
      },
    ],
    hard: [
      {
        q: "Difference between structs and objects.",
        a: "Structs (in C) can hold data only, while objects can hold both data and methods.",
      },
      {
        q: "Difference between interface and abstract class.",
        a: "Interface: Only method declarations; supports multiple inheritance. Abstract class: Can have concrete and abstract methods; single inheritance only.",
      },
      {
        q: "What is the diamond problem? Does it occur in Java?",
        a: "Happens in multiple inheritance when a class inherits from two parents with the same method. Java avoids it by allowing multiple interfaces, not multiple class inheritance.",
      },
      {
        q: "Can a constructor be private?",
        a: "Yes — used in patterns like Singleton to control instance creation.",
      },
      {
        q: "How to use a class with a private constructor?",
        a: "Through static methods or inner static instances.",
      },
      {
        q: "What is a copy constructor, and what problem does it solve?",
        a: "Initializes a new object using another object of the same class. Prevents shallow copy issues by performing a deep copy.",
      },
      {
        q: "Why prefer composition over inheritance?",
        a: "Composition is loosely coupled, easier to change or extend, and avoids tight dependencies from inheritance.",
      },
      {
        q: "If we create an array of objects but initialize only some?",
        a: "The uninitialized ones are set using the default constructor.",
      },
      {
        q: "What is a virtual function?",
        a: "A function in a base class that can be overridden in derived classes to enable runtime polymorphism.",
      },
    ],
  },
};
