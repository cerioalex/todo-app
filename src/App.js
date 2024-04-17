import "./App.css";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { v4 as uuidv4 } from "uuid";

import Divider from "@mui/material/Divider";
import TodoInfo from "./components/TodoInfo";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const date = new Date();

    const newNote = {
      id: uuidv4(),
      task: todo,
      date: date.toLocaleDateString(),
      completed: false,
      isEditing: false,
    };

    setTodos((currentTodos) => {
      return [...currentTodos, newNote];
    });
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const completedNotes = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(completedNotes);
  };

  const countCompleted = () => {
    var count = 0;
    todos.map((todo) => (todo.completed === true ? (count += 1) : count));
    return count;
  };

  const deleteComplete = () => {
    const updatedTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header />
      <div className="todo-wrapper">
        <h1>Todo</h1>
        <div className="todo-container">
          <AddTodo addTodo={addTodo} />
          {todos.length === 0 && (
            <p className="no-tasks">There are currently no tasks.</p>
          )}
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
          <Divider sx={{ margin: -1, padding: 1 }} />
          <TodoInfo
            todos={todos}
            countCompleted={countCompleted}
            deleteComplete={deleteComplete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
