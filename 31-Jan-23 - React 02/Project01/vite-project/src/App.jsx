import { useState } from "react";

import './App.css';
import Btn from './components/button';
import Description from './components/Title';
import Eh from './components/PracticeButton';

function App() {
  const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    return (
      <>
        {/* <h1>Hello</h1> */}
        {/* <Btn count={count} onClick={handleClick}/> */}
        {/* <Btn count={count} onClick={handleClick}/> */}
        {/* <Description name="Ali khan"/> */}
        <Eh/>
      </>
    );
}

export default App
