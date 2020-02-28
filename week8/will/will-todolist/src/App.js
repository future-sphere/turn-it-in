import './App.css';
import React, { Component } from 'react';
import List from './components/List';
import Input from './components/Input';

export default class App extends Component {
	state = {
		data: '',
		todo: [
			// { text: 'Code', isActive: false },
			// { text: 'Gym', isActive: false },
			// { text: 'English', isActive: false },
		],
	};

	handleInputTrack = v => {
		this.setState({ data: v.target.value });
	};

	handleInputPush = () => {
		const todo = this.state.todo;
		const data = this.state.data;
		if (data == '') {
			alert("What's your plan for the day?");
		} else {
			todo.push(data);
			this.setState({
				todo: todo,
				data: '',
			});
		}
	};

	handleInputEnter = e => {
		if (e.keyCode === 13) {
			this.handleInputPush();
		}
	};

	handleListColor = i => {
		const todo = this.state.todo;
		todo[i].isActive = !todo[i].isActive;
		this.setState({ ...this.state, todo });
	};

	handleListDelete = i => {
		const todo = this.state.todo;
		todo.splice(i, 1);
		this.setState({
			todo: todo,
		});
	};
	render() {
		return (
			<div className='App'>
				<div className='list'>
					<List
						todo={this.state.todo}
						handleListColor={this.handleListColor}
						handleListDelete={this.handleListDelete}
					/>
				</div>
				<div className='input'>
					<Input
						data={this.state.data}
						handleInputTrack={this.handleInputTrack}
						handleInputPush={this.handleInputPush}
						handleInputEnter={this.handleInputEnter}
					/>
				</div>
			</div>
		);
	}
}
