import React, { Component } from 'react';
import './index.scss';
class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footer__icons'>
					<i class='fab fa-facebook-square'></i>
					<i class='fab fa-instagram'></i>
					<i class='fab fa-twitter'></i>
					<i class='fab fa-youtube'></i>
				</div>
				<div className='footer__links'>
					<div>
						<a href=''>Audio et sous-titres</a>
						<a href=''>Presse</a>
						<a href=''>Confidentia</a>
						<a href=''>Nous contacter</a>
						<button>Service Code</button>
					</div>
					<div>
						<a href=''>Autodescription</a>
						<a href=''>Relations investisseurs</a>
						<a href=''>Informations légales</a>
					</div>
					<div>
						<a href=''>Centre d’aide</a>
						<a href=''>Recrutement</a>
						<a href=''>Préférences de cookies</a>
					</div>
					<div>
						<a href=''>Cartes cadeaux</a>
						<a href=''>Conditions d’utilisation</a>
						<a href=''>Mentions légales</a>
					</div>
				</div>
				<div className='copyrights'> © 1997-2018 Netflix, Inc. </div>
			</div>
		);
	}
}

export default Footer;
