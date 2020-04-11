import initialTodo from './initialTodo';

const todos = (state = { ...initialTodo }, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			state.todos.push({ text: action.text });
			return {
				...state,
			};

		default:
			return {
				...initialTodo,
			};
	}
};

export default todos;
