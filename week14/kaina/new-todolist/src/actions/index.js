// export const increment = (nr) => {
// 	return {
// 		type: 'INCREMENT',
// 		payload: nr,
// 	};
// };

export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text,
	};
};

export const deleteTodo = () => {
	return {
		type: 'DELETE_TODO',
	};
};

export const newTodo = () => {
	return {
		type: 'NEW_TODO',
	};
};
