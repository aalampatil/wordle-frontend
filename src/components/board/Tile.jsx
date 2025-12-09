import { motion } from "motion/react";

function Tile({ char, isCorrect, isPresent }) {
  return (
    <div
      className={`h-[51px] w-[51px] border-2 border-neutral-700 flex items-center justify-center text-3xl font-bold font-serif text-white ${
        isCorrect ? "bg-green-500" : isPresent ? "bg-yellow-400" : ""
      } `}
    >
      {char}
    </div>
  );
}

export default Tile;
