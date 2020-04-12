const completeReducer = (state = true, action) => {
	switch (action.type) {
		case 'COMPLETE':
			return !state;
		default:
			return true;
	}
};

export default completeReducer;
