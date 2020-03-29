import React from 'react';
import './index.scss';

const List = ({ todos, handleDeleteTodo }) => {
	return (
		<div className='todos'>
			<ul>
				{todos.length > 0 &&
					todos.map(v => {
						return (
							<li>
								<p>{v.todo}</p>
								<button onClick={() => handleDeleteTodo(v._id, v.todo)}>
									x
								</button>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default List;
