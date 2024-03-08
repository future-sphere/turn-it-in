import React, { useState, useEffect } from 'react';
import './index.css';

import ChampionService from '../../services/champion';

import Champion from '../../components/Champion';
import Popup from '../../components/Popup';

const App = () => {
	const [champions, setChampions] = useState({});
	const [isPopupOpen, setPopupOpenState] = useState(false);
	const [currentChampion, setCurrentChampion] = useState([]);

	useEffect(() => {
		const fetchDataForChampion = async () => {
			const champions = await ChampionService.fetchAllChampion();
			setChampions(champions.data.data);
		};
		fetchDataForChampion();
	}, []);

	const handleCloseChampion = () => {
		setPopupOpenState(false);
	};

	const handleChampionClick = championId => {
		const currentChampion = champions[championId];
		setCurrentChampion(currentChampion);
		setPopupOpenState(true);
	};
	// componentDidMount = async () => {
	// 	const champions = await ChampionService.fetchAllChampion();
	// 	ChampionService.fetchAllChampion();
	// 	this.setState({
	// 		champions: champions.data.data,
	// 	});
	// };

	return (
		<div className='App'>
			<h1>League of Legends</h1>
			<Popup
				currentChampion={currentChampion}
				isPopupOpen={isPopupOpen}
				handleCloseChampion={handleCloseChampion}
			/>
			<div className='container'>
				{Object.entries(champions).map(wu => (
					<Champion handleChampionClick={handleChampionClick} data={wu} />
				))}
				,
			</div>
		</div>
	);
};
export default App;
