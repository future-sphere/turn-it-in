import React from 'react';
import './index.css';

export default function Menu() {
	return (
		<div className='chat-left'>
			<div className='chat-left-wrapper'>
				<div className='title container'>
					<h3>PROJECT DASHBOARD</h3>
				</div>
				<div className='user container'>
					<img
						src='https://pic1.zhimg.com/v2-fda399250493e674f2152c581490d6eb_1200x500.jpg'
						alt='pic'
					/>
					<div>
						<h4>Sunny Wang</h4>
						<p>WEB DESIGNER</p>
					</div>
				</div>
				<div className='menu container'>
					<p>MENU</p>
					<div>
						<i class='fas fa-columns'></i>
						<span>Dashboard</span>
					</div>
					<div>
						<i class='far fa-user-circle'></i>
						<span>All Users</span>
					</div>
					<div>
						<i class='far fa-file-alt'></i>
						<span>Documents</span>
					</div>
					<div>
						<i class='far fa-comments'></i>
						<span>Conversations</span>
					</div>
					<div>
						<i class='fas fa-lock'></i>
						<span>Projects</span>
					</div>
					<div>
						<i class='far fa-calendar'></i>
						<span>Schedule</span>
					</div>
					<div>
						<i class='far fa-credit-card'></i>
						<span>Payments</span>
					</div>
				</div>
				<div className='support container'>
					<p>SUPPORT</p>
					<div>
						<i class='far fa-question-circle'></i>
						<span>Need Help?</span>
					</div>{' '}
					<div>
						<i class='far fa-envelope'></i>
						<span>Contact Us</span>
					</div>
				</div>
				<div className='setting container'>
					<p>SETTING</p>
					<div>
						<i class='fas fa-cog'></i>
						<span>Account</span>
					</div>{' '}
					<div>
						<i class='far fa-moon'></i>
						<span>Dark Mode</span>
					</div>
					<div>
						<i class='fas fa-sign-out-alt'></i>
						<span>Log Out</span>
					</div>
				</div>
				<footer className='container footer'>
					<b>Project Dashboard Inc.</b>
					<p>
						Created with love for the community of designers and project
						managers.
					</p>
				</footer>
			</div>
		</div>
	);
}
