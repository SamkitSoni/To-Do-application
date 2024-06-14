const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://samkit:samkit9829075833@practice.pbedqq6.mongodb.net/todo');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}