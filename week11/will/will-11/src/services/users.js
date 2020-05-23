import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const getAllUsers = () => {
	return axios.get(`${url}/users/fetch`);
};

const addFriend = (userId, friendId) => {
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

const deleteFriend = (userId, friendId) => {
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
			page,
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
const searchFriendByUser = () => {
	return axios.get(`${url}/users/search/byUser`);
};
const profileUpdate = (id, key, value) => {
	return axios.post(
		`${url}/users/update/${key}/${value}?userId=${id}`,
		console.log(`${url}/users/update/${key}/${value}?userId=${id}`),

		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const uploadProfilePicture = file => {
	return axios.post(`${url}/users/images`, file);
};
const UserService = {
	getAllUsers,
	addFriend,
	deleteFriend,
	findFriendById,
	findUserById,
	findStrangerByUserId,
	searchFriendByUser,
	profileUpdate,
	uploadProfilePicture,
};
export default UserService;
