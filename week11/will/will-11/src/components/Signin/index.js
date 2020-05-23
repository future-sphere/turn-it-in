import React, { useState } from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import AuthenticationService from '../../services/authentication';
import saveTokenToBrowser from '../../helpers/token';
import './index.scss';

const Signin = ({ page, switchLogin, history }) => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const loginResult = await AuthenticationService.login(phone, password);
			if (loginResult.data.success) {
				window.localStorage.setItem('token', loginResult.data.data);
				history.push('/home');
			} else {
				alert(loginResult.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className={classnames('signin', { off: page !== 1 })}>
			<h2>Pwitter</h2>
			<div className='signin-container'>
				<h4>Sign in</h4>
				<form onSubmit={e => e.preventDefault()} className='signin-form'>
					<input
						onChange={e => setPhone(e.target.value)}
						placeholder='Enter your phone number'
						value={phone}
						type='number'
					/>
					<input
						onChange={e => setPassword(e.target.value)}
						placeholder='Enter your password'
						value={password}
						type='password'
					/>
					<div className='signin-checkbox'>
						<input type='checkbox' />
						<span>Remember Password</span>
					</div>
					<button onClick={handleLogin}>Log In</button>
				</form>
				<p onClick={() => switchLogin(2)}>
					Don’t have an account? Register for one now.
				</p>
			</div>
		</div>
	);
};

export default withRouter(Signin);
