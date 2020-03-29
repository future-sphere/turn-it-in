import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const token = window.localStorage.getItem('token');

const getPostByFriend = (userId, page) => {
	return axios.get(`${url}/posts/find/byFriends`, {
		params: {
			userId,
			page,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const createNewPost = (text, mood, authorId) => {
	return axios.post(
		`${url}/posts/create `,
		{ text, mood, authorId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const PostService = {
	getPostByFriend,
	createNewPost,
};

export default PostService;
