import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(["walk", "sleep", "play"]);
  const [input, setInput] = useState("");

  const [changeIn, setChangeIn] = useState("");
  const [inde, setInde] = useState("");

  const handleUpdate = () => {
    const index = inde - 1;
    if (!changeIn.trim()) return;

    setTodo((prev) => prev.map((item, i) => (i === index ? changeIn : item)));

    setInde("");
    setChangeIn("");
  };
  const handleAdd = () => {
    if (!input.trim()) return;

    setTodo((prev) => [...prev, input]);
    setInput("");
  };

  const handleRemove = (index) => {
    setTodo((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="todo_whole">
      <h2>Todo</h2>
      <div className="todo">
        <input
          value={input}
          type="text"
          placeholder="Add New"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add New</button>
        <ul>
          {todo.map((items, index) => (
            <li key={index}>
              {index + 1}. {items}
              <button onClick={() => handleRemove(index)}>X</button>
            </li>
          ))}
        </ul>
        <input
          value={inde}
          type="number"
          onChange={(e) => setInde(e.target.value)}
        />
        <input
          value={changeIn}
          type="text"
          onChange={(e) => setChangeIn(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Todo;
