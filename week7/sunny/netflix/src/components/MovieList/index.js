import React from 'react';
import Movie1 from '../../assets/images/movie1.png';
import Movie2 from '../../assets/images/movie2.png';
import Movie3 from '../../assets/images/movie3.png';
import Movie4 from '../../assets/images/movie4.png';
import Movie5 from '../../assets/images/movie5.png';
import Movie6 from '../../assets/images/movie6.png';
import Movie7 from '../../assets/images/movie7.png';
import Movie11 from '../../assets/images/movie11.png';
import Movie22 from '../../assets/images/movie22.png';
import Movie33 from '../../assets/images/movie33.png';
import Movie44 from '../../assets/images/movie44.png';
import Movie55 from '../../assets/images/movie55.png';
import Movie66 from '../../assets/images/movie66.png';
import Movie77 from '../../assets/images/movie77.png';
import './index.css';
import MovieBlock from '../MovieBlock';

const moviesList1 = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7];

const moviesList2 = [
	Movie11,
	Movie22,
	Movie33,
	Movie44,
	Movie55,
	Movie66,
	Movie77,
];

export default function MovieList() {
	return (
		<section>
			<div className='movie-wrap'>
				<div className='movie-loop'>
					{moviesList1.map(movie => (
						<MovieBlock posterUrl={movie} />
					))}
				</div>
			</div>
			<p className='sub'>Tendances actuelles</p>
			<div className='movie-wrap'>
				<div className='movie-loop'>
					{moviesList2.map(movie => (
						<MovieBlock posterUrl={movie} />
					))}
				</div>
			</div>
		</section>
	);
}
