const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('items', itemSchema);

export default Item;