import React, { useState, useEffect } from 'react';
import './index.scss';
import TodosService from '../../service/todos';

const TodoList = ({}) => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const [value, setValue] = useState('');

	const enterNewTodo = async (input) => {
		try {
			const newTodo = await TodosService.addNewTodo(input);
			if (newTodo.data.success) {
				todos.push({ todos: value });
				setValue('');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const deleteTodo = async (id, input, i) => {
		try {
			const deleteInput = await TodosService.removeTodo(id, input);
			if (deleteInput.data.success) {
				const newTodos = [...todos];
				newTodos.splice(i, 1);
				setTodos(newTodos);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	useEffect(() => {
		const fetchTodo = async () => {
			try {
				const todoList = await TodosService.fetchAllTodo();
				if (todoList.data.success) {
					setTodos(todoList.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchTodo();
	}, []);

	return (
		<div className='form-container'>
			<div className='todolist'>
				<div className='title'>
					<h3>Todo List</h3>
				</div>
				<div className='form-box '>
					<div className='todo'>
						{todos.map((v, i) => (
							<div className='input-todo'>
								<div className='text-box'>
									<span>{v.todos}</span>
								</div>
								<button onClick={() => deleteTodo(v._id, v.todos, i)}>
									<i class='fas fa-times'></i>
								</button>
							</div>
						))}
					</div>
				</div>
				<div className='submit-box'>
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
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
