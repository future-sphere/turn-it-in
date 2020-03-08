import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListWindow from './Componenet/TodoList';
import Form from './Componenet/Form';
import TodoHistory from './Componenet/TodoHistory';
import BackgourndImg from './images/bg.jpg';

class App extends Component {
	state = {
		data: '',
		historyData: 'No History Found',
		todos: [],
		completedTodos: [],
	};

	clearInput = index => {
		const todos = this.state.todos;
		const completedTodos = this.state.completedTodos;
		completedTodos.push(this.state.todos[index]);
		todos.splice(index, 1);
		this.setState({
			todos: todos,
			completedTodos: completedTodos,
			historyData: '',
		});
	};

	addTodo = () => {
		const todos = this.state.todos;
		if (this.state.data == '') {
			alert('Todo cant be empty!');
		} else {
			todos.push(this.state.data);
			this.setState({
				todos: todos,
				data: '',
			});
		}
	};

	clearHistory = () => {
		this.setState({
			completedTodos: [],
			historyData: 'No History Found',
		});
		alert('History Cleared');
	};

	changeInput = e => {
		this.setState({
			data: e.target.value,
		});
	};

	markIncompleted = index => {
		const todos = this.state.todos;
		const completedTodos = this.state.completedTodos;
		todos.push(this.state.completedTodos[index]);
		completedTodos.splice(index, 1);
		this.setState({
			todos: todos,
			completedTodos: completedTodos,
		});
	};

	render() {
		return (
			<div className='App'>
				<img src={BackgourndImg} alt='rain window' />
				<div className='App__wrapper'>
					<div className='App__wrapper__container'>
						<TodoListWindow
							todos={this.state.todos}
							clearInput={this.clearInput}
							addCompletedTodos={this.addCompletedTodos}
						/>
						<Form
							addTodo={this.addTodo}
							changeInput={this.changeInput}
							data={this.state.data}
						/>
						<TodoHistory
							completedTodos={this.state.completedTodos}
							clearHistory={this.clearHistory}
							markIncompleted={this.markIncompleted}
							historyData={this.state.historyData}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
