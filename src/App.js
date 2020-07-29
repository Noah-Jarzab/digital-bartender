import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cocktail: {},
		};
	}
	componentDidMount() {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then((res) => res.json())
		.then((json) => {
			this.setState({ cocktail: json });
		})
	}
	render() {
		const apiKey = process.env.REACT_APP_MYAPI_KEY;
		return (
			<div className='App'>
				<header className='App-header'>
					
				</header>
			</div>
		);
	}
}

export default App;
