import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import UserPage from './pages/User';
import { AppContext } from './context';
import AuthenticationService from './services/authentication';
import UsersService from './services/users';
import Axios from 'axios';

function App({ history }) {
	const userId = window.localStorage.getItem('userId');
	const token = window.localStorage.getItem('token');
	const [user, setUser] = useState({});

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		fetchUser(token);
	}, []);

	const fetchUser = async token => {
		try {
			const userData = await AuthenticationService.verifyToken(token);
			if (userData.data.success) {
				window.localStorage.setItem('userId', userData.data.data.userId);
				const result = await UsersService.findUserById(
					userData.data.data.userId,
				);
				if (result.data.success) {
					setUser(result.data.data);
				}
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<Router>
			<AppContext.Provider value={{ user, userId }}>
				<div className='App'>
					<Route exact path='/' component={LoginPage} />
					<Route path='/home/' component={HomePage} />
					<Route path='/:user/:page/' component={UserPage} />
					{/* <Route path={`/${userId}/setting`} component={UserPage} /> */}
				</div>
			</AppContext.Provider>
		</Router>
	);
}

export default App;
