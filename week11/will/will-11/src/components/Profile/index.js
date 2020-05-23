import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.scss';
import UsersService from '../../services/users';
import AuthenticationService from '../../services/authentication';

const Profile = ({ match }) => {
	const currentUserId = match.params.user;
	const [userProfile, setUserProfile] = useState({});
	const [filePreview, setFilePreview] = useState('');
	const [nameEditData, setNameEditData] = useState('');
	const [telEditData, setTelEditData] = useState('');
	const [emailEditData, setEmailEditData] = useState('');
	console.log(nameEditData.split(' ')[1]);
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

	const handleFileUpload = async e => {
		const file = e.target.files[0];

		const preview = URL.createObjectURL(file);
		setFilePreview(preview);

		const formData = new FormData();
		formData.append('files', file);
		const uploaded = await AuthenticationService.uploadProfilePic(formData);
		if (uploaded.data.success) {
			updateProfile(currentUserId, 'avatar', uploaded.data.data[0]);
		}
	};

	const updateProfile = async (id, key, value) => {
		try {
			if (value === '' || value === ' ' || value === undefined) {
				alert('You missed something');
			} else {
				const profileUpdateResult = await UsersService.profileUpdate(
					id,
					key,
					value,
				);
				console.log(profileUpdateResult);

				if (profileUpdateResult.data.success) {
					alert('Edit successfully!');
				} else {
					alert('Something wrong');
				}
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
			<div
				className={classnames('profile-body', {
					off: window.location.href.indexOf('setting') == 55,
				})}>
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
			</div>
			<div
				className={classnames('profile-body', {
					off: window.location.href.indexOf('setting') == -1,
				})}>
				<div className='profile-list'>
					<p>Name</p>
					<input
						type='text'
						placeholder={`${userProfile.firstName} ${userProfile.lastName}`}
						value={nameEditData}
						onChange={e => setNameEditData(e.target.value)}
					/>
					<span
						onClick={() => (
							updateProfile(
								currentUserId,
								'firstName',
								nameEditData.split(' ')[0],
							),
							updateProfile(
								currentUserId,
								'lastName',
								nameEditData.split(' ')[1],
							)
						)}>
						Change
					</span>
				</div>
				<div className='profile-list'>
					<p>Phone Number</p>
					<input
						type='number'
						placeholder={userProfile.phone}
						value={telEditData}
						onChange={e => setTelEditData(e.target.value)}
					/>
					<span
						onClick={() => updateProfile(currentUserId, 'phone', telEditData)}>
						Change
					</span>
				</div>
				<div className='profile-list'>
					<p>Email Address</p>
					<input
						type='email'
						placeholder={userProfile.email}
						value={emailEditData}
						onChange={e => setEmailEditData(e.target.value)}
					/>
					<span
						onClick={() =>
							updateProfile(currentUserId, 'email', emailEditData)
						}>
						Change
					</span>
				</div>
				<div className='profile-list edit'>
					<div className='edit-block'>
						<p>Profile Picture</p>
						<input type='file' onChange={handleFileUpload} />
						<span
							onClick={() =>
								updateProfile(currentUserId, 'avatar', filePreview.slice(27))
							}>
							Change
						</span>
					</div>
					<div className='edit-block'>
						<img src={userProfile.avatar} alt='pic' />
						<img src={filePreview} alt='pic' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
