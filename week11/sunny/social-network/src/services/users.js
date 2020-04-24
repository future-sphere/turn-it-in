import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const getAllUser = () => {
	return axios.get(`${url}/users/fetch`);
};
const addFriend = (userId, friendId) => {
	return axios.post(
		`${url}/users/friends/add`,
		{ userId, friendId },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
};
const deleteFriend = () => {
	return axios.post(`${url}/users/friends/remove`);
};
const findFriendById = (userId, page) => {
	return axios.get(`${url}/users/friends/byId`, {
		params: {
			userId,
			page,
		},
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
const findUserById = userId => {
	return axios.get(`${url}/users/find/byId`, {
		params: { userId },
		headers: {
			Authorization: `Bearer ${token}`,
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
			Authorization: `Bearer ${token}`,
		},
	});
};
const searchFriendByUser = (userId, query) => {
	return axios.get(
		`${url}/users/search/byUser`,
		{
			params: {
				userId,
				query,
			},
		},
		{ headers: { Authorization: `Bearer ${token}` } },
	);
};
const profileUpdate = () => {
	return axios.post(`${url}/users/update/email`);
};

const userService = {
	getAllUser,
	addFriend,
	deleteFriend,
	findFriendById,
	findUserById,
	findStrangerByUserId,
	searchFriendByUser,
	profileUpdate,
};
export default userService;
