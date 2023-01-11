import React from "react";
import { Board } from "./components/Board";// must use curly brackets to import a function

const App = () => {
  return(
    <div>
    <h1>TIC TAC TOE</h1>
    <Board/>
    
  </div>

  );
};

export default App;