import React from "react";
import styled from "./Navbar.module.css";
export default function NavBar({ filters, filter, onFilterChange }) {
  return (
    <div className={styled.nav}>
      {filters.map((value, index) => (
        <button
          key={index}
          className={value === filter ? styled.activebutton : styled.button}
          onClick={() => onFilterChange(value)}
        >
          {value}
        </button>
      ))}
      {/* <button className={styled.button}>All</button>
      <button className={styled.button}>Active</button>
      <button className={styled.button}>Completed</button> */}
    </div>
  );
}
