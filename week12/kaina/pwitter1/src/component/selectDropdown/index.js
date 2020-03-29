import React, { useState } from 'react';
import classnames from 'classnames';

import './index.scss';

const genderOptions = [
	{
		title: 'Male',
	},
	{
		title: 'Female',
	},
	{
		title: 'Undefined',
	},
];

export default function SelectDropDown({
	handleSelectUpdate,
	data = 'Select your gender',
}) {
	const [showDropdown, setDropdown] = useState(false);

	return (
		<div className='select-container'>
			<div
				onClick={() => setDropdown(!showDropdown)}
				className='select-visible'>
				{data}
			</div>
			<div className={classnames('select-dropdown', { show: showDropdown })}>
				{genderOptions.map(option => (
					<div
						classNames='option'
						onClick={() => {
							handleSelectUpdate(option.title);
							setDropdown(false);
						}}>
						{option.title}
					</div>
				))}
			</div>
		</div>
	);
}
