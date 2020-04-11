import mongoose from 'mongoose';

const TodosSchema = new mongoose.Schema({
	todos: String,
});

const Todos = mongoose.model('Todos', TodosSchema);

export default Todos;
