
function Greeting(props){
    if(!props.name){
        return null;
    }
    return(
        <div>
            my name is {props.name} and my age is {props.age}
            <p>{props.age<=50 ? "I am young" : "I am old"}</p>
        </div>
    )
}
export default Greeting;

