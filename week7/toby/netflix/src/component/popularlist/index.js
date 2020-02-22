import React, { Component } from 'react';
import './index.scss';
import Crown from '../../assets/images/crown.svg';
import HouseCards from '../../assets/images/housecard.svg';
import Subbura from '../../assets/images/suburra.svg';
import BlackMirror from '../../assets/images/blackmirror.svg';
import Judentus from '../../assets/images/judentus.svg';
import DirtyMoney from '../../assets/images/dirtymoney.svg';
import WanderingEarth from '../../assets/images/wanderingearth.jpg';
import Readyplayer from '../../assets/images/readyplayer.jpg';
import Ultraman from '../../assets/images/2.jpg';
import Arrowright from '../../assets/logos/arrowright.svg';
class PopularList extends Component {
	render() {
		return (
			<div className='popularlist'>
				<h4>Revior</h4>
				<div className='popular__movies'>
					<img src={Crown} alt='crown' />
					<img src={HouseCards} alt='house of cards' />
					<img src={Subbura} alt='subbura' />
					<img src={BlackMirror} alt='black mirror' />
					<img src={Judentus} alt='judentus' />
					<img src={DirtyMoney} alt='dirty money' />
					<img src={WanderingEarth} alt='wandering earth' />
					<img src={Readyplayer} alt='' />
					<img src={Ultraman} alt='' />
				</div>
			</div>
		);
	}
}

export default PopularList;
