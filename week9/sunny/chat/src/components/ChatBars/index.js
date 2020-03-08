import React from 'react';
import avatarUrl from '../../constant/avatar';
import './index.css';

export default function ChatBars({ groups, users, handleClickOpen }) {
	return (
		<div className='chat-container'>
			<div className='chat-bar-nav'>
				<p>All Conversations</p>
				<span>NEW MESSAGE</span>
			</div>
			<div className='chat-list-wrapper'>
				{groups &&
					groups.map((data, i) => {
						const last = data.conversations.length - 1;
						const lastSendTime = data.conversations[last].sendTime;
						const lastSendTimeArr = lastSendTime.split('');
						lastSendTimeArr.splice(2, 0, ':');
						const displayTime = lastSendTimeArr.join('');

						return (
							<div
								onClick={() => {
									handleClickOpen(data);
								}}
								className='chat-list-container'>
								<div className='chat-list-avatar'>
									<img
										className='avatar-a'
										src={`${avatarUrl}${data.members[0]}.jpg`}
										alt='avatar'
									/>
									<img
										className='avatar-b'
										src={`${avatarUrl}${data.members[1]}.jpg`}
										alt='avatar'
									/>
								</div>
								<div className='chat-list-text'>
									<h3>{data.title}</h3>
									<p>
										{data.conversations &&
											data.conversations[last].text
												.split(' ')
												.slice(0, 10)
												.join(' ')}
										...
									</p>
								</div>
								<p className='chat-list-time'>
									{displayTime}
									{/* {`${lastSendTime.slice(0, 2)}:${lastSendTime.slice(2)}`} */}
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}
