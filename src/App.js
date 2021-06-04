
import "./App.css";
import React, { useState } from "react";


function App() {
  const [count, setNumber] = useState(0);
  const randomNumber = () => {
    return Math.ceil(Math.random() * 9);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>สุ่มเลข</p>  
        <div className="App.js">{(count[0])}
        </div>
        <button
          onClick={() => {
            setNumber([randomNumber()]);
          }}
        >
          random
        </button>
      </header>
    </div>
  );
}

export default App;