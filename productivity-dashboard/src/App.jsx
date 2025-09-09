import { useCallback, useState,useMemo } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import ThemeProvider from "./contexts/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TaskFilter from "./components/TaskFilter";


function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

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
    const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <ThemeProvider>
      <h1>Productivity Dashboard</h1>
      <ThemeSwitcher />
      <AddTaskForm onAddTask={onAddTask} />
      <TaskFilter setFilter={setFilter} />
      <ProgressBar tasks={tasks} />
      <TaskList tasks={filteredTasks} onToggle={onToggle} onDelete={onDelete} />
    </ThemeProvider>
  );
}

export default App;
