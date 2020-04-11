const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creation: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: [{
            type: String,
            enum: ['good', 'bad', 'ok']
        }],
        default: ['good']
    }
});

const Item = mongoose.model('items', itemSchema);

module.exports = Item;