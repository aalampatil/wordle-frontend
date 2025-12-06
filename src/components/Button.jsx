import React from "react";

function Button({char, handleKeyPress, disable}) {
  return (
    <button
      onClick={() => handleKeyPress(char)}
      className=" h-15 w-10 border-2 p-2 text-center font-bold text-white rounded-lg bg-gray-400 hover:cursor-pointer"
      disabled={disable}
    >{char}</button>
  );
}

export default Button;
