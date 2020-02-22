import React, { Component } from 'react';
import './index.scss';
import Crown from '../../assets/images/narcos.svg';
import HouseCards from '../../assets/images/design.svg';
import Subbura from '../../assets/images/fauda.svg';
import BlackMirror from '../../assets/images/uglydeliscous.svg';
import Judentus from '../../assets/images/agents.svg';
import DirtyMoney from '../../assets/images/reasonswhy.svg';
import WanderingEarth from '../../assets/images/blackhole.jpg';
import Ultraman from '../../assets/images/3.jpeg';
import Sevenultraman from '../../assets/images/4.jpg';
import Arrowright from '../../assets/logos/arrowright.svg';
class TrendingList extends Component {
	render() {
		return (
			<div className='popularlist'>
				<h4>Tendances actuelles</h4>
				<div className='popular__movies'>
					<img src={Crown} alt='crown' />
					<img src={HouseCards} alt='house of cards' />
					<img src={Subbura} alt='subbura' />
					<img src={BlackMirror} alt='black mirror' />
					<img src={Judentus} alt='judentus' />
					<img src={DirtyMoney} alt='dirty money' />
					<img src={WanderingEarth} alt='wandering earth' />
					<img src={Ultraman} alt='' />
					<img src={Sevenultraman} alt='' />
				</div>
			</div>
		);
	}
}

export default TrendingList;
