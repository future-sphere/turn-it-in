import React from 'react';

const Form = ({ data, handleInputChange, handleAddInput, keyPressed }) => {
	return (
		<div className='form'>
			<input
				value={data}
				onChange={handleInputChange}
				onKeyDown={keyPressed}
				type='text'
			/>
			<button onClick={handleAddInput}>+</button>
		</div>
	);
};

export default Form;
