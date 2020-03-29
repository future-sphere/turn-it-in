import React, { useRef, useState, useEffect, useContext } from 'react';
import './index.scss';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { AppContext } from '../../context';

const Nav = () => {
	const [dropDown, setDropDown] = useState(false);
	const dropElement = useRef(null);
	const buttonElement = useRef(null);
	const { user } = useContext(AppContext);

	const handleClickDropdown = () => {
		setDropDown(!dropDown);
	};

	const handleNavClick = e => {
		if (
			dropElement.current !== e.target &&
			buttonElement.current !== e.target
		) {
			setDropDown(false);
		}
	};
	//------------------------useRef----------------------
	useEffect(() => {
		window.addEventListener('click', handleNavClick);
		return () => {
			window.removeEventListener('click', handleNavClick);
		};
	}, []);

	return (
		<div className='nav-wrapper'>
			<div className='nav-container'>
				<div className='tab-container'>
					<img src={require('../../assets/logo/Oval.png')} alt='logo' />
					<Link to={`/`}> Home</Link>
					<Link to={`/profile/friend`}>Friends</Link>
					<Link to={`/profile/profile`}>Profile</Link>
				</div>
				<div
					ref={buttonElement}
					onClick={handleClickDropdown}
					className='name-box'>
					<img src={user.avatar} alt='avatar' />
					<p>
						{user.firstName} {user.lastName}
					</p>
				</div>
			</div>
			<div
				ref={dropElement}
				className={classnames('nav-drop', { off: dropDown == false })}>
				<Link to={`/Profile`}>Profile</Link>
				<Link to={`/Setting`}>Setting</Link>
				<Link to={`/login`}>Log out</Link>
			</div>
		</div>
	);
};

export default Nav;
