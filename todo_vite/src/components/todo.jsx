import { useState } from "react"
import { TodoInput } from "./todoInput"
import { TodoItem } from "./todoItem"
import {nanoid} from "nanoid"
import "./com.css"
function Todo(){
let [todolist , showtodo] = useState([])
// console.log(todolist)
var [show , setshow] = useState(true)
let getodo = (todo)=>{
  let payload={
      title:todo,
      status:false,
      id:nanoid(3)
  }
  
    
    showtodo([...todolist,payload])
}

// let shoodiv = (show)=>{
//   setshow(!show)
// }

let setid = (id)=>{
    console.log("id",id)
    showtodo(
        todolist.map((e)=>(e.id===id?{...e , status:!e.status}:e))
    )
}
    return(
        <div>
           
           {show?todolist.map(e=> <TodoItem getid={setid} todo={e}/>):null}
           {/* <TodoInput getdata={getodo} setdiv={shoodiv}/> */}
            <TodoInput getdata={getodo}/>
            <button id="todobtn" onClick={()=>{setshow(!show)}}>{show?"Hide todos":"Show todos"}</button>
        </div>
      
        
    )
}

export {Todo}

