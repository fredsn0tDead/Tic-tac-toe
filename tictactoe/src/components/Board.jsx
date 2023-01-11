import React, {useState} from 'react'
import {Square} from './Square'



export const Board = () => {//properties
    //need to use react hooks
    const [board, setboard] =  useState(Array(9).fill(null));
    const [isXNext, setisXNext] = useState(false);

    const handlesquareclick = (position) => {
            //new value to set the state

            if (board[position])

            {
                return;
            }

            setboard((prev)=>{
                   
                return prev.map((square,pos)=>{
                    if (pos == position){
                        return isXNext ? 'X' : 'O';
                    }
                    return square;
                });

            });
            setisXNext((prev)=>!prev); 
    };
    const renderSquare = (position) =>{
        return( <Square value={board[position]} onClick={()=>{
            handlesquareclick(position)
        }}/>
        ); 
    };
  return (
    <div className='board'>
        <div className='board-row'>
            { renderSquare(0)}
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
