const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const task = new Schema({
    id: String,
    title: String,
    content: String,
});

module.export = mongoose.model('tarea', task);
