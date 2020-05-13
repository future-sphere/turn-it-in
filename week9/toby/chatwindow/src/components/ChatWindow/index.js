import React from 'react';

export default function ChatWindow() {
	return (
		<div className='chatwindow'>
			<div className='chatwindow__members'>
				<h2></h2>
				<span></span>
				<button></button>
				<span>|</span>
				<button></button>
				<button></button>
				<button></button>
			</div>
			<div className='chatwindow__chats'></div>
			<div>
				<input type='text' />
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}
