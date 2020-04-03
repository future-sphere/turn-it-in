import React from 'react';

const Input = ({ inputData, handleInputChange, handleSubmitList }) => {
	return (
		<div>
			<input
				onKeyDown={e => handleSubmitList(e)}
				onChange={handleInputChange}
				value={inputData}
				type='text'
			/>
		</div>
	);
};

export default Input;
