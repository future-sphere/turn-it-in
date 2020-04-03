import React, { useState } from 'react';
import Register from '../../components/RegisterBox';
import SignIn from '../../components/SignInBox';
import Verification from '../../components/VerificationBox';
import './index.scss';
import { findAllByDisplayValue } from '@testing-library/react';

const LogInPage = () => {
	const [displayCode, setDisplayCode] = useState(3);
	const handleDisplayCode = item => {
		setDisplayCode(item);
	};

	return (
		<div className='loginpage-container'>
			<Register
				handleDisplayCode={handleDisplayCode}
				displayCode={displayCode}
			/>
			<SignIn handleDisplayCode={handleDisplayCode} displayCode={displayCode} />
			<Verification
				handleDisplayCode={handleDisplayCode}
				displayCode={displayCode}
			/>
		</div>
	);
};

export default LogInPage;
