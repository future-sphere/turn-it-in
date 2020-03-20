import React from 'react';
import './index.scss';
import Peach from '../../assets/images/Peach.png';
import Yellow from '../../assets/images/Yellow.png';
import Blue from '../../assets/images/Blue.png';
import Purple from '../../assets/images/Purple.png';
import Pink from '../../assets/images/Pink.png';
import Green from '../../assets/images/Green.png';

export default class Category extends React.Component {
	render() {
		return (
			<div className='category-container'>
				<div className='category-box'>
					<h3>Categories</h3>
					<div className='image'>
						<div className='image-box'>
							<img src={Peach} alt='image' />
							<h3>Comedie</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Yellow} alt='image' />
							<h3>Action</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Blue} alt='image' />
							<h3>Drama</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Purple} alt='image' />
							<h3>Sci-Fi</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Pink} alt='image' />
							<h3>Romance</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Green} alt='image' />
							<h3>Thriller</h3>

							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Peach} alt='image' />
							<h3>Thriller</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
						<div className='image-box'>
							<img src={Blue} alt='image' />
							<h3>Emission</h3>
							<i class='fas fa-chevron-down'></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
