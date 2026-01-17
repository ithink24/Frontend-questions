import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task.trim(), status: "pending" }]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleStatus = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? {
              ...todo,
              status: todo.status === "pending" ? "completed" : "pending",
            }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAdd}>Add</button>

      <br />
      <input
        type="text"
        placeholder="Search task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <span>
              {todo.text} — {todo.status}
            </span>
            <button onClick={() => handleToggleStatus(index)}>Toggle</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
