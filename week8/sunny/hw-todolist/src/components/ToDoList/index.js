import React from 'react';

const ToDoList = ({ todos, handleDelete }) => {
	return (
		<div className='ToDoList'>
			{todos.map((todo, i) => (
				<div className='todo'>
					{/* <button onClick={() => handleIsFinished(i) {
					}}></button> */}
					<span>{todo}</span>
					<button onClick={() => handleDelete(i)}>
						<i class='far fa-times-circle'></i>
					</button>
				</div>
			))}
		</div>
	);
};

export default ToDoList;
