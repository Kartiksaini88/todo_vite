import { useState } from "react"
import "./com.css"



export const TodoItem = ({todo,getid,setdiv})=>{

    return(
        
        <div id="grid">
            <div id="title">{todo.title}</div>
            {/* <div>{todo.status?"Done":"Not done"}</div>
            <div>{todo.id}</div> */}
            <button id="round" onClick={()=>{getid(todo.id)}}>   </button>
        </div>
    )
}
// https://docs.google.com/forms/d/e/1FAIpQLSe1Yuhw0RqRymtk8LOwAOeh_U9aYSqvpP-Twx5-5Pjl9u7WXg/viewform