import React from 'react'


 const Status = ({winner,current}) => {
  
    const noMovesLeft = current.board.every((el)=> el!== null );//check the index of every element and it is null
    //every() tests where each element is not null in this case we pass in el for each element and we test if each is not null

    return (
    <h2>{winner && `Winner is ${winner}`}
    {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
    {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  )
}
export default Status
