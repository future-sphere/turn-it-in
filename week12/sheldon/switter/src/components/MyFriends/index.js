import React, { useState, useEffect } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import userService from '../../services/user';
import { Link } from 'react-router-dom';

const MyFriends = ({ user }) => {
	const [friendArr, setFriendArr] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');
		const findFriend = async () => {
			try {
				const myfriends = await userService.findFriendById(
					user._id,
					page,
					userToken,
				);
				if (myfriends.data.success) {
					setFriendArr(myfriends.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};

		findFriend();
	}, [user, page]);

	const handlePage = num => {
		setPage(num);
	};

	return (
		<div className='myfriends-container'>
			<div className='myfriends-title'>My Friends</div>
			<div className='myfriends-list-container'>
				{friendArr &&
					friendArr.map(friend => (
						<Link to={`/profile/status/${friend._id}`}>
							<div className='myfriends-list-content'>
								<img src={friend.avatar} alt='' />
								<div className='myfriends-name'>{friend.lastName}</div>
							</div>
						</Link>
					))}
			</div>
			<div className='myfriends-page-select'>
				<div onClick={() => handlePage(1)}>1</div>
				<div onClick={() => handlePage(2)}>2</div>
				<div onClick={() => handlePage(3)}>3</div>
			</div>
		</div>
	);
};

export default MyFriends;
