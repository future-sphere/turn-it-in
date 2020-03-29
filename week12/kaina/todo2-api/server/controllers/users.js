import Users from '../models/User';
import paginate from '../helpers/paginate';

const fetchUsers = async () => {
	const data = await Users.find();
	console.log(data);
	return data;
};

//-------------- create new todo -------------------
const createNewTodo = todos => {
	return Users.create(todos);
};

//-------------- remove todo  -------------------
const removeTodo = (id, todos) => {
	return Users.findByIdAndDelete(id, {
		data: todos,
	});
};

const UserController = {
	fetchUsers,
	createNewTodo,
	removeTodo,
};

export default UserController;
