import React, { useState } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';
import postService from '../../services/post';
import commentText from '../../components/CommentText';
import CommentText from '../../components/CommentText';

const Comment = ({ currentPost, setCurrentPost, user, post }) => {
	const [commentInput, setCommentInput] = useState('');

	const handleCommentInput = e => {
		setCommentInput(e.target.value);
	};

	const submitComment = async e => {
		const userToken = window.localStorage.getItem('token');
		if (e.keyCode === 13 && user._id) {
			try {
				const newComment = await postService.createCommentInPost(
					user._id,
					currentPost._id,
					commentInput,
					userToken,
				);
				if (newComment.data.success) {
					const nextPost = { ...currentPost };

					nextPost.comments = newComment.data.data.comments;

					setCurrentPost(nextPost);
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className={classnames('comment-container')}>
			<div className='comment-extra'>
				<span>View previous comments</span>
				<span>2 of 999+</span>
			</div>

			{currentPost.comments &&
				currentPost.comments.map(comment => <CommentText comment={comment} />)}

			<div className='comment-write'>
				<img src={user.avatar} alt='' />
				<input
					value={commentInput}
					onChange={handleCommentInput}
					placeholder='Write a comment'
					type='text'
					onKeyDown={submitComment}
				/>
			</div>
		</div>
	);
};

export default Comment;
