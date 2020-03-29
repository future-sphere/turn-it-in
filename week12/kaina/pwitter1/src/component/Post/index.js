import React, { useContext, useState, useEffect } from 'react';
import './index.scss';
import moment from 'moment';

import classnames from 'classnames';
import PostService from '../../service/post';
import UserService from '../../service/user';

import { AppContext } from '../../context';
import { ReactComponent as Like } from '../../assets/logo/like.svg';
import { ReactComponent as Comment } from '../../assets/logo/comment.svg';

const Post = ({ v }) => {
	const token = window.localStorage.getItem('token');
	const userId = window.localStorage.getItem('userId');
	const { user } = useContext(AppContext);
	const [comment, setComment] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const [currentFriend, setCurrentFriend] = useState([]);
	// const [friendName, setFriendName] = useState({});

	const handleClickDropdown = () => {
		setDropDown(!dropDown);
	};

	const handleShowComment = () => {
		setComment(!comment);
	};

	useEffect(() => {
		const findAllCurrentFriend = async userId => {
			try {
				const findCurrentFriend = await UserService.findUserById(userId);
				if (findCurrentFriend.data.success) {
					const newCurrentFriend = [...currentFriend];
					newCurrentFriend.push(findCurrentFriend.data.data);
					setCurrentFriend(...newCurrentFriend);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		findAllCurrentFriend(v.authorId);
	}, []);

	// const fetchFriendInfo = async userId => {
	// 	const getFriendName = await UserService.findUserById(userId);
	// 	if (getFriendName.data.success) {
	// 		setFriendName(getFriendName.data.data);
	// 	}
	// };

	return (
		<div className='friend-post'>
			<div className='post-wrapper'>
				<div className='post-container'>
					<div className='post-box'>
						<div className='post-user'>
							<img src={currentFriend.avatar} alt='' />
							<div className='post-user-container'>
								<div className='post-user-name'>
									<h3>
										<span>
											{currentFriend.firstName} {currentFriend.lastName}
										</span>
										is feeling {v.mood}
									</h3>
									<span>6 hours ago</span>
								</div>
							</div>
							<div onClick={() => handleClickDropdown()}>
								<i class='fas fa-ellipsis-h'></i>
							</div>
							<button
								className={classnames('report', { show: dropDown === true })}>
								Report
							</button>
						</div>
						<p>{v.text}</p>
						<div className='post-like-comment'>
							<div className='like'>
								<Like className='like-button' />
								<span>62</span>
							</div>
							<div className='comment' onClick={handleShowComment}>
								<Comment />
								<span>12</span>
							</div>
						</div>
					</div>
				</div>
				<div className={classnames('post-comment', { on: comment === true })}>
					<p>View previous comments</p>
					<div className='comment-user'>
						<img src={user.avatar} alt='avatar' />
						<div className='comment-message'>
							<h4>
								{user.firstName} {user.lastName}{' '}
							</h4>
							<p>I think your are awesome!</p>
						</div>
					</div>
					<span>Like</span>

					<div className='comment-box'>
						<img src={user.avatar} alt='avatar' />
						<input type='text' placeholder='Write a comment...' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
