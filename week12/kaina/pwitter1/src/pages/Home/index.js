import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import HomeContent from '../../component/HomeContent';

const HomePage = ({ dropDown, handleClickDropdown }) => {
	return (
		<div>
			<Navbar dropDown={dropDown} handleClickDropdown={handleClickDropdown} />
			<HomeContent
				dropDown={dropDown}
				handleClickDropdown={handleClickDropdown}
			/>
		</div>
	);
};

export default HomePage;
