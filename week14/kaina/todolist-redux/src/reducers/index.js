import { combineReducers } from 'redux';
import todos from './todos';

const allReducer = combineReducers({
	todos,
});

export default allReducer;
