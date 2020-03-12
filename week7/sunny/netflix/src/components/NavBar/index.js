import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo-Netflix.svg';
import { ReactComponent as FaceIcon } from '../../assets/icons/face.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/caret-down-white.svg';
import './index.css';

export default class NavBar extends React.Component {
	state = {
		isDropdownActive: false,
	};
	dropdownClassNames = () => {
		if (this.state.isDropdownActive) {
			return 'menu active';
		}
		return 'menu';
	};
	handleDropdownActivate = () => {
		this.setState({ isDropdownActive: true });
	};
	handleDropdownDeactivate = () => {
		this.setState({ isDropdownActive: false });
	};
	render() {
		return (
			<nav>
				<div className='left-container'>
					<div className='logo'>
						<Logo />
					</div>
					<ul className='nav-menu'>
						<li className='active'>Home</li>
						<li>TV Shows</li>
						<li>Movies</li>
						<li>Programmes originaux</li>
						<li>Latest</li>
						<li>My List</li>
					</ul>
				</div>
				<div className='right-container'>
					<div className='search'>
						<i class='fas fa-search'></i>
					</div>
					<a href='#'>KIDS</a>
					<div className='notification'>
						<i class='fas fa-bell'></i>
						<span>2</span>
					</div>
					<div
						className='dropdown-menu'
						onMouseEnter={this.handleDropdownActivate}
						onMouseLeave={this.handleDropdownDeactivate}>
						<FaceIcon />
						<ArrowIcon />
						<div className={this.dropdownClassNames()}>
							<div className='accounts-container'>
								<div className='account'>
									<FaceIcon />
									<a href='#'>Share</a>
								</div>
								<div className='account'>
									<FaceIcon />
									<a href='#'>Sunny</a>
								</div>
								<div className='account'>
									<FaceIcon />
									<a href='#'>Kevin</a>
								</div>
								<a href='#'>Manage Profiles</a>
							</div>
							<div className='links'>
								<a href='#'>Account</a>
								<a href='#'>Help Center</a>
								<a href='#'>Sign out of Netflix</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
