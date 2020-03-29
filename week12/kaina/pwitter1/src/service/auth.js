import axios from 'axios';
import getAPIUrl from '../constants/apiUrl';

const url = getAPIUrl();

const handleRegister = values => {
	return axios.post(`${url}/auth/register`, values);
};

const handleLogin = ({ phone, password }) => {
	return axios.post(`${url}/auth/login `, {
		phone,
		password,
	});
};

const handleUploadImage = file => {
	return axios.post(`${url}/auth/images`, file);
};

const handleLoginUser = (phone, password) => {
	return axios.post(`${url}/auth/login`, { password, phone });
};

const AuthService = {
	handleRegister,
	handleUploadImage,
	handleLoginUser,
};

export default AuthService;
