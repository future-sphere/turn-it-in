import axios from 'axios';

const url = 'http://localhost:3006';

// const id = window.localStorage.setItem('userId' id);

const fetchAllTodo = () => {
	return axios.get(`${url}/users/fetch`);
};

console.log(url);

//-------------- create new list -------------------
const addNewTodo = todos => {
	return axios.post(`${url}/users/create/todo`, { todos });
};

//-------------- remove new list -------------------
const removeTodo = (id, todos) => {
	return axios.post(`${url}/users/remove/todo`, { id, todos });
};

const UsersService = {
	fetchAllTodo,
	addNewTodo,
	removeTodo,
};

export default UsersService;
