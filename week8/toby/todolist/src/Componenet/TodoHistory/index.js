import React from 'react';
import './index.scss';
const TodoHistory = ({
	completedTodos,
	clearHistory,
	markIncompleted,
	historyData,
}) => {
	return (
		<div>
			<div className='historyWindow'>
				{completedTodos.map((addedCompletedTodo, i) => (
					<div className='listHistory'>
						<span>{addedCompletedTodo}</span>
						<button onClick={() => markIncompleted(i)}>Mark Incompleted</button>
					</div>
				))}
				<div>{historyData}</div>
			</div>
			<button className='clear__button' onClick={clearHistory}>
				Clear History
			</button>
		</div>
	);
};
export default TodoHistory;
