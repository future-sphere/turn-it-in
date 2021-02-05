import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import reportimg from '../../images/report.svg';
import heart from '../../images/heart.svg';
import commenticon from '../../images/comment.svg';
import eye from '../../images/eye.svg';
import classnames from 'classnames';
import Comment from '../../components/Comment';
import userService from '../../services/user';
import { Link } from 'react-router-dom';
import postService from '../../services/post';
import moment from 'moment';
import dateFromObjectId from '../../helper/date';

const Post = ({ post, user }) => {
	const [showComment, setCommentShowStatus] = useState(false);
	const [showReport, setReportShowStatus] = useState(false);
	const [currentPost, setCurrentPost] = useState(post);
	const [postData, setPostData] = useState({});
	const reportDropdownElement = useRef(null);
	const reportButtonElement = useRef(null);
	const [likeLength, setLikeLength] = useState(post.likes.length);

	const handleDisplayComment = () => {
		const newShowComment = !showComment;
		setCommentShowStatus(newShowComment);
	};

	const handleReport = () => {
		const newShowReport = !showReport;
		setReportShowStatus(true);
	};

	const handleScreenClick = e => {
		if (
			reportDropdownElement.current !== e.target &&
			reportButtonElement.current !== e.target
		) {
			setReportShowStatus(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleScreenClick);
	}, []);

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');

		const getPostInfo = async () => {
			if (post) {
				try {
					const info = await userService.findUserById(post.authorId, userToken);

					if (info.data.success) {
						setPostData(info.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		getPostInfo();
	}, [post]);

	const handleLikePost = async id => {
		const userToken = window.localStorage.getItem('token');
		if (post) {
			try {
				const likePost = await postService.likePost(user._id, id, userToken);
				if (likePost.data.success) {
					let newLength = likeLength;
					setLikeLength(newLength + 1);
				} else {
					const unlikePost = await postService.unlikePost(
						user._id,
						id,
						userToken,
					);
					if (unlikePost.data.success) {
						let newLength = likeLength;
						setLikeLength(newLength - 1);
					}
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	const handleReportPost = async (authorId, postId) => {
		const userToken = window.localStorage.getItem('token');
		if (post) {
			try {
				const reportPost = await postService.reportPost(
					authorId,
					postId,
					userToken,
				);
				console.log(reportPost);
			} catch (error) {
				alert(error.message);
			}
		}
	};

	const postTimeStamp = moment(dateFromObjectId(post._id)).fromNow();
	console.log(postTimeStamp);

	return (
		<React.Fragment>
			{post && (
				<div className='post-container'>
					<div
						onClick={() => handleReportPost(post.authorId, post._id)}
						ref={reportDropdownElement}
						className={classnames('post-report-drop', { active: showReport })}>
						Report
					</div>

					<div className='post-header'>
						<div className='post-title'>
							<Link to={`/profile/status/${post.authorId}`}>
								<img src={postData.avatar} alt='' />
							</Link>

							<div className='post-block'>
								<div className='post-sender'>
									<div className='post-sender-name'>{`${postData.firstName} ${postData.lastName}`}</div>
									<div className='post-sender-feeling'>
										is feeling {post.mood}
									</div>
								</div>
								<div className='post-time'>{postTimeStamp}</div>
							</div>
						</div>
						<img
							ref={reportButtonElement}
							onClick={() => handleReport()}
							src={reportimg}
							alt=''
						/>
					</div>

					<div className='post-content'>{post.text}</div>

					<div className='post-reviews'>
						<div
							onClick={() => handleLikePost(post._id)}
							className='post-likes'>
							<img src={heart} alt='' />
							{likeLength}
						</div>
						<div
							onClick={() => handleDisplayComment()}
							className='post-comment'>
							<img src={commenticon} alt='' />
							{post.comments.length}
						</div>
						<div className='post-views'>
							<img src={eye} alt='' />
							{post._v}
						</div>
					</div>
					{showComment && (
						<Comment
							currentPost={currentPost}
							setCurrentPost={setCurrentPost}
							user={user}
						/>
					)}
				</div>
			)}
		</React.Fragment>
	);
};

export default Post;
