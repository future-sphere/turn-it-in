import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const login = (phone, password) => {
	return axios.post(`${url}/auth/login`, { phone, password });
};
const register = data => {
	return axios.post(`${url}/auth/register`, data);
};
const verifyUserLoginStatus = token => {
	return axios.post(`${url}/auth/verify/user`, { token });
};

const UploadProfilePicture = file => {
	return axios.post(`${url}/auth/images`, file);
};

const getCurrentLoggedInUser = token => {
	return axios.post(
		`${url}/users/current`,
		{}, //只有post的时候才需要一个空的{}, 既定的事实
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
	verifyUserLoginStatus,
	UploadProfilePicture,
	getCurrentLoggedInUser,
};

export default AuthenticationService;
