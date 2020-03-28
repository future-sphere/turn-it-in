import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import classnames from 'classnames';
import { AppContext } from '../../context';

const Navbar = () => {
	const { user, userId } = useContext(AppContext);
	const [dropDown, setDropDown] = useState(false);
	const dropElement = useRef(null);
	const buttonElement = useRef(null);

	useEffect(() => {
		window.addEventListener('click', handleNavClick);
		return () => {
			window.removeEventListener('click', handleNavClick);
		};
	}, []);

	const handleDropDown = () => {
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

	const handleLogOut = () => {
		window.localStorage.setItem('token', '');
		window.localStorage.setItem('userId', '');
		// window.location.reload();
	};

	return (
		<nav>
			<div className='nav-wrapper'>
				<div className='nav-left-container'>
					<img
						src='https://cdn.vox-cdn.com/thumbor/IhPPB4MaJS7mBxzhPY7lfIM65M0=/0x0:1980x1320/1200x800/filters:focal(832x502:1148x818)/cdn.vox-cdn.com/uploads/chorus_image/image/65613211/microsoftedgenewlogo.5.jpg'
						alt='logo'
					/>
					<ul>
						<Link to={`/home/`}>
							<li className='nav-home'>Home</li>
						</Link>
						<Link to={`/${userId}/friends/`}>
							<li className='nav-friends'>Friends</li>
						</Link>
						<Link to={`/${userId}/profile/`}>
							<li className='nav-profile'>Profile</li>
						</Link>
					</ul>
				</div>
				<div
					ref={buttonElement}
					onClick={handleDropDown}
					className='nav-right-container'>
					<img src={user.avatar} alt='pic' />
					<p>{`${user.firstName} ${user.lastName}`}</p>
				</div>
			</div>
			<div
				ref={dropElement}
				className={classnames('nav-dropdown-container', {
					navClose: !dropDown,
				})}>
				<Link to={`/${userId}/profile/`}>
					<h5>Profile</h5>
				</Link>
				<Link to={`/${userId}/profile/setting`}>
					<h5>Setting</h5>
				</Link>
				<Link to={`/`}>
					<p onClick={() => handleLogOut()}>Log Out</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
