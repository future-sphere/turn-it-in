import React, { useState, useEffect, useContext } from 'react';
import './index.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PostsService from '../../services/posts';
import UserService from '../../services/users';
import CommentDropdown from '../CommentDropdown';
import { AppContext } from '../../context';
import moment from 'moment';

const Comment = ({ v, currentUser, match }) => {
	const { user, userId } = useContext(AppContext);
	const [reportDropDown, setReportDropDown] = useState(false);
	const [commentDropDown, setCommentDropDown] = useState(false);
	const [postComments, setPostComments] = useState([]);
	const [commentData, setCommentData] = useState('');
	const [currentUsers, setCurrentUsers] = useState([]);
	useEffect(() => {
		fetchComments(v._id);
	}, []);

	useEffect(() => {
		fetchUserInfo(v.authorId);
	}, []);

	const fetchUserInfo = async userId => {
		try {
			const findUserByIdData = await UserService.findUserById(userId);
			if (findUserByIdData.data.success) {
				const newCurrentUsers = [...currentUsers];
				newCurrentUsers.push(findUserByIdData.data.data);
				setCurrentUsers(...newCurrentUsers);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const fetchComments = async postId => {
		try {
			const findPostByIdData = await PostsService.findPostById(postId);
			if (findPostByIdData.data.success) {
				setPostComments(findPostByIdData.data.data.comment);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const createComment = async (e, authorId, postId, text) => {
		try {
			if (e.keyCode == 13) {
				const createCommentInPostData = await PostsService.createCommentInPost(
					postId,
					userId,
					text,
				);
				if (createCommentInPostData.data.success) {
					alert('Comment sent successfully ');
					setCommentData('');
				} else {
					alert('Comment sent fail ');
				}
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleLikePost = async (postId, userId, v) => {
		try {
			const likePostData = await PostsService.likePost(postId, userId);
			if (likePostData.data.success) {
				v.like.push(userId);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleUnlikePost = async (postId, userId, v) => {
		try {
			const unlikePostData = await PostsService.unlikePost(postId, userId);
			if (unlikePostData.data.success) {
				v.like.splice(0, 1);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleReportDropDown = () => {
		setReportDropDown(!reportDropDown);
	};

	const handleCommentDropDown = () => {
		setCommentDropDown(!commentDropDown);
	};

	const fetchTime = objectId => {
		const time = new Date(
			parseInt(objectId.substring(0, 8), 16) * 1000,
		).getTime();
		const currTime = new Date().getTime();
		if (currTime - time > 86400000)
			return moment(time)
				.startOf('day')
				.fromNow();
		else if (86400000 >= currTime - time > 3600000)
			return moment(time)
				.startOf('hour')
				.fromNow();
		else if (currTime - time <= 3600000)
			return moment(time)
				.startOf('minute')
				.fromNow();
	};

	return (
		<div className='comment-postlist-container'>
			<div className='comment-postlist-top'>
				<div
					className={classnames('comment-postlist-top-left', { open: match })}>
					<Link
						className={classnames('link', { off: match })}
						to={`/${v.authorId}/status`}>
						<img src={currentUsers.avatar} alt='pic' />
					</Link>
					<Link
						className={classnames('link close', { on: match })}
						to={`/${v._id}/status`}>
						<img src={currentUsers.avatar} alt='pic' />
					</Link>
					<div>
						<h5>
							{`${currentUsers.firstName} ${currentUsers.lastName}`}
							<span>{`is feeling ${v.mood}`}</span>
						</h5>
						<p>{fetchTime(v._id)}</p>
					</div>
				</div>

				<i onClick={handleReportDropDown} class='fas fa-ellipsis-h'></i>
				<h3 className={classnames('report', { off: reportDropDown == false })}>
					Report
				</h3>
			</div>
			<h4>
				<i class='fas fa-quote-left'></i>
				{v.text}
				<i class='fas fa-quote-right'></i>
			</h4>
			<div className='comment-postlist-bottom'>
				<span
					onClick={() => handleLikePost(v._id, userId, v)}
					className={classnames('like-button', {
						off: v.like.includes(userId),
					})}>
					<i class='far fa-heart'>&ensp;{v.like.length}</i>
				</span>
				<span
					onClick={() => handleUnlikePost(v._id, userId, v)}
					className={classnames('like-button', {
						off: !v.like.includes(userId),
					})}>
					<i class='far fa-grin-hearts'>&ensp;{v.like.length}</i>
				</span>
				<i onClick={handleCommentDropDown} class='far fa-comment-dots'>
					&ensp;{v.comment.length}
				</i>
			</div>
			<div
				className={classnames('comment-postlist-comment-dropdown', {
					off: commentDropDown == false,
				})}>
				<h6>
					View previous comments<span>2 of 13</span>
				</h6>
				<div className='comment-postlist-comment-container'>
					<div className='comment-postlist-comment-center'>
						{postComments.map(j => (
							<CommentDropdown commentDropDown={commentDropDown} j={j} />
						))}
						<div className='comment-postlist-reply'>
							<img src={user.avatar} alt='pic' />
							<input
								onChange={e => setCommentData(e.target.value)}
								onKeyDown={e => createComment(e, userId, v._id, commentData)}
								value={commentData}
								placeholder='Write a comment..'
								type='text'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
