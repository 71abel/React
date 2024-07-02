import { useState } from "react";
import Add from "./Add";
import List from "./List";

function TodoList(){
    const[items,setItems] = useState([]);
    const[checked,setChecked] = useState(false);    // TODO
    function handleAdd(task){
        console.log(task);
        setItems([
            ...items,
            {
                id:items.length+1,
                name:task,
                done:false,                  
            }
     ]
);

}
function handleDelete(id){
    setItems(items.filter(item=>item.id!==id));
}
function handleCheck(id){
    setChecked(items.map(item=>{
        if(item.id===id){
            item.done=true;
    
        }
    return item; 
}
))};

    return(
      <> <Add handleAdd={handleAdd}/>
         <List items={items} onDelete={handleDelete} onCheck={handleCheck} setChecked={checked}/>
      </>
    );
}

export default TodoList;