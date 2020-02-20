import React from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../assets/images/logo-narcos.svg';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

export default class Banner extends React.Component {
	render() {
		return (
			<div className='banner-container'>
				<div className='title-box'>
					<h3>Netflix</h3>
					<span>Original</span>
				</div>
				<div className='name'>
					<Logo />
					<h4>Regardex la saison 3 maintant</h4>
					<p>
						Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
						d’Escobar passent à l’action et déclarent la guerre au gouvernement.
					</p>
				</div>
				<div className='button-box'>
					<div className='lecture'>
						<Play /> Lecture
					</div>
					<div className='list'>
						<Plus /> My List
					</div>
				</div>
			</div>
		);
	}
}
