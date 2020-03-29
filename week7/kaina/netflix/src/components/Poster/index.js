import React from 'react';
import './index.scss';
import Marseille from '../../assets/images/poster1.png';
import Stranger from '../../assets/images/poster2.png';
import SecretCity from '../../assets/images/poster3.png';
import Cuba from '../../assets/images/poster4.png';
import Soupcons from '../../assets/images/poster5.png';
import Lalieniste from '../../assets/images/poster6.png';

export default class Poster extends React.Component {
	render() {
		return (
			<div className='poster-container'>
				<div className='poster-box'>
					<h3>PROGRAMMES ORIGINAUX NETFLIX</h3>
					<div className='image-box'>
						<img src={Marseille} alt='image' />
						<img src={Stranger} alt='image' />
						<img src={SecretCity} alt='image' />
						<img src={Cuba} alt='image' />
						<img src={Soupcons} alt='image' />
						<img src={Lalieniste} alt='image' />
						<img src={Marseille} alt='image' />
						<img src={Stranger} alt='image' />
						<img src={SecretCity} alt='image' />
						<img src={Cuba} alt='image' />
						<img src={Soupcons} alt='image' />
						<img src={Lalieniste} alt='image' />
					</div>
				</div>
			</div>
		);
	}
}
