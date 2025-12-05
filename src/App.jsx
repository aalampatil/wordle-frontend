import { useEffect, useState } from "react";
import "./App.css";
import words from "./assets/assets.js";
import Board from "./components/Board.jsx";

function App() {
  return (
    <>
      <h1>wordle</h1>
      <div>
        <Board />
      </div>
    </>
  );
}

export default App;
