// === Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Routes
const todoRoutes = require('./routes/todoRoute.js');


// === Connect to Database
mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true, useUnifiedTopology: true });


// === Configure App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// === Routes
app.use('/tasks', todoRoutes);



module.exports = app;