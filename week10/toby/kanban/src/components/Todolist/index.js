import React from 'react';

export default function Todolist({
	data,
	windowIndex,
	window,
	addTodo,
	clearInput,
	changeTodoInput,
	moveForwardWindow,
	moveBackwardWindow,
	deleteWindow,
	enterTodo,
	todoMoveForward,
	todoMoveBackward,
}) {
	return (
		<div className='windows__container'>
			<h1>{window.name}</h1>
			<div className='list__container'>
				{window.todos.map((addedTodo, i) => (
					<div className='list__element'>
						<button onClick={() => todoMoveBackward(i, windowIndex)}>-</button>
						<span>{addedTodo}</span>
						<div>
							<button onClick={() => clearInput(i, windowIndex)}>x</button>
							<button onClick={() => todoMoveForward(i, windowIndex)}>+</button>
						</div>
					</div>
				))}
			</div>
			<div className='container__input'>
				<div
					className='windows__input'
					onKeyPress={e => enterTodo(windowIndex, e)}>
					<input
						value={data}
						onChange={e => changeTodoInput(windowIndex, e)}
						placeholder='type your Todo here'
						type='text'
					/>
					<button onClick={() => addTodo(windowIndex)}>Submit</button>
				</div>
				<div className='windows__buttons'>
					<button
						className='input__button__backward'
						onClick={() => moveBackwardWindow(windowIndex)}>
						-
					</button>
					<button
						className='input__button__delete'
						onClick={() => deleteWindow(windowIndex)}>
						x
					</button>
					<button
						className='input__button__forward'
						onClick={() => moveForwardWindow(windowIndex)}>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
