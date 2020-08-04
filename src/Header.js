import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
					<nav>
						<Link to='/' style={{textDecoration: 'none'}}>Home</Link>
						<Link to='/browse' style={{textDecoration: 'none'}}>Browse</Link>
						{/* <p>Search</p> */}
					</nav>
				);
    }
}

export default Header;