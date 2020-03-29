import React from 'react';
import './index.scss';

export default function index() {
	return (
		<footer>
			<div className='icon-container'>
				<i class='fab fa-facebook-square'></i>
				<i class='fab fa-instagram'></i>
				<i class='fab fa-twitter'></i>
				<i class='fab fa-youtube'></i>
			</div>
			<div className='link-container'>
				<div className='link'>Audio et sous-titres</div>
				<div className='link'>Autodescription</div>
				<div className='link'>Centre d’aide</div>
				<div className='link'>Cartes cadeaux</div>
				<div className='link'>Presse</div>
				<div className='link'>Relations investisseurs</div>
				<div className='link'>Recrutement</div>
				<div className='link'>Conditions d’utilisation</div>
				<div className='link'>Confidentialité</div>
				<div className='link'>Informations légales</div>
				<div className='link'>Préférences de cookies</div>
				<div className='link'>Mentions légales</div>
				<div className='link'>Nous contacter</div>
			</div>
			<div className='info-container'>
				<button>Service Code</button>
				<p> © 1997-2018 Netflix, Inc. </p>
			</div>
		</footer>
	);
}
