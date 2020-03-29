import { Link } from 'react-router-dom';
import './index.scss';
import classnames from 'classnames';
import React, { useState } from 'react';
import axios from 'axios';

import AuthService from '../../service/auth';

export default function LoginPage({ history }) {
	const [values, setValues] = useState({});
	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleLogin = async () => {
		try {
			const { phone, password } = values;
			const loginResult = await AuthService.handleLoginUser(phone, password);
			if (loginResult.data.success) {
				window.localStorage.setItem('token', loginResult.data.data);
				// window.localStorage.setItem('_id', loginResult.data.data._id);
				history.push('/');
			} else {
				alert(loginResult.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<div className='page login-page'>
			<div className='login-wrapper'>
				<h1>Pwtitter</h1>
				<form onSubmit={e => e.preventDefault()} className='input-container'>
					<h4>Sign in</h4>
					<input
						name='phone'
						type='phone'
						value={values.phone}
						onChange={handleInputChange}
						placeholder='Enter your phone number'
					/>
					<input
						name='password'
						type='password'
						value={values.password}
						onChange={handleInputChange}
						placeholder='Enter your password'
					/>
					<div className='check-box'>
						<input type='checkbox' />
						<p>Remember Password</p>
					</div>
					<button onClick={() => handleLogin()}>Log in</button>
					<Link to={`/register`}>
						Don't have an account? Register for one now.
					</Link>
				</form>
			</div>
		</div>
	);
}
