import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const fetchAllPost = () => {
	return axios.get(`${url}/posts/fetch`);
};
const createPost = (text, mood, authorId) => {
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
const createCommentInPost = (authorId, postId, text) => {
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
const likePost = (authorId, postId) => {
	return axios.post(
		`${url}/posts/like`,
		{ authorId, postId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const unlikePost = (authorId, postId) => {
	return axios.post(
		`${url}/posts/unlike`,
		{ authorId, postId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const findPostById = postId => {
	return axios.get(`${url}/posts/find/byId`, {
		params: {
			postId,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findPostByUser = (userId, page) => {
	return axios.get(`${url}/posts/find/byUser`, {
		params: {
			userId,
			page,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findPostByFriend = (userId, page) => {
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
const reportPost = () => {
	return axios.post(`${url}/posts/report`);
};
const unreportPost = () => {
	return axios.post(`${url}/posts/unReport`);
};
const PostsService = {
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
export default PostsService;
