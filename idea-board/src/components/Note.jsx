function Note({ id,text, onDelete }) {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevents the click from affecting other elements (good practice)
    onDelete(id);
  };

  return (
    <div className="note">
      <p>{text}</p>
      <button className="note-delete-btn" onClick={handleClick}>
        X
      </button>
    </div>
  );
}
export default Note;
