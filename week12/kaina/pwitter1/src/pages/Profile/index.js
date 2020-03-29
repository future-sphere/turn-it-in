import React from 'react';
import Nav from '../../component/Navbar';
import Heading from '../../component/Heading';
import Profile from '../../component/Profile';
import FriendList from '../../component/FriendList';
import Post from '../../component/Post';
import { Link } from 'react-router-dom';

import './index.scss';

const ProfilePage = ({ match }) => {
	const pages = ['status', 'profile', 'friends'];
	const page = pages.includes(match.params.page) ? match.params.page : 'status';
	return (
		<div className='profile-page-wrapper'>
			<Nav />
			<Heading match={match} />
			<div className='profile-page-container'>
				{page === 'status' && <Post />}
				{page === 'profile' && <Profile />}
				{page === 'friends' && <FriendList />}
			</div>
		</div>
	);
};

export default ProfilePage;
