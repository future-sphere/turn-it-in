import React from 'react';
import './index.scss';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = {
	addTodo,
};

const TodoList = ({ todos: { todos }, addTodo }) => {
	console.log(todos);

	return (
		<div className='form-container'>
			<div className='todolist'>
				<div className='title'>
					<h3>To Do List</h3>
				</div>
				<div className='form-box'>
					{todos.map((v, i) => (
						<div className='todo'>
							<div className='text-box'>
								<button></button>
								<span>{v.text}</span>
							</div>
							<button>
								<i class='far fa-trash-alt'></i>
							</button>
						</div>
					))}
				</div>
				<div className='submit-box'>
					<input
						// onChange={handleInputChange}
						type='text'
						placeholder='Plan for today'
						// onKeyDown={pressEnterChange}
					/>
					<button>
						<i class='fas fa-pencil-alt'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
