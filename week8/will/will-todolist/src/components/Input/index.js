import React from 'react';
import './index.scss';

const index = ({
	data,
	handleInputTrack,
	handleInputPush,
	handleInputEnter,
}) => {
	return (
		<div className='input-container'>
			<input
				type='text'
				value={data}
				onChange={handleInputTrack}
				onKeyDown={handleInputEnter}
				placeholder='Start your plans'
			/>
			<button onClick={handleInputPush}>Do&thinsp;it</button>
		</div>
	);
};

export default index;
