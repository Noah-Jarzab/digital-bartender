import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav>
               <Link to='/'>Home</Link>
               Browse
               Search
            </nav>
        );
    }
}

export default Header;