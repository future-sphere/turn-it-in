import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './Routes';

import Axios from 'axios';
import { AppContext } from './context';

function App() {
	const [user, setUser] = useState({});
	useEffect(() => {
		const token = window.localStorage.getItem('token'); //line 19 ${token} from database
		const fetchUser = async () => {
			const data = await Axios.post(
				'https://pwitter.demo.bctc.io/users/current',
				{},
				{
					headers: {
						authorization: `Bearer ${token} `,
					},
				},
			);
			setUser({ ...data.data.data });
		};
		if (token) {
			fetchUser();
		}
	}, []);

	return (
		<Router>
			<AppContext.Provider value={{ user }}>
				<div className='App'>
					<Routes />
				</div>
			</AppContext.Provider>
		</Router>
	);
}

export default App;
