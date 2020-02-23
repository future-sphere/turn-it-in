import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import MovieTrailer from './components/MovieTrailer';
import MoviePoster from './components/MoviePoster';
import MovieCategory from './components/MovieCategory';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Banner />
			<MovieList />
			<MovieTrailer />
			<MoviePoster />
			<MovieCategory />
			<Footer />
		</div>
	);
}

export default App;
