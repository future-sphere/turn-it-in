import React, { useState } from 'react';
import './index.scss';
import classnames from 'classnames';

const SelectDropDown = ({ handleGenderChange }) => {
	const [genderOpen, setGenderOpen] = useState(false);
	const [gender, setGender] = useState();

	const genderDropDown = () => {
		setGenderOpen(!genderOpen);
	};

	const genderGet = g => {
		setGender(g);
		setGenderOpen(false);
		handleGenderChange(g);
	};
	return (
		<div className='select-dropdown-container'>
			<input
				name='gender'
				value={gender}
				placeholder='Enter your gender'
				readonly='readonly'
			/>
			<i onClick={genderDropDown} class='fas fa-angle-down'></i>
			<div
				className={classnames('gender-dropdown', {
					off: genderOpen == false,
				})}>
				<p onClick={() => genderGet('Male')}>Male</p>
				<p onClick={() => genderGet('Female')}>Female</p>
				<p onClick={() => genderGet('Undefined')}>Undefined</p>
			</div>
		</div>
	);
};

export default SelectDropDown;
