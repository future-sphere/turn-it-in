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

const getUserInfoByToken = data => {
	return axios.post(`${url}/auth/verify/user`, data);
};

const verifyUserLoginStatus = token => {
	return axios.post(
		`${url}/users/current`,
		{},
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};

const AuthenticationService = {
	login,
	register,
	uploadProfilePic,
	getUserInfoByToken,
	verifyUserLoginStatus,
};
export default AuthenticationService;
