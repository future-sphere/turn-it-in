import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Comment from '../../components/Comment';
import Profile from '../../components/Profile';
import Friends from '../../components/Friendslist';
import UserService from '../../services/users';
import PostsService from '../../services/posts';
import { AppContext } from '../../context';
import './index.scss';

const User = ({ match }) => {
	const [currentPost, setCurrentPost] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const currentUserId = match.params.user;

	const pagelist = ['status', 'friends', 'profile'];
	let page = pagelist.includes(match.params.page)
		? match.params.page
		: 'status';

	useEffect(() => {
		fetchUserPost(currentUserId, 1);
	}, []);

	useEffect(() => {
		fetchUserInfo(currentUserId);
	}, [currentUserId]);

	const fetchUserPost = async (currentUserId, page) => {
		const findPostByUserData = await PostsService.findPostByUser(
			currentUserId,
			page,
		);
		if (findPostByUserData.data.success) {
			setCurrentPost(findPostByUserData.data.data.data);
		}
	};

	const fetchUserInfo = async currentUserId => {
		const findUserByIdData = await UserService.findUserById(currentUserId);
		if (findUserByIdData.data.success) {
			setCurrentUser(findUserByIdData.data.data);
		}
	};

	return (
		<div className='user'>
			<Navbar />
			<Banner
				match={match}
				currentUserId={currentUserId}
				currentUser={currentUser}
			/>
			<div className='body-container'>
				{page === 'status' &&
					currentPost &&
					currentPost.map(v => (
						<Comment match={match} currentUser={currentUser} v={v} />
					))}
				{page === 'profile' && <Profile match={match} />}
				{page === 'friends' && <Friends match={match} />}
			</div>
		</div>
	);
};

export default User;
