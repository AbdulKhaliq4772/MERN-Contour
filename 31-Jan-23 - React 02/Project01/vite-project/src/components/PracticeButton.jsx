import { useEffect, useRef, useState } from "react";


// USING e
// export default function EventHandler(){
//     const [count, setCount] = useState(0);

//     let eventHandle= (e)=>{
//         console.log(e);
//         setCount((currentCount)=>currentCount+1);
//     }

//     return (
//         <button onClick={eventHandle}>
//             clicked {count} times
//         </button>
//     );

// }


// USE PARAMETER IN FUNCTION
// export default function AddParameter() {
//     const [count, setCount] = useState(0);

//     let addPara = (e,addOrSub, number)=>{
//         console.log(e);
//         if (addOrSub === "add") {
//             return setCount((currCount) => currCount + number);
//         } else {
//             return setCount((currCount) => currCount - number);
//         }
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={(e)=>addPara(e, "add", 6)} >click</button>
//         </>
//     );
// }

// USING useref

// export default function UseRef(){
//     let inputRef = useRef();

//     function refHandle(){
//         inputRef.current.focus();
//     }

//     return(
//         <>
//             <input ref={inputRef} type="text" />
//             <button onClick={refHandle}>focus</button>
//         </>

//     );
// }


// USING useEffect


export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(1);

    // useEffect(() => {setTimeout(() => {setCount((count) => count + 1);}, 1000);}, []);

    useEffect(
        () => { setCal((cal) => cal * 5) }, [count]
    );

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <>
            <h1>{cal}</h1>
            <button onClick={handleClick}>click {count}</button>
        </>
    );
}