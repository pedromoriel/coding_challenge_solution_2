const mongoose = require('mongoose');
const { Schema } = mongoose;

const NumbersSchema = new Schema({
    operation: { type: String, required: true} ,
    result: { type: Number, required: true}
});

mongoose.model('numbers', NumbersSchema);
module.exports = mongoose.model('numbers');