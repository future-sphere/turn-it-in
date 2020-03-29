import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const token = window.localStorage.getItem('token');
const getAllUsers = () => {
	return axios.get(`${url}/users/fetch`);
};

const findStrangerByUserId = (userId, page) => {
	return axios.get(`${url}/users/strangers/byId`, {
		params: {
			userId,
			page,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const addFriend = (userId, friendId) => {
	console.log(userId);
	console.log(friendId);
	return axios.post(
		`${url}/users/friends/add`,
		{ userId, friendId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const removeFriend = (userId, friendId) => {
	return axios.post(
		`${url}/users/friends/remove`,
		{ userId, friendId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};

const findFriendById = (userId, page) => {
	return axios.get(`${url}/users/friends/byId`, {
		params: {
			userId,
			page: 1,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findUserById = userId => {
	return axios.get(`${url}/users/find/byId`, {
		params: {
			userId,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const searchFriendByUser = () => {
	return axios.get(`${url}/users/search/byUser`);
};

const profileUpdate = () => {
	return axios.post(`${url}/users/update/email`);
};
const uploadProfilePicture = file => {
	return axios.post(`${url}/users/images`, file);
};

const UsersService = {
	getAllUsers,
	addFriend,
	removeFriend,
	findFriendById,
	findUserById,
	findStrangerByUserId,
	searchFriendByUser,
	profileUpdate,
	uploadProfilePicture,
};

export default UsersService;
