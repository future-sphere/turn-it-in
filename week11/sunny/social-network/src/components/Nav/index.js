import React, { useState, useRef, useEffect, useContext } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import icon from '../../images/Oval.jpg';
import { AppContext } from '../../context';
import './index.scss';

const Nav = () => {
	const { user } = useContext(AppContext);

	const [dropDown, setDropDown] = useState(false);
	const navDropdownElement = useRef(null);
	const navButtonElement = useRef(null);

	const handleClickDropDownOpen = () => {
		// const newDropDown = !dropDown;
		setDropDown(true);
	};

	const handleScreenClick = e => {
		if (
			navDropdownElement.current !== e.target &&
			navButtonElement.current !== e.target
		) {
			setDropDown(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleScreenClick);
	}, []);

	return (
		<nav>
			<div
				className={classnames('drop-down', { displayDropdown: dropDown })}
				useRef={navDropdownElement}>
				<ul>
					<li>
						<Link className='link' to={'/profile/profile'}>
							Profile
						</Link>
					</li>
					<li>
						<Link className='link' to={'/setting'}>
							Setting
						</Link>
					</li>
					<li>
						<Link className='link red' to={'/login'}>
							Log Out
						</Link>
					</li>
				</ul>
			</div>
			<div className='nav-left'>
				<img src={icon} alt='icon' />
				<span>|</span>
				<Link className='link' to={'/'}>
					Home
				</Link>
				<Link className='link' to={'/profile/friends'}>
					Friends
				</Link>
				<Link className='link' to={'/profile/status'}>
					Profile
				</Link>
			</div>
			<div className='nav-right'>
				<img src={user.avatar} alt='avatar' />
				<p onClick={() => handleClickDropDownOpen()} ref={navButtonElement}>
					{user.firstName} {user.lastName}
				</p>
			</div>
		</nav>
	);
};

export default Nav;
