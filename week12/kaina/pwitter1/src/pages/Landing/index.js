import React, { useState } from 'react';
import './index.scss';

import Signin from '../Login';
import Register from '../Register';

const LandingPage = () => {
	const [page, setPage] = useState(1);
	const [gender, setGender] = useState();

	const handleClickNextPage = n => {
		setPage(n);
	};
	const [dropDown, setDropDown] = useState(false);

	const handleClickDropdown = () => {
		setDropDown(!dropDown);
	};

	const handleClickGender = gender => {
		setGender(gender);
	};

	return (
		<div>
			<Signin handleClickNextPage={handleClickNextPage} page={page} />
			<Register
				page={page}
				handleClickNextPage={handleClickNextPage}
				dropDown={dropDown}
				handleClickDropdown={handleClickDropdown}
				handleClickGender={handleClickGender}
				gender={gender}
			/>
		</div>
	);
};

export default LandingPage;
