import React, { useState, useEffect } from 'react';
import Champion from '../../components/Champion';
import Popup from '../../components/Popup';
import ChampionServices from '../../services/champions';

import './index.css';

const HomePage = () => {
	const [champions, setChampions] = useState({});
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [currentChampion, setCurrentChampion] = useState({});

	useEffect(() => {
		const fetchDataForChampions = async () => {
			const champions = await ChampionServices.fetchAllChampions();
			setChampions(champions.data.data);
		};
		fetchDataForChampions();
	}, []);

	const handleChampionClick = championId => {
		const currentChampion = champions[championId];
		setCurrentChampion(currentChampion);
		setPopupOpen(true);
	};

	const handleClosePop = () => {
		setPopupOpen(false);
	};

	return (
		<div className='home'>
			<h1>LEAGUE OF LEGENDS</h1>
			<Popup
				isPopupOpen={isPopupOpen}
				currentChampion={currentChampion}
				handleClosePop={handleClosePop}
			/>
			<div className='champions-container'>
				{Object.entries(champions).map(champion => (
					<Champion data={champion} handleChampionClick={handleChampionClick} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
