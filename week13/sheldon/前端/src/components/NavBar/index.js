import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import logo from '../../images/logo.svg';
import icon from '../../images/homepageicon.svg';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { handleSignout } from '../../helper/token';

const NavBar = ({ displayBox, user }) => {
	const [dropDown, setDropDown] = useState(false);
	const navDropDownElement = useRef(null);
	const navButtonElement = useRef(null);

	const handleDropClick = e => {
		if (
			navButtonElement.current !== e.target &&
			navDropDownElement.current !== e.target
		) {
			setDropDown(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleDropClick);
	}, []);

	const handleDropDown = () => {
		const newDropdown = !dropDown;
		setDropDown(newDropdown);
	};

	return (
		<div className='nav-container'>
			<div className='nav-list-wraper'>
				<img src={logo} alt='' />
				<ul>
					<li>
						<Link to={`/home`}>Home</Link>
					</li>
					<li>
						<Link to={`/profile/friends/${user._id}`}>Friends</Link>
					</li>
					<li>
						<Link to={`/profile/status/${user._id}`}>Profile</Link>
					</li>
				</ul>
			</div>

			<div
				ref={navButtonElement}
				onClick={() => handleDropDown()}
				className='nav-content-wraper'>
				<img ref={navButtonElement} src={user.avatar} alt='' />
				<div ref={navButtonElement} className='nav-user-name'>
					{user.firstName} {user.lastName}
				</div>
			</div>
			<div
				ref={navDropDownElement}
				className={classnames('nav-drop-down', { displaydropdown: dropDown })}>
				<div className='nav-toprofile'>
					<Link to={`/profile/status/${user._id}`}>Profile</Link>
				</div>
				<div className='nav-tosetting'>
					<Link to='/setting'>Setting</Link>
				</div>
				<div className='nav-logoout'>
					<Link onClick={handleSignout} to={`/`}>
						Log Out
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
