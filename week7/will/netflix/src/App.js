import React from 'react';
import logo from './logo.svg';
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
			<Banner />
			<Movielist />
			<Polonais />
			<Posterlist />
			<Footer />
		</div>
	);
}

export default App;
