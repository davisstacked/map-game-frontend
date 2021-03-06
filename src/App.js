import React from "react";
import GameContextProvider from "./Context/GameContextProvider";
import SoundContextProvider from "./Context/SoundContextProvider";
import FlagLevel from "./Components/Game/FlagLevel/FlagLevel";
// import { BrowserRouter } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <SoundContextProvider>
          {/* <BrowserRouter>
            <h1>Hi</h1>
          </BrowserRouter> */}
          <FlagLevel />
        </SoundContextProvider>
      </GameContextProvider>
    </div>
  )
}

export default App;
