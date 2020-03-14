import React from 'react';
import './App.css';
import ChatGroup from './components/ChatGroup';
import ChatWindow from './components/ChatWindow';
import Searchbar from './components/Searchbar';
import Navbar from './components/Searchbar';
import BackgroundImg from './images/bg.jpg';
import Groups from './services/groups.json';
import Users from './services/users.json';

class App extends React.Component {
	state = {
		groups: { Groups },
		users: { Users },
		input: '',
		currentUser: {},
		isUsersLoginOpen: true,
		isChatwindowOpen: false,
		isGroupSelected: false,
		isMenuSelected: false,
	};

	changeInput = e => {
		this.setState({
			...this.state,
			input: e.target.value,
		});
	};

	defaultChooseUser = index => {
		const user = this.state.users[index];
		this.setState({
			...this.state,
			currentUser: user,
			isUsersLoginOpen: false,
		});
	};

	openLoginWindow = () => {
		this.setState({
			...this.state,
			isUsersLoginOpen: true,
		});
	};

	menuSelection = () => {
		this.setState({
			...this.state,
			isMenuSelected: true,
		});
	};

	// componentDidMount = () => {
	// 	const groups = this.state.groups;
	// 	console.log(groups);
	// 	console.log(groups.Groups);
	// };

	render() {
		return (
			<div className='App'>
				<img src={BackgroundImg} alt='background image' />
				<div className='container'>
					<Navbar />
					<Searchbar />
					<ChatGroup />
					<ChatWindow />
				</div>
			</div>
		);
	}
}

export default App;
