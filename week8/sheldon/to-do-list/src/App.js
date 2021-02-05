import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';

class App extends Component {
	state = {
		data: '',
		todos: [
			{
				text: 'hi',
				isActive: false,
			},
			{
				text: 'hello',
				isActive: false,
			},
		],
	};

	handleTodoClassNameToggle = i => {
		const todos = this.state.todos;
		todos[i].isActive = !todos[i].isActive;
		this.setState({ ...this.state, todos });
	};

	handleInputChange = element => {
		this.setState({
			data: element.target.value,
		});
	};

	handleSubmitChange = () => {
		const todos = this.state.todos;
		if (this.state.data === '') {
			alert('you cant push empty string mofo');
		} else {
			todos.push({
				text: this.state.data,
				isActive: false,
			});
			this.setState({
				todos: todos,
				data: '',
			});
		}
	};

	handleDeletChange = i => {
		const todos = this.state.todos;
		todos.splice(i, 1);
		this.setState({
			todos: todos,
		});
	};

	render() {
		return (
			<div className='App'>
				<div className='content-wrapper'>
					<List
						handleTodoClassName={this.handleTodoClassName}
						handleTodoClassNameToggle={this.handleTodoClassNameToggle}
						todos={this.state.todos}
						handleDeletChange={this.handleDeletChange}
					/>
					<Form
						data={this.state.data}
						handleInputChange={this.handleInputChange}
						handleSubmitChange={this.handleSubmitChange}
					/>
				</div>
			</div>
		);
	}
}

export default App;
