import React, { Component } from 'react';
import './Bookmark.css'
import { bindActionCreators } from 'redux';
import { bookmarkCharacterAction } from '../../actions/bookmark-character-action';
import { connect } from 'react-redux';


class Bookmark extends Component {

    onBookmarkHandler = (event) => {
        event.preventDefault();
        if(event.target.classList.contains("bookmark-icon")){
            this.props.bookmarkCharacterAction(this.props.character)
        }
    }

    render() {
        return (
            <button className="bookmark" onClick={this.onBookmarkHandler}>
                <i class="far fa-bookmark bookmark-icon"></i>
                {/* <i class="fas fa-bookmark bookmark-icon"></i> */}
            </button>
        );
    }
}

function mapStateToProps(state){
    return{
        bookmarkedCharacters:state.bookmarkedCharacters
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        bookmarkCharacterAction:bookmarkCharacterAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);