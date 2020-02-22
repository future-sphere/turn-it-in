import React, { Component } from 'react';
import './index.scss';
class Links extends Component {
	render() {
		return (
			<ul>
				<li>
					<a href='' className='active'>
						Home
					</a>
				</li>
				<li>
					<a href=''>TV Shows</a>
				</li>
				<li>
					<a href=''>Movies</a>
				</li>
				<li>
					<a href=''>Netflix Origin</a>
				</li>
				<li>
					<a href=''>Latest</a>
				</li>
				<li>
					<a href=''>My List</a>
				</li>
			</ul>
		);
	}
}

export default Links;
