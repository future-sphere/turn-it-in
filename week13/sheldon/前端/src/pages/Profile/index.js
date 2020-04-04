import React, { useState, useEffect } from 'react';
import './index.scss';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Post from '../../components/Post';
import ProfileBox from '../../components/ProfileBox';
import FriendBox from '../../components/FriendBox';
import { withRouter } from 'react-router-dom';
import userService from '../../services/user';
import PostBox from '../../components/PostBox';
import postService from '../../services/post';

const Profile = ({ match, user }) => {
	const pages = ['status', 'friends', 'profile'];
	let page = pages.includes(match.params.page) ? match.params.page : 'status';
	let id = match.params.id;

	const [idData, setIdData] = useState({});
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');

		const fetchUser = async () => {
			if (id) {
				try {
					const info = await userService.findUserById(id, userToken);
					if (info.data.success) {
						setIdData(info.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		fetchUser();
	}, []);

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');

		const fetchPost = async () => {
			if (id) {
				try {
					const posts = await postService.findPostByUser(id, 1, userToken);

					if (posts.data.success) {
						setPostData(posts.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		fetchPost();
	}, []);

	return (
		<div className='profile-wraper'>
			<Banner user={user} match={match} />
			{page === 'status' && (
				<PostBox postData={postData} idData={idData} id={id} />
			)}
			{page === 'profile' && <ProfileBox idData={idData} id={id} user={user} />}
			{page === 'friends' && <FriendBox idData={idData} id={id} user={user} />}
		</div>
	);
};

export default withRouter(Profile);
