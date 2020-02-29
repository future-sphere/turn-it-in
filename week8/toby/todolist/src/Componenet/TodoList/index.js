import React from 'react';
import './index.scss';

const TodoListWindow = ({ todos, clearInput }) => {
	return (
		<div className='list'>
			{todos.map((addedTodo, i) => (
				<div className='list__container'>
					<span>{addedTodo}</span>
					<button onClick={() => clearInput(i)}>x</button>
				</div>
			))}
		</div>
	);
};

export default TodoListWindow;
