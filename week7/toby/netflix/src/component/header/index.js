import React, { Component } from 'react';
import './index.scss';
import Herobg from '../../assets/images/herobg.svg';
import Arrow from '../../assets/logos/play.svg';
import Plus from '../../assets/logos/plus.png';
import NarcosLogo from '../../assets/images/logo-narcos.svg';
class Header extends Component {
	render() {
		return (
			<div className='header'>
				<img
					className='header__background'
					src={Herobg}
					alt='hero background'
				/>
				<div className='header__text'>
					<h3>
						Netflix <span>Original</span>
					</h3>
					<img
						src={NarcosLogo}
						className='header__narcoslogo'
						alt='narcos logo'
					/>
					<h4>Regardez la saison 3 maintenant</h4>
					<p>
						Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
						d’Escobar passent à l’action et déclarent la guerre au gouvernement.
					</p>
					<div className='header__buttons'>
						<button>
							<img src={Arrow} alt='arrow' />
							Play
						</button>
						<button>
							<img src={Plus} alt='plus' />
							My List
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
