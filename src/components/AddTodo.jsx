import React, { useState } from "react";
import styled from "./AddTodo.module.css";

export default function AddTodo() {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);

  return (
    <form className={styled.form}>
      <input
        className={styled.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
    </form>
  );
}
