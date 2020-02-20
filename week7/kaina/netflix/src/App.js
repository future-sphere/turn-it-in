import React from 'react';
import logo from './logo.svg';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Banner />
		</div>
	);
}

export default App;
