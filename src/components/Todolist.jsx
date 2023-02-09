import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import styled from "./Todolist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = () => {
    console.log("삭제 이벤트");
  };
  return (
    <>
      <div className={styled.content}>
        <ul className={styled.list}>
          {todos.map((todo) => (
            <li className={styled.item} key={todo.id}>
              <article className={styled.article}>
                <div className={styled.checkwork}>
                  <input type="checkbox" name="state" value={todo.id} />
                  <div className={styled.work}>{todo.work}</div>
                </div>

                <FontAwesomeIcon
                  icon={faTrash}
                  className={styled.trashbtn}
                  onClick={handleDelete}
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}
