import './App.css';
import React, { Component, useState, useEffect } from 'react';
import List from './components/List';
import Input from './components/Input';
import UsersService from './service/users';
import ReactDOM from 'react-dom';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [inputData, setInputData] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchAllTodoData = await UsersService.fetchAllTodo();
				if (fetchAllTodoData.data.success) {
					setTodos(fetchAllTodoData.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchData();
	}, []);

	const handleInputPush = () => {
		if (inputData == '') {
			alert("What's your plan for the day?");
		} else {
			const newTodos = [...todos];
			newTodos.push({
				todo: inputData,
				isActive: false,
			});
			setTodos(newTodos);
			setInputData('');
		}
	};

	const handleChange = e => {
		setInputData(e.target.value);
	};

	return (
		<div className='App'>
			<div className='list'>
				<List todos={todos} />
			</div>
			<div className='input'>
				<Input
					inputData={inputData}
					handleInputPush={handleInputPush}
					handleChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default App;
