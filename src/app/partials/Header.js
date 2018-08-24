import React from 'react';
import ListViewToggle from '../containers/ListViewToggle';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className="title"> <h1>Marvel Characters</h1></Link>
            <ListViewToggle />
        </header>
    );
};

export default Header;