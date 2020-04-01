import React, { Component } from 'react';
import './App.css';
// import Form from './components/Form';
import TodoList from './components/TodoList';

//class App extends React.Component {
class App extends Component {
	state = {
		data: '',
		todos: ['Coding', 'Personal Website'],
	};

	handleCrossOut = () => {};

	handleInputChange = e => {
		this.setState({ data: e.target.value });
	};

	handleSubmitChange = () => {
		if (this.state.data === '') {
			alert('不能为空');
		} else {
			const todos = this.state.todos;
			todos.push(this.state.data);
			this.setState({ todos: todos, data: '' });
		}
	};
	handleDeleteTodo = index => {
		const todos = this.state.todos;
		todos.splice(index, 1);
		this.setState({
			todos: todos,
		});
	};

	pressEnterChange = e => {
		if (e.keyCode === 13) {
			const todos = this.state.todos;
			todos.push(this.state.data);
			this.setState({ todos: todos, data: '' });
			if (this.data === '') {
				return alert;
			}
		}
	};

	render() {
		return (
			<div className='App'>
				<div className='todolist'>
					<TodoList
						handleDeleteTodo={this.handleDeleteTodo}
						todos={this.state.todos}
						handleInputChange={this.handleInputChange}
						data={this.state.data}
						handleSubmitChange={this.handleSubmitChange}
						pressEnterChange={this.pressEnterChange}
					/>
				</div>
			</div>
		);
	}
}

export default App;
