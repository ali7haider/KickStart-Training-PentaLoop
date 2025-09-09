
export default function TaskFilter({setFilter }) {
  return (
    <div style={{ margin: "12px 0" }}>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}
