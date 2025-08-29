# 📝 React ToDo App

A simple, modern ToDo application built with React and Tailwind CSS. Perfect for learning React fundamentals and state management concepts.

<img width="1588" height="989" alt="image" src="https://github.com/user-attachments/assets/be0eb42d-ad7a-49c5-b5a4-19d87d510342" />

## 🚀 Features

- ✅ **Add Tasks** - Create new todo items
- ✅ **Mark Complete** - Toggle task completion status
- ✅ **Delete Tasks** - Remove unwanted tasks
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Task Counter** - Real-time statistics
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI** - Clean design with Tailwind CSS

## 📸 Wireframe

```
┌─────────────────────────────────┐
│         My Todo App             │
│   Total: 3  Active: 2  Done: 1  │
├─────────────────────────────────┤
│ [Add a new task...] [Add Task]  │
├─────────────────────────────────┤
│     [All] [Active] [Complete]   │
├─────────────────────────────────┤
│ ☑ Learn React basics            │
│ ☐ Build a todo app        [Del] │
│ ☐ Practice state mgmt     [Del] │
└─────────────────────────────────┘
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Styling:** Tailwind CSS
- **State Management:** React useState Hook
- **Build Tool:** Create React App
- **Package Manager:** npm

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 14.0 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

Check your versions:
```bash
node --version
npm --version
git --version
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
react-todo-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Component styles
│   ├── index.js        # React entry point
│   └── index.css       # Global styles + Tailwind
├── package.json
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── README.md
```

## 🎯 Key Learning Concepts

This project demonstrates important React concepts:

### **Components & Composition**
- Functional components
- Component composition and reusability
- Props passing between components

### **State Management**
```javascript
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState('all');
```

### **Event Handling**
```javascript
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  setTodos([...todos, newTodo]);
};
```

### **List Rendering**
```javascript
{todos.map(todo => (
  <TodoItem key={todo.id} todo={todo} />
))}
```

### **Conditional Rendering**
```javascript
{todos.length === 0 ? (
  <p>No tasks to display</p>
) : (
  <TodoList todos={todos} />
)}
```

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder


## 🎨 Customization

### Adding New Features
1. **Edit Functionality** - Allow users to edit existing tasks
2. **Categories** - Group tasks by category
3. **Due Dates** - Add deadline functionality
4. **Local Storage** - Persist tasks between sessions
5. **Dark Mode** - Toggle between light/dark themes

### Styling Changes
Modify Tailwind classes in components or add custom CSS to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles here */
.custom-button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
```

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request


**Happy Coding! 🎉**

Made with ❤️ using React and Tailwind CSS
