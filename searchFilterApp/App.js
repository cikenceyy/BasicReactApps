import './App.css';
import React, { useState } from 'react';
import Card from './Card';
import data from "./data.json"



function App() {

  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="header">
        <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      </div>
      <div className="form">
        <input
          type="text" placeholder="Konsey üyeleri.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Ara</button>
      </div>
      <div className="context">
        {data.filter((val) => {
          if (search == "") {
            return val
          }
          else if
            (val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) { return val }
        }).map((val) => {

          return (
            <Card img={val.image} title={val.title} description={val.Description} />
          )

        })}
      </div>
    </div >
  );

}

export default App;
