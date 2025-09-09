import { useMemo } from "react";
export default function ProgressBar({ tasks }) {
  const percent = useMemo(() => {
    if (!tasks.length) return 0;
    const completed = tasks.filter((t) => t.completed).length;
    return Math.round((completed / tasks.length) * 100);
  }, [tasks]);

  return (
    <div style={{ margin: "16px 0" }}>
      <p>Progress: {percent}%</p>
      <div
        style={{
          height: "10px",
          backgroundColor: "#ddd",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            backgroundColor: "green",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
