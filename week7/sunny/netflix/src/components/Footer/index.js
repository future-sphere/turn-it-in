import React from 'react';
import './index.css';

export default function Footer() {
	return (
		<footer>
			<div className='footer-icon'>
				<i class='fab fa-facebook-square'></i>
				<i class='fab fa-instagram'></i>
				<i class='fab fa-twitter'></i>
				<i class='fab fa-youtube'></i>
			</div>
			<div className='footer-source'>
				<div className='source'>
					<a href='#'>Audio et sous-titres</a>
					<a href='#'>Presse</a>
					<a href='#'>Confidentialité</a>
					<a href='#'>Nous contacter</a>
				</div>
				<div className='source'>
					<a href='#'>Autodescription</a>
					<a href='#'>Relations investisseurs</a>
					<a href='#'>Informations légales</a>
				</div>
				<div className='source'>
					<a href='#'>Centre d’aide</a>
					<a href='#'>Recrutement</a>
					<a href='#'>Préférences de cookies</a>
				</div>
				<div className='source'>
					<a href='#'>Cartes cadeaux</a>
					<a href='#'>Conditions d’utilisation</a>
					<a href='#'>Mentions légales</a>
				</div>
			</div>
			<div className='footer-right'>
				<div className='footer-service'>
					<p>Service Code</p>
				</div>
				<p className='copy-right'> © 1997-2018 Netflix, Inc. </p>
			</div>
		</footer>
	);
}
