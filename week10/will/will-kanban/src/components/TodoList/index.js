import React from 'react';
import './index.scss';
import classnames from 'classnames';
// import handleGetValue from '../../helper/handleGetValue';
// import handleSubmmitData from '../../helper/handleSubmmitData';

const TodoList = ({
	each,
	index,
	input,
	editData,
	todo,
	handleEdit,
	handleGetValue,
	handleSubmmitData,
	handlePush,
	handleDelete,
	handleSlide,
	handleSwitch,
	handleRemove,
	handleMove,
	handleGetEdit,
	handleSubmmitEdit,
	handleTodoEdit,
}) => {
	return (
		<div className='wrapper'>
			<div className='title'>
				<div className={classnames('initial', { close: each.isEdit === true })}>
					<h2 onClick={() => handleEdit(index)}>{each.title}</h2>
					<i onClick={() => handleRemove(index)} class='fas fa-skull'></i>
				</div>
				<input
					className={classnames('input', { close: each.isEdit === false })}
					type='text'
					onChange={handleGetEdit}
					value={editData}
					onKeyDown={e => handleSubmmitEdit(e, index, 0, 1)}
				/>
			</div>
			<div className='container'>
				{each.todos &&
					each.todos.map((v, i) => (
						<div className='todo-container'>
							<div className='todo-block'>
								<p
									className={classnames('initial', {
										close: v.isEdit === true,
									})}
									onClick={() => handleTodoEdit(index, i)}>
									{v.text}
								</p>
								<input
									className={classnames('input', {
										close: v.isEdit === false,
									})}
									type='text'
									onChange={handleGetEdit}
									value={editData}
									onKeyDown={e => handleSubmmitEdit(e, index, i, 2)}
								/>
								<div className='todo-button-container'>
									<div
										onClick={() => handleSwitch(index, i)}
										className={classnames('todo-button', {
											ban: v.isFinished == true,
										})}>
										<i class='fas fa-ban'></i>
									</div>
									<div
										onClick={() => handleSwitch(index, i)}
										className={classnames('todo-button', {
											check: v.isFinished == false,
										})}>
										<i class='fas fa-check'></i>
									</div>
									<i
										onClick={() => handleDelete(index, i)}
										class='far fa-times-circle'></i>
								</div>
							</div>
							<div className='slide-block'>
								<div
									onClick={() => handleSlide(v, index, i, -1)}
									className={classnames('left', { off: index == 0 })}>
									<i class='fas fa-angle-double-left'></i>
								</div>
								<div
									className={classnames('right', {
										off: index == todo.length - 1,
									})}>
									<i
										onClick={() => handleSlide(v, index, i, 1)}
										class='fas fa-angle-double-right'></i>
								</div>
							</div>
						</div>
					))}
			</div>

			<input
				value={input[index]}
				onChange={eve => handleGetValue(eve, index)}
				type='text'
				placeholder='Type something'
				onKeyDown={e => handleSubmmitData(e, index)}
			/>
			<div className='move-container'>
				<div
					onClick={() => handleMove(index, each, -1, 1)}
					className={classnames('moveLeft', { off: index == 0 })}>
					<i class='fas fa-arrow-left'></i>
				</div>
				<div
					onClick={() => handleMove(index, each, 2, 0)}
					className={classnames('moveRight', {
						off: index == todo.length - 1,
					})}>
					<i class='fas fa-arrow-right'></i>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
