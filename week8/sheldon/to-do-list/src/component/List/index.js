import React from 'react';
import './index.scss';

const List = ({ todos, handleDeletChange }) => {
	return (
		<div className='list'>
			{todos.map((todo, i) => (
				<div className='list-todo'>
					<span>{todo}</span>
					<button onClick={() => handleDeletChange(i)}>X</button>
				</div>
			))}
		</div>
	);
};

export default List;
