import axios from 'axios';

const fetchAllChampion = () => {
	return axios.get(
		'http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json',
	);
};

const fetchChampionByName = name => {
	return axios.get(
		`http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion/${name}.json`,
	);
};

const ChampionService = {
	fetchAllChampion,
	fetchChampionByName,
};
export default ChampionService;
