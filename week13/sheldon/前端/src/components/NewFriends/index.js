import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import add from '../../images/add.svg';
import userService from '../../services/user';
import { useState } from 'react';

const NewFriends = ({ user, strangers, handleNewPage, setStrangers }) => {
	const handleAddFriend = async (item, index) => {
		const userToken = window.localStorage.getItem('token');
		try {
			const newFriend = await userService.addFriend(
				user._id,
				item._id,
				userToken,
			);
			if (newFriend.data.success) {
				console.log(newFriend);
				const nextStrangers = [...strangers];
				nextStrangers.splice(index, 1);
				setStrangers(nextStrangers);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='myfriends-container'>
			<div className='myfriends-title'>New Friends</div>
			<div className='myfriends-list-container'>
				{strangers &&
					strangers.map((item, index) => (
						<div className='myfriends-list-content'>
							<div className='myfriends-info'>
								<img src={item.avatar} alt='' />
								<div className='myfriends-name'>
									{item.fistName} {item.lastName}
								</div>
							</div>
							<img
								onClick={() => handleAddFriend(item, index)}
								src={add}
								alt=''
							/>
						</div>
					))}
			</div>
			<div className='myfriends-page-select'>
				<div onClick={() => handleNewPage(1)}>1</div>
				<div onClick={() => handleNewPage(2)}>2</div>
				<div onClick={() => handleNewPage(3)}>3</div>
			</div>
		</div>
	);
};

export default NewFriends;
