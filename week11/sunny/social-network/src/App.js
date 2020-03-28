import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SettingPage from './pages/Setting';
import './App.css';
// import postService from './services/posts';
import AuthenticationService from './services/authentication';
import { AppContext } from './context';

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		// const userId = window.localStorage.getItem('userId');
		const token = window.localStorage.getItem('token');

		const fetchUserData = async () => {
			const data = await AuthenticationService.getCurrentLoggedInUser(token);
			setUser({ ...data.data.data });
		};
		if (token) {
			fetchUserData();
		}
	}, []);

	return (
		<Router>
			<AppContext.Provider value={{ user }}>
				<div className='app'>
					<Route exact path='/' component={HomePage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/setting' component={SettingPage} />
					<Route path='/profile/:page' component={ProfilePage} />
					{/* <Route path='/profile' component={ProfilePage} /> */}
				</div>
			</AppContext.Provider>
		</Router>
	);
}

export default App;
