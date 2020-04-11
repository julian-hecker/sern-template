const express = require('express');
const router = express.Router();

const todo = require('../controllers/todoController.js');


router.route('/')
    .get(todo.listTasks)
    .post(todo.addTask);

router.route('/taskId')
    .get(todo.getTask)
    .put(todo.updateTask)
    .delete(todo.removeTask);


module.exports = router;
