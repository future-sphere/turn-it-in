import React, { Component, useState } from 'react';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions/index';

function App() {
	const dispatch = useDispatch();
	const todoReducer = useSelector((state) => state.todoReducer);
	const completeReducer = useSelector((state) => state.completeReducer);
	const data = {
		todos: ['学习', '找工作'],
		data: '',
		// check: 'ok',
	};
	const [state, setState] = useState(data);
	const handleDelete = (index) => {
		const todos = state.todos;
		todos.splice(index, 1);
		setState({
			todos: todos,
		});
	};

	const handleInputChange = (e) => {
		setState({
			data: e.target.value,
		});
	};

	// handleIsFinished = index => {
	// 	const check = this.state.check;
	// };

	const handleAddInput = () => {
		if (state.data) {
			const todos = this.state.todos;
			todos.push(this.state.data);
			setState({
				todos: todos,
				data: '',
			});
		} else {
			alert('Cannot be blank');
		}
	};

	const keyPressed = (event) => {
		if (event.keyCode === 13) {
			// event.preventDefault();
			handleAddInput();
		}
	};

	return (
		<div className='App'>
			<div className='wrapper'>
				<h2>To Do List</h2>
				<div className='scroll'>
					<ToDoList handleDelete={handleDelete} todos={state.todos} />
				</div>
				<Form
					handleInputChange={handleInputChange}
					handleAddInput={handleAddInput}
					keyPressed={keyPressed}
					data={state.data}
				/>
			</div>
			<h1>counter {todoReducer}</h1>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			{completeReducer && <h1>hi</h1>}
			<button onClick={() => dispatch(login())}>click to Login</button>
		</div>
	);
}

export default App;
