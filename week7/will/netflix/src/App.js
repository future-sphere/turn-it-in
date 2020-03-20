import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Movielist from './components/Movielist';
import Polonais from './components/Polonais';
import Posterlist from './components/Posterlist';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='banner-container'>
				<Banner />
			</div>
			<div className='body-container'>
				<Movielist />
				<Polonais />
				<Posterlist />
				<Footer />
			</div>
		</div>
	);
}

export default App;
