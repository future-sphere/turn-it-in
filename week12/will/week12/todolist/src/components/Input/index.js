import React, { useState } from 'react';
import './index.scss';
import UsersService from '../../service/users';

const Input = ({ inputData, handleInputPush, handleChange }) => {
	const addTodo = async inputData => {
		try {
			const createNewTodoResult = await UsersService.createNewTodo(inputData);
			if (createNewTodoResult.data.success) {
				alert('Added');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='input-container'>
			<input
				type='text'
				value={inputData}
				onChange={handleChange}
				placeholder='Start your plans'
			/>
			<button onClick={() => (handleInputPush(), addTodo(inputData))}>
				Do&thinsp;it
			</button>
		</div>
	);
};

export default Input;
