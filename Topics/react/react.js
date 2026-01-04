document.addEventListener("DOMContentLoaded", renderQuestions);

// React Interview Questions (Full Import)
// Source: https://github.com/sudheerj/reactjs-interview-questions
// Organized by section: Core, Router, Redux, Testing, Native, Miscellaneous
// Each question: { section, q, a, example (optional) }

const questions = {
  react: {
    core: [
      {
        section: "Core React",
        q: "What is React?",
        a: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called 'components'. Created by Facebook, React uses a component-based architecture and virtual DOM for optimal performance.",
      },
      {
        section: "Core React",
        q: "What are the major features of React?",
        a: "Major features include: JSX (JavaScript XML syntax), Virtual DOM for efficient updates, Component-based architecture, One-way data binding, Declarative programming, Hooks for state and lifecycle, Context API for state management, Server-side rendering support, Strong ecosystem and community.",
      },
      {
        section: "Core React",
        q: "What is JSX?",
        a: "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild(). JSX makes code easier to write and understand. It gets transpiled to React.createElement() calls by Babel.",
        example: `const element = <h1>Hello, world!</h1>;
// Transpiles to:
const element = React.createElement('h1', null, 'Hello, world!');`,
      },
      {
        section: "Core React",
        q: "What are props in React?",
        a: "Props (short for 'properties') are read-only inputs to components. They allow data to be passed from parent to child components. Props cannot be modified by the child component.",
        example: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// Usage
<Welcome name="Sara" />`,
      },
      {
        section: "Core React",
        q: "What is state in React?",
        a: "State is a built-in object that stores property values that belong to a component. When the state object changes, the component re-renders. Unlike props, state is managed within the component and can be changed.",
        example: `const [count, setCount] = useState(0);
// Update state
setCount(count + 1);`,
      },
      {
        section: "Core React",
        q: "What are hooks in React?",
        a: "Hooks are functions that let you use state and other React features in functional components without writing a class. Common hooks include useState, useEffect, useContext, useReducer, useRef, useMemo, and useCallback.",
        example: `import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      },
      {
        section: "Core React",
        q: "What is the virtual DOM?",
        a: "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize updates by comparing the virtual DOM with the real DOM (diffing) and updating only the changed parts (reconciliation). This process is much faster than manipulating the real DOM directly.",
      },
      {
        section: "Core React",
        q: "What is the difference between controlled and uncontrolled components?",
        a: "Controlled components have their form data handled by React state via props and onChange handlers. Uncontrolled components store their own state internally using refs. Controlled components are preferred for predictable behavior and easier testing.",
        example: `// Controlled
function ControlledInput() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function UncontrolledInput() {
  const inputRef = useRef();
  return <input ref={inputRef} />;
}`,
      },
      {
        section: "Core React",
        q: "What is the useEffect hook used for?",
        a: "useEffect lets you perform side effects in function components, such as data fetching, subscriptions, DOM manipulation, or setting up timers. It runs after every render by default, but you can control when it runs using the dependency array.",
        example: `useEffect(() => {
  // Effect runs after render
  document.title = 'Count: ' + count;
  
  // Cleanup function (optional)
  return () => {
    // Cleanup code here
  };
}, [count]); // Only re-run if count changes`,
      },
      {
        section: "Core React",
        q: "How do you optimize React app performance?",
        a: "Performance optimization techniques include: Using React.memo for component memoization, useCallback for function memoization, useMemo for expensive computations, Code splitting with React.lazy and Suspense, Virtualization for long lists, Avoiding inline functions in JSX, Using production builds, Profiling with React DevTools.",
      },
      {
        section: "Core React",
        q: "What is the Context API?",
        a: "The Context API allows you to share state across the entire app (or part of it) without passing props down manually at every level. It's useful for global data like themes, user authentication, or language preferences.",
        example: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}`,
      },
      {
        section: "Core React",
        q: "What is prop drilling and how do you avoid it?",
        a: "Prop drilling is passing data through many nested components via props to reach a deeply nested component. You can avoid it using Context API, Redux, Zustand, or component composition patterns.",
      },
      {
        section: "Core React",
        q: "What is React Fiber?",
        a: "React Fiber is the new reconciliation engine in React 16+. It enables incremental rendering, allowing React to split rendering work into chunks and spread it over multiple frames. This improves responsiveness for complex applications and enables features like Suspense and Concurrent Mode.",
      },
      {
        section: "Core React",
        q: "What are React fragments and why use them?",
        a: "Fragments let you group multiple children without adding extra nodes to the DOM. They're useful when a component needs to return multiple elements but you don't want to wrap them in a div.",
        example: `// Using Fragment
function Table() {
  return (
    <React.Fragment>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </React.Fragment>
  );
}

// Short syntax
function Table() {
  return (
    <>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </>
  );
}`,
      },
      {
        section: "Core React",
        q: "What are higher-order components (HOC)?",
        a: "A higher-order component is a function that takes a component and returns a new enhanced component. HOCs are used for reusing component logic, such as authentication, logging, or data fetching.",
        example: `function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = useAuth();
    
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    
    return <Component {...props} />;
  };
}

// Usage
const ProtectedPage = withAuth(Dashboard);`,
      },
      {
        section: "Core React",
        q: "What is the difference between useMemo and useCallback?",
        a: "useMemo memoizes a computed value and recalculates only when dependencies change. useCallback memoizes a function definition to prevent recreation on every render. Use useMemo for expensive calculations, useCallback for passing callbacks to optimized child components.",
        example: `// useMemo - memoizes value
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback - memoizes function
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
      },
      {
        section: "Core React",
        q: "What are keys in React and why are they important?",
        a: "Keys help React identify which items have changed, been added, or removed in lists. They should be stable, unique, and consistent across re-renders. Using index as key can cause issues when items are reordered.",
        example: `// Good - stable unique key
{items.map(item => (
  <ListItem key={item.id} data={item} />
))}

// Bad - index as key
{items.map((item, index) => (
  <ListItem key={index} data={item} />
))}`,
      },
      {
        section: "Core React",
        q: "What is lifting state up?",
        a: "Lifting state up means moving state to the closest common ancestor when multiple components need to share the same state. This ensures a single source of truth for the data.",
        example: `function Parent() {
  const [value, setValue] = useState('');
  
  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  );
}`,
      },
      {
        section: "Core React",
        q: "What are synthetic events in React?",
        a: "Synthetic events are React's cross-browser wrapper around native browser events. They have the same interface as native events but work identically across all browsers. React uses event delegation for performance.",
      },
      {
        section: "Core React",
        q: "What is the difference between createElement and cloneElement?",
        a: "createElement creates a new React element from a type, props, and children. cloneElement clones an existing element and optionally overrides its props. cloneElement is useful for modifying children elements.",
        example: `// createElement
React.createElement('div', { className: 'container' }, 'Hello');

// cloneElement
const newElement = React.cloneElement(element, { className: 'new-class' });`,
      },
      {
        section: "Core React",
        q: "What are portals in React?",
        a: "Portals provide a way to render children into a DOM node that exists outside the parent component's DOM hierarchy. Common use cases include modals, tooltips, and dropdowns.",
        example: `import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}`,
      },
      {
        section: "Core React",
        q: "What is StrictMode in React?",
        a: "StrictMode is a development tool that highlights potential problems in an application. It activates additional checks and warnings for its descendants, such as detecting unsafe lifecycles, legacy API usage, and unexpected side effects.",
        example: `<React.StrictMode>
  <App />
</React.StrictMode>`,
      },
    ],
    router: [
      {
        section: "React Router",
        q: "What is React Router?",
        a: "React Router is a standard library for routing in React. It enables navigation among views of various components, allows changing the browser URL, and keeps UI in sync with the URL. It provides declarative routing for React applications.",
      },
      {
        section: "React Router",
        q: "How do you create routes in React Router?",
        a: "Use the <Route> component to define routes. Wrap your routes in a <BrowserRouter> or <HashRouter> for web applications.",
        example: `import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      },
      {
        section: "React Router",
        q: "How do you navigate programmatically in React Router?",
        a: "In React Router v6+, use the useNavigate hook. In v5, use useHistory. Both allow you to navigate programmatically in response to events.",
        example: `// v6
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // After login logic
    navigate('/dashboard');
  };
  
  return <button onClick={handleLogin}>Login</button>;
}`,
      },
      {
        section: "React Router",
        q: "What is a dynamic route?",
        a: "A dynamic route contains parameters that can match variable segments in the URL. Parameters are prefixed with a colon and accessed via useParams hook.",
        example: `// Route definition
<Route path="/users/:userId" element={<UserProfile />} />

// Component
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}`,
      },
      {
        section: "React Router",
        q: "What is the difference between Link and NavLink?",
        a: "Both are used for navigation, but NavLink has additional styling capabilities. NavLink can apply active styles when the current URL matches the link's path.",
        example: `import { Link, NavLink } from 'react-router-dom';

// Link - basic navigation
<Link to="/about">About</Link>

// NavLink - with active styling
<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>`,
      },
      {
        section: "React Router",
        q: "How do you handle 404 pages in React Router?",
        a: "Create a catch-all route that matches any path not matched by previous routes. Place it at the end of your routes.",
        example: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>`,
      },
      {
        section: "React Router",
        q: "What are nested routes?",
        a: "Nested routes allow you to compose complex UIs where components render inside parent components based on the URL structure.",
        example: `<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>

// In Dashboard component
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}`,
      },
      {
        section: "React Router",
        q: "How do you protect routes (authentication)?",
        a: "Create a wrapper component that checks authentication status and redirects if not authenticated.",
        example: `function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>`,
      },
      {
        section: "React Router",
        q: "What is the useLocation hook?",
        a: "useLocation returns the current location object containing pathname, search, hash, and state. It's useful for tracking the current URL or accessing navigation state.",
        example: `import { useLocation } from 'react-router-dom';

function CurrentPath() {
  const location = useLocation();
  
  return (
    <div>
      <p>Current path: {location.pathname}</p>
      <p>Search params: {location.search}</p>
    </div>
  );
}`,
      },
      {
        section: "React Router",
        q: "How do you pass state through navigation?",
        a: "Use the state option in navigate() or the state prop in Link components. Access it via useLocation hook.",
        example: `// Passing state
navigate('/profile', { state: { from: 'dashboard' } });

// Or with Link
<Link to="/profile" state={{ from: 'dashboard' }}>Profile</Link>

// Accessing state
function Profile() {
  const location = useLocation();
  const from = location.state?.from;
  
  return <div>Navigated from: {from}</div>;
}`,
      },
    ],
    redux: [
      {
        section: "React Redux",
        q: "What is Redux?",
        a: "Redux is a predictable state container for JavaScript apps. It helps manage application state in a centralized store, making state changes predictable through actions and reducers. While often used with React, Redux is framework-agnostic.",
      },
      {
        section: "React Redux",
        q: "What are the three principles of Redux?",
        a: "1. Single source of truth: The entire app state is stored in one object tree within a single store. 2. State is read-only: The only way to change state is by dispatching actions. 3. Changes are made with pure functions: Reducers must be pure functions that take previous state and an action, and return new state.",
      },
      {
        section: "React Redux",
        q: "What are actions and reducers in Redux?",
        a: "Actions are plain objects that describe what happened and carry data to the store. Reducers are pure functions that specify how the application's state changes in response to actions sent to the store.",
        example: `// Action Creator
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { id: Date.now(), text, completed: false }
});

// Reducer
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}`,
      },
      {
        section: "React Redux",
        q: "How do you connect a React component to Redux?",
        a: "Use the useSelector hook to read state and useDispatch hook to dispatch actions. In older code, you might see the connect() HOC.",
        example: `import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './actions';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  const handleAdd = (text) => {
    dispatch(addTodo(text));
  };
  
  return (
    <div>
      {todos.map(todo => <div key={todo.id}>{todo.text}</div>)}
    </div>
  );
}`,
      },
      {
        section: "React Redux",
        q: "What is middleware in Redux?",
        a: "Middleware provides a way to intercept actions before they reach the reducer. It's commonly used for logging, async operations, routing, and more. Popular middleware includes redux-thunk and redux-saga.",
        example: `// Logger middleware
const logger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

// Apply middleware
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducer, applyMiddleware(logger));`,
      },
      {
        section: "React Redux",
        q: "What is Redux Thunk?",
        a: "Redux Thunk is middleware that allows you to write action creators that return functions instead of actions. This enables async logic and conditional dispatches.",
        example: `// Thunk action creator
const fetchUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
    
    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      const user = await response.json();
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_FAILURE', error: error.message });
    }
  };
};

// Usage
dispatch(fetchUser(123));`,
      },
      {
        section: "React Redux",
        q: "What is Redux Toolkit (RTK)?",
        a: "Redux Toolkit is the official, recommended way to write Redux logic. It includes utilities to simplify common Redux use cases like store setup, creating reducers and actions, and handling async logic with createAsyncThunk.",
        example: `import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // RTK allows "mutating" logic using Immer
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;`,
      },
      {
        section: "React Redux",
        q: "What are selectors in Redux?",
        a: "Selectors are functions that extract specific pieces of data from the Redux store state. They help encapsulate state shape knowledge and can be optimized with memoization using libraries like Reselect.",
        example: `// Basic selector
const selectTodos = state => state.todos;

// Derived selector with Reselect
import { createSelector } from 'reselect';

const selectCompletedTodos = createSelector(
  [selectTodos],
  (todos) => todos.filter(todo => todo.completed)
);

// Usage in component
const completedTodos = useSelector(selectCompletedTodos);`,
      },
      {
        section: "React Redux",
        q: "How do you handle async operations in Redux?",
        a: "Common approaches include: Redux Thunk for simple async logic, Redux Saga for complex flows using generators, Redux Observable for reactive programming with RxJS, or RTK Query for data fetching and caching.",
        example: `// Using createAsyncThunk in Redux Toolkit
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async () => {
    const response = await fetch('/api/users');
    return response.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});`,
      },
      {
        section: "React Redux",
        q: "What is the difference between Redux and Context API?",
        a: "Context API is built into React for passing data through the component tree. Redux is a more powerful state management library with middleware, dev tools, and stricter patterns. Use Context for simple state sharing; use Redux for complex state logic, middleware needs, or time-travel debugging.",
      },
    ],
    testing: [
      {
        section: "React Testing",
        q: "How do you test React components?",
        a: "Use testing libraries like Jest (test runner) and React Testing Library (for rendering and querying components). Write tests that focus on user behavior rather than implementation details.",
        example: `import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText(/count: 0/i);
  
  fireEvent.click(button);
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});`,
      },
      {
        section: "React Testing",
        q: "What is snapshot testing?",
        a: "Snapshot testing captures the rendered output of a component and saves it as a reference snapshot. Future test runs compare against this snapshot to detect unexpected changes. Useful for ensuring UI doesn't change unintentionally.",
        example: `import renderer from 'react-test-renderer';
import Button from './Button';

it('matches snapshot', () => {
  const tree = renderer
    .create(<Button label="Click me" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});`,
      },
      {
        section: "React Testing",
        q: "How do you mock API calls in tests?",
        a: "Use jest.mock() to mock modules, or use libraries like MSW (Mock Service Worker) for more realistic API mocking at the network level.",
        example: `// Using jest.mock
jest.mock('./api');
import { fetchUser } from './api';

test('loads user data', async () => {
  fetchUser.mockResolvedValue({ id: 1, name: 'John' });
  
  render(<UserProfile userId={1} />);
  
  expect(await screen.findByText('John')).toBeInTheDocument();
});

// Using MSW
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/user/:id', (req, res, ctx) => {
    return res(ctx.json({ id: 1, name: 'John' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());`,
      },
      {
        section: "React Testing",
        q: "What is the difference between unit tests and integration tests?",
        a: "Unit tests test individual components in isolation, mocking dependencies. Integration tests test how multiple components work together. Both are important for comprehensive test coverage.",
      },
      {
        section: "React Testing",
        q: "How do you test hooks?",
        a: "Use @testing-library/react-hooks or test hooks within components. For simple hooks, testing them in components is often sufficient.",
        example: `import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});`,
      },
      {
        section: "React Testing",
        q: "How do you test components that use Context?",
        a: "Wrap the component in the Context Provider during testing, providing test-specific values as needed.",
        example: `import { render, screen } from '@testing-library/react';
import { ThemeContext } from './ThemeContext';
import ThemedButton from './ThemedButton';

test('renders with theme', () => {
  render(
    <ThemeContext.Provider value="dark">
      <ThemedButton>Click me</ThemedButton>
    </ThemeContext.Provider>
  );
  
  expect(screen.getByRole('button')).toHaveClass('dark-theme');
});`,
      },
      {
        section: "React Testing",
        q: "What is React Testing Library's philosophy?",
        a: "React Testing Library encourages testing components the way users interact with them, focusing on behavior rather than implementation. It discourages testing internal state or implementation details.",
      },
      {
        section: "React Testing",
        q: "How do you test async behavior in React?",
        a: "Use async utilities like waitFor, findBy queries, or act() for testing async state updates and effects.",
        example: `import { render, screen, waitFor } from '@testing-library/react';

test('loads and displays data', async () => {
  render(<DataComponent />);
  
  // Wait for element to appear
  const element = await screen.findByText('Data loaded');
  expect(element).toBeInTheDocument();
  
  // Or use waitFor
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});`,
      },
    ],
    native: [
      {
        section: "React Native",
        q: "What is React Native?",
        a: "React Native is a framework for building native mobile applications using React. It allows you to write iOS and Android apps using JavaScript and React, while rendering to native platform components for true native performance and look.",
      },
      {
        section: "React Native",
        q: "How do you style components in React Native?",
        a: "Use the StyleSheet API to create styles in JavaScript. React Native uses Flexbox for layout and doesn't support CSS directly.",
        example: `import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  }
});

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}`,
      },
      {
        section: "React Native",
        q: "How do you handle navigation in React Native?",
        a: "Use React Navigation library (most popular) or React Native Navigation. React Navigation provides stack, tab, and drawer navigators.",
        example: `import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
      },
      {
        section: "React Native",
        q: "What are the differences between React and React Native?",
        a: "React targets web browsers and uses HTML/CSS. React Native targets mobile platforms and uses native components (View, Text) instead of HTML. Event handling and some APIs differ. React Native uses its own bundler (Metro) and different build tools.",
      },
      {
        section: "React Native",
        q: "How do you handle platform-specific code?",
        a: "Use Platform module for simple differences, or create platform-specific file extensions (.ios.js, .android.js) for larger differences.",
        example: `import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});

// Or use Platform.select
const fontFamily = Platform.select({
  ios: 'Arial',
  android: 'Roboto',
  default: 'System'
});`,
      },
      {
        section: "React Native",
        q: "What are FlatList and SectionList?",
        a: "FlatList and SectionList are performant components for rendering lists. They use virtualization to render only visible items, improving performance for long lists.",
        example: `import { FlatList } from 'react-native';

function ItemList() {
  const data = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
  
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}`,
      },
      {
        section: "React Native",
        q: "How do you access native device features?",
        a: "Use built-in APIs (Camera, Geolocation, AsyncStorage) or community packages from React Native Community. For custom native code, write native modules in Java/Kotlin (Android) or Objective-C/Swift (iOS).",
      },
      {
        section: "React Native",
        q: "What is the difference between Expo and React Native CLI?",
        a: "Expo is a framework and platform that provides a managed workflow with many built-in APIs and services, easier setup, and OTA updates. React Native CLI provides more control, allows custom native code, but requires more setup. Choose Expo for faster development, CLI for more customization.",
      },
      {
        section: "React Native",
        q: "How do you debug React Native apps?",
        a: "Use React Native Debugger, Chrome DevTools, or Flipper for debugging. Enable remote debugging, use console.log, or use the integrated debugger in IDEs like VS Code. For native issues, use Xcode or Android Studio.",
      },
    ],
    misc: [
      {
        section: "Miscellaneous",
        q: "What is code splitting in React?",
        a: "Code splitting is a technique to split your code into smaller bundles that can be loaded on demand, reducing initial load time. React supports code splitting via React.lazy and Suspense.",
        example: `import React, { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}`,
      },
      {
        section: "Miscellaneous",
        q: "How do you handle errors in React?",
        a: "Use error boundaries to catch JavaScript errors in component trees and display fallback UI. Error boundaries are class components with componentDidCatch or static getDerivedStateFromError.",
        example: `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`,
      },
      {
        section: "Miscellaneous",
        q: "What is server-side rendering (SSR) in React?",
        a: "SSR renders React components on the server and sends the HTML to the client, improving initial load time and SEO. Popular frameworks include Next.js and Remix. SSR is useful for content-heavy sites and improving perceived performance.",
        example: `// Next.js example
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return {
    props: { data }
  };
}

function Page({ data }) {
  return <div>{data.title}</div>;
}`,
      },
      {
        section: "Miscellaneous",
        q: "What is the difference between SSR and SSG?",
        a: "SSR (Server-Side Rendering) renders pages on each request. SSG (Static Site Generation) pre-renders pages at build time. SSR is better for dynamic content, SSG for static content. Next.js supports both approaches.",
      },
      {
        section: "Miscellaneous",
        q: "What is React Suspense?",
        a: "Suspense lets components wait for something before rendering, showing a fallback UI while waiting. Currently used for code splitting with lazy(), and in the future for data fetching.",
        example: `<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>`,
      },
      {
        section: "Miscellaneous",
        q: "What are React Server Components?",
        a: "Server Components are a new feature that allows components to run on the server, reducing JavaScript bundle size and enabling direct database access. They complement traditional client components and are being adopted in frameworks like Next.js 13+.",
      },
      {
        section: "Miscellaneous",
        q: "How do you implement lazy loading for images?",
        a: "Use the loading='lazy' attribute on img tags, or libraries like react-lazy-load-image-component for more control.",
        example: `// Native lazy loading
<img src="image.jpg" loading="lazy" alt="Description" />

// With library
import { LazyLoadImage } from 'react-lazy-load-image-component';

<LazyLoadImage
  src="image.jpg"
  alt="Description"
  effect="blur"
/>`,
      },
      {
        section: "Miscellaneous",
        q: "What is Concurrent Mode in React?",
        a: "Concurrent Mode (now called Concurrent Rendering) is a set of features that help React apps stay responsive by rendering component trees without blocking the main thread. It enables features like Suspense, useTransition, and useDeferredValue.",
      },
      {
        section: "Miscellaneous",
        q: "What is the useTransition hook?",
        a: "useTransition lets you mark state updates as transitions, allowing React to keep the UI responsive during expensive updates by rendering them in the background.",
        example: `import { useTransition, useState } from 'react';

function SearchResults() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  
  const handleChange = (e) => {
    startTransition(() => {
      setQuery(e.target.value); // Non-urgent update
    });
  };
  
  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <Spinner />}
      <Results query={query} />
    </div>
  );
}`,
      },
      {
        section: "Miscellaneous",
        q: "How do you implement infinite scrolling?",
        a: "Use Intersection Observer API to detect when user scrolls near the bottom, then load more data. Libraries like react-infinite-scroll-component simplify this.",
        example: `import InfiniteScroll from 'react-infinite-scroll-component';

function Feed() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  
  const fetchMoreData = () => {
    // Fetch next page of data
    fetch(\`/api/items?page=\${items.length / 20}\`)
      .then(res => res.json())
      .then(data => {
        setItems(items.concat(data));
        setHasMore(data.length > 0);
      });
  };
  
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {items.map(item => <div key={item.id}>{item.name}</div>)}
    </InfiniteScroll>
  );
}`,
      },
      {
        section: "Miscellaneous",
        q: "What is the difference between forwardRef and useRef?",
        a: "useRef creates a ref object to access DOM nodes or store mutable values. forwardRef allows a component to pass a ref to a child component, enabling parent components to access child DOM nodes.",
        example: `// forwardRef
const FancyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

// Usage
function Parent() {
  const inputRef = useRef();
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return <FancyInput ref={inputRef} />;
}`,
      },
      {
        section: "Miscellaneous",
        q: "How do you optimize bundle size in React?",
        a: "Techniques include: Code splitting with lazy(), Tree shaking by using ES6 imports, Removing unused dependencies, Using production builds, Analyzing bundle with webpack-bundle-analyzer, Using lighter alternatives to heavy libraries, and implementing proper code organization.",
      },
    ],
  },
};

function escapeHTML(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML.replace(/\n/g, "<br>");
}

function renderQuestions() {
  const container = document.getElementById("content");
  container.innerHTML = "";

  const topicNames = {
    core: { name: "Core React", icon: "⚛️" },
    router: { name: "React Router", icon: "🔀" },
    redux: { name: "React Redux", icon: "🔄" },
    testing: { name: "Testing", icon: "🧪" },
    native: { name: "React Native", icon: "📱" },
    misc: { name: "Miscellaneous", icon: "💡" },
  };

  Object.keys(questions.react).forEach((topic) => {
    const section = document.createElement("section");
    section.className = "difficulty-section";

    const header = document.createElement("div");
    header.className = "difficulty-header";
    const topicInfo = topicNames[topic] || { name: topic, icon: "📝" };
    header.innerHTML = `
      <span class="difficulty-icon">${topicInfo.icon}</span>
      <h2>${topicInfo.name}</h2>
    `;
    section.appendChild(header);

    questions.react[topic].forEach((qObj, idx) => {
      const card = document.createElement("div");
      card.className = "question-card expanded";

      const questionHeader = document.createElement("div");
      questionHeader.className = "question-header";

      const questionNumber = document.createElement("span");
      questionNumber.className = "question-number";
      questionNumber.textContent = `Q${idx + 1}`;

      const questionText = document.createElement("div");
      questionText.className = "question-text";
      questionText.textContent = qObj.q;

      questionHeader.appendChild(questionNumber);
      questionHeader.appendChild(questionText);
      card.appendChild(questionHeader);

      const answerSection = document.createElement("div");
      answerSection.className = "answer-section";

      const answerLabel = document.createElement("div");
      answerLabel.className = "answer-label";
      answerLabel.textContent = "Answer";

      const answerText = document.createElement("div");
      answerText.className = "answer-text";
      answerText.innerHTML = escapeHTML(qObj.a);

      answerSection.appendChild(answerLabel);
      answerSection.appendChild(answerText);

      if (qObj.example) {
        const exampleSection = document.createElement("div");
        exampleSection.className = "example-section";

        const exampleLabel = document.createElement("div");
        exampleLabel.className = "example-label";
        exampleLabel.textContent = "💡 Example:";

        const exampleCode = document.createElement("pre");
        exampleCode.className = "example-code";
        exampleCode.textContent = qObj.example;

        exampleSection.appendChild(exampleLabel);
        exampleSection.appendChild(exampleCode);
        answerSection.appendChild(exampleSection);
      }

      card.appendChild(answerSection);
      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

// Theme toggle
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });
}

// Throttle function for better scroll performance
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// Back to Top (with throttled scroll listener)
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  const handleScroll = throttle(() => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, 100);

  window.addEventListener("scroll", handleScroll, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", renderQuestions);
