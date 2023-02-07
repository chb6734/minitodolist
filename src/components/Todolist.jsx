import React, { useEffect, useState } from "react";
import styled from "./Todolist.module.css";
export default function Todolist() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("data/todos.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("data받아옴");
        setTodos(data);
      });
  }, []);
  return (
    <div className={styled.content}>
      <ul className={styled.list}>
        {todos.map((todo) => (
          <li className={styled.item} key={todo.id}>
            <article>
              <div>{todo.work}</div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}