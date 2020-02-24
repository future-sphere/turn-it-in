import React, { Component } from 'react';
import './index.scss';
import NavbarLogo from './Logo';
import Links from './Links';
import Searchbar from './SearchBar';
import AccountInfo from './AccountInfo';
import { ReactComponent as WanderingEarth } from '../../assets/images/crown.svg';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<div className='navbar__left'>
					<NavbarLogo />
					<Links />
				</div>
				<div className='navbar__right'>
					<Searchbar />
					<AccountInfo />
				</div>
			</div>
		);
	}
}

export default Navbar;
