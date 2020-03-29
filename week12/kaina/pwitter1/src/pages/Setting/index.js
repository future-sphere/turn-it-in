import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import Profile from '../../component/Profile';

import './index.scss';

const SettingPage = () => {
	return (
		<div className='setting-wrapper'>
			<Navbar />
			<Profile />
		</div>
	);
};

export default SettingPage;
