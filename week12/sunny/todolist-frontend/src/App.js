import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';

import todoService from './services/todos';

import './App.css';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const handleInputChange = e => {
		setInput(e.target.value);
	};

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const text = await todoService.fetchAllTodo();
				if (text.data.success) {
					setTodos(text.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchTodos();
	}, []);

	const handleAddTodo = async () => {
		try {
			const info = await todoService.createTodo(input);
			if (info.data.success) {
				const nextTodo = [...todos];
				nextTodo.push(info.data.data);
				setTodos(nextTodo);
				setInput('');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const handleDeleteTodo = async id => {
		try {
			const data = await todoService.deleteTodo(id);
			console.log(data);
			if (data.data.success) {
				// const nextTodos = [...todos];
				// nextTodos.splice(i, 1);
				// setTodos(nextTodos);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='App'>
			<div className='todolist-container'>
				<h1>Todo List</h1>
				<List todos={todos} handleDeleteTodo={handleDeleteTodo} />
				<Form
					input={input}
					handleInputChange={handleInputChange}
					handleAddTodo={handleAddTodo}
				/>
			</div>
		</div>
	);
}

export default App;
