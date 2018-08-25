import React, { Component } from 'react';
import Search from '../components/Search';
import CharacterGrid from '../components/CharacterGrid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCharactersAction } from '../../actions/search-characters-action';
import CharacterList from '../components/CharacterList';
import { getFromStorage } from '../../services/storage-services';

import './Main.css';

class Main extends Component {

    onSearchCharacters = (event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        setTimeout(() => {
            this.props.searchCharactersAction(inputValue)
        }, 2000)
    }
    
    
    renderView() {
        const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");
        const { searchedCharacters } = this.props;
        const listView = getFromStorage("listView");
        let charactersToRender = null;
        (!searchedCharacters && bookmarkedCharacters) ?
        charactersToRender = bookmarkedCharacters :
        charactersToRender = searchedCharacters
        
        return (listView) ?
        <CharacterList searchedCharacters={charactersToRender} /> :
        <CharacterGrid searchedCharacters={charactersToRender} />
        
    }
    
    renderCharacters(){
        const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");
        if (!this.props.searchedCharacters && !bookmarkedCharacters) {
            return <h2 className="main-title">Explore the Marvel Universe by searching for your favorite characters</h2>
        } else if(this.props.searchedCharacters && this.props.searchedCharacters.length === 0){
            return <h4 className="no-result">Sorry, no results <i class="far fa-frown"></i></h4>
        } else if (bookmarkedCharacters && bookmarkedCharacters.length === 0 && !this.props.searchedCharacters){
            return <h2 className="main-title">Explore the Marvel Universe by searching for your favorite characters</h2>
        }
        return this.renderView()
    }

    render() {

        return (
            <div>
                <Search onSearchCharacters={this.onSearchCharacters} />
                {this.renderCharacters()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchedCharacters: state.searchedCharacters,
        listView: state.listView
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchCharactersAction: searchCharactersAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);