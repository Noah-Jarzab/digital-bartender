import React, { Component } from 'react';

class Cocktail extends Component {
    render() {
        // let result = this.props.cocktail.find(
        //     (cocktail) => cocktail.name === this.props.params.cocktail
        // );
        console.log(this.props);
        return (
					<div>
						<img
							src={this.props.cocktail.strDrinkThumb}
							alt={this.props.cocktail.name}
						/>
						<h2>{this.props.cocktail.strDrink}</h2>
						<ul>
							<li>
								{this.props.cocktail.strMeasure1}{' '}
								{this.props.cocktail.strIngredient1}
							</li>
							<li>
								{this.props.cocktail.strMeasure2}{' '}
								{this.props.cocktail.strIngredient2}
							</li>
							<li>
								{this.props.cocktail.strMeasure3}{' '}
								{this.props.cocktail.strIngredient3}
							</li>
							<li>
								{this.props.cocktail.strMeasure4}{' '}
								{this.props.cocktail.strIngredient4}
							</li>
							<li>
								{this.props.cocktail.strMeasure5}{' '}
								{this.props.cocktail.strIngredient5}
							</li>
							<p>{this.props.cocktail.strInstructions}</p>
						</ul>
					</div>
				);
    }
}

export default Cocktail;