import React from 'react';
import logo from './logo.svg';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Footer from './components/Footer';
import Trailer from './components/Trailer';
import Poster from './components/Poster';
import Category from './components/Category';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Banner />
			<Movie />
			<Trailer />
			<Poster />
			<Category />
			<Footer />
		</div>
	);
}

export default App;
