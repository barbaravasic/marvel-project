import React from 'react';
import CharacterItem from './CharacterItem';
import './CharacterList.css';
import { getFromStorage } from '../../services/storage-services';


const CharacterList = (props) => {

    const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");

    const renderCharacterList = () => {
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
    
    const renderCharacters = () => {
           if (props.searchedCharacters) {
               return renderCharacterList() 
            } else if (bookmarkedCharacters && !props.searchedCharacters && bookmarkedCharacters.length) {
                return <h4>Type in search</h4>
            } else {
                return <h4>Type in search</h4>
            }
    }
    return (
        <div className="container-list">
            {renderCharacters()}
        </div>
    );
};

export default CharacterList;