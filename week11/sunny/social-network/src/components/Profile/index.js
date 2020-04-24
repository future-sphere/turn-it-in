import React from 'react';
// import classnames from 'classnames';
import userAvatar from '../../images/post-avatar.png';
import './index.scss';

const Profile = ({
	statusDropdown,
	handleClickStatusDropdown,
	statusInputValue,
	handleSelectStatus,
}) => {
	return (
		<div className='profile'>
			<div className='title'>
				<h3>My Profile</h3>
			</div>
			<div className='body-wrapper'>
				<div className='profile-setting'>
					<p>My name</p>
					<div className='setting-change'>
						<input type='text' value='User name' />
						<span>Change</span>
					</div>
				</div>
				<div className='profile-setting'>
					<p>My Phone Number</p>
					<div className='setting-change'>
						<input type='tel' value='xxx-xxx-xxxx' />
						<span>Change</span>
					</div>
				</div>
				<div className='profile-setting'>
					<p>My Home Address</p>
					<div className='setting-change'>
						<input type='address' value='Address' />
						<span>Change</span>
					</div>
				</div>
				<div className='profile-setting'>
					<p>My Relationship Status</p>
					<div className='setting-change'>
						<div className='input' onClick={handleClickStatusDropdown}>
							<input
								type='text'
								value={statusInputValue}
								placeholder='Select your relationship status'
							/>
							<i class='fas fa-chevron-down'></i>
						</div>
						<span>Change</span>
					</div>
				</div>
				<div className='setting-photo'>
					<p>
						My/His/Her Profile Picture <span>Upload</span>
					</p>
					<img src={userAvatar} alt='avatar' />
				</div>
			</div>
			{statusDropdown && (
				<div className='dropdown'>
					<ul>
						<li onClick={() => handleSelectStatus('')}>Select</li>
						<li onClick={() => handleSelectStatus('Single')}>Single</li>
						<li onClick={() => handleSelectStatus('In Relationship')}>
							In Relationship
						</li>
						<li onClick={() => handleSelectStatus('Engaged')}>Engaged</li>
						<li onClick={() => handleSelectStatus('Married')}>Married</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Profile;
