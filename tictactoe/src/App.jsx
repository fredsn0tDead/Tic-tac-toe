import React from "react";
import { useState } from "react";
import { Board } from "./components/Board";// must use curly brackets to import a function
import "./styles/root.scss"
import { calculateWinner } from "./components/helpers";
const App = () => {
  const [board, setboard] =  useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);//used to represent the second player
  
  const winner = calculateWinner(board);//put the winner in a state pass in our board state
  // whenever our board updates our board will be rendered
  const message = winner ? `Winner is ${winner}`: `Next player is ${isXNext ? 'X' : 'O'}`
  //created tenary operation in order to determine the winner message and see whos turn it is
  //If it is not the winner we need to find out whos turn it is
  //Use String interpolation in order to determing this
  
  const handlesquareclick = (position) => {
          //new value to set the state
          //Creating logic to determine the state
          if (board[position] || winner)// prevent a user from clicking the same board more than once

          {
              return;//Return the same value
          }

          setboard((prev)=>{//we call the setboard value pass in the previous state
                 
              return prev.map((square,pos)=>{// we then try to map the current array of the board to the new update array
                  //'square is the value we first run the function all squares will be null or zero
                  //then when we click a box we run the check
                  //we are simply updating the previous array
                  //map function takes in the callback function which takes in two parameters 'square' and 'pos'
                  if (pos === position){
                      //function checks if the pos of the currently iterated square squals position of the currently clicked square
                      //if we click position 4 'second row column 1' then when it is iterating through then the boes not checked are run null
                      return isXNext ? 'X' : 'O';//we are returning an X or a O depending on isXNext if we have clicked the position
                      // isNext is originally set to false 
                  }
                  return square;//all other boxes become zero
                  //otherwise just return the square just the null square
              });

          });
          setisXNext((prev)=>!prev); 
          //passes in a function that changes the state of the board to reflect the X that was already placed
          //if prev was false now its true if its true now its false
  };
  return(
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handlesquareclick={handlesquareclick}/>
    
  </div>

  );
};

export default App;