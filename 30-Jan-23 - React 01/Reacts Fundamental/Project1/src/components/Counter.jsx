// count how many time is clicked
import { useState } from "react";

export default function MyButton() {
    let [counter, setCounter] = useState(0);
  
    function handleClick() {
      setCounter(counter + 1);
    }
  
    return (
      <button onClick={handleClick}>
         Clicked {counter} times
      </button>
    );
  }