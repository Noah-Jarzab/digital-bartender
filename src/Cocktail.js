import React, { Component } from 'react';

class Cocktail extends Component {
    render() {
        let result = this.props.data.find(
            (cocktail) => cocktail.name === this.props.params.cocktail
        );
        console.log(this.props.match);
        return (
            <div>
                <img src={result.} alt={result.name}/>
                <h2>{result.name}</h2>
            </div>
        );
    }
}

export default Cocktail;