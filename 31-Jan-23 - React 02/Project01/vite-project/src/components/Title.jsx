
function Title(props) {
    return (
        <>
            {props.name}
            {props.children}
        </>
    );
}

export default function Desc({name}){
    return (
        <Title name={name}>I am Children</Title>
    );
}