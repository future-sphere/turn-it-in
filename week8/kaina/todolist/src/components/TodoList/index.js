import React from 'react';
import './index.scss';

const TodoList = ({
	todos,
	handleDeleteTodo,
	data,
	handleInputChange,
	handleSubmitChange,
	pressEnterChange,
	handleCrossOut,
}) => {
	return (
		<div className='form-container'>
			<div className='title'>
				<h3>To Do List</h3>
			</div>
			<div className='form-box'>
				{todos.map((todo, chuxu) => (
					<div className='todo'>
						<div className='text-box'>
							<button onChange={handleCrossOut}>
								<i class='far fa-hand-point-right'></i>
							</button>
							<span>{todo}</span>
						</div>
						<button onClick={() => handleDeleteTodo(chuxu)}>
							<i class='far fa-trash-alt'></i>
						</button>
					</div>
				))}
			</div>
			<div className='submit-box'>
				<input
					value={data}
					onChange={handleInputChange}
					type='text'
					placeholder='Plan for today'
					onKeyDown={pressEnterChange}
				/>
				<button onClick={handleSubmitChange}>
					<i class='fas fa-pencil-alt'></i>
				</button>
			</div>
		</div>
	);
};

export default TodoList;
