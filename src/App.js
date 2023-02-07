import "./App.css";
import React from "react";
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <NavBar />
        <Todolist />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
