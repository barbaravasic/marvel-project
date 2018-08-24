import React, { Component } from 'react';
import './Bookmark.css'
import { bindActionCreators } from 'redux';
import { bookmarkCharacterAction } from '../../actions/bookmark-character-action';
import { connect } from 'react-redux';
import { saveToStorage } from '../../services/storage-services';
import { removeFromBookmarkAction } from '../../actions/remove-from-bookmark-action';

class Bookmark extends Component {

    onBookmarkHandler = (event) => {
        event.preventDefault();
        if (event.target.classList.contains("unchecked")) {
            this.props.bookmarkCharacterAction(this.props.character)
        } else if(event.target.classList.contains("checked")) {
            this.props.removeFromBookmarked(this.props.character);
            window.location.reload()
        }
    }
    
    componentDidUpdate = () => {
        saveToStorage("bookmarkedCharacters", this.props.bookmarkedCharacters)
    }

    renderBookmarkBtn() {
        if (this.props.character.bookmarked) {
            return <i className="fas fa-bookmark checked"></i>
        } else {
            return <i className="far fa-bookmark unchecked"></i>
        }
    }

    render() {
        return (
            <button className="bookmark" onClick={this.onBookmarkHandler}>
            {this.renderBookmarkBtn()}
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookmarkedCharacters: state.bookmarkedCharacters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        bookmarkCharacterAction: bookmarkCharacterAction,
        removeFromBookmarked: removeFromBookmarkAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);