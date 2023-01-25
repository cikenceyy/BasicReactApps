import './App.css';
import Header from './Components/Header';
import Contents from "./Components/Contents"
import Footer from "./Components/Footer"
import { useState, useEffect } from 'react';


function App() {

  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch("https://course-api.com/react-tours-project");
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])


  return (
    <div className="App">

      <Header />
      <Contents tours={tours} />
      <Footer />

    </div>
  );
}

export default App;