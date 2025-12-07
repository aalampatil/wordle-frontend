function Tile({ char, isCorrect, isPresent }) {
  return (
    <div
      className={`h-12 w-12 border flex items-center justify-center text-2xl text-white ${
        isCorrect ? "bg-green-500" : isPresent ? " bg-yellow-400": ""
      } `}
    >
      {char}
    </div>
  );
}

export default Tile;
