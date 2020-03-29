import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Search from './components/Search';
import Chat from './components/Chat';
import Conversation from './components/Conversation';
import Services from './services';

function App() {
	const [groups, setGroups] = useState([]);
	const [users, setUsers] = useState([]);
	const [isActive, setActive] = useState(false);
	const [currentChat, setCurrentChat] = useState({});

	useEffect(() => {
		const fetchGroupsData = async () => {
			const data = await Services.fetchGroups();
			setGroups(data.data);
		};
		fetchGroupsData();
	}, []);

	useEffect(() => {
		const fetchUsersData = async () => {
			const data = await Services.fetchUsers();
			setUsers(data.data);
		};
		fetchUsersData();
	}, []);

	const handleClickOpen = async v => {
		await setActive(true);
		setCurrentChat(v);
	};

	return (
		<div className='App'>
			<div className='menu'>
				<Menu />
			</div>
			<div className='wrapper'>
				<div className='search'>
					<Search />
				</div>
				<div className='conversation-box'>
					<Conversation
						handleClickOpen={handleClickOpen}
						groups={groups}
						isActive={setActive}
						currentChat={setCurrentChat}
					/>
					<Chat currentChat={currentChat} groups={groups} users={users} />
				</div>
			</div>
		</div>
	);
}

export default App;
