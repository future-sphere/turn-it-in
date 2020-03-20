import './index.scss';
import MovieListRevoir1 from '../../assets/img/1-01.jpg';
import MovieListRevoir2 from '../../assets/img/1-02@2x.jpg';
import MovieListRevoir3 from '../../assets/img/1-03@2x.jpg';
import MovieListRevoir4 from '../../assets/img/1-04@2x.jpg';
import MovieListRevoir5 from '../../assets/img/1-05@2x.jpg';
import MovieListRevoir6 from '../../assets/img/1-06@2x.jpg';
import MovieListActuelles1 from '../../assets/img/movie11.png';
import MovieListActuelles2 from '../../assets/img/movie22.png';
import MovieListActuelles3 from '../../assets/img/movie33.png';
import MovieListActuelles4 from '../../assets/img/movie44.png';
import MovieListActuelles5 from '../../assets/img/movie55.png';
import MovieListActuelles6 from '../../assets/img/movie66.png';
import MovieListActuelles7 from '../../assets/img/movie77.png';

import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className='movie-list-wrapper'>
				<p>Revoir</p>
				<div className='movie-list-container'>
					<div className='movie-list-block'>
						<img src={MovieListRevoir1} alt='pic' />
						<img src={MovieListRevoir2} alt='pic' />
						<img src={MovieListRevoir3} alt='pic' />
						<img src={MovieListRevoir4} alt='pic' />
						<img src={MovieListRevoir5} alt='pic' />
						<img src={MovieListRevoir6} alt='pic' />
						<img src={MovieListRevoir1} alt='pic' />
						<img src={MovieListRevoir2} alt='pic' />
						<img src={MovieListRevoir3} alt='pic' />
						<img src={MovieListRevoir4} alt='pic' />
					</div>
				</div>
				<p>Tendances actuelles</p>
				<div className='movie-list-container'>
					<div className='movie-list-block'>
						<img src={MovieListActuelles1} alt='pic' />
						<img src={MovieListActuelles2} alt='pic' />
						<img src={MovieListActuelles3} alt='pic' />
						<img src={MovieListActuelles4} alt='pic' />
						<img src={MovieListActuelles5} alt='pic' />
						<img src={MovieListActuelles6} alt='pic' />
						<img src={MovieListActuelles7} alt='pic' />
						<img src={MovieListActuelles1} alt='pic' />
						<img src={MovieListActuelles2} alt='pic' />
						<img src={MovieListActuelles3} alt='pic' />
					</div>
				</div>
			</div>
		);
	}
}
