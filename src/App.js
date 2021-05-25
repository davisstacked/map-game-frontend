import React from "react";
import GameContextProvider from "./Context/GameContextProvider";
import SoundContextProvider from "./Context/SoundContextProvider";
import Footer from "./Components/Common/Footer";
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
          <Footer />
        </SoundContextProvider>
      </GameContextProvider>
    </div>
  )
}

export default App;
