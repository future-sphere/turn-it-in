import './App.css';
import React, { Component, useReducer, useRef, useEffect } from 'react';
import List from './components/List';
import Input from './components/Input';
import initialState from './reducer/initialState';
import reducer from './reducer/reduce';
import UsersService from './service/users';

const App = () => {
	const inputRef = useRef();
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const fetchAllTodoData = await UsersService.fetchAllTodo();
			if (fetchAllTodoData.data.success) {
				fetchTodo(fetchAllTodoData.data.data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const fetchTodo = (allTodos) => {
		dispatch({ type: 'FETCH_TODO', allTodos });
	};

	const deleteTodo = async (i) => {
		try {
			await fetchData();
			const deleteTodoResult = await UsersService.removeTodo(
				state.todos[i]._id,
				state.todos[i].todo,
			);
			if (deleteTodoResult.data.success) {
				dispatch({ type: 'DEL_TODO', i });
				alert('Deleted');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const finishTodo = async (i) => {
		try {
			await fetchData();
			const finishTodoResult = await UsersService.finishTodo(
				state.todos[i]._id,
				state.todos[i].todo,
				state.todos[i].isFinished,
			);
			if (finishTodoResult.data.success) {
				dispatch({ type: 'FINISH_TODO', i });
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const addTodo = async () => {
		const { data } = state;
		try {
			const createNewTodoResult = await UsersService.createNewTodo(data);
			console.log(createNewTodoResult);
			if (createNewTodoResult.data.success) {
				dispatch({ type: 'ADD_TODO' });
				alert('Added');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const getInput = (e) => {
		dispatch({ type: 'GET_DATA', payload: e.target.value });
	};

	return (
		<div className='app'>
			<List deleteTodo={deleteTodo} finishTodo={finishTodo} state={state} />
			<Input addTodo={addTodo} getInput={getInput} state={state} />
		</div>
	);
};
export default App;
