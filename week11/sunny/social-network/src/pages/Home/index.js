import React, { useState, useEffect, useContext } from 'react';
import Nav from '../../components/Nav';
import FriendsBox from '../../components/FriendsBox';
import StrangersBox from '../../components/StrangersBox';
import CreatePost from '../../components/CreatePost';
import Posts from '../../components/Posts';
// import PostComment from '../../components/PostComment';
import './index.scss';
import postService from '../../services/posts';
import { AppContext } from '../../context';

const HomePage = () => {
	const { user } = useContext(AppContext);
	console.log(user);
	const [posts, setPosts] = useState([]);
	const [moodDropdown, setMoodDropdown] = useState(false);
	const [moodInputValue, setMoodInputValue] = useState('');
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const fetchPosts = async () => {
			if (user._id) {
				const posts = await postService.findPostByFriend(user._id, 1);
				console.log(posts.data);
				if (posts.data.success) {
					console.log(posts.data.data);
					setPosts(posts.data.data.data);
				} else {
					alert(posts.data.data);
				}
			}
		};
		fetchPosts();
	}, [user]);

	const handleClickDropdown = () => {
		const NewMoodDropDown = !moodDropdown;
		setMoodDropdown(NewMoodDropDown);
	};

	const handleSelectMood = mood => {
		setMoodInputValue(mood);
		setMoodDropdown(false);
	};

	const handleInputChange = e => {
		const newInput = [...inputValue];
		setInputValue(e.target.value);
	};

	const handleMoodChange = e => {
		const newMoodInput = [...moodInputValue];
		setMoodInputValue(e.target.value);
	};

	const handleAddPost = async () => {
		console.log('handler is clicked'); // 1: component and handler is working
		if (user) {
			try {
				const userText = inputValue;
				const userMood = moodInputValue;
				console.log(userText, userMood); // 2. async await, check data passed in
				console.log(user._id, 'check for data passed in');
				const fetchAddPost = await postService.createPost(
					userText,
					userMood,
					user._id,
				);
				const nextPosts = [...posts];
				console.log(fetchAddPost.data);
				nextPosts.unshift(fetchAddPost.data.data);
				setPosts(nextPosts);
				console.log(fetchAddPost, 'checking axios response'); // 5. check response
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className='home'>
			<Nav />
			<div className='home-body'>
				{/* -------------------left part------------------ */}
				<div className='home-body-left'>
					<FriendsBox />
					<StrangersBox />
				</div>
				{/* -------------------right part------------------ */}
				<div className='home-body-right'>
					<CreatePost
						posts={posts}
						moodDropdown={moodDropdown}
						moodInputValue={moodInputValue}
						inputValue={inputValue}
						handleClickDropdown={handleClickDropdown}
						handleSelectMood={handleSelectMood}
						handleInputChange={handleInputChange}
						handleMoodChange={handleMoodChange}
						handleAddPost={handleAddPost}
					/>
					<div className='home-post'>
						<Posts posts={posts} />
						{/* <PostComment /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
