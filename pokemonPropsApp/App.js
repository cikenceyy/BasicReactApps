import './App.css';
import Card from "./Card"
import cardData from './cardData';


function App() {
  return (
    <div className="App">
      {cardData.map((dataOne) => (
        <Card img={dataOne.imgUrl} title={dataOne.title} description={dataOne.description} />
      ))}
    </div >
  );

}

export default App;
