import React from 'react';
import ListViewToggle from '../containers/ListViewToggle';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="title">Marvel Characters</h1>
            <ListViewToggle />
        </header>
    );
};

export default Header;