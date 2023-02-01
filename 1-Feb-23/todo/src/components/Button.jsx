//Add Button
import TodoTask from './TodoTask';
export default function AddBtn({props}){
   const handleTodo = ()=>{
        props.setDiv(true);
   }
    return (
        <button onClick={handleTodo}>Add</button>
    );
}