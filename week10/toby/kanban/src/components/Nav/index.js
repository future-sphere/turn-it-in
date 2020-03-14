import React from 'react';
import logo from '../../images/logo.jpg';
import avatar from '../../images/avatar.jpeg';

export default function Navbar() {
	return (
		<div className='navbar__container'>
			<i>
				<img src={logo} alt='' />
			</i>
			<div className='navbar__account'>
				<img src={avatar} alt='account avatar' />
				<h2>Toby</h2>
			</div>
		</div>
	);
}
