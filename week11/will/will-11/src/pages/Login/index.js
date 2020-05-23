import React, { useState, useEffect } from 'react';
import './index.scss';
import Signin from '../../components/Signin';
import Register from '../../components/Register';

const Login = () => {
	const [page, setPage] = useState(1);

	const switchLogin = p => {
		setPage(p);
	};

	return (
		<div className='login-wrapper'>
			<Signin page={page} switchLogin={switchLogin} />
			<Register page={page} switchLogin={switchLogin} />
		</div>
	);
};

export default Login;
