import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const getAllUsers = () => {
	return axios.get(`${url}/users/fetch`);
};

const addFriend = (userId, friendId) => {
	return axios.post(
		`${url}/users/friend/add`,
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
		`${url}/users/friend/delete`,
		{ userId, friendId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const findFriendById = (userId, pageNumber) => {
	return axios.get(`${url}/users/fetchFriendsByUser`, {
		params: {
			userId,
			pageNumber,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findUserById = userId => {
	return axios.get(`${url}/users/fetchById`, {
		params: {
			userId,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findStrangerByUserId = (userId, pageNumber) => {
	return axios.get(`${url}/users/fetchStrangersByUser`, {
		params: {
			userId,
			pageNumber,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const searchFriendByUser = () => {
	return axios.get(`${url}/users/search/byUser`);
};
const profileUpdate = (userId, key, value) => {
	return axios.post(
		`${url}/users/updateProfile`,
		{ userId, key, value },
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
