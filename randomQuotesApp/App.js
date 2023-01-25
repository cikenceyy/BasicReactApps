import './App.css';
import React, { useState, useEffect } from "react"

function App() {

  const [quotes, setQuotes] = useState("")

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * data.length)
        setQuotes(data[randomNumber])
      })
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <div className='quote-area'>
          {quotes.text}
        </div>
        <div className='author-area'>
          -{quotes.author}
        </div>
        <button onClick={getQuotes}>random quotes</button>
      </div>
    </div>
  );

}

export default App;
