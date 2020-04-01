import React from 'react';
import './index.scss';
import { ReactComponent as Polonais } from '../../assets/icons/Polonais.svg';
import { ReactComponent as Play } from '../../assets/icons/ic-play.svg';
import ida from '../../assets/images/bg-ida.png';
import kanal from '../../assets/images/bg-kanal.png';
import coldwar from '../../assets/images/bg-coldwar.png';

export default class Movie extends React.Component {
	render() {
		return (
			<div className='trailer-container'>
				<div className='bg-image'></div>
				<div className='content'>
					<div className='name'>
						<Polonais />
					</div>
					<h4>Netflix Decouverte - Juillet 2018</h4>
					<p>
						Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
						Découvrez ceux qui ont fait connaitre le cinéma polonais sur la
						scène internationale.
					</p>
				</div>
				<div className='trailer-list'>
					<div className='list'>
						<img src={ida} alt='image' />
						<Play />
						<div className='description'>
							<h4>Ida</h4>
							<p>2013 ‧ Drame ‧ 1h 22m</p>
							<h3 className='active'>
								L’âge d’or du cinéma polonais (juillet 2018)
							</h3>
						</div>
					</div>
					<div className='list'>
						<img src={kanal} alt='image' />
						<Play />
						<div className='description'>
							<h4>Ils aimaient la vie</h4>
							<p>1957 ‧ Drame ‧ 1h 22m</p>
							<h3>La nouvelle vague française (juin 2018)</h3>
						</div>
					</div>
					<div className='list'>
						<img src={coldwar} alt='image' />
						<Play />
						<div className='description'>
							<h4>Cold War</h4>
							<p>2018 ‧ Drame/Mélodra‧ 1h 25m</p>
							<h3>Direction Cannes (mai 2018)</h3>
						</div>
					</div>
					<div className='list'>
						<img src={ida} alt='image' />
						<Play />
						<div className='description'>
							<h4>Ida</h4>
							<p>2013 ‧ Drame ‧ 1h 22</p>
							<h3>Direction Cannes (mai 2018)</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
