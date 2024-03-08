import React, { useEffect, useState } from 'react';
import ChampionServices from '../../services/champion';
import './index.css';
import skinUrl from '../../constants/skinUrl';
import { Link } from 'react-router-dom';

export default function ChampionPage() {
	const [championName, setChampionName] = useState('');
	const [championData, setChampionData] = useState({});

	useEffect(() => {
		const addressArr = window.location.href.split('/');
		const championName = addressArr[addressArr.length - 1];
		setChampionName(championName);
	}, []);

	useEffect(() => {
		const fetchDataForChampion = async () => {
			const champion = await ChampionServices.fetchChampionByName(championName);
			setChampionData(champion.data.data[championName]);
		};
		if (championName) fetchDataForChampion();
	}, [championName]);

	return (
		<div className='champion-wrapper'>
			<h2>
				<Link to='/'> {championData.name}</Link>
			</h2>
			<h3>
				<i class='fas fa-pencil-alt'></i> {championData.title}
			</h3>
			<p>{championData.lore} </p>
			<div className='skins-container'>
				{championData.skins && //&&  如果前面是true 就执行后面的
					championData.skins.map(skin => (
						<img src={`${skinUrl}${championName}_${skin.num}.jpg `} />
					))}
			</div>
		</div>
	);
}
