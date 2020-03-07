import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import InfoPage from './pages/Info';
import Footer from './components/Footer';

export default function App() {
	return (
		<div>
			<Router>
				<Route exact path='/' component={HomePage} />
				<Route path='/info/:id' component={InfoPage} />
				<Footer />
			</Router>
		</div>
	);
}
