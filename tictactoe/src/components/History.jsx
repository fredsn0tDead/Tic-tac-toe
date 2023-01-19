import React from 'react'
 const History = ({history, moveTo , currentMove}) => {
  return (
    <ul>
      {
        history.map((_,move)=>{//move represent the index or current move we can use _ the represent we will not be
          return(

          <li key={move}>
            <button style={{
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
  );
};
export default History;