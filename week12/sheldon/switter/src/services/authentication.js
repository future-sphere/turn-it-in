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
	return axios.post(`${url}/auth/verify/token`, { token });
};

const verifyPhoneNumber = () => {
	return axios.post(`${url}/auth/verify/phone`);
};

const verifyPhoneCode = () => {
	return axios.post(`${url}/auth/verify/phone/code`);
};

const UploadProfilePicture = file => {
	return axios.post(`${url}/auth/images`, file);
};

const getUserInfoByToken = token => {
	return axios.post(`${url}/auth/verify/user`, token);
};

const AuthenticationService = {
	login,
	register,
	verifyUserLoginStatus,
	verifyPhoneNumber,
	verifyPhoneCode,
	UploadProfilePicture,
	getUserInfoByToken,
};

export default AuthenticationService;
