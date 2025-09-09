import { useCallback, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import ThemeProvider from "./contexts/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
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
    <ThemeProvider>
      <h1>Productivity Dashboard</h1>
      <ThemeSwitcher />
      <AddTaskForm onAddTask={onAddTask} />
      <ProgressBar tasks={tasks} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </ThemeProvider>
  );
}

export default App;
