import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Callback from './components/Callback';
import Secret from './components/Secret';
import NotFound from './components/NotFound';

class App extends Component {
	render() {
		let mainComponent = '';
		switch (this.props.location) {
			case '':
				mainComponent = <Main {...this.props} />;
				break;
			case 'callback':
				mainComponent = <Callback />;
				break;
			case 'secret':
				mainComponent = this.props.auth.isAuthenticated() ? (
					<Secret {...this.props} />
				) : (
					<NotFound />
				);
				break;
			default:
				mainComponent = <NotFound />;
		}

		return (
			<div className="App">
				<header className="App-header">
					<img src={this.props.userimage} className="userimage" alt="profile" />
					<p>Welcome to React, {this.props.name}!</p>
				</header>
				{mainComponent}
			</div>
		);
	}
}

export default App;
