import "./App.css";
import React from "react";
import Todolist from "./components/Todolist";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <NavBar />
        <Todolist />
      </div>
    </div>
  );
}

export default App;
