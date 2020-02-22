import React, { Component } from 'react';
import './index.scss';
import Arrowright from '../../assets/logos/arrowright.svg';
import Origin1 from '../../assets/images/origin-1.svg';
import Origin2 from '../../assets/images/origin-2.svg';
import Origin3 from '../../assets/images/origin-3.svg';
import Origin4 from '../../assets/images/origin-4.svg';
import Origin5 from '../../assets/images/origin-5.svg';
import Origin6 from '../../assets/images/origin-6.svg';
import Origin7 from '../../assets/images/wanderingflyer.jpg';
class NetflixOrigin extends Component {
	render() {
		return (
			<div className='netflix__origin'>
				<p>
					PROGRAMMES ORIGINAUX NETFLIX <img src={Arrowright} alt='arrow' />
				</p>
				<div className='origin__lists'>
					<img src={Origin1} alt='picture' />
					<img src={Origin2} alt='picture' />
					<img src={Origin3} alt='picture' />
					<img src={Origin4} alt='picture' />
					<img src={Origin5} alt='picture' />
					<img src={Origin6} alt='picture' />
					<img src={Origin7} alt='picture' />
				</div>
			</div>
		);
	}
}

export default NetflixOrigin;
