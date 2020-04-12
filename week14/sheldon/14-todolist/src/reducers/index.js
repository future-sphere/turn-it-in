import todoReducer from './todo';
import completeReducer from './complete';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
	todoReducer,
	completeReducer,
});

export default allReducer;
