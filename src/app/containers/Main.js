import React, { Component } from 'react';
import Search from '../components/Search';
import CharacterGrid from '../components/CharacterGrid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCharactersAction } from '../../actions/search-characters-action';
import CharacterList from '../components/CharacterList';
import { getFromStorage } from '../../services/storage-services';

class Main extends Component {

    onSearchCharacters = (event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        setTimeout(()=> {
            this.props.searchCharactersAction(inputValue)
        }, 2000)
    }

    renderCharacters(){
        const { searchedCharacters} = this.props;
        const listView = getFromStorage("listView");
        
        if (!listView){
            return <CharacterGrid searchedCharacters={searchedCharacters} />
        } else{
            return <CharacterList searchedCharacters={searchedCharacters}/>
        }
    }


    render() {
 
        return (
            <div>
                <Search onSearchCharacters={this.onSearchCharacters}/>
                {this.renderCharacters()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        searchedCharacters: state.searchedCharacters,
        listView: state.listView
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        searchCharactersAction:searchCharactersAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);