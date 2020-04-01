import './index.scss';
import { ReactComponent as MovieName } from '../../assets/icon/moviename.svg';
import BannerImg from '../../assets/img/banner.jpg';
import React from 'react';

export default function index() {
	return (
		<div className='banner-container'>
			<div className='black-top'></div>
			<div className='description-text-container'>
				<h4>
					<strong>NETFLIX</strong>ORIGINAL
				</h4>
				<div className='movie-name'>
					<MovieName />
				</div>
				<h5>Regardez la saison 3 maintenant</h5>
				<p>
					Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
					d’Escobar passent à l’action et déclarent la guerre au gouvernement.
				</p>
			</div>
			<div className='description-button-container'>
				<button>
					<i class='fas fa-caret-right'></i>Lecture
				</button>
				<button>
					<i class='fas fa-plus'></i>My List
				</button>
			</div>
		</div>
	);
}
