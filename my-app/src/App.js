import React, { useState } from "react";
import "./index.css";

// Individual To-do Item Component
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex items-center gap-3 p-4 bg-white rounded-lg mb-2 shadow-sm hover:shadow-md transition-all duration-200 ${
        todo.completed ? "opacity-70" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-300"
      />
      <span
        className={`flex-1 text-gray-800 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

// Todo Form Component
const TodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none text-gray-700"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        Add Task
      </button>
    </div>
  );
};

// Filter Buttons Component
const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded-full border-2 transition-all ${
            currentFilter === filter
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

// Todo List Component
const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 italic text-lg">No tasks to display</p>
        <p className="text-gray-400 text-sm mt-2">
          Add a task above to get started!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

// Main App Component
export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React basics", completed: true },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Practice state management", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple ID generation for demo
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all'
  });

  // Calculate stats
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Todo App</h1>
        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <span className="bg-white px-3 py-1 rounded-full shadow-sm">
            <strong>Total:</strong> {totalTodos}
          </span>
          <span className="bg-white px-3 py-1 rounded-full shadow-sm">
            <strong>Active:</strong> {activeTodos}
          </span>
          <span className="bg-white px-3 py-1 rounded-full shadow-sm">
            <strong>Completed:</strong> {completedTodos}
          </span>
        </div>
      </header>

      <main>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <TodoForm onAdd={addTodo} />

          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>

        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Built with React - Perfect for learning! 🚀</p>
        </footer>
      </main>
    </div>
  );
}
