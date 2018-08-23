import React, { Component } from 'react';
import Search from '../components/Search';
import CharacterList from '../components/CharacterList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCharactersAction } from '../../actions/search-characters-action';

class Main extends Component {

    onSearchCharacters = (event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        setTimeout(()=> {
            this.props.searchCharactersAction(inputValue)
        }, 2000)
    }

    render() {
 
        return (
            <div>
                <Search onSearchCharacters={this.onSearchCharacters}/>
                <CharacterList searchedCharacters={this.props.searchedCharacters}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        searchedCharacters: state.searchedCharacters
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        searchCharactersAction:searchCharactersAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);