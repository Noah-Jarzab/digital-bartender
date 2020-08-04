import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Cocktail from './Cocktail';
import Browse from './Browse';
import Home from './Home';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cocktail: [],
		};
	}
	componentDidMount() {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ cocktail: json.drinks[0] });
			});
	}
	render() {
		// const apiKey = process.env.REACT_APP_MYAPI_KEY;
		return (
			<main className='App' key={this.state.idDrink}>
				<Header />
				<Route
					exact
					path='/'
					render={() => {
						return <Home cocktail={this.state.cocktail} />;
					}}
				/>
				<Route
					path='/browse'
					render={() => {
						return <Browse />;
					}}
				/>
				<Route
					path='/cocktail/'
					render={() => {
						return <Cocktail cocktail={this.state.cocktail} />;
					}}
				/>
			</main>
		);
	}
}

export default App;
