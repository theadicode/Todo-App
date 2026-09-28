const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aditisingh132003_db_user:SFjQTrn63tPpgIr0@cluster0.xjobukh.mongodb.net/Todo?=Cluster0&compressors=zlib")
const todoSchema = mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean







})

const todo = mongoose.model('todos', todoSchema);
module.exports= {
    todo
};