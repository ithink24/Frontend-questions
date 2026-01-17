"use client";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");

  // Add a new todo
  const handleAdd = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
    setNewTodo("");
  };

  // Delete a todo by id
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filtered todos based on search
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: 8,
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Todo List</h2>

      {/* Add new todo */}
      <div style={{ display: "flex", marginBottom: "1rem", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Add a task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={handleAdd} style={{ padding: "0.5rem 1rem" }}>
          Add
        </button>
      </div>

      {/* Search todos */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
      />

      {/* Todo list */}
      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No tasks found</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{todo.text}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  background: "crimson",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  padding: "0.3rem 0.6rem",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
