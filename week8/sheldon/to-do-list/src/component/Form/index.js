import React, { Component } from 'react';

const Form = ({ data, handleInputChange, handleSubmitChange }) => {
	return (
		<div className='from-input'>
			<input value={data} onChange={handleInputChange} type='text' />
			<button onClick={handleSubmitChange}>Submit</button>
		</div>
	);
};

export default Form;
