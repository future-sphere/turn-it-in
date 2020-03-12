import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import './App.css';

class App extends Component {
	state = {
		todos: ['学习', '辞职', '学习', '找工作'],
		data: '',
		// check: 'ok',
	};
	handleDelete = index => {
		const todos = this.state.todos;
		todos.splice(index, 1);
		this.setState({
			todos: todos,
		});
	};

	handleInputChange = e => {
		this.setState({
			data: e.target.value,
		});
	};

	// handleIsFinished = index => {
	// 	const check = this.state.check;
	// };

	handleAddInput = () => {
		if (this.state.data) {
			const todos = this.state.todos;
			todos.push(this.state.data);
			this.setState({
				todos: todos,
				data: '',
			});
		} else {
			alert('Cannot be blank');
		}
	};

	keyPressed = event => {
		if (event.keyCode === 13) {
			// event.preventDefault();
			this.handleAddInput();
		}
	};

	render() {
		return (
			<div className='App'>
				<div className='wrapper'>
					<h2>To Do List</h2>
					<div className='scroll'>
						<ToDoList
							handleDelete={this.handleDelete}
							todos={this.state.todos}
						/>
					</div>
					<Form
						handleInputChange={this.handleInputChange}
						handleAddInput={this.handleAddInput}
						keyPressed={this.keyPressed}
						data={this.state.data}
					/>
				</div>
			</div>
		);
	}
}

export default App;
