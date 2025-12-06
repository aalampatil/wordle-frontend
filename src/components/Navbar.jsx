import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 m-2 p-2 text-white border-2 border-white">
      <h1 className="text-white font-semibold text-3xl underline">wordle</h1>  
      <div className="w-6/12 flex flex-row items-center justify-around gap-4">
        <p>Hint</p> <p>Score</p>
      </div>
    </div>
  );
}

export default Navbar;
