import './index.scss';
import { ReactComponent as Polonais } from '../../assets/icon/polonais.svg';
import Polonaismovie1 from '../../assets/img/polonaismovie1.png';
import Polonaismovie2 from '../../assets/img/polonaismovie2.png';
import Polonaismovie3 from '../../assets/img/polonaismovie3.png';
import { ReactComponent as Play } from '../../assets/icon/play.svg';
import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className='container'>
				<div className='polonais-block'>
					<div className='polonais-title'>
						<Polonais />
					</div>
					<h5>Netflix Découverte - Juillet 2018</h5>
					<p>
						Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
						Découvrez ceux qui ont fait connaitre le cinéma polonais sur la
						scène internationale.
					</p>
				</div>
				<div className='movielist-container'>
					<div className='movielist-block'>
						<img src={Polonaismovie1} alt='pic' />
						<Play />
						<div className='movielist-text'>
							<h5>Ida</h5>
							<p>2013 ‧ Drame ‧ 1h 22m</p>
							<h4>L’âge d’or du cinéma polonais (juillet 2018)</h4>
						</div>
					</div>
					<div className='movielist-block'>
						<img src={Polonaismovie2} alt='pic' />
						<Play />
						<div className='movielist-text'>
							<h5>Ils aimaient la vie</h5>
							<p>1957 ‧ Drame ‧ 1h 35m</p>
							<h4>La nouvelle vague française (juin 2018)</h4>
						</div>
					</div>
					<div className='movielist-block'>
						<img src={Polonaismovie3} alt='pic' />
						<Play />
						<div className='movielist-text'>
							<h5>Cold War</h5>
							<p>2018 ‧ Drame/Mélodrame ‧ 1h 25m</p>
							<h4>Direction Cannes (mai 2018)</h4>
						</div>
					</div>
					<div className='movielist-block'>
						<img src={Polonaismovie1} alt='pic' />
						<Play />
						<div className='movielist-text'>
							<h5>Ida</h5>
							<p>2013 ‧ Drame ‧ 1h 22m</p>
							<h4>L’âge d’or du cinéma polonais (juillet 2018)</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
