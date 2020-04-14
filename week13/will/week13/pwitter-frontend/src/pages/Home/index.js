import './index.scss';
import React from 'react';
import Navbar from '../../components/Navbar';
import Homebody from '../../components/Homebody';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Homebody />
		</div>
	);
};

export default Home;
