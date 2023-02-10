import "./App.css";
import React, { useState } from "react";
import Todolist from "./components/Todolist";
import NavBar from "./components/NavBar";

const filters = ["All", "Active", "Completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className="wrapper">
      <div className="content">
        <NavBar filters={filters} filter={filter} onFilterChange={setFilter} />
        <Todolist filter={filter} />
      </div>
    </div>
  );
}

export default App;
