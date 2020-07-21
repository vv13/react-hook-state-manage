import React, { useState } from "react";
import { useTodoContext, TodoStatus } from "./context/todo";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (!input) {
      return;
    }
    addTodo(input);
    setInput("");
  };

  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            <input
              onClick={() => toggleTodo(index)}
              checked={todo.status === TodoStatus.DONE}
              type="radio"
            />
            <span
              style={{
                textDecoration:
                  todo.status === TodoStatus.DONE ? "line-through" : "unset",
              }}
            >
              {todo.name}
            </span>
            <button onClick={() => deleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
