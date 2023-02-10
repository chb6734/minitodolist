import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import styled from "./Todolist.module.css";
import Todo from "./Todo/Todo";

export default function Todolist({ filter }) {
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
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <div className={styled.content}>
        <ul className={styled.list}>
          {filtered.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "All") {
    return todos;
  } else if (filter === "Completed") {
    return todos.filter((todo) => todo.state === true);
  } else {
    return todos.filter((todo) => todo.state === false);
  }
}
