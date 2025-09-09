import TaskItem from "./TaskItem";
import React from "react";
function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) {
    return <p>No tasks — add one!</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
export default React.memo(TaskList);
