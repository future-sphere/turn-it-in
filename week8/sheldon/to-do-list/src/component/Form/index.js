import React, { Component } from 'react';
import './index.scss';

const Form = ({ data, handleInputChange, handleSubmitChange }) => {
	return (
		<div className='form-input'>
			<input value={data} onChange={handleInputChange} type='text' />
			<button onClick={handleSubmitChange}>Submit</button>
		</div>
	);
};

export default Form;
