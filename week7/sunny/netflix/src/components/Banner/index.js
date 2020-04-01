import React from 'react';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as Narcos } from '../../assets/icons/logo-narcos.svg';
import './index.css';

export default function Banner() {
	return (
		<div className='background'>
			<div className='movie-info-container'>
				<div className='movie-description'>
					<p className='brand'>
						<b>NETFLIX</b> ORIGINALS
					</p>
					<div className='title'>
						<Narcos />
					</div>
					<p className='sub-title'>Regardez la saison 3 maintenant</p>
					<p className='description'>
						Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
						d’Escobar passent à l’action et déclarent la guerre au gouvernement.
					</p>
				</div>
				<div className='buttons'>
					<button>
						<PlayIcon /> Lecture
					</button>
					<button>
						<PlusIcon /> My List
					</button>
				</div>
				<p className='footer'>Revoir</p>
			</div>
		</div>
	);
}
