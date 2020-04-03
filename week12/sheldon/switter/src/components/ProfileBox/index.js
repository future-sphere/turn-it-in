import React, { useState, useEffect } from 'react';
import './index.scss';
import icon from '../../images/icon.svg';
import classnames from 'classnames';
import Name from '../../helper/name';
import userService from '../../services/user';

const ProfileBox = ({ displayBox, handleDisplayBox, user, id }) => {
	const [idData, setIdData] = useState({});
	console.log(idData);

	useEffect(() => {
		const userToken = window.localStorage.getItem('token');

		const fetchUser = async () => {
			if (id) {
				try {
					const info = await userService.findUserById(id, userToken);
					if (info.data.success) {
						setIdData(info.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		fetchUser();
	}, []);

	return (
		<div className={classnames('profilebox-container')}>
			<div className='profilebox-banner'>
				{idData.firstName && Name.capitalizeName(idData.firstName)}'s Profile
			</div>
			<div className='profilebox-wrapper'>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My name</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>
							{idData.firstName && Name.capitalizeName(idData.firstName)}
							{` `}
							{idData.lastName && Name.capitalizeName(idData.lastName)}
						</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My number</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>
							{idData.phone && idData.phone}
						</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My home address</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>17161 alva rd 92127</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title'>My Relationship Status</div>

					<div className='profilebox-content-wrapper'>
						<div className='profilebox-content'>In relationship</div>
						<div className='profilebox-change'>Change</div>
					</div>
				</div>
				<div className='profilebox-info'>
					<div className='profilebox-title-wrapper'>
						<div className='profilebox-title'>My Profile Picture</div>
						<span className='profilebox-upload'>Upload</span>
					</div>
					<img src={idData.avatar} alt='' />
				</div>
			</div>
		</div>
	);
};

export default ProfileBox;
