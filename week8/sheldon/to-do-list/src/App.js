import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';

class App extends Component {
	state = {
		data: '',
		todos: ['写作业', '学react', '找工作'],
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
			todos.push(this.state.data);
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
