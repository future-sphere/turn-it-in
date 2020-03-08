import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Search from './components/Search';
import ChatBars from './components/ChatBars';
import Conversation from './components/Conversation';
import Services from './services';
import './App.css';

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

	const handleClickOpen = v => {
		setActive(true);
		setCurrentChat(v);
	};

	const handleClickClose = () => {
		setActive(!isActive);
	};

	return (
		<div className='App'>
			<Menu />
			<div className='chat-right'>
				<Search />
				<div className='chat-right-bottom'>
					<ChatBars
						groups={groups}
						users={users}
						handleClickOpen={handleClickOpen}
					/>
					<Conversation
						users={users}
						isActive={isActive}
						currentChat={currentChat}
						handleClickClose={handleClickClose}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
