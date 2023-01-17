import React from 'react';
import {Square} from './Square'



export const Board = ({board, handlesquareclick}) => {//properties passed in the App
    //need to use react hooks
    
    const renderSquare = (position) =>{
        //Once the function accepts the numbered paramter the function returns the square commponet wiht the boards position being its value and the position being passed in the handlesquare click
        //In otherwords when the position is passed to the the handlesquareclick can handle the different states
        return( <Square value={board[position]} onClick={()=>{
            handlesquareclick(position)
        }}/>
        ); 
    };
  return (
    <div className='board'>
        <div className='board-row'>
            
            { renderSquare(0)
            //Each square is given a number position to be passed in
            }
            { renderSquare(1)}
            { renderSquare(2)}
        </div>
        <div className='board-row'>
            { renderSquare(3)}
            { renderSquare(4)}
            { renderSquare(5)}
            
        </div>
        <div className='board-row'>
            { renderSquare(6)}
            { renderSquare(7)}
            { renderSquare(8)}
        
        </div>

    </div>
 
 
 
 );
};
