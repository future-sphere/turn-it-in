import React from 'react';
import './index.css';

const ProfilePicture = () => {
	return (
		<div className='profile-box'>
			<div className='profile'>
				<p>Profile Picture</p>
				<span>Upload</span>
			</div>
			<img src={require('../../assets/logo/profile.png')} alt='profile logo' />
		</div>
	);
};

export default ProfilePicture;
