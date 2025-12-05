import React, { use, useContext, useEffect, useState } from "react";
import { WordContext } from "../context/context";

function Keyboard() {
  const { currentG, setCurrentG, setGuesses } = useContext(WordContext);
  const [disable, setDisable] = useState(true);
  const handleKeyPress = (key) => {
    setCurrentG((prev) => (prev += key));     
  };

  useEffect(() => {
    console.log(currentG);
    setGuesses((prev) => {
      const copy = [...prev];
      for(let i=0; i<6;i++){   
        if(copy[i].length < 5) {
          copy[i]=currentG;
          break;
        }
      }
      return copy;
    });
    if(currentG.length === 5) {
    setDisable(true)
    setCurrentG("")
    } else {
      setDisable(false)
    } 
  }, [currentG]);

  return (
    <div className="flex flex-col gap-3 w-full bg-black my-4 py-4">
      {/* first row */}
      <div className="flex flex-row items-center justify-center gap-2 ">
        {["Q", "W", "E", "R", "T", "Y", "I", "O", "P"].map((key, index) => {
          return (
            <button
              onClick={() => handleKeyPress(key)}
              key={index}
              className=" h-15 w-10 border-2 p-2 text-center font-bold text-white rounded-lg bg-gray-400 hover:cursor-pointer"
            >
              {key}
            </button>
          );
        })}
      </div>
      {/* second row */}
      <div className="flex flex-row items-center justify-center gap-1">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key, index) => {
          return (
            <button
              onClick={() => handleKeyPress(key)}
              key={index}
              className=" h-15 w-10 border-2 p-2 text-center font-bold text-white rounded-lg bg-gray-400 hover:cursor-pointer"
            >
              {key}
            </button>
          );
        })}
      </div>
      {/* third row */}
      <div className="flex flex-row items-center justify-center gap-1">
        {["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"].map(
          (key, index) => {
            return (
              <button
                onClick={() => handleKeyPress(key)}
                key={index}
                className={`h-15 w-10 border-2 p-2 text-center font-bold text-white rounded-lg bg-gray-400 hover:cursor-pointer ${
                  key === "ENTER" || key === "DEL" ? "w-fit" : "w-10"
                }`}
              >
                {key}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Keyboard;
