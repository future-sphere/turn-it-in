import React from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import delet from '../../images/Xshape.svg';
import classnames from 'classnames';
import Name from '../../helper/name';
import FriendContent from '../FriendContent';

const FriendBox = ({ idData, displayBox, handleDisplayBox, user }) => {
	return (
		<div className={classnames('friendbox-container')}>
			<div className='friendbox-header'>
				<span>
					{idData.firstName && Name.capitalizeName(idData.firstName)}'s Friend
				</span>
				<input placeholder='Search for friends' type='text' />
			</div>
			<div className='friendbox-wrapper'>
				{idData.friends &&
					idData.friends.map(friend => (
						<FriendContent user={user} friend={friend} />
					))}
			</div>
		</div>
	);
};

export default FriendBox;
