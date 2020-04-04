import React, { useState } from 'react';
import classnames from 'classnames';
import './index.scss';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../services/authentication';
import saveTokenToBrowser from '../../helper/token';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const SignIn = ({ handleDisplayCode, displayCode, history }) => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const result = await AuthenticationService.login(phone, password);

			// if (result.data.success) {
			// 	const user = await AuthenticationService.verifyUserLoginStatus(
			// 		result.data.data,
			// 	);
			console.log(result);
			saveTokenToBrowser(result.data.data.token);
			// axios.defaults.headers.common[
			// 	'authorization'
			// ] = `Bearer ${result.data.data}`;

			history.push('/home');
			// } else {
			// 	alert(result.data.data);
			// }
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div
			className={classnames('signin-container', {
				active: displayCode === 3,
				//3就是代表他妈的signin
			})}>
			<div className='big-title'>Switter</div>
			<div className='signin-wrapper'>
				<div className='small-title'>sign In</div>
				<input
					onChange={e => setPhone(e.target.value)}
					placeholder='Enter your phone number'
					type='text'
				/>
				<input
					onChange={e => setPassword(e.target.value)}
					placeholder='Enter your pass word'
					type='password'
				/>
				<div className='signin-password'>
					<input type='checkbox' />
					<div>remember password</div>
				</div>

				<button onClick={handleLogin} className='bf-blue-button'>
					Log In
				</button>

				<div onClick={() => handleDisplayCode(1)} className='signin-noaccount'>
					Don’t have an account? Register for one now.
				</div>
			</div>
		</div>
	);
};

export default withRouter(SignIn);
