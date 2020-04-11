const mongoose = require('mongoose');
const Task = require('../models/todoModel.js');

function listTasks(req, res) {
    Task.find({})
        .then(task => res.json(task))
        .catch(err => res.send(err));
}

function addTask(req, res) {
    console.log(req.body);
    const newTask = new Task(req.body);
    newTask.save()
        .then(task => res.json(task))
        .catch(err => res.send(err));
}


function getTask(req, res) {
    Task.findById(req.params.taskId, (err, task) => {
        if (!err) {
            res.json(task);
        } else {
            res.send(err);
        }
    });
}


function updateTask(req, res) {
    Task.findOneAndUpdate(
        { _id: req.params.taskId },
        req.body,
        { new: true }
    )
        .then(task => res.json(task))
        .catch(err => res.send(err));
}


function removeTask(req, res) {
    Task.findOneAndDelete({ _id: req.params.taskId })
        .then(() => res.json({message: 'success'}))
        .catch(err => res.send(err));
}

module.exports = {
    listTasks,
    addTask,
    getTask,
    updateTask,
    removeTask
};
