import React, { useState, useEffect, useContext } from 'react';
import classnames from 'classnames';
import Comment from '../Comment';
import { Link } from 'react-router-dom';
import './index.scss';
import UsersService from '../../services/users';
import PostsService from '../../services/posts';
import { AppContext } from '../../context';

const Homebody = () => {
	const { user, userId } = useContext(AppContext);
	const [strangers, setStrangers] = useState([]);
	const [myFriend, setMyFriend] = useState([]);
	const [friendship, setFriendship] = useState(false);
	const [currentFriendship, setCurrentFriendship] = useState('');
	const [friendPosts, setFriendPosts] = useState([]);
	const [currentUsers, setCurrentUsers] = useState([]);
	const [postData, setPostData] = useState('');

	useEffect(() => {
		strangersData(userId, 1);
	}, []);

	useEffect(() => {
		findFriend(userId, 1);
	}, []);

	useEffect(() => {
		showFriendPosts(userId, 1);
	}, []);

	const showFriendPosts = async (userId, page) => {
		try {
			const findPostByFriendData = await PostsService.findPostByFriend(
				userId,
				page,
			);
			if (findPostByFriendData.data.success) {
				setFriendPosts(findPostByFriendData.data.data.data);
				await findPostByFriendData.data.data.data.map(v => {});
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const strangersData = async (userId, page) => {
		try {
			const findStranger = await UsersService.findStrangerByUserId(
				userId,
				page,
			);
			if (findStranger.data.success) {
				setStrangers(findStranger.data.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const fetchUserInfo = async userId => {
		try {
			const findUserByIdData = await UsersService.findUserById(userId);
			if (findUserByIdData.data.success) {
				await setCurrentUsers(currentUsers.push(findUserByIdData.data.data));
			}
		} catch (error) {
			alert(error.message);
		}
	};

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

	const sendPost = async (text, mood, authorId) => {
		try {
			const createPostData = await PostsService.createPost(
				text,
				mood,
				authorId,
			);
			if (createPostData.data.success) {
				alert('Post sent successfully ');
				setPostData('');
			} else {
				alert('Post sent fail ');
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
		<div className='homebody'>
			<div className='homebody-left-wrapper'>
				<div className='body-left-container myfriends-container'>
					<h5>My Friends</h5>
					<div className='body-left-block friends-list-container'>
						<ul>
							{myFriend &&
								myFriend.map(k => (
									<li className='users-list-container'>
										<div className='users-list-left'>
											<Link to={`/${k._id}/status`}>
												<img src={k.avatar} alt='pic' />
											</Link>
											<span>{`${k.firstName} ${k.lastName}`}</span>
										</div>
										<div className='users-list-right'>
											<p>{k.friends.length}</p>
										</div>
									</li>
								))}
						</ul>
						<div className='friends-list-pages'>
							<span onClick={() => findFriend(userId, 1)}>1</span>
							<span onClick={() => findFriend(userId, 2)}>2</span>
							<span onClick={() => findFriend(userId, 3)}>3</span>
						</div>
					</div>
				</div>
				<div className='body-left-container mayknow-container'>
					<h5>Friends you may know</h5>
					<div className='body-left-block users-list-container'>
						<ul>
							{strangers &&
								strangers.map(j => (
									<li className='users-list-container'>
										<div className='users-list-left'>
											<img src={j.avatar} alt='pic' />
											<span>{`${j.firstName} ${j.lastName}`}</span>
										</div>
										<div className='users-list-right'>
											<div
												onClick={() => friendshipSwitch(j._id)}
												className={classnames('friendship', {
													off:
														friendship === true && currentFriendship === j._id,
												})}>
												<i
													onClick={() => createFriendship(userId, j._id)}
													class='fas fa-plus'></i>
											</div>
											<div
												onClick={() => friendshipSwitch(j._id)}
												className={classnames('friendshipoff', {
													on:
														friendship === true && currentFriendship === j._id,
												})}>
												<i
													onClick={() => removeFriendship(userId, j._id)}
													class='fas fa-check'></i>
											</div>
										</div>
									</li>
								))}
						</ul>
						<div className='friends-list-pages'>
							<span onClick={() => strangersData(userId, 1)}>1</span>
							<span onClick={() => strangersData(userId, 2)}>2</span>
							<span onClick={() => strangersData(userId, 3)}>3</span>
						</div>
					</div>
				</div>
			</div>
			<div className='homebody-right-wrapper'>
				<div className='homebody-postsend-container'>
					<p>
						<i class='far fa-bookmark'></i>&ensp;Status
					</p>
					<div className='homebody-postsend-center'>
						<img src={user.avatar} alt='pic' />
						<input
							onChange={e => setPostData(e.target.value)}
							value={postData}
							placeholder={`What's on your mind , ${user.firstName} ${user.lastName}`}
							type='text'
						/>
					</div>
					<div className='homebody-postsend-bottom'>
						<div className='homebody-postsend-bottom-left'>
							<span>😂 Mood</span>
						</div>
						<button onClick={() => sendPost(postData, 'happy', user._id)}>
							Share
						</button>
					</div>
				</div>
				{friendPosts && friendPosts.map(v => <Comment v={v} />)}
			</div>
		</div>
	);
};

export default Homebody;
