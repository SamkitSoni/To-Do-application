import { useState } from "react";

export default function CreateTodo(){

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return(
        <div>
            <input type="text" placeholder="Title" onChange={function(e){
                const value = e.target.value;
                setTitle(value);
            }}></input><br></br>
            <input type="text" placeholder="Description" onChange={function(e){
                const value = e.target.value;
                setDescription(value);
            }}></input><br></br>

            <button onClick={() =>{
                fetch("http://localhost:3000/todos" , {
                    method: "POST",
                    body: JSON.stringify({
                        title,
                        description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(async function(res){
                        const json = await res.json();
                        alert("TO DO Added");
                    })
            }}>Add a TODO</button>
        </div>
    )
}