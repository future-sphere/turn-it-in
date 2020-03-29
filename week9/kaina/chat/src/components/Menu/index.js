import React from 'react';
import './index.css';

export default function index() {
	return (
		<div className='menu-wrapper'>
			<h2>PROJECT DASHBOARD</h2>
			<div className='account-box border'>
				<img
					src='https://i.pinimg.com/564x/76/9f/dc/769fdca4b3015763161925a0837868b9.jpg'
					alt=''
				/>
				<div className='title'>
					<h4>Kaina Zhang</h4>
					<h5>WEB DESIGNER</h5>
				</div>
			</div>
			<div className='container'>
				<div className='menu-box'>
					<h3>MENU</h3>
					<div className='content'>
						<div className='item'>
							<i class='fas fa-columns'></i>
							<h4> Dashboard</h4>
						</div>
						<div className='item'>
							<i class='fas fa-users'></i>
							<h4> All Users</h4>
						</div>
						<div className='item'>
							<i class='fas fa-file-signature'></i>
							<h4> Document</h4>
						</div>
						<div className='item'>
							<i class='far fa-comments'></i>
							<h4> Conversations</h4>
						</div>
						<div className='item'>
							<i class='fas fa-tasks'></i>
							<h4> Projects</h4>
						</div>
						<div className='item'>
							<i class='far fa-calendar'></i>
							<h4> Schedule</h4>
						</div>
						<div className='item'>
							<i class='far fa-credit-card'></i>
							<h4>Payment</h4>
						</div>
					</div>
				</div>
				<div className='support-box'>
					<h3>SUPPORT</h3>
					<div className='content'>
						<div className='item'>
							<i class='far fa-question-circle'></i>
							<h4> Need Help?</h4>
						</div>
						<div className='item'>
							<i class='far fa-envelope'></i> <h4> Contact Us</h4>
						</div>
					</div>
				</div>
				<div className='setting-box'>
					<h3>SETTING</h3>
					<div className='content'>
						<div className='item'>
							<i class='fas fa-cog'></i>
							<h4> Account</h4>
						</div>
						<div className='item'>
							<i class='far fa-moon'></i>
							<h4> Dark Mode</h4>
						</div>
						<div className='item'>
							<i class='fas fa-sign-out-alt'></i>
							<h4> Log Out</h4>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<h3>Project Dashboard 2020</h3>
				<p>
					Created with love for the community of designers and project managers
				</p>
			</div>
		</div>
	);
}
