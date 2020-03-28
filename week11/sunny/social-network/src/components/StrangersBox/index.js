import React, { useState, useEffect, useContext } from 'react';
// import friendAvatar from '../../images/friend-avatar.png';
import addIcon from '../../icons/plus.svg';
import userService from '../../services/users';
import { AppContext } from '../../context';

const StrangersBox = () => {
	const { user } = useContext(AppContext);

	const [strangers, setStrangers] = useState([]);

	useEffect(() => {
		const fetchStrangers = async (userId, page) => {
			const strangers = await userService.findStrangerByUserId(userId, page);
			setStrangers(strangers.data.data.data);
		};
		fetchStrangers(user._id, 1);
	}, [user]); //让effect去监听user的动向

	const handleAddFriend = async friendId => {
		if (user) {
			try {
				const relationship = await userService.addFriend(user._id, friendId);
				console.log(relationship);
			} catch (error) {
				alert(error.message);
			}
		}
	};
	return (
		<div className='friends-box'>
			<div className='title'>
				<h4>Friends you may know</h4>
			</div>
			<div className='friends-container'>
				{strangers &&
					strangers.map(stranger => (
						<div className='friend'>
							<div className='friend-info'>
								<img src={stranger.avatar} alt='avatar' />
								<span>
									{stranger.firstName} {stranger.lastName}
								</span>
							</div>
							<div className='right'>
								<div className='add-friend-icon'>
									<img
										src={addIcon}
										alt='icon'
										onClick={() => handleAddFriend(stranger._id)}
									/>
								</div>
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

export default StrangersBox;
