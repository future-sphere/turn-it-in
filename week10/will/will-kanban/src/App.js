import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import './App.scss';

const initialAdd = '';
const initialTodo = [
	{ todos: [], title: 'Backlog' },
	{ todos: [], title: 'In progress' },
	{ todos: [], title: 'Review' },
	{ todos: [], title: 'Done' },
];
const App = () => {
	const [todo, setTodo] = useState(initialTodo);
	const [input, setInput] = useState(['', '', '', '']);
	const [add, setAdd] = useState(initialAdd);

	const handleGetAdd = e => {
		const newAdd = [...add];
		setAdd(e.target.value);
	};

	const handleRemove = index => {
		const newTodo = [...todo];
		newTodo.splice(index, 1);
		setTodo(newTodo);
	};

	const handleAdd = () => {
		const newInput = [...input];
		const newAdd = [...add];
		const newTodo = [...todo];
		if (newAdd == '') alert('Sorry');
		else {
			newTodo.push({ todos: [], title: newAdd });
			newInput.push('');
		}
		setTodo(newTodo);
		setInput(newInput);
		setAdd('');
	};

	const handleClear = () => {
		const newTodo = [...todo];
		newTodo.map(v => (v.todos = []));
		setTodo(newTodo);
	};

	const handleGetValue = (eve, index) => {
		const newInput = [...input];
		newInput[index] = eve.target.value;
		setInput(newInput);
	};

	const handleSubmmitData = (e, index) => {
		if (e.keyCode == 13) handlePush(index);
	};

	const handleSwitch = (index, i) => {
		const newTodo = [...todo];
		newTodo[index].todos[i].isFinished = !newTodo[index].todos[i].isFinished;
		setTodo(newTodo);
	};

	const handlePush = index => {
		const newTodo = [...todo];
		if (input[index] == '') alert('Sorry,input is empty');
		else {
			newTodo[index].todos.push({ text: input[index], isFinished: false });
		}
		const newInput = [...input];
		newInput[index] = '';
		setTodo(newTodo);
		setInput(newInput);
	};

	const handleDelete = (index, i) => {
		const newTodo = [...todo];
		newTodo[index].todos.splice(i, 1);
		setTodo(newTodo);
	};

	const handleSlide = (v, index, i, x) => {
		const newTodo = [...todo];
		newTodo[index + x].todos.push(v);
		handleDelete(index, i);
		setTodo(newTodo);
	};

	const handleMove = (index, each, a, b) => {
		const newTodo = [...todo];
		newTodo.splice(index + a, 0, each);
		newTodo.splice(index + b, 1);
		setTodo(newTodo);
	};

	return (
		<div className='app-wrapper'>
			<Nav
				handleClear={handleClear}
				handleAdd={handleAdd}
				handleGetAdd={handleGetAdd}
				add={add}
			/>
			<div className='app-container'>
				{todo.map((each, index) => (
					<TodoList
						each={each}
						index={index}
						input={input}
						todo={todo}
						handleGetValue={handleGetValue}
						handleSubmmitData={handleSubmmitData}
						handlePush={handlePush}
						handleDelete={handleDelete}
						handleSlide={handleSlide}
						handleSwitch={handleSwitch}
						handleRemove={handleRemove}
						handleMove={handleMove}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
