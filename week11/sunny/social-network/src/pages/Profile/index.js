import React from 'react';
import Nav from '../../components/Nav';
import MyStatus from '../../components/Posts';
import MyFriends from '../../components/Friends';
import MyProfile from '../../components/Profile';
import ProfileNav from '../../components/ProfileNav';
import './index.scss';
import { AppContext } from '../../context';

const Profile = ({ match }) => {
	const pages = ['status', 'profile', 'friends'];
	let page = pages.includes(match.params.page) ? match.params.page : 'status';
	console.log(page);

	return (
		<div className='profile'>
			<Nav />
			<ProfileNav match={match} />
			<div className='profile-wrapper'>
				{page === 'status' && <MyStatus />}
				{page === 'profile' && <MyProfile />}
				{page === 'friends' && <MyFriends />}
			</div>
		</div>
	);
};

export default Profile;
