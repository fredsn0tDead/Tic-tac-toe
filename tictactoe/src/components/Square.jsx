import React from 'react'

export const Square= ({value, onClick}) => { //pass in a destructured value
 console.log(value);
  return (
        
        <button type='button' className='square' onClick={onClick}//pass in the value of the square
        >{ value}
        
        </button>//passed an attribute to this button
    
  )
}

//we can call childern props from here
