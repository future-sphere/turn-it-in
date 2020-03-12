import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import PopularList from './Component/PopularList';
import TrendingList from './Component/TrendingList';
import Header from './Component/Header';
import Subheader from './Component/SubHeader';
import Category from './Component/Category';
import NetflixOrigin from './Component/NetflixOrigin';
import Footer from './Component/Footer';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Navbar />
				<PopularList />
				<TrendingList />
				<Subheader />
				<NetflixOrigin />
				<Category />
				<Footer />
			</div>
		);
	}
}

export default App;
