
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
function App() {
  const boardTitle = "My IdeaBoard";
  

  return (
    <>
      <div className="app">
        <Header title={boardTitle} />
        <Board />
      </div>
    </>
  );
}

export default App;
