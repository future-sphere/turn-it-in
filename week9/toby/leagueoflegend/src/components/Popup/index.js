import React from 'react';
import classnames from 'classnames';
import skinUrl from '../../constants/skinUrl';

export default function Popup({
	isPop,
	chosenChampion,
	hidePopup,
	imgError,
	skinNumber,
	switchSkin,
}) {
	return (
		<div
			className={classnames('Popup', {
				isActive: isPop,
			})}>
			<button className={'Popup__button'} onClick={hidePopup}>
				Hide
			</button>
			<p>
				<h1>{chosenChampion.id}</h1>
				<h2>{chosenChampion.title}</h2>
				<div>{chosenChampion.blurb}</div>
			</p>
			<button className={'Popup__switch'} onClick={switchSkin}>
				Switch Skin
			</button>
			<img
				src={`${skinUrl}${chosenChampion.id}_${skinNumber}.jpg`}
				alt={`${chosenChampion.id}`}
				onError={imgError}
			/>
		</div>
	);
}
