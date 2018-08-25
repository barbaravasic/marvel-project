import React, { Component } from 'react';
import Search from '../components/Search';
import CharacterGrid from '../components/CharacterGrid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCharactersAction } from '../../actions/search-characters-action';
import CharacterList from '../components/CharacterList';
import { getFromStorage } from '../../services/storage-services';

import './Main.css';
import Loader from '../components/Loader';
import MainTitle from '../components/MainTitle';
import NoResults from '../components/NoResults';

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

    renderCharacters() {
        const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");
        const { searchedCharacters, loading } = this.props;
        if (!searchedCharacters && !bookmarkedCharacters) {
            return <MainTitle />
        } else if (searchedCharacters && searchedCharacters.length === 0) {
            return <NoResults />
        } else if (bookmarkedCharacters && bookmarkedCharacters.length === 0 && !searchedCharacters) {
            return <MainTitle />
        } else if (loading) {
            return <Loader />
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
        listView: state.listView,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchCharactersAction: searchCharactersAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);