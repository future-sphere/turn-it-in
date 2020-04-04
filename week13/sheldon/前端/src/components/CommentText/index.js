import React, { useEffect, useState } from 'react';
import icon from '../../images/icon.svg';
import userService from '../../services/user';

const CommentText = ({ comment }) => {
	const [commentData, setCommentData] = useState({});
	console.log(commentData);

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');

		const getCommentInfo = async () => {
			if (comment) {
				try {
					const info = await userService.findUserById(
						comment.authorId,
						userToken,
					);

					if (info.data.success) {
						setCommentData(info.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		getCommentInfo();
	}, []);
	return (
		<div className='comment-comment'>
			<div className='comment-wraper'>
				<img src={commentData.avatar} alt='' />
				<div className='comment-content'>
					<div className='comment-name'>{commentData.firstName}</div>
					<span>{comment.text}</span>
				</div>
			</div>
			<div className='comment-like'>like</div>
		</div>
	);
};

export default CommentText;
