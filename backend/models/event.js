const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: String,
    dept: String,
    pYear: Number
})
module.exports = mongoose.model('user', eventSchema, 'events')