import React, { Component, useReducer, useRef } from 'react';
import './index.scss';
import initialState from '../../reducer/initialState';
import reducer from '../../reducer/reduce';

const Input = ({ addTodo, getInput, state }) => {
	return (
		<div className='input-container'>
			<input
				type='text'
				value={state.data}
				onChange={(e) => getInput(e)}
				placeholder='Start your plans'
			/>
			<button onClick={() => addTodo()}>Do&thinsp;it</button>
		</div>
	);
};

export default Input;
