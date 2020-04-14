import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import icon from '../../images/profileicon.svg';
import Name from '../../helper/name';
import userService from '../../services/user';

const navLinks = [
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
const Banner = ({ match, user }) => {
	const id = match.params.id;
	const [idData, setIdData] = useState({});

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

	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<img src={idData.avatar} alt='' />
				<div className='banner-links-container'>
					<h1>
						{idData.firstName && Name.capitalizeName(idData.firstName)}
						{` `}
						{idData.lastName && Name.capitalizeName(idData.lastName)}
					</h1>
					<ul>
						{navLinks.map(v => (
							<li>
								<Link
									className={classnames({
										active: match.params.page === v.link.split('/')[2],
									})}
									to={`${v.link}/${id}`}>
									{v.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Banner;
