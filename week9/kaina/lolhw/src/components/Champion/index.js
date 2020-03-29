import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import skinUrl from '../../constants/skinUrl';

const Champion = ({ data, handleChampionClick }) => {
	return (
		<div className='champion'>
			<h3>{data[1].id} </h3>
			<h5>{data[1].title} </h5>
			<img
				onClick={() => handleChampionClick(data[1].id)}
				src={`${skinUrl}${data[1].id}_0.jpg`}
				alt={data[1].id}
			/>
			<button>
				<Link to={`/champion/${data[1].id}`}> More info...</Link>
			</button>
		</div>
	);
};

export default Champion;
