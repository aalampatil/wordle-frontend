import React, { useContext, useState } from "react";
import TypingRow from "./TypingRow";
import EmptyRow from "./EmptyRow.jsx";
import { WordContext } from "../../context/context";
import CheckedRow from "./CheckedRow";

function Board() {
  const { guesses, currentG, isCorrect, isPresent } = useContext(WordContext);
  //console.log({isPresent});
  

  return (
    <div className="grid gap-2 items-center justify-center m-2 p-2">
      {Array.from({ length: 6 }).map((_, rowIndex) => {
        const guess = guesses[rowIndex];
        
        const activeRow = rowIndex === guesses.length;

        return guess ? (
          <CheckedRow key={rowIndex} word={guess} isCorrect={isCorrect[rowIndex]} isPresent={isPresent[rowIndex]} />
        ) : activeRow ? (
          <TypingRow key={rowIndex} word={currentG} />
        ) : (
          <EmptyRow key={rowIndex} />
        );
      })}
    </div>
  );
}

export default Board;
