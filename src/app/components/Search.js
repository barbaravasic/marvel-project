import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <form className="search-form">
            <input type="search" id="search "className="search" onKeyUp={props.onSearchCharacters}/>
            <label htmlFor="search" className="search-icon"><i className="fas fa-search"></i></label>
        </form>
    );
};

export default Search;