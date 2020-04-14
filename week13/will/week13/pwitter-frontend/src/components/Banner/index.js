import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './index.scss';

const Banner = ({ match, currentUserId, currentUser }) => {
	const bannerLink = [
		{
			title: 'Status',
			link: `/${currentUserId}/status`,
		},
		{
			title: 'Profile',
			link: `/${currentUserId}/profile`,
		},
		{
			title: 'Friends',
			link: `/${currentUserId}/friends`,
		},
	];

	return (
		<div className='Banner'>
			<div className='banner-container'>
				<img src={currentUser.avatar} alt='pic' />
				<div className='banner-text'>
					<h3>{`${currentUser.firstName} ${currentUser.lastName}`}</h3>
					<div className='user-list-container'>
						{bannerLink.map(v => (
							<Link to={v.link}>
								<p
									className={classnames('user-link', {
										active: match.params.page === v.link.split('/')[2],
									})}>
									{v.title}
								</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
