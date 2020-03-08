import React, { Component } from 'react';
import './index.scss';
import Subbackground from '../../assets/images/poland.svg';
import PolonaisLogo from '../../assets/images/polonais.svg';
import Ida from '../../assets/images/ida.svg';
import Kanal from '../../assets/images/bg-kanal.svg';
import ColdWar from '../../assets/images/bg-coldwar.svg';
import Movie1 from '../../assets/images/1-1.jpg';
import Movie2 from '../../assets/images/1-2.jpg';
import Movie3 from '../../assets/images/1-3.jpg';
import Arrow from '../../assets/logos/redtriangle.svg';

class Subheader extends Component {
	render() {
		return (
			<div className='subheader'>
				<img
					className='subheader__background'
					src={Subbackground}
					alt='poland background'
				/>
				<div className='subheader__text'>
					<img className='subheader__logo' src={PolonaisLogo} alt='' />
					<h4>Netflix Découverte - Juillet 2018</h4>
					<p>
						Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
						Découvrez ceux qui ont fait connaitre le cinéma polonais sur la
						scène internationale.
					</p>
				</div>
				<div className='subheader__scroll'>
					<div className='subheader__scroll__movies'>
						<div className='scroll__movies__play'>
							<img src={Ida} alt='Ida' />
							<div className='movies__play'>
								<img className='play__arrow' src={Arrow} alt='' />
							</div>
							<div className='movies__name'>
								Ida <div>2013 ‧ Drame ‧ 1h 22m</div>
							</div>
						</div>
						<p>L’âge d’or du cinéma polonais (juillet 2018)</p>
					</div>
					<div className='subheader__scroll__movies'>
						<div className='scroll__movies__play'>
							<img src={Kanal} alt='Ida' />
							<div className='movies__play'>
								<img className='play__arrow' src={Arrow} alt='' />
							</div>
							<div className='movies__name'>
								Ils aimaient la vie <div>1957 ‧ Drame ‧ 1h 35m</div>
							</div>
						</div>
						<p>La nouvelle vague française (juin 2018)</p>
					</div>
					<div className='subheader__scroll__movies'>
						<div className='scroll__movies__play'>
							<img src={ColdWar} alt='Ida' />
							<div className='movies__play'>
								<img className='play__arrow' src={Arrow} alt='' />
							</div>
							<div className='movies__name'>
								Cold War <div>2018 ‧ Drame/Mélodrame ‧ 1h 25m</div>
							</div>
						</div>
						<p>Direction Cannes (mai 2018)</p>
					</div>
					<div className='subheader__scroll__movies'>
						<div className='scroll__movies__play'>
							<img src={Movie1} alt='Ida' />
							<div className='movies__play'>
								<img className='play__arrow' src={Arrow} alt='' />
							</div>
							<div className='movies__name'>
								Ida <div>2013 ‧ Drame ‧ 1h 22m</div>
							</div>
						</div>
						<p>La nouvelle vague française (juin 2018)</p>
					</div>
					<div className='subheader__scroll__movies'>
						<div className='scroll__movies__play'>
							<img src={Movie2} alt='Ida' />
							<div className='movies__play'>
								<img className='play__arrow' src={Arrow} alt='' />
							</div>
							<div className='movies__name'>
								Ida <div>2013 ‧ Drame ‧ 1h 22m</div>
							</div>
						</div>
						<p>La nouvelle vague française (juin 2018)</p>
					</div>
					<div className='subheader__scroll__movies'>
						<div className='scroll__movies__play'>
							<img src={Movie3} alt='Ida' />
							<div className='movies__play'>
								<img className='play__arrow' src={Arrow} alt='' />
							</div>
							<div className='movies__name'>
								Ida <div>2013 ‧ Drame ‧ 1h 22m</div>
							</div>
						</div>
						<p>La nouvelle vague française (juin 2018)</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Subheader;
