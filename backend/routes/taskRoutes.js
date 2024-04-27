// Import necessary dependencies and controllers
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Define API endpoints for tasks
router.get('/', taskController.getTasks);
router.post('/', taskController.addTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
