import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const browseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [],
        }
    }
    
    handleClick = (event) => {
        const letter = event.target.innerText.toLowerCase();
        const url = `${browseUrl}${letter}`;
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                cocktail: json.drinks
            })
            // render() {
                return (
                    <div>
                        {this.state.cocktail.map((cocktail) => {
                            return (
                                <Link to={`/cocktail/${cocktail.strDrink}`}>
                                    <img src={cocktail.strDrinkThumb} key={cocktail.strDrink} alt={cocktail.strDrink} />
                                </Link>
                            )
                        })}
                    </div>
                )
            // }
            // .catch((err) => {
            //     console.log(err)
            // })
        })
        console.log(this.state)
    }
    render() {
        return (
					<div className='buttons'>
						<button onClick={this.handleClick}>A</button>
						<button onClick={this.handleClick}>B</button>
						<button onClick={this.handleClick}>C</button>
						<button onClick={this.handleClick}>D</button>
						<button onClick={this.handleClick}>E</button>
						<button onClick={this.handleClick}>F</button>
						<button onClick={this.handleClick}>G</button>
						<button onClick={this.handleClick}>H</button>
						<button onClick={this.handleClick}>I</button>
						<button onClick={this.handleClick}>J</button>
						<button onClick={this.handleClick}>K</button>
						<button onClick={this.handleClick}>L</button>
						<button onClick={this.handleClick}>M</button>
						<button onClick={this.handleClick}>N</button>
						<button onClick={this.handleClick}>O</button>
						<button onClick={this.handleClick}>P</button>
						<button onClick={this.handleClick}>Q</button>
						<button onClick={this.handleClick}>R</button>
						<button onClick={this.handleClick}>S</button>
						<button onClick={this.handleClick}>T</button>
						<button onClick={this.handleClick}>U</button>
						<button onClick={this.handleClick}>V</button>
						<button onClick={this.handleClick}>W</button>
						<button onClick={this.handleClick}>X</button>
						<button onClick={this.handleClick}>Y</button>
						<button onClick={this.handleClick}>Z</button>
					</div>
				);
    }
}

export default Browse;