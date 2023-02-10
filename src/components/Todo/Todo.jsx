import React from "react";
import styled from "../Todolist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, work, state } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, state: e.target.checked ? true : false });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <>
      <li className={styled.item} key={id}>
        <article className={styled.article}>
          <div className={styled.checkwork}>
            <input
              type="checkbox"
              name="state"
              value={id}
              checked={state}
              onChange={handleChange}
            />
            <div className={styled.work}>{work}</div>
          </div>

          <FontAwesomeIcon
            icon={faTrash}
            className={styled.trashbtn}
            onClick={handleDelete}
          />
        </article>
      </li>
    </>
  );
}
