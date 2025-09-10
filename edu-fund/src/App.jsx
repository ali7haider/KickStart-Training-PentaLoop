import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScholarshipPage from "./pages/ScholarshipPage";
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scholarships" element={<ScholarshipPage />} />
        <Route path="/apply" element={<ApplicationPage />} />
      </Routes>
    </div>
  );
}

export default App;
