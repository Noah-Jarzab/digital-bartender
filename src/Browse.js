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
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Browse;