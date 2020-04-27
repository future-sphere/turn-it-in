import React from 'react';
import './index.scss';

const Nav = ({ add, handleClear, handleGetAdd, handleAdd }) => {
	return (
		<nav>
			<div className='navbar'>
				<img
					src='https://cdn.vox-cdn.com/thumbor/IhPPB4MaJS7mBxzhPY7lfIM65M0=/0x0:1980x1320/1200x800/filters:focal(832x502:1148x818)/cdn.vox-cdn.com/uploads/chorus_image/image/65613211/microsoftedgenewlogo.5.jpg'
					alt='logo'
				/>
				<div>
					<img
						src='https://pngriver.com/wp-content/uploads/2018/04/Download-Superman-Logo-PNG-Pic-1.png'
						alt='pic'
					/>
					<p>Will Wu</p>
				</div>
			</div>
			<div className='nav-button-container'>
				<div className='nav-button-left'>
					<input onChange={handleGetAdd} value={add} type='text' />
					<i onClick={handleAdd} class='fas fa-align-justify'></i>
				</div>
				<button onClick={handleClear}>Clean All</button>
			</div>
		</nav>
	);
};

export default Nav;
