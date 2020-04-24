import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();
const token = window.localStorage.getItem('token');

const fetchAllPost = () => {
	return axios.get(`${url}/posts/fetch`, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
const createPost = (text, mood, authorId) => {
	console.log(text, mood, authorId);
	console.log(token);
	console.log('checking for data passed in to axios'); // 3. check service
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
const createCommentInPost = ({ postId, authorId, text }) => {
	return axios.post(
		`${url}/posts/comment/create`,
		{
			postId,
			authorId,
			text,
		},
		{
			headers: { authorization: `Bearer ${token}` },
		},
	);
};
const likeComment = () => {
	return axios.post(`${url}/posts/comment/like`);
};
const unlikeComment = () => {
	return axios.post(`${url}/poste/comment/like`);
};
const likePost = (authorId, postId) => {
	return axios.post(
		`${url}/posts/like`,
		{ authorId, postId },
		{
			headers: { authorization: `Bearer ${token}` },
		},
	);
};
const unlikePost = (authorId, postId) => {
	return axios.post(
		`${url}/posts/unlike`,
		{ authorId, postId },
		{
			headers: { authorization: `Bearer ${token}` },
		},
	);
};
const findPostById = () => {
	return axios.get(`${url}/posts/find/byId`);
};
const findPostByUser = () => {
	return axios.get(`${url}/posts/find/byUser`);
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
const reportPost = (authorId, postId) => {
	return axios.post(
		`${url}/posts/report`,
		{ authorId, postId },
		{
			headers: { authorization: `Bearer ${token}` },
		},
	);
};
const unreportPost = (authorId, postId) => {
	return axios.post(
		`${url}/posts/unReport`,
		{ authorId, postId },
		{
			headers: { authorization: `Bearer ${token}` },
		},
	);
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
