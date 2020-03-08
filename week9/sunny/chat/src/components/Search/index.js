import React from 'react';
import './index.css';

export default function Search() {
	return (
		<form className='search'>
			<div className='input'>
				<i class='fas fa-search'></i>
				<input type='text' placeholder='Type to search...' />
			</div>
			<button>English</button>
		</form>
	);
}
