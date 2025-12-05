import { createContext, useState } from "react";

export const WordContext = createContext()

export const WordContextProvider = ({children}) => {
    const [currentG, setCurrentG] = useState("");
    const [guesses, setGuesses] = useState(Array(6).fill(""));
    const value = {currentG, setCurrentG, guesses, setGuesses}
  return (
    <WordContext.Provider value={value} >
        {children}
    </WordContext.Provider>
  )
}