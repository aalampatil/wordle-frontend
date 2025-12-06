import { useContext, useEffect, useState } from "react";
import "./App.css";
import words from "./assets/assets.js";
import Board from "./components/Board.jsx";
import Navbar from "./components/Navbar.jsx";
import { WordContext } from "./context/context.jsx";

function App() {
  const {word} = useContext(WordContext)
  return (
    <>  
      <div className="bg-black m-auto p-5 w-full h-full ">
        <Navbar />
        <Board />
      </div>
    </>
  );
}

export default App;
