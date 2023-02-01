import { useState } from "react";


function App(){
  const [todo, setTodo] = useState({
    title: "",
    isDone: false
  })

  const [todoValue, setTodovalue] = useState([]);
  const [readValue, setReadValues] = useState([]);

  let handleInput = (e)=>{
    setTodo({...todo, title: e.target.value});
    console.log(todo.title);
  }

  let handleAddButton = ()=>{
    setTodovalue([...todoValue, todo]);
    console.log(todo);
    console.log(todoValue);
  }
const handleOnReadList = (val, id) => {
  let dummyArray = [...todoValue]
  console.log('-------handleOnReadList------', val, id);
  if(true) {
    dummyArray[id].splice()
    console.log('---abc----', dummyArray[id].splice())
    setTodovalue(dummyArray)
  }
  setReadValues()

}
  return (
    <div className="main">
      <div>
        <input type="text" placeholder="Enter todo" onChange={handleInput} />
        <button onClick={handleAddButton}>Add</button>
      </div>
      <ul>
        {todoValue.map((todos,index)=><li>
          <div>
          <p>{todos.title}</p>
          <input type="checkbox" name="" id="" onClick={()=> handleOnReadList(todos, index)}/>
          <p>{todos.isDone? "completed" : "incomplete"} </p>
          </div>
        </li>)}
      </ul>
    </div>


  );
}

export default App;