import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';

import classnames from 'classnames';
import registerFormInput from './formInput';
import SelectDropDown from '../../component/selectDropdown';
import AuthService from '../../service/auth';

const placeholderText = 'Enter your ';
const insertPlaceholderText = key => {
	const arr = placeholderText.split(' ');
	arr.splice(2, 0, key);
	return arr.join(' ');
};

const RegisterPage = ({ history }) => {
	const [values, setValues] = useState({});
	const [previewLink, setPreviewLink] = useState('');

	const handleSelectUpdate = value => {
		setValues({ ...values, gender: value });
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			const { phone, password } = values;
			const registerResult = await AuthService.handleRegister(values);
			console.log(registerResult);
			if (registerResult.data.success) {
				const loginResult = await AuthService.handleLoginUser({
					phone,
					password,
				});
				if (loginResult.data.success) {
					const { token } = loginResult.data.data;
					window.localStorage.setItem('token', token);
					history.push('/');
				} else {
					alert('Something wrong with login');
				}
			} else {
				alert('something wrong with register');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleFileUpload = async e => {
		const file = e.target.files[0];
		const link = URL.createObjectURL(file);
		setPreviewLink(link);
		const formData = new FormData();
		formData.append('files', file);
		const uploadResult = await AuthService.handleUploadImage(formData);
		setValues({ ...values, avatar: uploadResult.data.data[0] });
	};

	console.log(values);

	return (
		<div className='register-page'>
			<div className='register-wrapper page'>
				<h1>Pwtitter</h1>
				<form onSubmit={e => e.preventDefault()}>
					<h4>Register</h4>
					{registerFormInput.map(input => {
						const { type, key } = input;
						const placeholder = insertPlaceholderText(key);
						return (
							<div
								className={classnames('input-container ', {
									halfWidth: key === 'Age' || key === 'gender',
								})}>
								{type === 'file' ? (
									<div key={key} className={classnames('file-uploader')}>
										<input
											type='file'
											placeholder={placeholder}
											onChange={handleFileUpload}
										/>
										<img src={previewLink} alt='preview image' />
									</div>
								) : type === 'select' ? (
									<SelectDropDown
										data={values.gender}
										handleSelectUpdate={handleSelectUpdate}
									/>
								) : (
									<input
										onChange={handleInputChange}
										type={type}
										name={key}
										placeholder={placeholder}
									/>
								)}
							</div>
						);
					})}

					<button onClick={handleSubmit}>Register</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
