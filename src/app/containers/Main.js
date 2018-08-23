import React, { Component } from 'react';
import Search from '../components/Search';
import CharacterList from '../components/CharacterList';

class Main extends Component {
    render() {
        return (
            <div>
                <Search />
                <CharacterList />
            </div>
        );
    }
}

export default Main;