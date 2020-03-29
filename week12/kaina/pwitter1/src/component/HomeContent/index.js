import React, { useState, useEffect } from 'react';
import './index.scss';

import classnames from 'classnames';
import PostService from '../../service/post';
import UserService from '../../service/user';
import Post from '../Post';
import FriendsBox from '../FriendsBox';
import Status from '../Status';

const HomeContent = () => {
	const userId = window.localStorage.getItem('userId');
	const [post, setPost] = useState([]);
	const [dropDown, setDropDown] = useState(false);

	useEffect(() => {
		const getAllFriendPost = async () => {
			try {
				const friendPosting = await PostService.getPostByFriend(userId, 1);
				if (friendPosting.data.success) {
					setPost(friendPosting.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		getAllFriendPost(userId, 1);
	}, []);

	// const handleClickDropdown = () => {
	// 	setDropDown(!dropDown);
	// };

	return (
		<div className='content-wrapper'>
			<div className='content-container'>
				<FriendsBox />
				<div className='status-container'>
					<Status />
					{post && post.map(v => <Post v={v} />)}
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
