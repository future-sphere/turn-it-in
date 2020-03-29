import React from 'react';
import classnames from 'classnames';
import skinUrl from '../../constants/skinUrl';
import './index.css';

const Popup = ({ isPopupOpen, currentChampion, handleCloseChampion }) => {
	return (
		<div
			className={classnames('popup', {
				active: isPopupOpen,
			})}>
			<img src={`${skinUrl}${currentChampion.id}_0.jpg`} alt='' />
			<button onClick={handleCloseChampion}>
				<i class='fas fa-sign-out-alt'></i>
			</button>
			<h3>{currentChampion.id}</h3>
			<h4>{currentChampion.title}</h4>
		</div>
	);
};

export default Popup;
