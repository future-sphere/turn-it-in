import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const fetchAllPost = token => {
	return axios.get(`${url}/posts/fetch`, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const createPost = (text, mood, authorId, token) => {
	return axios.post(
		`${url}/posts/create`,
		{ text, mood, authorId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};

const createCommentInPost = (authorId, postId, text, token) => {
	return axios.post(
		`${url}/posts/comment/create`,
		{ authorId, postId, text },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};

const likeComment = () => {
	return axios.post(`${url}/posts/comment/like`);
};

const likePost = (authorId, postId, token) => {
	return axios.post(
		`${url}/posts/like`,
		{ authorId, postId },
		{ headers: { authorization: `Bearer ${token}` } },
	);
};

const unlikePost = (authorId, postId, token) => {
	return axios.post(
		`${url}/posts/unlike`,
		{ authorId, postId },
		{ headers: { authorization: `Bearer ${token}` } },
	);
};

const findPostById = () => {
	return axios.get(`${url}/posts/find/byId`);
};

const findPostByUser = (userId, page, token) => {
	return axios.get(`${url}/posts/postByUserId`, {
		params: { userId, page },
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const findPostByFriend = (userId, page, token) => {
	return axios.get(`${url}/posts/postByFriendId`, {
		params: { userId, page },
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

const reportPost = (authorId, postId, token) => {
	return axios.post(
		`${url}/posts/report`,
		{ authorId, postId },
		{ headers: { authorization: `Bearer ${token}` } },
	);
};

const unreportPost = () => {
	return axios.post(`${url}/posts/unReport`);
};

const postService = {
	fetchAllPost,
	createPost,
	createCommentInPost,
	likeComment,
	likePost,
	unlikePost,
	findPostById,
	findPostByUser,
	findPostByFriend,
	reportPost,
	unreportPost,
};

export default postService;
