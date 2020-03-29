import React, { Component } from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../assets/icon/logo-Netflix.svg';
import { ReactComponent as Profile } from '../../assets/icon/profile.svg';

export default class index extends Component {
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<div className='left-container'>
						<div className='logo'>
							<Logo />
						</div>
						<ul>
							<li>Découverte</li>
							<li>Séries TV</li>
							<li>Films</li>
							<li>Programmes originaux</li>
							<li>Ajouts récents</li>
							<li>Ma liste</li>
						</ul>
					</div>
					<div className='right-container'>
						<div className='search-container'>
							<i class='fas fa-search'></i>
							<p>Will Wu</p>
						</div>
						<div className='notification'>
							<i class='fas fa-bell'></i>
							<span>2</span>
						</div>
						<div className='dropdown-container'>
							<div className='profile'>
								<Profile />
							</div>
							<div className='caret'>
								<i class='fas fa-caret-down'></i>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
