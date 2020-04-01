const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	todo: String,
	isActive: Boolean,
});

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;
