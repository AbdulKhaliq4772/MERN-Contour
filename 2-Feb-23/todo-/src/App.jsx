import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [addTodo, setAddTodo] = useState({
    id: 0,
    title: "",
    status: false
  });

  const [todoArray, setTodoArray] = useState([]);
  const [deletedArray, setDeletedArray] = useState([]);

  let handleUserInput = (e) => {
    setAddTodo({
      ...addTodo, id: Math.random(), title: e.target.value
    })
  }

  let handleAddTodo = () => {
    setTodoArray([...todoArray, addTodo]);
  }

  let handleDelete = (id) => {
    setTodoArray(todoArray.filter(obj => obj.id !== id));
    let dArr = todoArray.filter(todos => todos.id === id);
    setDeletedArray([...deletedArray, ...dArr]);
  }

  let clearAll = ()=>{
    setDeletedArray([]);
  }

  return (
    <>
      <h1>Todo List</h1>
      {/* <form action=""> */}
        <input type="text" name="" id="" onChange={handleUserInput} />
        {/* <button onClick={handleAddTodo}>Add Todo</button> */}
        <input type="submit" value="Add Todo" onClick={handleAddTodo}/>
      {/* </form> */}

      <ul>
        {todoArray.map(todos =>
          <li key={todos.id}>
            {todos.title}
            <button onClick={() => handleDelete(todos.id)}>Complete?</button>
          </li>)}
      </ul>

      {deletedArray.length !== 0 ?
        <div>
          <h3>Completed Tasks</h3>
          <ul>
            {deletedArray.map(deletedTodos => <li>{deletedTodos.title}</li>)}
          </ul>
          <button onClick={clearAll}>All Clear</button>
        </div> :
        null}

    </>
  );
}

export default App
