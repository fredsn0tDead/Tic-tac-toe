import React from "react";
import  Status  from "./components/status";
import { useState } from "react";
import { Board } from "./components/Board";// must use curly brackets to import a function
import "./styles/root.scss"
import  History  from "./components/History";  
import { calculateWinner } from "./components/helpers";

const NEW_GAME = [{board: Array(9).fill(null), isXNext:true},];

const App = () => {
  const [history, setHistory] =  useState(NEW_GAME);
  
  const [currentMove, Setcurrentmove] = useState(0);
  console.log(history);

  const current = history[currentMove];//index of the current move
  const {winner, winningSquares } = calculateWinner(current.board);//put the winner in a state pass in our board state
  // whenever our board updates our board will be rendered
  const message = winner ? `Winner is ${winner}`: `Next player is ${current.isXNext ? 'X' : 'O'}`;
  //created tenary operation in order to determine the winner message and see whos turn it is
  //If it is not the winner we need to find out whos turn it is
  //Use String interpolation in order to determing this
  
  const handlesquareclick = (position) => {
          //new value to set the state
          //Creating logic to determine the state
          if (current.board[position] || winner)// prevent a user from clicking the same board more than once

          {
              return;//Return the same value
          }

          setHistory(prev => {//we call the setboard value pass in the previous state
              const last = prev[prev.length -1];


              const newBoard = last.board.map((square, pos) => {
                  
                if (pos === position){
                      //function checks if the pos of the currently iterated square squals position of the currently clicked square
                      //if we click position 4 'second row column 1' then when it is iterating through then the boes not checked are run null
                      return last.isXNext ? 'X' : 'O';//we are returning an X or a O depending on isXNext if we have clicked the position
                      // isNext is originally set to false 
                  }
                  return square;//all other boxes become zero
                  //otherwise just return the square just the null square
              });
              return prev.concat({board: newBoard, isXNext:!last.isXNext});

          });
     
          Setcurrentmove(prev => prev + 1);//increment the counter this is used as a reference for the history index
          //passes in a function that changes the state of the board to reflect the X that was already placed
          //if prev was false now its true if its true now its false
  };
  const moveTo = (move) =>{

    Setcurrentmove(move);

  }

  const onNewGame = () => {
    setHistory(NEW_GAME);
    Setcurrentmove(0);

  }
  return(
    <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <Status winner={winner} current={current}/>
    <Board board={current.board} handlesquareclick={handlesquareclick} winningSquares={winningSquares}/>
    <button type = "button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>
    <h2 style={{fontWeight: 'normal'}}>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    <div className="bg-balls"/>
  </div>

  );
};

export default App;