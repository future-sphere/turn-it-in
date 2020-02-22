import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import PopularList from './component/popularlist';
import TrendingList from './component/trendinglist';
import Header from './component/header';
import Subheader from './component/subheader';
import Catigory from './component/catigory';
import NetflixOrigin from './component/NetflixOrigin';
import Footer from './component/footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Navbar />
			<PopularList />
			<TrendingList />
			<Subheader />
			<NetflixOrigin />
			<Catigory />
			<Footer />
		</div>
	);
}

export default App;
