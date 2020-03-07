import React from 'react';
import './index.scss';
const Form = ({ data, addTodo, changeInput }) => {
	return (
		<div className='form'>
			<input
				value={data}
				onChange={changeInput}
				type='text'
				placeholder='Type Your Todo'
			/>
			<button onClick={addTodo}>Add Todo</button>
		</div>
	);
};
export default Form;
