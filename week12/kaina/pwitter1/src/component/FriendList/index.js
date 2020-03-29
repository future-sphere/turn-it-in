import React from 'react';
import './index.scss';

const FriendList = () => {
	return (
		<div className='friend-list-container'>
			<div className='friend-list-heading'>
				<h1>My Friend</h1>
				<input type='text' placeholder='Search for friends' />
			</div>
			<div className='friend-list'>
				<div className='friend-box'>
					<img
						src={require('../../assets/logo/profile.png')}
						alt='profile logo'
					/>
					<div className='friend-name'>
						<h3>Sunny Wang</h3>
						<p>121 Friends</p>
					</div>
					<i class='fas fa-plus-circle'></i>
				</div>
				<div className='friend-box'>
					<img
						src={require('../../assets/logo/profile.png')}
						alt='profile logo'
					/>
					<div className='friend-name'>
						<h3>Sunny Wang</h3>
						<p>121 Friends</p>
					</div>
					<i class='fas fa-plus-circle'></i>
				</div>
				<div className='friend-box'>
					<img
						src={require('../../assets/logo/profile.png')}
						alt='profile logo'
					/>
					<div className='friend-name'>
						<h3>Sunny Wang</h3>
						<p>121 Friends</p>
					</div>
					<i class='fas fa-plus-circle'></i>
				</div>
			</div>
		</div>
	);
};

export default FriendList;
