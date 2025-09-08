import Note from "./Note";
import { useState } from "react";
function Board( ) {
    const [ideas, setIdeas] = useState([
    { id: 1, text: "Build a react app" },
    { id: 2, text: "Using viite npm create vite@latest" },
    { id: 3, text: "nvm use 22" },
  ]);
  const addIdea = () => {
    const newIdea = { id: ideas.length + 1, text: "New Idea" };
    setIdeas([...ideas, newIdea]);
  };
  function deleteIdea(id){
    const updateIdeas= ideas.filter(idea => idea.id !== id);
    setIdeas(updateIdeas);  
  }


  return (
    <main className="board">
        <button onClick={addIdea}>Add Idea</button>
      {ideas.map((idea) => (
        <Note id={idea.id} text={idea.text} onDelete={deleteIdea}/>
      ))}
    </main>
  );
}

export default Board;
