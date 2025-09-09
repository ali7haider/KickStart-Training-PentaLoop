import { useCallback, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onAddTask = useCallback(
    (task) => setTasks((prev) => [task, ...prev]),
    [setTasks]
  );
  const onToggle = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    },
    [setTasks]
  );
  const onDelete = useCallback(
    (id) => {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    },
    [setTasks]
  );
  return (
    <>
      <h1>Productivity Dashboard</h1>
      <AddTaskForm onAddTask={onAddTask} />
      <ProgressBar tasks={tasks} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
}

export default App;
