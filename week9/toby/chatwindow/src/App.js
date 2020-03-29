import React from 'react';
import './App.css';
import ChatGroup from './components/ChatGroup';
import ChatWindow from './components/ChatWindow';
import Searchbar from './components/Searchbar';
import Navbar from './components/Searchbar';
import BackgroundImg from './images/bg.jpg';
import Groups from './constants/groups.json';
import Users from './constants/users.json';

class App extends React.Component {
	state = {
		groups: Groups,
		users: Users,
		searchinput: '',
		chatinput: '',
		currentUserId: '',
		currentUserChats: [],
		unread:[],
		isUsersLoginOpen: true,
		isChatwindowOpen: false,
		isGroupSelected: false,
		isMenuSelected: false,
	};

	changeChatInput = e => {
		this.setState({
			...this.state,
			chatinput: e.target.value,
		});
	};

	changeSearchInput = e => {
		this.setState({
			...this.state,
			searchinput: e.target.value,
		});
	};

	defaultChooseUser = index => {
		const user = this.state.users[index];
		const currentUserChats = [];
		const groups = this.state.groups;
		for (i = 0; i < groups.length; i++) {
			if (groups[i].members.includes[user.id]) {
				currentUserChats.push(groups[i]);
			}
		}
		this.setState({
			...this.state,
			currentUserId: user.id,
			currentUserChats,
			isUsersLoginOpen: false,
		});
	};

	reorderChats = index => {
		const currentUserChats = this.state.currentUserChats;
		currentUserChats[index].conversations.sort((a, b) =>
			a.sendTime - b.sendTime ? 1 : -1,
		);
		currentUserChats.sort((a, b) =>
			a.conversations[a.conversations.length - 1].sendTime -
			b.conversations.[b.conversations.length-1].sendTime
				? 1
				: -1,
		);
		this.setState({
			...this.state,
			currentUserChats,
		});
	};

	openLoginWindow = () => {
		this.setState({
			...this.state,
			isUsersLoginOpen: true,
		});
	};

	unreadGroupMessage = () => {
		const currentUserChats=this.state.currentUserChats;
		const unread=this.state.unread;
};


	render() {
		return (
			<div className='App'>
				<img src={BackgroundImg} alt='background image' />
				<div className='container'>
					<Navbar />
					<div>
						<Searchbar />
						<ChatGroup />
						<ChatWindow />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
