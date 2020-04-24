import React, { useState, useRef, useEffect, useContext } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import PostComment from '../PostComment';
import commentIcon from '../../icons/comment.svg';
import likeIcon from '../../icons/like.svg';
import postService from '../../services/posts';
import { AppContext } from '../../context';
import userService from '../../services/users';
import dateFromObjectId from '../../helpers/date';

// request for current author id for author name and avatar
const Post = ({ post }) => {
	const { user } = useContext(AppContext);

	const reportDropdownElement = useRef(null);
	const reportButtonElement = useRef(null);

	const [openReport, setOpenReport] = useState(false);
	const [comment, setComment] = useState(false);

	const [postData, setPostData] = useState({});
	const [hasLiked, setHasLiked] = useState(false);
	const [isReport, setReport] = useState(false);

	const handleOpenReport = () => {
		const newOpenReport = !openReport;
		setOpenReport(newOpenReport);
	};

	const handleOpenComment = () => {
		const newComment = !comment;
		setComment(newComment);
	};

	const handleClickOutside = e => {
		if (
			reportDropdownElement.current !== e.target &&
			reportButtonElement.current !== e.target
		) {
			setReport(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
	}, []);

	useEffect(() => {
		const fetchFindUserData = async () => {
			if (post) {
				console.log(post);
				try {
					const info = await userService.findUserById(post.authorId);
					if (info.data.success) {
						setPostData(info.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		fetchFindUserData();
	}, []);

	const handleClickLike = async () => {
		if (!hasLiked) {
			try {
				if (post) {
					const likePost = await postService.likePost(post.authorId, post._id);
					console.log(likePost);
					if (likePost.data.success) {
						setHasLiked(true);
					}
				}
			} catch (error) {
				alert(error.message);
			}
		} else {
			try {
				if (post) {
					const unlikePost = await postService.unlikePost(
						post.authorId,
						post._id,
					);
					console.log(unlikePost);
					if (unlikePost.data.success) {
						setHasLiked(false);
					}
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	const handleClickReport = async () => {
		if (!isReport) {
			try {
				if (post) {
					const reportPost = await postService.reportPost(
						post.authorId,
						post._id,
					);
					if (reportPost.data.success) {
						setReport(true);
					}
				}
			} catch (error) {
				alert(error.message);
			}
		} else {
			if (post) {
				try {
					const unReportPost = await postService.unreportPost(
						post.authorId,
						post._id,
					);
					if (unReportPost.data.success) {
						setReport(false);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		}
	};

	const postTimeStamp = moment(dateFromObjectId(post._id)).fromNow(); //记录时间

	return (
		<div className='post'>
			<div
				className={classnames('openReport', { displayReport: openReport })} //不好使！
				// ref={reportDropdownElement}
			>
				<p
					className={classnames({ reported: isReport === true })}
					onClick={handleClickReport}>
					Report
				</p>
			</div>
			<div className='top'>
				<div className=' user-info'>
					<img src={postData.avatar} alt='avatar' />
					<div className='user-status'>
						<b>
							{postData.firstName} {postData.lastName}{' '}
							<span>is feeling {post.mood}</span>
						</b>
						<p>{postTimeStamp}</p>
					</div>
				</div>
				<button>
					<i
						class='fas fa-ellipsis-h'
						onClick={handleOpenReport}
						// ref={reportButtonElement}
					></i>
				</button>
			</div>
			<p className='moment-text'>{post.text}</p>
			<div className='post-icons'>
				<div
					className='icon'
					style={{
						backgroundColor: hasLiked ? 'rgba(110,110,225,0.8)' : '#eee',
					}}>
					<img src={likeIcon} alt='icon' onClick={handleClickLike} />
					<span>{hasLiked ? post.likes.length + 1 : post.likes.length}</span>
				</div>
				<div className='icon'>
					<img src={commentIcon} alt='icon' onClick={handleOpenComment} />
					<span>{post.comments.length}</span>
				</div>
			</div>
			{comment && <PostComment post={post} postData={postData} />}
		</div>
	);
};

export default Post;
