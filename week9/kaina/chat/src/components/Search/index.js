import React from 'react';
import './index.css';

const Search = () => {
	return (
		<div>
			<div className='search-container'>
				<div className='search-box'>
					{/* <i class='fas fa-search'></i> */}
					<input type='text' placeholder='Type to search...' />
				</div>
				<div className='language-box'>
					<button>English</button>
				</div>
			</div>
		</div>
	);
};

export default Search;
