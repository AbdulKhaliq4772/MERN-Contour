

function Profile(props){
    if(!props.name){
        return null;
    }
    return (
        <>
        <p>My name is {props.name} and my age is {props.age}</p>
        <p>{props.age >= 50 ? "I am old" : "i am young"}</p>
        </>
    );
}

export default Profile;