import UsersService from '../service/users';

const Reducer = (state, action) => {
	const newState = state;
	switch (action.type) {
		case 'DEL_TODO':
			return {
				...state,
				todos: state.todos.filter((x) => x !== state.todos[action.i]),
			};
		case 'FINISH_TODO':
			const { i } = action;
			const activeState = state.todos[i].isFinished;
			state.todos[i].isFinished = !activeState;
			return {
				...state,
			};
		case 'ADD_TODO':
			state.todos.push({ todo: state.data, isFinished: false });
			state.data = '';
			return {
				...state,
			};
		case 'GET_DATA':
			newState.data = action.payload;
			return {
				...newState,
			};
		case 'FETCH_TODO':
			newState.todos = action.allTodos;
			return {
				...newState,
			};
		default:
			return state;
	}
};

export default Reducer;
