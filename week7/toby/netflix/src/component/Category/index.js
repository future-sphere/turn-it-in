import React, { Component } from 'react';
import './index.scss';
import Arrowright from '../../assets/logos/arrowright.svg';
import Arrowdown from '../../assets/logos/arrowdown2.svg';
class Category extends Component {
	render() {
		return (
			<div className='catigories'>
				<p>
					Categories <img src={Arrowright} alt='arrow' />
				</p>
				<div className='catigories__list'>
					<span className='comedy'>
						Comedy <img src={Arrowdown} alt='' />
					</span>
					<span className='action'>
						Action
						<img src={Arrowdown} alt='' />
					</span>
					<span className='drama'>
						Drama
						<img src={Arrowdown} alt='' />
					</span>
					<span className='sci-fi'>
						Sci-Fi
						<img src={Arrowdown} alt='' />
					</span>
					<span className='romance'>
						Romance
						<img src={Arrowdown} alt='' />
					</span>
					<span className='thriller'>
						Thriller
						<img src={Arrowdown} alt='' />
					</span>
					<span className='ancient'>
						Ancient
						<img src={Arrowdown} alt='' />
					</span>
					<span className='history'>
						History
						<img src={Arrowdown} alt='' />
					</span>
					<span className='life'>
						life
						<img src={Arrowdown} alt='' />
					</span>
					<span className='future'>
						Future
						<img src={Arrowdown} alt='' />
					</span>
					<span className='Others'>
						Others
						<img src={Arrowdown} alt='' />
					</span>
				</div>
			</div>
		);
	}
}

export default Category;
