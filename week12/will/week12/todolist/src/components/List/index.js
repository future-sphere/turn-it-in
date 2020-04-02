import React, { useState, useEffect } from 'react';
import './index.scss';
import classnames from 'classnames';
import UsersService from '../../service/users';
import ReactDOM from 'react-dom';

const List = ({ todos }) => {
	const [todo, setTodo] = useState(todos);

	useEffect(() => {
		setTodo(todos);
	}, [todos]);

	const deleteTodo = async i => {
		try {
			const removeTodoResult = await UsersService.removeTodo(todos[i]._id);
			if (removeTodoResult.data.success) {
				const newTodo = [...todo];
				newTodo.splice(i, 1);
				setTodo(newTodo);
				alert('Deleted');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const finishTodo = async i => {
		try {
			const finishTodoResult = await UsersService.finishTodo(
				todos[i]._id,
				todos[i].todo,
				todos[i].isFinished,
			);
			if (finishTodoResult.data.success) {
				const newTodo = [...todo];
				newTodo[i].isFinished = true;
				setTodo(newTodo);
				alert('Finished');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='list-container'>
			<h2>To &thinsp;Do &thinsp;List</h2>
			<div className='list-block'>
				{todo &&
					todo.map((v, i) => (
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

export default List;
