import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './pages/LogIn';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SettingPage from './pages/Setting';
import userService from './services/user';
import NavBar from './components/NavBar';
import postService from './services/post';
import AuthenticationService from './services/authentication';

function App() {
	const [user, setUser] = useState({});
	const [postData, setPostData] = useState([]);
	const [userId, setUserId] = useState('');

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		if (userId) {
	// 			try {
	// 				const response = await userService.findUserById(userId); // get full user data from server

	// 				if (response.data.success) {
	// 					setUser(response.data.data);
	// 				}
	// 			} catch (error) {
	// 				alert(error.message);
	// 			}
	// 		}
	// 	};
	// 	fetchUser();
	// }, []);

	useEffect(() => {
		const fetchUserId = async () => {
			const userToken = window.localStorage.getItem('token');

			if (userToken) {
				try {
					const userid = await userService.getCurrentLoggedInUser(userToken);

					if (userid.data.success) {
						setUserId(userid.data.data._id);
						setUser(userid.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		fetchUserId();
	}, []);

	useEffect(() => {
		const fetchPost = async () => {
			const userToken = window.localStorage.getItem('token');

			try {
				const posts = await postService.findPostByFriend(
					user._id,
					1,
					userToken,
				);

				console.log(posts);
				if (posts) {
					setPostData(posts.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchPost();
	}, [user]);

	return (
		<Router>
			<div className='App'>
				<NavBar user={user} />
				<Route
					exact
					path='/'
					render={() => {
						return <LogInPage />;
					}}
				/>
				<Route
					exact
					path='/home'
					render={() => {
						return (
							<HomePage
								postData={postData}
								setPostData={setPostData}
								user={user}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/profile/:page/:id'
					render={() => {
						return <ProfilePage user={user} />;
					}}
				/>
				<Route
					exact
					path='/profile'
					render={() => {
						return <ProfilePage user={user} />;
					}}
				/>
				<Route
					exact
					path='/setting'
					render={() => {
						return <SettingPage />;
					}}
				/>
			</div>
		</Router>
	);
}

export default App;
