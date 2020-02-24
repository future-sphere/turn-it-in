import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListWindow from './Componenet/TodoList';
import 

class App extends Component {
	state = {
		time: '',
		todos: [],
  };
  
  clearInput=index=>{

  };



  addTodo=e=>{

  };



	render() {
		return (
			<div className='App'>
				<TodoListWindow />
			</div>
		);
	}
}

export default App;
