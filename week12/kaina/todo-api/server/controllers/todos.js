import Todos from '../models/Todos';
import paginate from '../helpers/paginate';

const fetchUsers = async () => {
	const data = await Todos.find();
	console.log(data);
	return data;
};

//-------------- create new todo -------------------
const createNewTodo = (todos) => {
	return Todos.create(todos);
};

//-------------- remove todo  -------------------
const removeTodo = (id, todos) => {
	return Todos.findByIdAndDelete(id, {
		data: todos,
	});
};

const TodosController = {
	fetchUsers,
	createNewTodo,
	removeTodo,
};

export default TodosController;
