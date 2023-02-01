
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState();
  const [todo, setTodo] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState([]);
  // const [check, setCheck] = useState(false);

  // useEffect(()=>{
  //   console.log(todo)
  // },[todo])

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
  
    if (value !== "" && todo !== "") {
      setTodo([...todo, value]);
    }
  }

  function handleCheck(index) {  
    const temp = [...todo];
    const incompleteList = temp.splice(index, 0);
    setTodo(incompleteList);
    setCheck(true);
  }


  return (
    <div className='main'>
      <div>
        <input type="text" id='taskInput' value={value} onChange={handleChange} />
        <button onClick={handleClick}>Add Todo</button>
      </div>

      <div className='AllTasks'>
        <ul>
          <h3>{todo.length!==0 ? "All Tasks" : null}</h3>
          {todo.map((todos, index) => <li>
            <div className='tasks'>
              {todos}
              <input type="checkbox" name="" id="check" onChange={() => handleCheck(index)} />
              {/* <p>{!check ? "Not Completed" : "Completed"}</p> */}
            </div>
          </li>)}
        </ul>
            <h3>{todoCompleted.length!==0 ? "Completed" : null}</h3>
        <ul>
            
        </ul>
      </div>
    </div>
  )
}

export default App
