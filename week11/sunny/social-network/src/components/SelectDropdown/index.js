import React, { useState } from 'react';
import classnames from 'classnames';
import './index.scss';

const options = [
	{
		title: 'Male',
	},
	{
		title: 'Female',
	},
	{
		title: 'Not Sure',
	},
];

export default function SelectDropdown({
	handleSelectUpdate,
	data = 'Select your gender',
}) {
	const [showDropdown, setDropdown] = useState(false);
	return (
		<div className='select-container'>
			<div
				onClick={() => setDropdown(!showDropdown)}
				className='select-visible'>
				<p> {data}</p>
				<i class='fas fa-chevron-down'></i>
			</div>
			<div className={classnames('select-dropdown', { show: showDropdown })}>
				{options.map(option => (
					<div
						key={option.title}
						onClick={() => {
							handleSelectUpdate(option.title);
							setDropdown(false);
						}}
						className='option'>
						{option.title}
					</div>
				))}
			</div>
		</div>
	);
}
