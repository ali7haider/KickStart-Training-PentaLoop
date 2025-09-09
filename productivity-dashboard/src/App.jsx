import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onAddTask = (task) => setTasks((prev) => [task, ...prev]);
  const onToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const onDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <>
      <h1>Productivity Dashboard</h1>
      <AddTaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
}

export default App;
