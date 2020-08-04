import React, { Component } from 'react';

const browseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [],
        }
    }
    // componentDidMount() {
    //     const letter = this.props.match.params.value;
    //     const url = `${browseUrl}${letter}.json`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(res => {

    //     })
    // }
    handleClick = () => {
        fetch(`${browseUrl}${event.target.value}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                cocktail: res.drinks
            })
            console.log(this.state)
        })
    }

    render() {
        return (
					<div className='buttons'>
						<button onClick={this.handleClick}>A</button>
						<button onClick={this.handleClick}>B</button>
						<button>C</button>
						<button>D</button>
						<button>E</button>
						<button>F</button>
						<button>G</button>
						<button>H</button>
						<button>I</button>
						<button>J</button>
						<button>K</button>
						<button>L</button>
						<button>M</button>
						<button>N</button>
						<button>O</button>
						<button>P</button>
						<button>Q</button>
                        <button>R</button>
                        <button>S</button>
                        <button>T</button>
                        <button>U</button>
                        <button>V</button>
                        <button>W</button>
                        <button>X</button>
                        <button>Y</button>
                        <button>Z</button>
					</div>
				);
    }
}

export default Browse;