import React from 'react';
import CharacterItem from './CharacterItem';
import './CharacterList.css';
import { getFromStorage } from '../../services/storage-services';


const CharacterList = (props) => {

    const renderCharacters = () => {
        const bookmarkedCharacters = getFromStorage("bookmarkedCharacters"); 
        if (bookmarkedCharacters === null && props.searchedCharacters === null
            || bookmarkedCharacters && bookmarkedCharacters.length === 0) {
            return <h4>Type in search</h4>
        } else {
            return props.searchedCharacters.map(character => {
                if (bookmarkedCharacters) {
                    const bookmarked = bookmarkedCharacters.find(bookmarkedCharacter => bookmarkedCharacter.id === character.id)
                    return (bookmarked === undefined) ? <CharacterItem character={character} key={character.id} />
                        : <CharacterItem character={bookmarked} key={bookmarked.id} />
                } else {
                    return <CharacterItem character={character} key={character.id} />
                }
            })
        }
    }
    return (
        <div className="container-list">
            {renderCharacters()}
        </div>
    );
};

export default CharacterList;