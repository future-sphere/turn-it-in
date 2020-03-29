import React from 'react';
import './index.scss';
import ProfilePicture from '../ProfilePicture';

const Profile = () => {
	return (
		<div className='profile-container'>
			<div className='profile-heading'>
				<h1>My Profile Settings</h1>
			</div>
			<div className='profile-content'>
				<div className='profile-info'>
					<h2>My name</h2>
					<div className='name-input profile-input'>
						<input type='text' value='Kaina Zhang' />
						<p>Change</p>
					</div>
				</div>
				<div className='profile-info'>
					<h2>Phone Number</h2>
					<div className='phone-input profile-input'>
						<input type='text' value='347-828-5300' />
						<p>Change</p>
					</div>
				</div>
				<div className='profile-info'>
					<h2>Home Address</h2>
					<div className='address-input profile-input'>
						<input type='text' value='34-29 146th Street, Flushing NY 11354' />
						<p>Change</p>
					</div>
				</div>
				<div className='profile-info'>
					<h2>Relationship Status</h2>
					<div className='address-input profile-input'>
						<input type='text' value='In a relationship' />
						<p>Change</p>
					</div>
				</div>
				<ProfilePicture />
			</div>
		</div>
	);
};

export default Profile;
