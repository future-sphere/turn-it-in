import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChampionService from '../../services/champions';
import './index.css';
import skinUrl from '../../constants/skinUrl';

const InfoPage = () => {
	const [championName, setChampionName] = useState('');
	const [championData, setChampionData] = useState({});

	useEffect(() => {
		const addressArr = window.location.href.split('/'); //获取用户所在页面的地址信息, 用/来切分获取新的数据
		const championName = addressArr[addressArr.length - 1];
		setChampionName(championName);
	}, []); //[]--> 不需要监听任何state

	useEffect(() => {
		const fetchDataForChampion = async () => {
			const champion = await ChampionService.fetchChampionByName(championName);
			setChampionData(champion.data.data[championName]);
		};
		if (championName) fetchDataForChampion();
	}, [championName]);
	return (
		<div className='info-wrapper'>
			<Link className='link' to='/'>
				{'LEAGUE OF LEGENDS'}
			</Link>
			<div className='detail-container'>
				<h2>
					{championData.name} · <span>{championData.title}</span>
				</h2>

				<p>{championData.lore}</p>
				<div className='skins-container'>
					{championData.skins &&
						championData.skins.map(skin => (
							<img src={`${skinUrl}${championName}_${skin.num}.jpg`} />
						))}
				</div>
			</div>
		</div>
	);
};

export default InfoPage;
