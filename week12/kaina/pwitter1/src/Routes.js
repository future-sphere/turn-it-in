import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/Home';
import SettingPage from './pages/Setting';
// import LandingPage from './pages/Landing';
import ProfilePage from './pages/Profile';
import RegisterPage from '../src/pages/Register';
import LoginPage from '../src/pages/Login';

const routes = [
	{
		path: '/',
		component: HomePage,
		isExact: true,
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/register',
		component: RegisterPage,
	},
	{
		path: '/profile',
		component: ProfilePage,
	},
	{
		path: '/setting',
		component: SettingPage,
	},
];

export default function Routes() {
	return (
		<div>
			{routes.map(route => (
				<Route
					exact={route.isExact}
					path={route.path}
					component={route.component}
				/>
			))}
		</div>
	);
}
