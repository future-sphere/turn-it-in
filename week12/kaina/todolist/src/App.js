import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
	handleInputChange = (e) => {
		this.setState({ data: e.target.value });
	};

	render() {
		return (
			<div className='App'>
				<div className='todolist'>
					<TodoList />
				</div>
			</div>
		);
	}
}

export default App;
