import axios from 'axios';
import getApiURL from '../constants/apiUrl';

//axios 后面第一个是url 第二个是body 第三个是options

const url = getApiURL();

const getAllUser = () => {
	return axios.get(`${url}/users/fetch`);
};

const addFriend = (userId, friendId, token) => {
	return axios.post(
		`${url}/users/friends/add`, // url
		{ userId, friendId }, // body
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		}, // options
	);
};

const deleteFriend = () => {
	return axios.post(`${url}/users/friends/remove`);
};

const findFriendById = (userId, page, token) => {
	return axios.get(`${url}/users/friends/byId`, {
		params: { userId, page },
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const findUserById = (userId, token) => {
	return axios.get(`${url}/users/find/byId`, {
		params: { userId },
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const findStrangerByUserId = (userId, page, token) => {
	return axios.get(`${url}/users/strangers/byId`, {
		params: { userId, page },
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

const getCurrentLoggedInUser = token => {
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

const userService = {
	getAllUser,
	addFriend,
	deleteFriend,
	findFriendById,
	findUserById,
	findStrangerByUserId,
	searchFriendByUser,
	profileUpdate,

	getCurrentLoggedInUser,
};

export default userService;
