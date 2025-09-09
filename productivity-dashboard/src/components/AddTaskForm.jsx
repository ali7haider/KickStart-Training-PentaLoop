import { useRef } from "react";

export default function AddTaskForm({ onAddTask }) {

    // Why using useRef here instead of useState?
    // useRef is used to directly access a DOM element and its properties without causing re-renders.
    // In this case, we only need to read the input value on form submission, so useRef is more efficient.
    // If we used useState, the component would re-render on every keystroke, which is unnecessary for this use case.
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) return;
    onAddTask({ id: Date.now(), title, completed: false });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Add New Task" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}
