import React, { useState, useContext, useEffect } from 'react';
// import friendAvatar from '../../images/friend-avatar.png';
import addIcon from '../../icons/plus.svg';
import userService from '../../services/users';
import { AppContext } from '../../context';

import './index.scss';

const FriendsBox = () => {
	const { user } = useContext(AppContext);

	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const fetchFriends = async (userId, page) => {
			const friends = await userService.findFriendById(userId, page);

			setFriends(friends.data.data.data);
		};
		fetchFriends(user._id, 1);
	}, [user]);

	return (
		<div className='friends-box'>
			<div className='title'>
				<h4>My Friends</h4>
			</div>
			<div className='friends-container'>
				{friends &&
					friends.map(friend => (
						<div className='friend'>
							<div className='friend-info'>
								<img src={friend.avatar} alt='avatar' />
								<span>
									{friend.firstName} {friend.lastName}
								</span>
							</div>
							<div className='right'>
								<p></p>
							</div>
						</div>
					))}
			</div>
			<div className='my-friends-bottom'>
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
		</div>
	);
};

export default FriendsBox;
