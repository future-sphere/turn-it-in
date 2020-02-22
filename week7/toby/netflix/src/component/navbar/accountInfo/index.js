import React, { Component } from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../../assets/logos/profilephoto.svg';
import { ReactComponent as Arrow } from '../../../assets/logos/arrowdown.svg';
class AccountInfo extends Component {
	render() {
		return (
			<div className='right__account'>
				<div className='account__name'>TobyZhao</div>
				<div className='notification'>
					<i class='fas fa-bell'></i>
					<span>2</span>
				</div>
				<div className='dropdown__menu'>
					<Logo />
					<Arrow />
				</div>
			</div>
		);
	}
}

export default AccountInfo;
