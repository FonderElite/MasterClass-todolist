import { useState } from "react";
import styles from "../modules/form.module.css"
export default function Form({todos,setTodos}){
    //const [todo,setTodo] = useState("");
    const [todo,setTodo] = useState({name:"",done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"",done:false});
        {console.log(todos)}
        
    }
return(
    <form className={styles.todoform} action="" onSubmit={handleSubmit}>

<div className={styles.inputContainer}>
    <input className={styles.moderninput} type="text" value={todo.name} placeholder="Enter Todo Item..." 
        onChange={(e)=>setTodo({name:e.target.value,done:false})} id="" />
    <button className={styles.modernbutton} type="submit">Add</button>
</div>

</form>  
)
}