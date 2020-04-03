import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import todoService from '../../services/todolist';

const Form = ({ list, handleDeleteTodo, handleDisplayInput, setList }) => {
	const [title, setTitle] = useState('');
	const inputElement = useRef(null);
	const inputButtonElement = useRef(null);

	const inputElementArr = [];

	const titleUpdate = e => {
		setTitle(e.target.value);
	};

	const handleChangeTitle = async (index, e) => {
		const currTodo = list[index].todo;
		const id = list[index]._id;
		const isActive = list[index].isActive;
		if (e.keyCode === 13) {
			try {
				const newTitle = await todoService.changeTodo(title, isActive, id);
				const newList = [...list];
				newList[index].todo = title;
				newList[index].isEdit = false;
				setList(newList);
			} catch (error) {
				alert(error.message);
			}
		}
	};

	// const handleTitleClick = e => {
	// 	if (
	// 		inputButtonElement.current !== e.target &&
	// 		inputElement.current !== e.target
	// 	) {
	// 		setDisplayInput(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener('click', handleTitleClick);
	// }, []);

	return (
		<div>
			{list.map((todo, index) => (
				<div className='todo'>
					<div
						ref={inputButtonElement}
						onClick={() => handleDisplayInput(index)}
						className='title'>
						{todo.isEdit && (
							<input
								ref={inputElement}
								onChange={titleUpdate}
								onKeyDown={e => handleChangeTitle(index, e)}
								type='text'
							/>
						)}
						{todo.todo}
					</div>
					<div onClick={() => handleDeleteTodo(index)} className='delete'>
						X
					</div>
				</div>
			))}
		</div>
	);
};

export default Form;
