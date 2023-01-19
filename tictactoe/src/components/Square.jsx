import React from 'react'

export const Square= ({value, onClick, isWinningSquares}) => { //pass in a destructured value
 
  return (
        
        <button type='button' className='square' onClick={onClick} style ={{fontWeight: isWinningSquares ? 'bold' : 'normal'}}//pass in the value of the square
        >{ value}
        
        </button>//passed an attribute to this button
    
  )
}

//we can call childern props from here
