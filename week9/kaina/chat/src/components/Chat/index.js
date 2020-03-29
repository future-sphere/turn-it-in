import React from 'react';
import classnames from 'classnames';
import './index.css';
import userUrl from '../../constant/userUrl';

const Chat = ({ groups, isActive, currentChat, handleClickOpen, users }) => {
	return (
		<div className={classnames('chat-wrapper', { isActive: isActive })}>
			<div className='chat-content'>
				<h3>{currentChat && currentChat.title}</h3>
				<div className='avatar-list'>
					{currentChat &&
						currentChat.members &&
						currentChat.members.map(k => (
							<div className='avatar-bar'>
								<img src={`${userUrl}${k}.jpg `} alt='' />
							</div>
						))}
				</div>
			</div>
			<div className='message-container'>
				{currentChat &&
					currentChat.conversations &&
					currentChat.conversations.map(j => (
						<div className={classnames('others', { me: j.sender == '7' })}>
							<div className='sender'>
								<div className='sender-name'>
									<div className='name-box'>
										<img src={`${userUrl}${j.sender}.jpg `} alt='' />
										<h5>
											{`${users[j.sender].firstName} ${
												users[j.sender].lastName
											} `}
										</h5>
									</div>

									<span>
										{`${j.sendTime.slice(0, 2)}:${j.sendTime.slice(2, 4)}  `}
									</span>
								</div>
								<div className='message'>
									<p>{`${j.text}`} </p>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className='input'>
				<input type='text' placeholder='Type a message...' />
			</div>
		</div>
	);
};

export default Chat;
