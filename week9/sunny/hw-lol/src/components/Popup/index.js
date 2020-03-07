import React from 'react';
import classnames from 'classnames';
import skinUrl from '../../constants/skinUrl';
import './index.css';

const Popup = ({ isPopupOpen, currentChampion, handleClosePop }) => {
	return (
		<div className={classnames('popup-wrapper', { active: isPopupOpen })}>
			<div className={classnames('popup', { active: isPopupOpen })}>
				{console.log(isPopupOpen)}
				<button onClick={handleClosePop}>
					<i class='fas fa-times-circle'></i>
				</button>
				<h3>{currentChampion.id}</h3>
				<img
					src={`${skinUrl}${currentChampion.id}_0.jpg`}
					alt={currentChampion.id}
				/>
			</div>
		</div>
	);
};

export default Popup;
