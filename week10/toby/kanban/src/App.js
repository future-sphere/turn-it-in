import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import AddWindow from './components/Addwindow';
import Navbar from './components/Nav';
import background from './images/bg.jpg';

class App extends React.Component {
	state = {
		data: '',
		name: '',
		index: -1,
		windows: [],
	};

	addNewWindow = () => {
		if (this.state.name === '') {
			alert('Type the name please');
		} else {
			const name = this.state.name;
			const windows = this.state.windows;
			const statewindow = this.state.state;
			const newState = {
				name: name,
				data: '',
				index: this.state.index + 1,
				todos: [],
				completedTodos: [],
			};
			windows.push(newState);
			this.setState({
				windows,
				name: '',
				index: newState.index,
			});
		}
	};

	changeWindowNameInput = e => {
		this.setState({
			name: e.target.value,
		});
	};

	clearInput = (i, windowIndex) => {
		const windows = this.state.windows;
		windows[windowIndex].completedTodos.push(
			this.state.windows[windowIndex].todos[i],
		);
		windows[windowIndex].todos.splice(i, 1);
		this.setState({
			windows,
		});
	};

	addTodo = windowIndex => {
		const windows = this.state.windows;
		if (this.state.windows[windowIndex].data === '') {
			alert('Todo cant be empty');
		} else {
			windows[windowIndex].todos.push(this.state.windows[windowIndex].data);
			windows[windowIndex].data = '';
			this.setState({
				...this.state,
				windows: windows,
			});
		}
	};

	changeTodoInput = (windowIndex, e) => {
		const windows = this.state.windows;
		windows[windowIndex].data = e.target.value;
		this.setState({
			windows,
		});
	};

	moveForwardWindow = windowIndex => {
		const windows = this.state.windows;
		const chosenWindow = this.state.windows[windowIndex];
		if (windowIndex < windows.length - 1) {
			windows.splice(windowIndex + 2, 0, chosenWindow);
			windows.splice(windowIndex, 1);
		}
		this.setState({
			...this.state,
			windows,
		});
	};

	moveBackwardWindow = windowIndex => {
		const windows = this.state.windows;
		const chosenWindow = this.state.windows[windowIndex];
		if (windowIndex > 0) {
			windows.splice(windowIndex - 1, 0, chosenWindow);
			windows.splice(windowIndex + 1, 1);
		}
		this.setState({
			...this.state,
			windows,
		});
	};

	deleteWindow = windowIndex => {
		const windows = this.state.windows;
		const chosenWindow = this.state.windows[windowIndex];
		windows.splice(windowIndex, 1);
		this.setState({
			...this.state,
			windows,
		});
	};

	enterTodo = (windowIndex, e) => {
		if (e.key === 'Enter') {
			this.addTodo(windowIndex);
		}
	};

	enterWindow = e => {
		if (e.key === 'Enter') {
			this.addNewWindow();
		}
	};

	todoMoveForward = (i, windowIndex) => {
		const windows = this.state.windows;
		const chosenTodo = this.state.windows[windowIndex].todos[i];
		if (windowIndex < windows.length - 1) {
			windows[windowIndex + 1].todos.push(chosenTodo);
			windows[windowIndex].todos.splice(i, 1);
		}
		this.setState({
			...this.state,
			windows,
		});
	};
	todoMoveBackward = (i, windowIndex) => {
		const windows = this.state.windows;
		const chosenTodo = this.state.windows[windowIndex].todos[i];
		if (windowIndex > 0) {
			windows[windowIndex - 1].todos.push(chosenTodo);
			windows[windowIndex].todos.splice(i, 1);
		}
		this.setState({
			...this.state,
			windows,
		});
	};

	render() {
		return (
			<div className='App'>
				<img className='background' src={background} alt='background' />
				<Navbar />
				<div className='wrapper__add'>
					<AddWindow
						addNewWindow={this.addNewWindow}
						changeWindowNameInput={this.changeWindowNameInput}
						name={this.state.name}
						enterWindow={this.enterWindow}
					/>
				</div>
				<div className='wrapper__windows'>
					{this.state.windows.map((window, i) => (
						<Todolist
							data={this.state.windows[i].data}
							addTodo={this.addTodo}
							window={window}
							clearInput={this.clearInput}
							windowIndex={i}
							changeTodoInput={this.changeTodoInput}
							addTodo={this.addTodo}
							moveForwardWindow={this.moveForwardWindow}
							moveBackwardWindow={this.moveBackwardWindow}
							deleteWindow={this.deleteWindow}
							enterTodo={this.enterTodo}
							todoMoveBackward={this.todoMoveBackward}
							todoMoveForward={this.todoMoveForward}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
