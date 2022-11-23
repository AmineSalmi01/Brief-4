import React, { Component } from "react";

class Todo extends Component{

    constructor() {
        super();
        this.state = "app state";
    }
    render(){

        function handleSubmit(e) {
            e.preventDefault();
            console.log('you clicked'); 
        }

        return (

            <form onSubmit={handleSubmit}>
                    <button type="submit">Add</button>
            </form>
    
        );
    
    }

}


// const Todo  = () => {
//     const [text, setText] = useState("");
//     const submit = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <form>
//             <input type="text" className="input" onChange={(e)=>setText(e.target.value)} value={text}/>
//             <button className="add_btn" onClick={submit}>Add</button>
//         </form>
//     )
// }
export default Todo;