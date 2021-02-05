import React, { useState, useEffect } from 'react';
import icon from '../../images/icon.svg';
import delet from '../../images/Xshape.svg';
import userService from '../../services/user';

const FriendContent = ({ user, friend }) => {
	const [friendInfo, setFriendInfo] = useState({});

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');

		const getFriendInfo = async () => {
			if (friend) {
				try {
					const info = await userService.findUserById(friend, userToken);

					if (info.data.success) {
						setFriendInfo(info.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		getFriendInfo();
	}, []);

	return (
		<div className='friendbox-content'>
			<div className='friendbox-front'>
				<img className='friendbox-icon' src={icon} alt='' />
				<div className='friendbox-info'>
					<div className='friendbox-name'>{`${friendInfo.firstName} ${friendInfo.lastName}`}</div>
					<div className='friendbox-count'>
						{friendInfo && friendInfo.friends && friendInfo.friends.length}{' '}
						friends
					</div>
				</div>
			</div>
			<img src={delet} alt='' />
		</div>
	);
};

export default FriendContent;
