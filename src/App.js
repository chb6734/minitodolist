import "./App.css";
import React, { useState } from "react";
import Todolist from "./components/Todolist";
import NavBar from "./components/NavBar";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["All", "Active", "Completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <DarkModeProvider>
        <NavBar filters={filters} filter={filter} onFilterChange={setFilter} />
        <Todolist filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
