import React, { Component, useReducer, useRef } from 'react';
import './index.scss';
import classnames from 'classnames';

const list = ({ finishTodo, deleteTodo, state }) => {
	return (
		<div className='list-container'>
			<h2>To &thinsp;Do &thinsp;List</h2>
			<div className='list-block'>
				{state &&
					state.todos.map((v, i) => (
						<div className='list'>
							<div>
								<button onClick={() => finishTodo(i)}>
									<i class='fas fa-check-circle'></i>
								</button>
								<span className={v.isFinished ? 'color' : ''}>{v.todo}</span>
								<button onClick={() => deleteTodo(i)}>
									<i class='fas fa-times-circle'></i>
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default list;
