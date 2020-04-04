import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const fetchAllPost = () => {
	return axios.get(`${url}/posts/fetch`);
};
const createPost = (authorId, text, mood) => {
	return axios.post(
		`${url}/posts/send`,
		{ authorId, text, mood },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const createCommentInPost = (postId, userId, text) => {
	return axios.post(
		`${url}/posts/comment/`,
		{ postId, userId, text },
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
const likePost = (postId, userId) => {
	return axios.post(
		`${url}/posts/like`,
		{ postId, userId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const unlikePost = (postId, userId) => {
	return axios.post(
		`${url}/posts/unlike`,
		{ postId, userId },
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);
};
const findPostById = postId => {
	return axios.get(`${url}/posts/fetchById`, {
		params: {
			postId,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findPostByUser = (authorId, pageNumber) => {
	return axios.get(`${url}/posts/fetchByUser`, {
		params: {
			authorId,
			pageNumber,
		},
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const findPostByFriend = (userId, pageNumber) => {
	return axios.get(`${url}/posts/fetchInHome`, {
		params: {
			userId,
			pageNumber,
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
