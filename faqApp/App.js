import './App.css';
import FaqItem from './faqItem';
import { useState } from 'react';
function App() {

  const [active, setActive] = useState("")



  return (
    <div className="App">
      <div className="appTitle">FAQ App</div>
      <FaqItem title="Question1" active={active} setActive={setActive} />
      <FaqItem title="Question2" active={active} setActive={setActive} />
      <FaqItem title="Question3" active={active} setActive={setActive} />
    </div>
  );
}

export default App;