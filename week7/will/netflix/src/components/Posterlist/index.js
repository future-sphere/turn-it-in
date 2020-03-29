import './index.scss';
import Poster1 from '../../assets/img/poster1.png';
import Poster2 from '../../assets/img/poster2.png';
import Poster3 from '../../assets/img/poster3.png';
import Poster4 from '../../assets/img/poster4.png';
import Poster5 from '../../assets/img/poster5.png';
import Poster6 from '../../assets/img/poster6.png';
import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className='poster-list-wrapper'>
				<p>
					PROGRAMMES ORIGINAUX NETFLIX <i class='fas fa-chevron-right'></i>
				</p>
				<div className='poster-list-container'>
					<div className='poster-list-block'>
						<img src={Poster1} alt='pic' />
						<img src={Poster2} alt='pic' />
						<img src={Poster3} alt='pic' />
						<img src={Poster4} alt='pic' />
						<img src={Poster5} alt='pic' />
						<img src={Poster6} alt='pic' />
						<img src={Poster1} alt='pic' />
						<img src={Poster2} alt='pic' />
					</div>
				</div>
				<p>Catégories</p>
				<div className='poster-list-container'>
					<div className='poster-list-block'>
						<div className='img-box poster-color1'>
							<h6>Comédie</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color2'>
							<h6>Action</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color3'>
							<h6>Drame</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color4'>
							<h6>Sci-Fi</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color5'>
							<h6>Romance</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color6'>
							<h6>Thriller</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color1'>
							<h6>Comédie</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='img-box poster-color2'>
							<h6>Action</h6>
							<i class='fas fa-chevron-down'></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
