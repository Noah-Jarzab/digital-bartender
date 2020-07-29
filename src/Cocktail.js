import React, { Component } from 'react';

class Cocktail extends Component {
    render() {
        // let result = this.props.cocktail.find(
        //     (cocktail) => cocktail.strDrink === this.props.match.params.cocktail
        // );
        console.log(this.props);
        return (
					<div className='detail-veiw'>
						<img
							src={this.props.cocktail.strDrinkThumb}
							alt={this.props.cocktail.name}
						/>
						<h2>{this.props.cocktail.strDrink}</h2>

						<span>
							{this.props.cocktail.strMeasure1}{' '}
							{this.props.cocktail.strIngredient1}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure2}{' '}
							{this.props.cocktail.strIngredient2}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure3}{' '}
							{this.props.cocktail.strIngredient3}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure4}{' '}
							{this.props.cocktail.strIngredient4}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure5}{' '}
							{this.props.cocktail.strIngredient5}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure6}{' '}
							{this.props.cocktail.strIngredient6}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure7}{' '}
							{this.props.cocktail.strIngredient7}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure8}{' '}
							{this.props.cocktail.strIngredient8}
						</span>
						<br></br>
						<span>
							{this.props.cocktail.strMeasure9}{' '}
							{this.props.cocktail.strIngredient9}
						</span>
						<p>{this.props.cocktail.strInstructions}</p>
					</div>
				);
    }
}

export default Cocktail;