import React from 'react';
import './index.css';
import userUrl from '../../constant/userUrl';

const Conversation = ({ groups, handleClickOpen }) => {
	return (
		<div className='conversation-container'>
			<div className='conversation-title'>
				<h3>All Conversations</h3>
				<h4>New Message</h4>
			</div>
			<div className='chat-container'>
				{groups &&
					groups.map((v, i) => {
						const last = v.conversations.length - 1;
						return (
							<div onClick={() => handleClickOpen(v)} className='chat-box'>
								<div className='avatar'>
									<img src={`${userUrl}${v.members[0]} `} alt='user' />
									<img src={`${userUrl}${v.members[1]} `} alt='user' />
								</div>
								<div className='content'>
									<div className='title-box'>
										<div className='text-box'>
											<h3>{v.title}</h3>
											<p>
												{v.conversations &&
													`${v.conversations[last].sendTime.slice(
														0,
														2,
													)}:${v.conversations[last].sendTime.slice(2, 4)} `}
											</p>
										</div>

										<p>{v.conversations && v.conversations[last].text.split(" ").splice(0, 12).join(" ")}... </p>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Conversation;
