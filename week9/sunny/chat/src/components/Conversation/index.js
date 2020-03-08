import React from 'react';
import Services from '../../services/index';
import avatarUrl from '../../constant/avatar';
import classnames from 'classnames';
import './index.css';

export default function Conversations({
	users,
	isActive,
	currentChat,
	handleClickClose,
}) {
	return (
		<div className='conversations'>
			<div className='conversation-nav'>
				<div className='nav-left' onClick={handleClickClose}>
					{currentChat.title}
				</div>
				<div className='nav-right'>
					{currentChat.members &&
						currentChat.members.map((avatar, k) => (
							<img src={`${avatarUrl}${avatar}.jpg`} alt='' />
						))}
				</div>
			</div>
			<div className='conversation-content'>
				{currentChat.conversations &&
					currentChat.conversations.map((v, j) => (
						<div className={classnames('others', { self: v.sender == 6 })}>
							<div className='single-message-container'>
								<div className='header'>
									<div className='header-left'>
										<img src={`${avatarUrl}${v.sender}.jpg`} alt='' />
										<span>{`${users[v.sender].firstName} ${
											users[v.sender].lastName
										}`}</span>
									</div>
									<div className='header-right'>{`${v.sendTime.slice(
										0,
										2,
									)}:${v.sendTime.slice(2)}`}</div>
								</div>
								<div className='message'>{v.text}</div>
							</div>
						</div>
					))}
			</div>
			<form className='conversation-form'>
				<input type='text' placeholder='Type a message...' />
				<div className='buttons'>
					<i class='far fa-image'></i>
					<i class='fas fa-paperclip'></i>
					<i class='far fa-laugh-squint'></i>
				</div>
			</form>
		</div>
	);
}
