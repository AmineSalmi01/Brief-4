// import React, { Component } from "react";
import { React , useState } from 'react';
// class Todo extends Component{
//     render(){

//         return (

//             <div>
//                 <h1>Todo List</h1>
//                 <input/>
//                 <button>Add</button>
//             </div>
    
//         );
    
//     }

// }


const Todo  = () => {
    const [text, setText] = useState("");
    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <form>
            <input type="text" className="input" onChange={(e)=>setText(e.target.value)} value={text}/>
            <button className="add_btn" onClick={submit}>Add</button>
        </form>
    )
}
export default Todo;