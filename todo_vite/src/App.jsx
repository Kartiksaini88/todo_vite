import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todo } from './components/todo'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(true)



  return (
    <div id="App">
   
      {/* {count ?<Todo/> :null} */}
         <Todo/> 
      {/* <button onClick={()=>setCount(!count)}>Hide</button> */}

     
    </div>
  )
}

export default App
