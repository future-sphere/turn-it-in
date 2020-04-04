import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import AuthenticationService from '../../services/authentication';
import UserService from '../../services/users';
import saveTokenToBrowser from '../../helpers/token';
import SelectDropDown from '../SelectDropDown';
import './index.scss';

const Register = ({ page, switchLogin, history }) => {
	const inputData = [
		{ key: 'email', type: 'email' },
		{ key: 'password', type: 'password' },
		{ key: 'phone', type: 'number' },
		{ key: 'firstName', type: 'text' },
		{ key: 'lastName', type: 'text' },
		{ key: 'age', type: 'number' },
		{ key: 'gender', type: 'select' },
		{ key: 'street', type: 'text' },
		{ key: 'city', type: 'text' },
		{ key: 'state', type: 'text' },
		{ key: 'zip', type: 'number' },
		{ key: 'file', type: 'file' },
	];

	const [inputForm, setInputForm] = useState({});
	const [filePreview, setFilePreview] = useState('');

	const handleInputChange = e => {
		const { name, value } = e.target;
		setInputForm({ ...inputForm, [name]: value });
	};

	const handleGenderChange = g => {
		const newInputForm = { ...inputForm };
		newInputForm.gender = g;
		setInputForm(newInputForm);
	};

	const handleSubmit = async () => {
		try {
			const result = await AuthenticationService.register(inputForm);
			const loginResult = await AuthenticationService.login(
				inputForm.phone,
				inputForm.password,
			);
			if (result.data.success) {
				const loginResult = await AuthenticationService.login(
					inputForm.phone,
					inputForm.password,
				);
			}
			if (loginResult.data.success) {
				const { token, _id } = loginResult.data.data;
				saveTokenToBrowser(token, _id);
				history.push('/');
			} else {
				alert(result.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleFileUpload = async e => {
		try {
			const file = e.target.files[0];

			const preview = URL.createObjectURL(file);
			setFilePreview(preview);

			const formData = new FormData();
			formData.append('files', file);

			const uploaded = await AuthenticationService.uploadProfilePic(formData);

			const newInputForm = { ...inputForm };

			if (uploaded.data.success) {
				newInputForm.avatar = uploaded.data.data[0];
				setInputForm(newInputForm);
			} else {
				alert('something went wrong while uploading');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className={classnames('register', { off: page !== 2 })}>
			<h2 onClick={() => switchLogin(1)}>Pwitter</h2>
			<div className='register-container'>
				<h4>Register</h4>
				<form className='register-form'>
					{inputData.map(input => {
						const { type, key } = input;
						return (
							<div
								className={classnames('input-container', {
									halfWidth: key === 'age' || key === 'gender',
								})}>
								{type === 'file' ? (
									<React.Fragment>
										<div className='register-avatar-container'>
											<p>Profile Picture</p>
											<input
												type={type}
												placeholder={`Enter your ${key}`}
												onChange={handleFileUpload}
											/>
											<img src={filePreview} alt='pic' />
										</div>
									</React.Fragment>
								) : type === 'select' ? (
									<SelectDropDown handleGenderChange={handleGenderChange} />
								) : (
									<input
										name={key}
										onChange={handleInputChange}
										type={type}
										placeholder={`Enter your ${key}`}
									/>
								)}
							</div>
						);
					})}
				</form>
				<button onClick={handleSubmit}>Register</button>
			</div>
		</div>
	);
};

export default withRouter(Register);
