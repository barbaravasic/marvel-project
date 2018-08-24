import React, { Component } from 'react';
import './Bookmark.css'
import { bindActionCreators } from 'redux';
import { bookmarkCharacterAction } from '../../actions/bookmark-character-action';
import { connect } from 'react-redux';
import { saveToStorage } from '../../services/storage-services';

class Bookmark extends Component {

    onBookmarkHandler = (event) => {
        event.preventDefault();
        if (event.target.classList.contains("bookmark-icon")) {
            this.props.bookmarkCharacterAction(this.props.character)
        }
    }
    
    componentDidUpdate = () => {
        saveToStorage("bookmarkedCharacters", this.props.bookmarkedCharacters)
    }

    renderBookmarkBtn() {
        if (this.props.character.bookmarked) {
            return <i class="fas fa-bookmark bookmark-icon"></i>
        } else {
            return <i class="far fa-bookmark bookmark-icon"></i>
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
        bookmarkCharacterAction: bookmarkCharacterAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);