import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './index.scss';
import icon from '../../images/icon.svg';
import charvondown from '../../images/chavondown.svg';
import AuthenticationService from '../../services/authentication';
import saveTokenToBrowser from '../../helper/token';
import userService from '../../services/user';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Register = ({ handleDisplayCode, displayCode, pages, history }) => {
	const genderDropdwonElement = useRef(null);
	const genderInputElement = useRef(null);
	const [genderDisplay, setGenderDisplay] = useState(false);
	const [genderInput, setGenderInput] = useState('');
	const [dataForm, setDataForm] = useState({});
	const [filePreview, setFilePreview] = useState('');

	const handleUpdateData = e => {
		const { name, value } = e.target;
		const nextDataForm = { ...dataForm };
		nextDataForm[name] = value;
		setDataForm(nextDataForm);
	};

	const handleSubmitData = async () => {
		try {
			const result = await AuthenticationService.register(dataForm); //posting data to register

			if (result.data.success) {
				const loginResult = await AuthenticationService.login(
					dataForm.phone,
					dataForm.password,
				); // posting data login

				const token = loginResult.data.data.token;

				saveTokenToBrowser(token);

				// axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
			} else {
				alert(result.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleFileUpload = async e => {
		try {
			const file = e.target.files[0]; // get file object

			const preview = URL.createObjectURL(file); // generate preview local url
			setFilePreview(preview); // upload state to show img

			const formData = new FormData(); //?????
			formData.append('files', file); // only way to prepare the file to upload to server

			const uploaded = await AuthenticationService.UploadProfilePicture(
				formData,
			); // upload

			const nextDataForm = { ...dataForm };

			if (uploaded.data.success) {
				nextDataForm.avatar = uploaded.data.data[0];
				setDataForm(nextDataForm);
			} else {
				alert('something went wrong while update');
			}
		} catch (error) {
			console.log('error', error);
			alert(error.message);
		}
	};

	const handleGenderDisplay = () => {
		const newgenderDisplay = !genderDisplay;
		setGenderDisplay(newgenderDisplay);
	};

	const handleSelectGender = gender => {
		const nextDataForm = { ...dataForm };
		nextDataForm.gender = gender;
		setDataForm(nextDataForm);
		setGenderDisplay(false);
	};

	const handleGenderClick = e => {
		if (
			genderDropdwonElement.current !== e.target &&
			genderInputElement.current !== e.target
		) {
			setGenderDisplay(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleGenderClick);
	}, []);

	return (
		<div
			className={classnames('register-container', {
				active: displayCode === 1,
				//1就是代表他妈的register
			})}>
			<div className='big-title'>Switter</div>
			<div className='register-wraper'>
				<div className='small-title'>Register</div>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your E-mail address'
					name='email'
					type='email'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your password'
					name='password'
					type='password'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your first name'
					name='firstName'
					type='text'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your last name'
					name='lastName'
					type='text'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your phone number'
					name='phone'
					type='text'
				/>

				<div className='register-inline'>
					<div
						ref={genderDropdwonElement}
						className={classnames('register-gender-select', {
							displaygender: genderDisplay,
						})}>
						<div
							onClick={() => handleSelectGender('Male')}
							className='register-gender-male'>
							Male
						</div>
						<div
							onClick={() => handleSelectGender('Female')}
							className='register-gender-female'>
							Female
						</div>
					</div>

					<img src={charvondown} alt='' />
					<input
						onChange={handleUpdateData}
						name='age'
						placeholder='Enter your age'
						type='text'
					/>
					<input
						onChange={handleUpdateData}
						name='gender'
						ref={genderInputElement}
						onClick={() => handleGenderDisplay()}
						readOnly='readonly'
						value={dataForm.gender}
						placeholder='Enter your gender'
						type='text'
					/>
				</div>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your street address'
					name='street'
					type='text'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your city'
					name='city'
					type='text'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your state'
					name='state'
					type='text'
				/>
				<input
					onChange={handleUpdateData}
					placeholder='Enter your zip code'
					name='zip'
					type='text'
				/>
				<div className='register-icon'>
					<div className='register-icon-title'>
						<span className='register-icon-discription'>profile picture</span>
						<span className='register-icon-upload'>Upload</span>
						<input type='file' onChange={handleFileUpload} />
					</div>
					<img src={filePreview} alt='' />
				</div>
				<button
					className='bf-blue-button'
					onClick={() => {
						handleSubmitData();
						handleDisplayCode(3);
					}}>
					register
				</button>
			</div>
		</div>
	);
};

export default withRouter(Register);
