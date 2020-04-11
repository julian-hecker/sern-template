// === Packages
const express = require('express');
const mongoose = require('mongoose');
// === Routes
const itemRoutes = require('./routes/api/items.js');
// === App
const app = express();


// App Configuration
app.use(express.json()); // replaces bodyparser


// Database Config
const db = require('./config').mongoURI;

mongoose
    .connect(db)
    .then(() => { console.log('connect')})
    .catch(err => {console.log(err)});


// === Routes
app.use('/api/items', itemRoutes);





module.exports = app;
