import { useState } from "react";


function App(){
  const [todo, setTodo] = useState({
    id:'',
    title: "",
    isDone: false
  })

  const [todoValue, setTodovalue] = useState([]);

  let handleInput = (e)=>{
    setTodo({...todo, id:Math.random(),title: e.target.value, isDone:false});
  }

  let handleAddButton = ()=>{
    setTodovalue([...todoValue, todo]);
  }

  let handleDelete=(id)=>{
    console.log(id);
     let temp = [...todoValue];
     let incompleteList = temp.filter(item=>item.id !== id)
     console.log(incompleteList);
     setTodovalue(incompleteList);
      console.log("delete");
  }


  return (
    <div className="main">
      <div>
        <input type="text" placeholder="Enter todo" onChange={handleInput} />
        <button onClick={handleAddButton}>Add</button>
      </div>
      <ul>
        {todoValue.map((todos, index)=><li key={index}>
          <div>
            {todos.title}
          <button onClick={()=>{handleDelete(todos.id)}}>delete</button>
          </div>
        </li>)}
      </ul>
    </div>


  );
}
export default App;