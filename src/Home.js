import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
					<div>
						<h3>{this.props.cocktail.strDrink}</h3>
						<Link to='/cocktail/'>
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