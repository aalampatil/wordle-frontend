import React, { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/context";
import Button from "./Button";

function Keyboard() {
  const { currentG, setCurrentG, setGuesses } = useContext(WordContext);
  const [disable, setDisable] = useState(false);

  const handleKeyPress = (key) => {  
      setCurrentG((prev) => (prev += key));
  };
  
  const remove = () => {
      setCurrentG((prev) => {
        if (!prev) return prev;
        return prev.slice(0, -1); // slice returns new string
      });
  }

  const compare = () => {

  }

  useEffect(() => {
    //console.log(currentG);
    if (currentG.length == 5) {
      setDisable(true);
    }

    setGuesses((prev) => {
      const copy = [...prev];
      for (let i = 0; i < 6; i++) {
        if (copy[i].length < 5) {
          copy[i] = currentG;
          break;
        }
      }
      return copy;
    });
    if (currentG.length === 5) {
      setCurrentG("");
    }
  }, [currentG]);

  return (
    <div className="flex flex-col gap-3 w-full my-4 py-4">
      {/* first row */}
      <div className="flex flex-row items-center justify-center gap-2 ">
        {["Q", "W", "E", "R", "T", "Y", "I", "O", "P"].map((char, index) => {
          return (
            <Button
              key={index}
              char={char}
              handleKeyPress={handleKeyPress}
              disable={disable}
            />
          );
        })}
      </div>

      {/* second row */}
      <div className="flex flex-row items-center justify-center gap-1">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((char, index) => {
          return (
            <Button
              key={index}
              char={char}
              handleKeyPress={handleKeyPress}
              disable={disable}
            />
          );
        })}
      </div>

      {/* third row */}
      <div className="flex flex-row items-center justify-center gap-1">
        <button
          onClick={compare}
          value={"ENTER"}
          className={`h-15 w-fit border-2 p-2 text-center font-bold text-white rounded-lg bg-gray-400 hover:cursor-pointer`}
        >
          Enter
        </button>
        {["Z", "X", "C", "V", "B", "N", "M"].map((char, index) => {
          return (
            <Button
              key={index}
              char={char}
              handleKeyPress={handleKeyPress}
              disable={disable}
            />
          );
        })}
        <button
          onClick={remove}
          className={`h-15 w-fit border-2 p-2 text-center font-bold text-white rounded-lg bg-gray-400 hover:cursor-pointer`}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
