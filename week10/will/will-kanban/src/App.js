import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import './App.scss';

const initialAdd = '';
const initialTodo = [
	{ todos: [], title: 'Backlog', isEdit: false },
	{ todos: [], title: 'In progress', isEdit: false },
	{ todos: [], title: 'Review', isEdit: false },
	{ todos: [], title: 'Done', isEdit: false },
];
const App = () => {
	const [todo, setTodo] = useState(initialTodo);
	const [input, setInput] = useState(['', '', '', '']);
	const [add, setAdd] = useState(initialAdd);
	const [editData, setEditData] = useState('');

	const handleEdit = index => {
		const newTodo = [...todo];
		newTodo[index].isEdit = !newTodo[index].isEdit;
		setTodo(newTodo);
	};

	const handleTodoEdit = (index, i) => {
		const newTodo = [...todo];
		newTodo[index].todos[i].isEdit = !newTodo[index].todos[i].isEdit;
		setTodo(newTodo);
	};

	const handleSubmmitEdit = (e, index, i, n) => {
		const newTodo = [...todo];
		if (e.keyCode == 13 && editData !== '' && n == 1) {
			newTodo[index].title = editData;
			setTodo(newTodo);
			setEditData('');
			handleEdit(index);
		} else if (e.keyCode == 13 && editData == '' && n == 1) alert('Sorry');
		else if (e.keyCode == 13 && editData !== '' && n == 2) {
			newTodo[index].todos[i].txet = editData;
			setTodo(newTodo);
			setEditData('');
			handleTodoEdit(index, i);
		} else if (e.keyCode == 13 && editData == '' && n == 2) alert('Sorry');
	};

	const handleGetEdit = e => {
		setEditData(e.target.value);
	};

	const handleGetAdd = e => {
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
			newTodo.push({ todos: [], title: newAdd, isEdit: false });
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
			newTodo[index].todos.push({
				text: input[index],
				isFinished: false,
				isEdit: false,
			});
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
						editData={editData}
						todo={todo}
						handleEdit={handleEdit}
						handleGetValue={handleGetValue}
						handleSubmmitData={handleSubmmitData}
						handlePush={handlePush}
						handleDelete={handleDelete}
						handleSlide={handleSlide}
						handleSwitch={handleSwitch}
						handleRemove={handleRemove}
						handleMove={handleMove}
						handleGetEdit={handleGetEdit}
						handleSubmmitEdit={handleSubmmitEdit}
						handleTodoEdit={handleTodoEdit}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
