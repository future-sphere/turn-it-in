import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo-Netflix.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/usericon.svg';
import { ReactComponent as CaretDown } from '../../assets/icons/caretdown.svg';
import './index.scss';

export default class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<div className='nav-container'>
					<div className='nav-left-container'>
						<div className='logo'>
							<Logo />
						</div>
						<ul>
							<li className='active'>Discovery</li>
							<li>Series TV</li>
							<li>Programmes Originaux</li>
							<li>Ajouts recents</li>
							<li>My List</li>
						</ul>
					</div>
					<div className='nav-right-container'>
						<div className='search-bar'>
							<i class='fas fa-search'></i>
						</div>
						<div className='user'>Kids</div>
						<div className='notification'>
							<i class='fas fa-bell'></i>
							<span>2</span>
						</div>
						<div className='menu-bar'>
							<UserIcon />
							<CaretDown />
							<div className='dropDownMenu'>
								<div className='nav-account'></div>
								<div className='nav-link'></div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
