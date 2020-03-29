import React from 'react';
import PosterOne from '../../assets/images/poster1.png';
import PosterTwo from '../../assets/images/poster2.png';
import PosterThree from '../../assets/images/poster3.png';
import PosterFour from '../../assets/images/poster4.png';
import PosterFive from '../../assets/images/poster5.png';
import PosterSix from '../../assets/images/poster6.png';
import './index.css';

export default function MoviePoster() {
	return (
		<div className='movie-poster'>
			<h4 className='subtitle'>
				PROGRAMMES ORIGINAUX NETFLIX <i class='fas fa-chevron-right'></i>
			</h4>
			<div className='poster-warp'>
				<div className='poster-loop'>
					<img src={PosterOne} />
					<img src={PosterTwo} />
					<img src={PosterThree} />
					<img src={PosterFour} />
					<img src={PosterFive} />
					<img src={PosterSix} />
					<img src={PosterOne} />
					<img src={PosterTwo} />
					<img src={PosterThree} />
					<img src={PosterFour} />
					<img src={PosterFive} />
					<img src={PosterSix} />
				</div>
			</div>
		</div>
	);
}
