
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
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
        <Header title={boardTitle} />
        <main className="board">
          {ideas.map((idea) => (
            <Note key={idea.id} text={idea.text} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
