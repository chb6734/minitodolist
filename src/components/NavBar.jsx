import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import styled from "./Navbar.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
export default function NavBar({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styled.nav}>
      <button onClick={toggleDarkMode} className={styled.modebtn}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>
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
