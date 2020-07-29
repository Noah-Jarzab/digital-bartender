import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
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
		console.log(this.state.cocktail)
		const apiKey = process.env.REACT_APP_MYAPI_KEY;
		return (
			<div className='App'>
				<h1>{this.state.cocktail.strDrink}</h1>
				<img
					src={this.state.cocktail.strDrinkThumb}
					alt={this.state.cocktail.strDrink}
				/>
				<ul>
					<li>
						{this.state.cocktail.strMeasure1}{' '}
						{this.state.cocktail.strIngredient1}
					</li>
					<li>
						{this.state.cocktail.strMeasure2}{' '}
						{this.state.cocktail.strIngredient2}
					</li>
					<li>
						{this.state.cocktail.strMeasure3}{' '}
						{this.state.cocktail.strIngredient3}
					</li>
					<li>
						{this.state.cocktail.strMeasure4}{' '}
						{this.state.cocktail.strIngredient4}
					</li>
					<li>
						{this.state.cocktail.strMeasure5}{' '}
						{this.state.cocktail.strIngredient5}
					</li>
				</ul>
			</div>
		);
	}
}

export default App;
