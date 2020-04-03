import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const fetchTodoList = () => {
	return axios.get(`${url}/todos`);
};

const createTodo = todo => {
	return axios.post(`${url}/todos`, { todo });
};

const deleteTodo = id => {
	return axios.delete(`${url}/todos`, { data: { id } });
};

const changeTodo = (title, isActive, id) => {
	return axios.put(`${url}/todos`, { data: { title, isActive, id } });
};

const todoService = {
	fetchTodoList,
	createTodo,
	deleteTodo,
	changeTodo,
};

export default todoService;
