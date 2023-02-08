import React, { useState } from "react";
import styled from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: "이거", state: true, work: text });
    setText("");
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <input
        className={styled.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styled.button}>ADD</button>
    </form>
  );
}
