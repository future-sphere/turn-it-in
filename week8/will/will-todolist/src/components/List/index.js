import React from 'react';
import './index.scss';
import classnames from 'classnames';

const list = ({ todo, handleListColor, handleListDelete }) => {
	return (
		<div className='list-container'>
			<h2>To &thinsp;Do &thinsp;List</h2>
			<div className='list-block'>
				{todo.map((v, i) => (
					<div className={classnames('list', { active: v.isActive })}>
						<div>
							<button onClick={() => handleListColor(i)}>
								<i class='fas fa-check-circle'></i>
							</button>
							<span>{v.text}</span>
							<button onClick={() => handleListDelete(i)}>
								<i class='fas fa-times-circle'></i>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default list;
