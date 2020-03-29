import React from 'react';
import MovieLogo from '../../assets/icons/logo-age-polonais@2x.png';
import { ReactComponent as PlayIcon } from '../../assets/icons/Triangle 1.svg';
import './index.css';

export default function MovieTrailer() {
	return (
		<div className='movie-trailer'>
			<div className='trailer-background'>
				<div className='background-layer'>
					<div className='trailer-info'>
						<img src={MovieLogo} />
						<h5>Netflix Découverte - Juillet 2018</h5>
						<p>
							Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł
							Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma
							polonais sur la scène internationale.
						</p>
					</div>
				</div>
			</div>
			<div className='trailer-list'>
				<div className='trailer-loop'>
					<div className='video-container'>
						<div className='video ida'>
							<div className='circle'>
								<PlayIcon />
							</div>
							<h5>Ida</h5>
							<p>2013 ‧ Drame ‧ 1h 22m</p>
						</div>
						<p>L’âge d’or du cinéma polonais (juillet 2018)</p>
					</div>
					<div className='video-container'>
						<div className='video lls'>
							<div className='circle'>
								<PlayIcon />
							</div>
							<h5>Ils aimaient la vie</h5>
							<p>1957 ‧ Drame ‧ 1h 35m</p>
						</div>
						<p>La nouvelle vague française (juin 2018)</p>
					</div>
					<div className='video-container'>
						<div className='video cold-war'>
							<div className='circle'>
								<PlayIcon />
							</div>
							<h5>Cold War</h5>
							<p>2018 ‧ Drame/Mélodrame ‧ 1h 25m</p>
						</div>
						<p>Direction Cannes (mai 2018)</p>
					</div>
					<div className='video-container'>
						<div className='video ida'>
							<div className='circle'>
								<PlayIcon />
							</div>
							<h5>Ida</h5>
							<p>2013 ‧ Drame ‧ 1h 22m</p>
						</div>
						<p>L’âge d’or du cinéma polonais (juillet 2018)</p>
					</div>
					<div className='video-container'>
						<div className='video lls'>
							<div className='circle'>
								<PlayIcon />
							</div>
							<h5>Ils aimaient la vie</h5>
							<p>1957 ‧ Drame ‧ 1h 35m</p>
						</div>
						<p>La nouvelle vague française (juin 2018)</p>
					</div>
				</div>
			</div>
		</div>
	);
}
