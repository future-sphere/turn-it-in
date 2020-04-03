import React from 'react';
import classnames from 'classnames';
import './index.scss';
import { Link } from 'react-router-dom';

const Verification = ({ handleDisplayCode, displayCode }) => {
	return (
		<div
			className={classnames('verification-container', {
				active: displayCode === 2,
				//2就是代表他妈的verification
			})}>
			<div className='big-title'>Switter</div>
			<div className='verification-wraper'>
				<div className='small-title'>phone number verification</div>
				<div className='verification-send-number'>
					<input placeholder='Enter your phone number' type='text' />
					<button>sned</button>
				</div>
				<input type='text' placeholder='Enter your verification code' />

				<button className='bf-blue-button'>register</button>
			</div>
		</div>
	);
};

export default Verification;
