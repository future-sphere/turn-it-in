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

	const isRead = conversation => {
		let n = 0;
		for (let i = 0; i < conversation.length; i++) {
			if (conversation[i].isRead === false) {
				n++;
			}
		}
		return n;
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
						isRead={isRead}
					/>
					<Conversation
						users={users}
						isActive={isActive}
						currentChat={currentChat}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
