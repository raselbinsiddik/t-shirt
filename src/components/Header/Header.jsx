import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link> 
           <Link to="/review">OrderReview</Link> 
           <Link to="/garndpa">grandpa</Link> 
           <Link to="/contact">contact</Link> 
        </nav>
    );
};

export default Header;