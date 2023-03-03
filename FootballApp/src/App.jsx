import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TeamStats from "./TeamStats";
import { Routes, Route } from "react-router-dom";
import Club from "./Club";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TeamStats />} />
        <Route path="/teams/:club" element={<Club />} />
      </Routes>
    </div>
  );
}

export default App;
