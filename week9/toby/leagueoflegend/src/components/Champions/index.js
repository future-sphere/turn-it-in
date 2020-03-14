import React from 'react';
import ChampionService from '../../services/champions';
import skinUrl from '../../constants/skinUrl';

export default function Champion({ Champion, showPopup }) {
	return (
		<div onClick={() => showPopup(Champion.id)} className='champion'>
			<div>{Champion.id}</div>
			<p>{Champion.title}</p>
			<img src={`${skinUrl}${Champion.id}_0.jpg`} alt={`${Champion.id}skin`} />
		</div>
	);
}
