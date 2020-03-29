import React, { useContext, useState, useEffect } from 'react';
import './index.scss';
import { AppContext } from '../../context';
import UsersService from '../../service/user';
import classnames from 'classnames';

const FriendsBox = () => {
	const { user } = useContext(AppContext);
	const [stranger, setStranger] = useState([]);
	const [friend, setFriend] = useState(false);
	const [currentFriend, setCurrentFriend] = useState('');
	const [friendList, setFriendList] = useState([]);
	const token = window.localStorage.getItem('token');
	const userId = window.localStorage.getItem('userId');

	useEffect(() => {
		const findStrangerId = async () => {
			try {
				const strangerId = await UsersService.findStrangerByUserId(userId, 1);
				if (strangerId.data.success) {
					setStranger(strangerId.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		findStrangerId();
	}, []);

	useEffect(() => {
		const fetchAllFriend = async () => {
			try {
				const fetchFriend = await UsersService.findFriendById(userId, 1);
				if (fetchFriend.data.success) {
					setFriendList(fetchFriend.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchAllFriend();
	}, []);

	const handleAddFriend = async (userId, friendId) => {
		try {
			const AddToFriend = await UsersService.addFriend(userId, friendId);
			console.log(AddToFriend);
			if (AddToFriend.data.success) {
				alert('Added to friend list ');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const friendshipSwitch = friendId => {
		setCurrentFriend(friendId);
		setFriend(!friend);
	};

	const handleDeleteFriend = async (userId, friendId) => {
		try {
			const deleteFriend = await UsersService.removeFriend(userId, friendId);
			if (deleteFriend.data.success) {
				alert('Friend has been deleted');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='friend-container'>
			<div className='my-friend friend'>
				<h4>My Friends</h4>
				<div className='friend-list'>
					<div className='friend-content'>
						{friendList.map(friend => (
							<div className='friend-box'>
								<div className='friend-info'>
									<img src={friend.avatar} alt='avatar' />
									<p>
										{friend.firstName} {friend.lastName}
									</p>
								</div>
								<div className='friend-add'>
									<button
										className='delete-friend'
										onClick={() => handleDeleteFriend(userId, friend._id)}>
										<i class='fas fa-user-times'></i>
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='page-number'>
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</div>
				</div>
			</div>
			<div className='unknown-friend friend'>
				<h4>Friends you may know</h4>
				<div className='friend-list'>
					<div className='friend-content'>
						{stranger.map(strangerFriend => (
							<div className='friend-box'>
								<div className='friend-info'>
									<img src={strangerFriend.avatar} alt='avatar' />
									<p>
										{strangerFriend.firstName} {strangerFriend.lastName}
									</p>
								</div>
								<div className='friend-add'>
									<button
										className={classnames('add', {
											off:
												friend === true && currentFriend === strangerFriend._id,
										})}
										onClick={() => handleAddFriend(userId, strangerFriend._id)}>
										<i
											onClick={() => friendshipSwitch(strangerFriend._id)}
											class='fas fa-user-plus'></i>
									</button>

									<button
										className={classnames('added', {
											on:
												friend === true && currentFriend === strangerFriend._id,
										})}>
										<i
											onClick={() => friendshipSwitch(strangerFriend._id)}
											onClick={() =>
												handleDeleteFriend(userId, strangerFriend._id)
											}
											class='fas fa-user-check'></i>
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='page-number'>
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendsBox;
