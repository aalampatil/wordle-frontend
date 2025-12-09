import { useContext, useEffect, useState } from "react";
import "./App.css";
import words from "./assets/assets.js";
import Board from "./components/board/Board.jsx";
import Navbar from "./components/Navbar.jsx";
import { WordContext } from "./context/Context.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  // const {  } = useContext(WordContext);

  return (
    <div className="bg-neutral-900 w-[100%] min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-0">
      <Board />
      </div>
      <Footer />
    </div>
  );
}


export default App;
