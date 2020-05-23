import mongoose from 'mongoose';

// Schema 就是你的规矩！
const TodoSchema = new mongoose.Schema({
	//这里面写规矩：
	todo: String,
});

const Todos = mongoose.model('todos', TodoSchema); //结合了规矩+数据库里的todos(collection)

export default Todos;
