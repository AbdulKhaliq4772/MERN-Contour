// working on button

function msg(){
    alert('You clicked me');
}

export default function Button(){
    return (
        <button onClick={msg}>Click me</button>
    );
}