import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../services/authentication';
import saveTokenToBrowser from '../../helpers/token';
import './index.scss';

// history: 是在app.js 中使用route赠送的一个参数 赠送给一个主页面
// 可以把history比作一个array，
// 当你去到任何网站时 这个网站链接就以string的形式会存到array里

const LoginPage = ({ history }) => {
	const [values, setValues] = useState({});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleLogin = async () => {
		try {
			const result = await AuthenticationService.login(
				values.phone,
				values.password,
			);
			if (result.data.success) {
				//如果login成功 那就
				const userId = await AuthenticationService.verifyUserLoginStatus(
					result.data.data,
				);
				saveTokenToBrowser(result.data.data, userId.data.data.sub);
				history.push('/');
			} else {
				alert(result.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='login-page'>
			<h1>Pwitter</h1>
			<div className='login'>
				<h3>Sign In</h3>
				<form onSubmit={e => e.preventDefault()}>
					<input
						type='tel'
						name='phone'
						placeholder='Enter your phone number'
						value={values.phone}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						name='password'
						placeholder='Enter your password'
						value={values.password}
						onChange={handleInputChange}
					/>
					<div className='check-box'>
						<input type='checkbox' />
						<p>Remember Password</p>
					</div>
					<button onClick={handleLogin}>Log In</button>
				</form>
				<p className='login-register'>
					Don't have an account?
					<Link className='link' to={'/register'}>
						Register for one now.
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
