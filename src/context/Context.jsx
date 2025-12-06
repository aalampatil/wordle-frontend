import { createContext, useEffect, useState } from "react";
import wordsList from "../assets/assets.js";

export const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
  const [currentG, setCurrentG] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(""));
  const [word, setWord] = useState("");

  const pickword = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    setWord(wordsList[randomIndex]);
  };

  useEffect(() => {
    pickword();
  }, []);

  const value = { currentG, setCurrentG, guesses, setGuesses, word };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};
