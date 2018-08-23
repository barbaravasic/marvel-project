import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <form className="search-form">
            <input type="search" id="search "className="search" />
            <label forHtml="search" className="search-icon"><i class="fas fa-search"></i></label>
        </form>
    );
};

export default Search;