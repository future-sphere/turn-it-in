import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.scss';
import UsersService from '../../services/users';

const Profile = ({ match }) => {
	const currentUserId = match.params.user;
	const [userProfile, setUserProfile] = useState({});
	console.log(currentUserId);
	useEffect(() => {
		fetchUserProfile(currentUserId);
	}, [currentUserId]);

	const fetchUserProfile = async userId => {
		try {
			const findUserByIdData = await UsersService.findUserById(userId);
			if (findUserByIdData.data.success) {
				setUserProfile(findUserByIdData.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='profile'>
			<div className='profile-top'>
				<h3>Profile</h3>
			</div>
			<div className='profile-body'>
				<div className='profile-list'>
					<p>Name</p>
					<input
						type='text'
						value={`${userProfile.firstName} ${userProfile.lastName}`}
					/>
				</div>
				<div className='profile-list'>
					<p>Phone Number</p>
					<input type='text' value={userProfile.phone} />
				</div>
				<div className='profile-list'>
					<p>Email Address</p>
					<input type='text' value={userProfile.email} />
				</div>

				<div className='profile-list'>
					<p>
						Profile Picture
						<span>Upload</span>
					</p>
					<img src={userProfile.avatar} alt='pic' />
				</div>
			</div>
		</div>
	);
};

export default Profile;
