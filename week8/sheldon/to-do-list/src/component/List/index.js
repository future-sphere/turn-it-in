import React from 'react';
import classnames from 'classnames';
import './index.scss';

const List = ({ todos, handleDeletChange, handleTodoClassNameToggle }) => {
	return (
		<div className='list'>
			{todos.map((todo, i) => (
				<div
					className={classnames('list-todo', {
						active: todo.isActive,
					})}>
					<button onClick={() => handleTodoClassNameToggle(i)}>V</button>
					<span>{todo.text}</span>
					<button onClick={() => handleDeletChange(i)}>X</button>
				</div>
			))}
		</div>
	);
};

export default List;
