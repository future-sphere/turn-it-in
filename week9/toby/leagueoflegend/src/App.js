import React from 'react';
import './App.css';
import Popup from './components/Popup/index';
import Champions from './components/Champions/index';
import ChampionService from './services/champions';

class App extends React.Component {
	state = {
		skinNumber: 0,
		isPop: false,
		allChampions: {},
		chosenChampion: {},
	};
	componentDidMount = async () => {
		const Champions = await ChampionService.fetchAllChampions();
		this.setState({
			...this.state,
			allChampions: Champions.data.data,
		});
	};

	hidePopup = () => {
		this.setState({
			...this.state,
			isPop: false,
			skinNumber: 0,
		});
	};

	showPopup = id => {
		const allChampions = this.state.allChampions;
		this.setState({
			...this.state,
			skinNumber: 0,
			isPop: true,
			chosenChampion: allChampions[id],
		});
	};

	showBrief = () => {
		this.setState({
			isShown: true,
			isClicked: true,
		});
	};

	imgError = () => {
		const skinNumber = this.state.skinNumber;
		if (skinNumber <= 15) {
			this.setState({
				skinNumber: skinNumber + 1,
			});
		} else {
			this.setState({
				skinNumber: 0,
			});
		}
	};

	switchSkin = () => {
		const skinNumber = this.state.skinNumber;
		if (skinNumber <= 15) {
			this.setState({
				skinNumber: skinNumber + 1,
			});
		} else {
			this.setState({
				skinNumber: 0,
			});
		}
	};

	render() {
		return (
			<div className='App'>
				<Popup
					isPop={this.state.isPop}
					chosenChampion={this.state.chosenChampion}
					hidePopup={this.hidePopup}
					showBrief={this.showBrief}
					imgError={this.imgError}
					skinNumber={this.state.skinNumber}
					switchSkin={this.switchSkin}
				/>
				<div className='champions__container'>
					{Object.entries(this.state.allChampions).map(champion => (
						<Champions showPopup={this.showPopup} Champion={champion[1]} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
