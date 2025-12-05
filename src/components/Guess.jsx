import React from 'react'

function Guess({index, guess, word}) {
    // guess = "hello" , length=5
    const wordLength = 5 ;
    const tiles = [];
    for (let i=0; i<wordLength; i++) {
        const char = guess[i];
        // h, e, l, l, o
        tiles.push(<div key={i} className='h-12 w-12 border-2 border-black text-center flex items-center justify-center'>{char}</div>)
        //[h, e, l, l, o]
    }
  return (
    <div key={index} className='flex flex-row gap-2'>
      {tiles}
    </div>
  )
}

export default Guess
