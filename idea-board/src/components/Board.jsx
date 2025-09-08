import Note from "./Note";

function Board({ ideas }) {
  return (
    <main className="board">
      {ideas.map((idea) => (
        <Note key={idea.id} text={idea.text} />
      ))}
    </main>
  );
}

export default Board;
