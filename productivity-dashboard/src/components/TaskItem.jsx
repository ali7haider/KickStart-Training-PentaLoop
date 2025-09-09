import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "start",
        gap: "16px",
        marginBottom: "8px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >{task.title}</span>
      </label>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default React.memo(TaskItem);
