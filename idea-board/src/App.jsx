import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const boardTitle = "My IdeaBoard";
  const ideas = [
    { id: 1, text: "Build a react app" },
    { id: 2, text: "Using viite npm create vite@latest" },
    { id: 3, text: "nvm use 22" },
  ];

  return (
    <>
      <div className="app">
        <header className="app-header">{boardTitle}</header>
        <main className="board">
          {ideas.map((idea) => (
            <div id={idea.id} className="note">
              <p>{idea.text}</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
