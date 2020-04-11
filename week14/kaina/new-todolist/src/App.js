import React, { Component } from 'react';
import './App.css';
// import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className='App'>
			<div className='todolist'>
				<TodoList />
			</div>
		</div>
	);
};

export default App;
