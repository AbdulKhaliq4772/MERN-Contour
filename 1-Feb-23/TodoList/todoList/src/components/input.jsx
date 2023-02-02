import { useState } from "react";

export default function input() {
    // let obj = ;
    const [todo, setTodo] = useState({ title: "", isDone: false });

    return (
        <input
            type="text"
            name="user-input"
            id="todoInput"
            placeholder="Enter todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
        />
    );
};
