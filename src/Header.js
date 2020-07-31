import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
					<nav>
						<Link to='/'>Home</Link>
						<Link to='/browse'>Browse</Link>
						<p>Search</p>
					</nav>
				);
    }
}

export default Header;