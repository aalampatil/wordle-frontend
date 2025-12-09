import Tile from "./Tile";
import { motion } from "motion/react";

function CheckedRow({ word, isCorrect, isPresent }) {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <Tile
          key={i}
          char={word[i] || ""}
          isCorrect={isCorrect[i]}
          isPresent={isPresent[i]}
        />
      ))}
    </div>
  );
}

export default CheckedRow;
