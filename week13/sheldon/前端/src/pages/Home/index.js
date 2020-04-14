import React, { useState, useEffect } from 'react';
import './index.scss';
import NavBar from '../../components/NavBar';
import MyFriends from '../../components/MyFriends';
import CreatePost from '../../components/CreatePost';
import NewFriends from '../../components/NewFriends';
import Post from '../../components/Post';
import Comment from '../../components/Comment';
import userService from '../../services/user';

const HomePage = ({ user, postData, setPostData }) => {
	const [strangers, setStrangers] = useState([]);
	const [page, setPage] = useState(1);

	const handleNewPage = num => {
		setPage(num);
	};

	useEffect(() => {
		if (user._id) {
			const fetchStranger = async () => {
				const userToken = window.localStorage.getItem('token');

				if (user._id) {
					try {
						const strangers = await userService.findStrangerByUserId(
							user._id,
							page,
							userToken,
						);
						console.log(strangers);
						if (strangers.data.success) {
							setStrangers(strangers.data.data);
						}
					} catch (error) {
						alert(error.message);
					}
				}
			};
			fetchStranger();
		}
	}, [user, page]);

	return (
		<div className='home-container'>
			<div className='home-wraper'>
				<div className='home-friend'>
					<MyFriends user={user} />
					<NewFriends
						user={user}
						handleNewPage={handleNewPage}
						strangers={strangers}
						setStrangers={setStrangers}
					/>
				</div>
				<div className='home-posts'>
					<CreatePost
						user={user}
						setPostData={setPostData}
						postData={postData}
					/>
					{postData && postData.map(post => <Post user={user} post={post} />)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
