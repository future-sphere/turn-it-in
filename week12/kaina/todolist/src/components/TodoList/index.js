import React, { useState, useEffect } from 'react';
import './index.scss';
import UsersService from '../../service/users';

const TodoList = ({}) => {
	const [todos, setTodos] = useState([]); //todo list
	const [input, setInput] = useState(''); // entered todo
	const [value, setValue] = useState(''); //new todo

	const enterNewTodo = async input => {
		try {
			const newTodo = await UsersService.addNewTodo(input);
			if (newTodo.data.success) {
				alert('New todo added');
				setValue('');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const deleteTodo = async (id, input) => {
		try {
			const deleteInput = await UsersService.removeTodo(id, input);
			console.log(deleteInput);
			if (deleteInput.data.success) {
				alert('Todo removed');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	useEffect(() => {
		const fetchTodo = async () => {
			try {
				const todoList = await UsersService.fetchAllTodo();
				if (todoList.data.success) {
					setTodos(todoList.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchTodo();
	}, []);

	console.log(value);

	return (
		<div className='form-container'>
			<div className='todolist'>
				<div className='title'>
					<h3>Todo List</h3>
				</div>
				<div className='form-box '>
					<div className='todo'>
						{todos.map(v => (
							<div className='input-todo'>
								<div className='text-box'>
									<span>{v.todos}</span>
								</div>
								<button onClick={() => deleteTodo(v._id, v.todos)}>
									<i class='fas fa-times'></i>
								</button>
							</div>
						))}
					</div>
				</div>
				<div className='submit-box'>
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						type='text'
						placeholder='Plan for today'
					/>
					<button onClick={() => enterNewTodo(value)}>
						<i class='fas fa-plus'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
