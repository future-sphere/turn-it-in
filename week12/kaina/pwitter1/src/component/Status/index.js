import React, { useState, useContext, useEffect } from 'react';
import './index.scss';
import { AppContext } from '../../context';
import PostService from '../../service/post';
// import Post from '../../component/Post';

const Status = e => {
	const token = window.localStorage.getItem('token');
	const userId = window.localStorage.getItem('userId');

	const { user } = useContext(AppContext);

	const [post, setPost] = useState('');
	const [mood, setMood] = useState(' ');

	const addNewPost = async (text, mood, authorId) => {
		try {
			const newPost = await PostService.createNewPost(text, mood, authorId);
			// const myPost = [...post];
			// myPost.unshift(addNewPost.data);
			// setPost(newPost);
			if (newPost.data.success) {
				alert('Post has been posted');
				setPost('');
				setMood('');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='status-box'>
			<div className='heading'>
				<h3>Status</h3>
			</div>
			<div className='message-bar status-style'>
				<img src={user.avatar} alt='' />
				<input
					onChange={e => setPost(e.target.value)}
					value={post}
					type='text'
					placeholder={`What is on your mind, ${user.firstName} ? `}
				/>
			</div>
			<dix className='mood-bar status-style'>
				<div className='mood'>
					<span>😄</span>
					<input
						value={mood}
						onChange={e => setMood(e.target.value)}
						placeholder='Mood'
					/>
				</div>
				<div className='mood-button'>
					<button onClick={() => addNewPost(post, mood, userId)}>Share</button>
				</div>
			</dix>
		</div>
	);
};

export default Status;
