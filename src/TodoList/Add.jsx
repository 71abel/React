import {useState} from "react";
function Add (props){
    const[task,setTask] = useState("");
    function handleChange(event){
        console.log(event.target.name);
        setTask(event.target.value);
    }
    function handleClick(event){
        props.handleAdd(task);
    }
    return(
        <>
        <input type="text" name="taskName" onChange={handleChange}/>
        <button onClick={handleClick} disabled ={!task}>Add Task</button>
        </>
    )
}

export default Add;