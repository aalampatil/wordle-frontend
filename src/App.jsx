import { useContext, useEffect, useState } from "react";
import "./App.css";
import words from "./assets/assets.js";
import Board from "./components/board/Board.jsx";
import Navbar from "./components/Navbar.jsx";
import { WordContext } from "./context/Context.jsx";
import Keyboard from "./components/Keyboard.jsx";

function App() {
  const { word,guesses } = useContext(WordContext);

  return (
    <div className="bg-neutral-900 w-[100%] min-h-screen">
      <Navbar />
      <Board />
      <Keyboard />
    </div>
  );
}


export default App;
