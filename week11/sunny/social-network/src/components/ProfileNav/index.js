import React, { useContext } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import userAvatar from '../../images/friend-avatar.png';
import './index.scss';
import { AppContext } from '../../context';

const navLink = [
	{
		title: 'Status',
		link: '/profile/status',
	},
	{
		title: 'Profile',
		link: '/profile/profile',
	},
	{
		title: 'Friends',
		link: '/profile/friends',
	},
];

const ProfileNav = ({ match }) => {
	const { user } = useContext(AppContext);
	console.log(user);
	return (
		<div className='profile-nav'>
			<div className='heading'>
				<h3>
					{user.firstName} {user.lastName}
				</h3>
				<div className='profile-avatar'>
					<img src={user.avatar} alt='avatar' />
				</div>
			</div>
			<div className='profile-nav'>
				{navLink.map(v => (
					<Link
						className={classnames('link', {
							active: match.params.page === v.link.split('/')[2],
						})}
						to={v.link}>
						{v.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProfileNav;
