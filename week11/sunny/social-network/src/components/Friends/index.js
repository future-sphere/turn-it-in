import React from 'react';
// import classnames from 'classnames';
import FriendAvatar from '../../images/FriendAvatar.png';
import plusIcon from '../../icons/plus.svg';
import deleteIcon from '../../icons/delete.svg';
import './index.scss';

const Friends = () => {
	return (
		<div className='friends'>
			<div className='title'>
				<h4>My Friends</h4>
				<input type='text' placeholder='Search for friends' />
			</div>
			<div className='content'>
				<div className='card'>
					<img src={FriendAvatar} alt='avatar' />
					<div className='friend-name'>
						<h5>User Name</h5>
						<p># Friends</p>
					</div>
					<div className='icon'>
						<img src={plusIcon} alt='icon' />
						<img src={deleteIcon} alt='icon' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Friends;
