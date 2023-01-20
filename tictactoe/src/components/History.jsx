import React from 'react'
 const History = ({history, moveTo , currentMove}) => {
  return (
    <div className='history-wrapper'>
    <ul className='history'>
      {
        history.map((_,move)=>{//move represent the index or current move we can use _ the represent we will not be
          return(
          
          <li key={move}>
            <button className={`btn-move ${move ===currentMove ? 'active' : ''}`} style={{
              //apply some inline styling
              fontWeight:move === currentMove ? 'bold' :'normal',

            }} type='button' onClick={()=>{
            
            moveTo(move);

          }}>{ move === 0 ? 'Go to game start': `Go to move #${move}`}</button>
          
          </li>
          );  
      }
        
        )
      }


        
    
    </ul>
    </div>
  );
  
};
export default History;