import "./App.css";
import Board from "./components/board/Board.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Result from "./components/Result.jsx";
import { useContext } from "react";
import { WordContext } from "./context/Context.jsx";

function App() {
  const {gameOver} = useContext(WordContext);
  //yeah i own this repo now

  return (
    <div className="bg-neutral-900 w-[100%] min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-0 relative">
      <Board />
      {gameOver && <Result />}
      </div>
      <Footer />
    </div>
  );
}


export default App;
