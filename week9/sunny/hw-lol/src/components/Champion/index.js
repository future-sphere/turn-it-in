import React from 'react';
import { Link } from 'react-router-dom';
import skinUrl from '../../constants/skinUrl';
import './index.css';

const Champion = ({ data, handleChampionClick }) => {
	return (
		<div onClick={() => handleChampionClick(data[1].id)} className='champion'>
			<h3>{data[1].id}</h3>
			<p>{data[1].title}</p>
			<img src={`${skinUrl}${data[1].id}_0.jpg`} alt={data[1].id} />
			<Link className='champion-link' to={`/info/${data[1].id}`}>
				{' · · · '}
			</Link>
		</div>
	);
};

export default Champion;
