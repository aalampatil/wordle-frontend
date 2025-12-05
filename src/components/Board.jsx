import React, { useContext, useState } from 'react'
import Keyboard from './Keyboard'
import Guess from './Guess'
import { WordContext } from '../context/context';

function Board() {
  const {guesses} = useContext(WordContext);
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-2'>
          {guesses.map((guess, index) => {
        return <div key={index}><Guess guess={guess || ""} /></div> 
      })}
      </div>  
      <Keyboard />
    </div>
  )
}

export default Board
