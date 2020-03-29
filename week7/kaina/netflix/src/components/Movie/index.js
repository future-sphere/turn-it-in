import React from 'react';
import './index.scss';
import Crown from '../../assets/images/Crown.png';
import HouseCard from '../../assets/images/HouseCard.png';
import Suburra from '../../assets/images/Suburra.png';
import BlackMirror from '../../assets/images/BlackMirror.png';
import Club from '../../assets/images/Club.png';
import DirtyMoney from '../../assets/images/DirtyMoney.png';
import Narcos from '../../assets/images/Narcos.png';
import Lart from '../../assets/images/Lart.png';
import Fauda from '../../assets/images/Fauda.png';
import Ugly from '../../assets/images/Ugly.png';
import Agent from '../../assets/images/Agent.png';
import Reason from '../../assets/images/Reasons.png';

export default class Movie extends React.Component {
	render() {
		return (
			<div className='movie-container'>
				<div className='movie-box'>
					<h3>Revoir</h3>
					<div className='image-box'>
						<img src={Crown} alt='image' />
						<img src={HouseCard} alt='image' />
						<img src={Suburra} alt='image' />
						<img src={BlackMirror} alt='image' />
						<img src={Club} alt='image' />
						<img src={DirtyMoney} alt='image' />
						<img src={Crown} alt='image' />
						<img src={HouseCard} alt='image' />
						<img src={Suburra} alt='image' />
						<img src={BlackMirror} alt='image' />
						<img src={Club} alt='image' />
						<img src={DirtyMoney} alt='image' />
					</div>
				</div>
				<div className='movie-box'>
					<h3>Tendances actuelles</h3>
					<div className='image-box'>
						<img src={Narcos} alt='image' />
						<img src={Lart} alt='image' />
						<img src={Fauda} alt='image' />
						<img src={Ugly} alt='image' />
						<img src={Agent} alt='image' />
						<img src={Reason} alt='image' />
						<img src={Narcos} alt='image' />
						<img src={Lart} alt='image' />
						<img src={Fauda} alt='image' />
						<img src={Ugly} alt='image' />
						<img src={Agent} alt='image' />
						<img src={Reason} alt='image' />
					</div>
				</div>
			</div>
		);
	}
}
