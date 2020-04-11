import axios from 'axios';

const url = 'http://localhost:3006';

const fetchAllTodo = () => {
	return axios.get(`${url}/todos/fetch`);
};

//-------------- create new list -------------------
const addNewTodo = (todos) => {
	return axios.post(`${url}/todos`, { todos });
};

//-------------- remove new list -------------------
const removeTodo = (id, todos) => {
	return axios.post(`${url}/todos/remove`, { id, todos });
};

const UsersService = {
	fetchAllTodo,
	addNewTodo,
	removeTodo,
};

export default UsersService;
