import React from 'react';
import './index.scss';

const Form = ({ input, handleInputChange, handleAddTodo }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input
				value={input}
				type='text'
				placeholder='Create your todo...'
				onChange={handleInputChange}
			/>
			<button onClick={() => handleAddTodo()}>+</button>
		</form>
	);
};

export default Form;
