import React from 'react';

export default function Searchbar() {
	return (
		<div className='searchbar'>
			<div className='searchbar__container'>
				<input type='text' />
				<div className='searchbar__dropdown'></div>
			</div>
		</div>
	);
}
