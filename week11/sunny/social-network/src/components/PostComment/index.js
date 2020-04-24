import React, { useContext, useState } from 'react';
// import emoji from '../../images/emoji.png';
import postAvatar from '../../images/post-avatar.png';
import './index.scss';
import { AppContext } from '../../context';
import postService from '../../services/posts';

const PostComment = ({ post, postData }) => {
	const { user } = useContext(AppContext);

	const [commentInput, setCommentInput] = useState('');

	const handleCommentInputChange = e => {
		const newCommentInput = [...commentInput];
		setCommentInput(e.target.value);
	};

	const handleSubmitComment = async event => {
		if (post) {
			try {
				if (event.keyCode === 13) {
					const commentText = commentInput;
					console.log(commentText, user._id, post.authorId);

					const fetchAddComment = await postService.createCommentInPost({
						text: commentText,
						postId: post._id,
						authorId: post.authorId,
					});
					console.log(fetchAddComment);

					post.comments.unshift(fetchAddComment.data.data);
					console.log(post.comments);
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className='post-comment'>
			<div className='page-controller'>
				<p>View previous comments</p>
				<p># of #</p>
			</div>
			{post.comments.map(comment => (
				<div className='comments'>
					<div className='comment'>
						<div className='comment-detail'>
							<img src={user.avatar} alt='avatar' />
							<span>
								<b>
									{user.firstName} {user.lastName}
								</b>
								{comment.text}
							</span>
						</div>
						<p>Like</p>
					</div>
				</div>
			))}

			<form onSubmit={e => e.preventDefault()}>
				<img src={postAvatar} alt='avatar' />
				<input
					value={commentInput}
					type='text'
					placeholder='Write a comment...'
					onChange={handleCommentInputChange}
					onKeyDown={event => handleSubmitComment(event)}
				/>
			</form>
		</div>
	);
};

export default PostComment;
