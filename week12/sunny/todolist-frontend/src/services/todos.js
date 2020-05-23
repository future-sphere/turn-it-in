import axios from 'axios';
import getApiURL from '../constants/apiURL';

const url = getApiURL();

const fetchAllTodo = () => {
	return axios.get(`${url}/todos/fetch`);
};

const createTodo = input => {
	return axios.post(`${url}/todos/create`, { input });
};

const deleteTodo = id => {
	return axios.delete(`${url}/todos/delete`, { data: { id } });
};

const todoService = {
	fetchAllTodo,
	createTodo,
	deleteTodo,
};

export default todoService;
