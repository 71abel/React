function List({items,onDelete,oncheck,checked}){
    function handleDelete(name){
        onDelete(name);
    }
    function handleCheck(event){
        console.log(event.target.checked)
        oncheck(event.target.value)
    }
    const styles = {
        textDecoration: checked? "line-through" : "none"

    }
    return(
        <ul>
            {items.map((item,index)=>{
                return(
                    <li key={index} style={styles}><input type ="checkbox" onchange={()=>handleCheck(item.name)}/>{item.name}<button onClick={()=>handleDelete(item.id)}>delete</button></li>
                )
            })}
        </ul>
    )
}
export default List;