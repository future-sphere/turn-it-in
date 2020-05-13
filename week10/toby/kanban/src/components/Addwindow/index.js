import React from 'react';

export default function AddWindow({
	name,
	changeWindowNameInput,
	addNewWindow,
	enterWindow,
}) {
	return (
		<div className='add__window' onKeyPress={enterWindow}>
			>
			<input
				type='text'
				value={name}
				onChange={changeWindowNameInput}
				placeholder='type your Todo name'
			/>
			<button onClick={addNewWindow}>add window</button>
		</div>
	);
}
