import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onAddTask = (task) => setTasks((prev) => [task, ...prev]);
  return (
    <>
      <h1>Productivity Dashboard</h1>
      <AddTaskForm onAddTask={onAddTask} />
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </>
  );
}

export default App;
