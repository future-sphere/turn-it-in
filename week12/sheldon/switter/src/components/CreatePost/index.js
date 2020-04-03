import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import moodicon from '../../images/mood.svg';
import postService from '../../services/post';

const CreatePost = ({ user, postData, setPostData }) => {
	const [displayMood, setDisplayMood] = useState(false);
	const [mood, setMood] = useState('');
	const moodButtonElement = useRef(null);
	const moodDropdownElement = useRef(null);
	const [inputText, setInputText] = useState('');

	const postNewPost = async () => {
		const userToken = window.localStorage.getItem('token');
		if (user) {
			try {
				const newPost = await postService.createPost(
					inputText,
					mood,
					user._id,
					userToken,
				);
				console.log(newPost);
				if (newPost.data.success && postData) {
					const nextPosts = [...postData];
					nextPosts.unshift(newPost.data.data);
					setPostData(nextPosts);
				} else {
					alert(newPost.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	const handleMoodClick = e => {
		if (
			moodButtonElement.current !== e.target &&
			moodDropdownElement.current !== e.target
		) {
			setDisplayMood(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleMoodClick);
	}, []);

	const handleDisplayMood = () => {
		const nextMood = !displayMood;
		setDisplayMood(nextMood);
	};

	const passMood = currmood => {
		setMood(currmood);
	};

	const handleInputText = e => {
		setInputText(e.target.value);
	};

	return (
		<div className='createpost-container'>
			<div className='createpost-wraper'>
				<div className='createpost-status'>Status</div>
				<div className='createpost-input'>
					<img src={user.avatar} alt='' />
					<input
						onChange={handleInputText}
						value={inputText}
						placeholder={`what's on your mind ${user.firstName}`}
						type='text'
					/>
				</div>
			</div>

			<div className='createpost-post'>
				<div
					className='createpost-post-mood'
					ref={moodButtonElement}
					onClick={handleDisplayMood}>
					<img src={moodicon} alt='' />
					<span>{mood === '' ? <div>mood</div> : mood}</span>
				</div>
				<button onClick={postNewPost}>Share</button>
			</div>

			{displayMood && (
				<div className='mood-dropdown' ref={moodDropdownElement}>
					<span onClick={() => passMood('happy')}>happy</span>
					<span onClick={() => passMood('angry')}>angry</span>
					<span onClick={() => passMood('motivated')}>motivated</span>
					<span onClick={() => passMood('about to join the marine corp')}>
						about to join the marine corp
					</span>
				</div>
			)}
		</div>
	);
};

export default CreatePost;
