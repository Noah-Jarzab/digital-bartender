import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
					<div className='home'>
						<h2>{this.props.cocktail.strDrink}</h2>
						<Link to={`/cocktail/${this.props.cocktail.strDrink}`}>
							<img
								src={this.props.cocktail.strDrinkThumb}
								alt={this.props.cocktail.strDrink}
							/>
						</Link>
					</div>
				);
    }
}

export default Home;