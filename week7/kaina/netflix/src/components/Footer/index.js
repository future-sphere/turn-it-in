import React from 'react';
import './index.scss';

export default class Movie extends React.Component {
	render() {
		return (
			<div className='footer-container'>
				<div className='social-media-icon'>
					<div className='facebook'>
						<i class='fab fa-facebook-square'></i>
					</div>
					<div className='instagram'>
						<i class='fab fa-instagram'></i>
					</div>
					<div className='twitter'>
						<i class='fab fa-twitter'></i>
					</div>
					<div className='youtube'>
						<i class='fab fa-youtube'></i>
					</div>
				</div>
				<div className='text-container'>
					<div className='list'>
						<a href='#'>Audio et sous-titres</a>
						<a href='#'>Press</a>
						<a href='#'>Confidentialite</a>
						<a href='#'>Nous contacter</a>
					</div>
					<div className='list'>
						<a href='#'>Autodescription</a>
						<a href='#'>Relations investisseus</a>
						<a href='#'>Informations legales</a>
					</div>
					<div className='list'>
						<a href='#'>Centre d'aide</a>
						<a href='#'>Recrutement</a>
						<a href='#'>Preferences de cookies</a>
					</div>
					<div className='list'>
						<a href='#'>Cartes cadeaux</a>
						<a href='#'>Conditions d'utilisation</a>
						<a href='#'>Mentions legales</a>
					</div>
				</div>
				<div className='service'>
					<p>Service Code</p>
				</div>
				<div className='copy-right'>
					<p> © 1997-2018 Netflix, Inc.</p>
				</div>
			</div>
		);
	}
}
