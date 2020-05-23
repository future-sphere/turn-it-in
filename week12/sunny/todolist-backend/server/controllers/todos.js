import Todos from '../models/Todo';
import paginate from '../helpers/paginate';
import Todo from '../models/Todo';
import Posts from '../models/Post';

const fetchTodos = async () => {
	const data = await Todos.find();
	console.log(data);
	return data;
};

const createTodo = input => {
	//input 是todo里面的数据
	return Todos.create({ todo: input });
};

const deleteTodo = id => {
	//只需要知道todo的id是什么 所以传进来一个id
	return Todos.findByIdAndRemove(id);
};

const TodoController = {
	fetchTodos,
	createTodo,
	deleteTodo,
};

export default TodoController;
