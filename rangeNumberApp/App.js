import './App.css';
import React, { useState } from 'react';

function App() {

  const [randomNumber, setRandomNumber] = useState(0)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(10)

  function getRandomNumber() {
    setRandomNumber(Math.floor(
      Math.random() * (maxValue - minValue + 1) - minValue))
  }


  return (
    <div className="App">
      <div className="container">
        <div className="randomNumber">
          <p>Random Number <span>{randomNumber}</span></p>
        </div>
        <div className="range">
          <div>
            <p>Min</p>
            <input type="number" value={minValue} onChange={e => setMinValue(+e.target.value)} />
          </div>
          <div>
            <p>Max</p>
            <input type="number" value={maxValue} onChange={e => setMaxValue(+e.target.value)} />
          </div>
        </div>
        <button className="btn" onClick={getRandomNumber}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
