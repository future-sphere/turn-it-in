import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const login = (phone, password) => {
	return axios.post(`${url}/auth/login`, { phone, password });
};
const register = data => {
	return axios.post(`${url}/auth/register`, data);
};
const uploadProfilePic = file => {
	return axios.post(`${url}/auth/images`, file);
};
const verifyToken = token => {
	return axios.post(
		`${url}/auth/verifyToken`,
		{ token}	
	);
};

const AuthenticationService = {
	login,
	register,
	uploadProfilePic,
	verifyToken,
};
export default AuthenticationService;
