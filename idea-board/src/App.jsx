
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
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
        <Board ideas={ideas} />
      </div>
    </>
  );
}

export default App;
