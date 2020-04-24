import React, { useState } from 'react';
import Nav from '../../components/Nav';
import Profile from '../../components/Profile';
import './index.scss';

const SettingPage = () => {
	const [statusDropdown, setStatusDropdown] = useState(false);
	const [statusInputValue, setStatusInputValue] = useState('');

	const handleClickStatusDropdown = () => {
		const newStatusDropdown = !statusDropdown;
		setStatusDropdown(newStatusDropdown);
	};

	const handleSelectStatus = status => {
		setStatusInputValue(status);
		setStatusDropdown(false);
	};

	return (
		<div className='setting'>
			<Nav />
			<div className='setting-wrapper'>
				<Profile
					statusDropdown={statusDropdown}
					handleClickStatusDropdown={handleClickStatusDropdown}
					statusInputValue={statusInputValue}
					handleSelectStatus={handleSelectStatus}
				/>
			</div>
		</div>
	);
};

export default SettingPage;
