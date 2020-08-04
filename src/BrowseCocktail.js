import React, { Component } from 'react';

class BrowseCocktail extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		cocktail: [],
	// 	};
	// }
	render() {
        let result = this.props.cocktail.find(
            (cocktails) => cocktails.strDrink === this.props.match.params.cocktails
        );
		return (
			<div className='detail-veiw'>
				<img
					src={result.strDrinkThumb}
					alt={result.name}
				/>
				<h2>{result.strDrink}</h2>

				<span>
					{result.strMeasure1} {result.strIngredient1}
				</span>
				<br></br>
				<span>
					{result.strMeasure2} {result.strIngredient2}
				</span>
				<br></br>
				<span>
					{result.strMeasure3} {result.strIngredient3}
				</span>
				<br></br>
				<span>
					{result.strMeasure4} {result.strIngredient4}
				</span>
				<br></br>
				<span>
					{result.strMeasure5} {result.strIngredient5}
				</span>
				<br></br>
				<span>
					{result.strMeasure6} {result.strIngredient6}
				</span>
				<br></br>
				<span>
					{result.strMeasure7} {result.strIngredient7}
				</span>
				<br></br>
				<span>
					{result.strMeasure8} {result.strIngredient8}
				</span>
				<br></br>
				<span>
					{result.strMeasure9} {result.strIngredient9}
				</span>
				<p>{result.strInstructions}</p>
			</div>
		);
	}
}

export default BrowseCocktail;