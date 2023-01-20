import React from 'react'


 const Status = ({winner,current}) => {
  
    const noMovesLeft = current.board.every((el)=> el!== null );//check the index of every element and it is null
    //every() tests where each element is not null in this case we pass in el for each element and we test if each is not null

    return (
    <div className='status-message'>
    {winner && (
    <>
    
    Winner is {''} 
    <span className={winner ==='X' ? 'text-green': 'text-orange'}>
      {winner}
    </span>
    </>
    )
 }
    
    {!winner && !noMovesLeft && (
    <>
    
    Next player is {''} 
    <span className=  {current.isXNext ? 'text-green' : 'text-orange'}>
      {current.isXNext ? 'X' : 'O'}{' '}
    </span>
    </>
    )}
    {!winner && noMovesLeft && 
    <>
    <span className='text-green'>X</span> and <span className='text-orange'>O</span> tied
    
    </>}
    
    </div>
  );
};
export default Status
