const express = require ("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

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

app.get("/todos", function(req, res) {


})
 
app.put("/completed",async function(req, res) {
 const updatePayload= req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
await todo.update({
    _id: req.body.id
}  , {
    completed: true




}


)

res.json({
msg: "Todo marked as completed"

})

})





// write basic express boilerplate code,
// with express.json() middleware
