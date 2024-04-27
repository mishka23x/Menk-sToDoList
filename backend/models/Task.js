// Define the schema for a Task document in MongoDB
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    completed: { type: Boolean, default: false },
    // Additional fields as needed
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
