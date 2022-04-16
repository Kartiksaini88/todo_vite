import { useState } from "react"
import "./com.css"
export const TodoInput = ({getdata})=>{

    let [todo_data,get_todo] = useState("")

    return(
        <div>
        <input id="todoinput"onChange={(e)=>{
       
            get_todo(e.target.value)
        }} type="text"  placeholder="Write Something"/>
        <button id="todobtn"onClick={()=>{getdata(todo_data)}}>+</button>
        </div>
    )
}