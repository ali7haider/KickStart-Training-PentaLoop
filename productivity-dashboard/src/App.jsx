import { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  return (
    <>
      <h1>Productivity Dashboard</h1>
      <pre>{JSON.stringify(tasks,null,2)}</pre>
    </>
  );
}

export default App;
