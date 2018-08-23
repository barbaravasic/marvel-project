import React, { Component } from 'react';
import Search from '../components/Search';
import CharacterGrid from '../components/CharacterGrid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCharactersAction } from '../../actions/search-characters-action';
import CharacterList from '../components/CharacterList';

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
                {/* <CharacterGrid searchedCharacters={this.props.searchedCharacters}/> */}
                <CharacterList searchedCharacters={this.props.searchedCharacters} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        searchedCharacters: state.searchedCharacters,
        gridView: state.gridView
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        searchCharactersAction:searchCharactersAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);