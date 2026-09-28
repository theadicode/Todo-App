const express = require ("express");
const { createTodo } = require("./types");
const {todo} = require ("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
//body {  
//title: String;
//description: String;
//}
app.post("/todo",async function name(req, res) {
    const createPayload= req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
await todo.create ({
title : createPayload.title,
description: createPayload.description,



})

res.json ({
msg:"Todo created"

})






})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos: todos
    });
});
 
app.put("/completed",async function(req, res) {
 const updatePayload= req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
await todo.updateOne({
    _id: req.body.id
}  , {
    completed: true




}


)

res.json({
msg: "Todo marked as completed"

})

})


app.listen(3000,function() {
    console.log("Server is running on port 3000")
}
)

// write basic express boilerplate code,
// with express.json() middleware
