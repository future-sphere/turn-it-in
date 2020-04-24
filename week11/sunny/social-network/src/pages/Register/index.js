import React, { useState } from 'react';
import classnames from 'classnames';

import registerFormInputs from './formInputs';
import SelectDropdown from '../../components/SelectDropdown';
import AuthenticationService from '../../services/authentication';
import UserService from '../../services/users';
import saveTokenToBrowser from '../../helpers/token';
import './index.scss';

const placeholderText = 'Enter your ';

const insertPlaceholderText = key => {
	const arr = placeholderText.split(' ');
	arr.splice(2, 0, key);
	return arr.join(' ');
};

const RegisterPage = ({ history }) => {
	const [values, setValues] = useState({});
	const [previewLink, setPreviewLink] = useState(
		'https://image.flaticon.com/icons/svg/265/265474.svg',
	);

	const handleSelectGender = gender => {
		setValues({ ...values, gender });
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			const registerResult = await AuthenticationService.register(values);
			
			if (registerResult.data.success) {
				const loginResult = await AuthenticationService.login(
					values.phone,
					values.password,
				);

				if (loginResult.data.success) {
					saveTokenToBrowser(loginResult.data.data);
					history.push('/'); //re-direct to home page
				}
			} else {
				alert(registerResult.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleFileUpload = async e => {
		const file = e.target.files[0]; // get file object
		const link = URL.createObjectURL(file); // generate preview local url for uploaded file
		setPreviewLink(link); // update state to show preview image

		const formData = new FormData();
		formData.append('files', file); // only way to prepare a file object to be uploaded to server

		const uploadResult = await AuthenticationService.UploadProfilePicture(
			formData,
		); //uploaded

		setValues({ ...values, avatar: uploadResult.data.data[0] }); //set avatar value to be uploaded url
	};

	return (
		<div className='register-page'>
			<h1>Pwitter</h1>
			<div className='register'>
				<h3>Register</h3>
				<form onSubmit={e => e.preventDefault()}>
					{registerFormInputs.map(input => {
						const { type, key } = input;
						const placeholder = insertPlaceholderText(input.key);
						return (
							<div
								key={key}
								className={classnames('input-container', {
									isHalfWidth: key === 'age' || key === 'gender',
								})}>
								{type === 'file' ? (
									<div className='file-uploader'>
										<input
											type='file'
											placeholder={placeholder}
											onChange={handleFileUpload}
										/>
										<div className='image-container'>
											<img src={previewLink} alt='preview image' />
										</div>
									</div>
								) : type === 'select' ? (
									<SelectDropdown
										data={values.gender}
										handleSelectUpdate={handleSelectGender}
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
