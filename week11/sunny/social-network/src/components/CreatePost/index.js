import React, { useContext } from 'react';
import emoji from '../../images/emoji.png';
import postAvatar from '../../images/post-avatar.png';
import './index.scss';

const CreatePost = ({
	posts,
	moodDropdown,
	moodInputValue,
	inputValue,
	handleClickDropdown,
	handleSelectMood,
	handleInputChange,
	handleMoodChange,
	handleAddPost,
}) => {
	return (
		<div className='create-post'>
			<div className='post-top'>
				<button>Status</button>
				<div className='post-input'>
					<img src={postAvatar} alt='avatar' />
					<input
						value={inputValue}
						type='text'
						placeholder='What is on your mind, User?'
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<div className='post-bottom'>
				<div className='mood-container' onClick={handleClickDropdown}>
					<img src={emoji} alt='emoji' />
					<span>Mood</span>
					<p>{moodInputValue} </p>
				</div>
				<button onClick={() => handleAddPost()}>Share</button>
			</div>
			{moodDropdown && (
				<div className='mood-dropdown'>
					<ul>
						<li onClick={() => handleSelectMood('Happy')}>Happy</li>
						<li onClick={() => handleSelectMood('Sad')}>Sad</li>
						<li onClick={() => handleSelectMood('Being Crazy')}>Being Crazy</li>
						<li onClick={() => handleSelectMood('Hate')}>Hate</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default CreatePost;
