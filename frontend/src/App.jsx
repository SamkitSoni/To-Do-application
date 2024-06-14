import { useState } from 'react'
import './App.css'
// import { CreateTODO } from './components/CreateTodo'
import CreateTodo from "./components/CreateTodo"
import Todos from './components/Todos'

function App() {

  const[todos , setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);

      console.log(json.todos);
    })
    

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>

       {/* <CreateTODO></CreateTODO>
       <Todos></Todos> */}
    </div>
  )
}

export default App
