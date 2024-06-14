const express = require("express");
const app = express();
const {createTODO , updateTODO} = require("./types");
const {todo} = require("./database");
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todos", async (req , res)=>{
    const createPayLoad = req.body;
    const parsePayLoad = createTODO.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Task Created!"
    })

})

app.get("/todos", async(req, res)=>{
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async (req, res)=>{
    const updatePayLoad = req.body;
    const parsePayLoad = updateTODO.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    
    res.json({
        msg: "Task Completed!"
    })
})

app.listen(port , ()=>{
    console.log(`App is listening on ${port}`);
})