import React from "react";

function Button({char, handleKeyPress, disable}) {
  return (
    <button
      onClick={() => handleKeyPress(char)}
      className=" h-14 w-11 border-2 p-2 text-center text-2xl font-bold text-white rounded-lg bg-neutral-500 hover:cursor-pointer"
      disabled={disable}
    >{char}</button>
  );
}

export default Button;
