import React, { useContext } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context';

const headingLink = [
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

const Heading = ({ match }) => {
	const { user } = useContext(AppContext);

	return (
		<div className='user-head-wrapper'>
			<div className='user-head'>
				<img src={user.avatar} alt='profile logo' />
				<div className='user-box'>
					<h1>
						{user.firstName} {user.lastName}
					</h1>
					<div className='user-page'>
						{headingLink.map(v => (
							<Link to={v.link}>{v.title}</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;
