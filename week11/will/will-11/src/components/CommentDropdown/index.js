import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import UserService from '../../services/users';
import './index.scss';

const CommentDropdown = ({ j }) => {
	const [commentUser, setCommentUser] = useState([]);

	useEffect(() => {
		fetchUserInfo(j.authorId);
	}, [j]);

	const fetchUserInfo = async userId => {
		try {
			const findUserByIdData = await UserService.findUserById(userId);
			// console.log(findUserByIdData);
			if (findUserByIdData.data.success) {
				setCommentUser(findUserByIdData.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='commentdropdown'>
			<div className='comment-postlist-comment'>
				<img src={commentUser.avatar} alt='pic' />
				<div className='comment-postlist-comment-text'>
					<h5>
						<span>{`${commentUser.firstName} ${commentUser.lastName}`}</span>
						{j.text}
					</h5>
					<p>Like</p>
				</div>
			</div>
		</div>
	);
};

export default CommentDropdown;
