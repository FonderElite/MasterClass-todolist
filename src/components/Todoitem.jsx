import styles from "../modules/todoitem.module.css"
export default function Todoitem({item,todos,setTodos}){
   function handleDelete(item){
      console.log("Clicked",item);
      setTodos(todos.filter((todo)=>todo!==item));
   
   }
   function handleClick(item){
      const newArray = todos.map((todo)=>todo.name === item.name? {...todo, done: !todo.done}:todo)
      setTodos(newArray);
   }
  
   const className = item.done ? styles.completed : "";
return(
   <>
    <div className={styles.item}>
      <div className={styles.itemName}>

         <span className={className}onClick={()=>handleClick(item)}>{item.name}</span>
      
         <span>
         <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>X</button>
      </span>
   
      </div>
     
      <hr className={styles.line}/>
   </div>
   </>
)
}
