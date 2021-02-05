import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Input from './components/Input';
import todoService from './services/todolist';

function App() {
	const [inputData, setInputData] = useState('');
	const [list, setList] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			try {
				const todos = await todoService.fetchTodoList();
				if (todos.data.success) {
					setList(todos.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		getTodos();
	}, []);

	const handleInputChange = e => {
		setInputData(e.target.value);
	};

	const handleDisplayInput = index => {
		const nextTodo = list.map(todo => ({ ...todo, isEdit: false }));
		nextTodo[index].isEdit = !nextTodo[index].isEdit;
		setList(nextTodo);
	};

	const handleSubmitList = async e => {
		if (e.keyCode === 13) {
			try {
				const newPost = await todoService.createTodo(e.target.value);
				console.log(newPost);
				if (newPost.data.success) {
					const newTodo = newPost.data.data;
					const newList = [...list];
					newList.push({
						...newTodo,
					});
					setList(newList);
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	const handleDeleteTodo = async index => {
		console.log(list);
		if (list[index]) {
			try {
				const currTodo = await todoService.deleteTodo(list[index]._id);
				if (currTodo) {
					const newList = [...list];
					newList.splice(index, 1);
					setList(newList);
				}
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<div className='App'>
			<h1>FULL STACK M.F PROJECT</h1>
			<Form
				handleDisplayInput={handleDisplayInput}
				setList={setList}
				list={list}
				handleDeleteTodo={handleDeleteTodo}
			/>
			<Input
				handleSubmitList={handleSubmitList}
				inputData={inputData}
				handleInputChange={handleInputChange}
			/>
		</div>
	);
}

export default App;
