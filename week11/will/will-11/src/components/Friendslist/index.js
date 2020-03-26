import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import UsersService from '../../services/users';
import './index.scss';

const Friendslist = ({ match }) => {
	const currentUserId = match.params.user;
	const [friendship, setFriendship] = useState(false);
	const [currentFriendship, setCurrentFriendship] = useState('');
	const [myFriend, setMyFriend] = useState([]);
	const userId = window.localStorage.getItem('userId');
	console.log(myFriend);
	useEffect(() => {
		findFriend(currentUserId, 1);
	}, [currentUserId]);

	const findFriend = async (userId, page) => {
		try {
			const myFriends = await UsersService.findFriendById(userId, page);
			if (myFriends.data.success) {
				setMyFriend(myFriends.data.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const createFriendship = async (userId, friendId) => {
		try {
			const addFriend = await UsersService.addFriend(userId, friendId);
			if (addFriend.data.success) {
				alert('Hey , you can chat with your new friend now !');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const removeFriendship = async (userId, friendsId) => {
		try {
			const deleteFriend = await UsersService.deleteFriend(userId, friendsId);
			if (deleteFriend.data.success) {
				alert('Your friend has been deleted !');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const friendshipSwitch = id => {
		setFriendship(!friendship);
		setCurrentFriendship(id);
	};

	return (
		<div className='friendslist'>
			<div className='friendslist-top'>
				<h3>Friends</h3>
				<input placeholder='Search for friends' type='text' />
			</div>
			<div className='friendslist-container'>
				{myFriend &&
					myFriend.map(v => (
						<div className='friendslist-body'>
							<div className='friendslist-left'>
								<img src={v.avatar} alt='pic' />
								<div className='friends-left-text'>
									<h6>{`${v.firstName} ${v.lastName}`}</h6>
									<p>{`${v.friends.length} friends`}</p>
								</div>
							</div>
							<div className='friendslist-right'>
								<div
									onClick={() => friendshipSwitch(v._id)}
									className={classnames('friendship', {
										off: friendship === true && currentFriendship === v._id,
									})}>
									<i
										onClick={() => removeFriendship(userId, v._id)}
										className='fas fa-times'></i>
								</div>
								<div
									onClick={() => friendshipSwitch(v._id)}
									className={classnames('friendshipoff', {
										on: friendship === true && currentFriendship === v._id,
									})}>
									<i
										onClick={() => createFriendship(userId, v._id)}
										className='fas fa-plus'></i>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Friendslist;
