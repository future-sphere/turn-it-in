import React from 'react';
import './index.css';

export default function MovieCategory() {
	return (
		<div className='movie-category'>
			<h4>Catégories</h4>
			<div className='category-wrap'>
				<div className='category-loop'>
					<div className='category red'>
						<p>Comédie</p>
						<i class='fas fa-angle-down'></i>
					</div>
					<div className='category orange'>
						<p>Action</p>
						<i class='fas fa-angle-down'></i>
					</div>
					<div className='category blue'>
						<p>Drame</p>
						<i class='fas fa-angle-down'></i>
					</div>
					<div className='category purple'>
						<p>Sci-Fi</p>
						<i class='fas fa-angle-down'></i>
					</div>
					<div className='category pink'>
						<p>Romance</p>
						<i class='fas fa-angle-down'></i>
					</div>
					<div className='category green'>
						<p>Thriller</p>
						<i class='fas fa-angle-down'></i>
					</div>
					<div className='category mint'>
						<p>Émissions TV</p>
						<i class='fas fa-angle-down'></i>
					</div>
				</div>
			</div>
		</div>
	);
}
