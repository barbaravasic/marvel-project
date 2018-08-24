import React from 'react';
import './CharacterGrid.css';
import CharacterCard from './CharacterCard';
import { getFromStorage } from '../../services/storage-services';

const CharacterGrid = (props) => {
    const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");

    const renderCharacterCards = () => {
        return props.searchedCharacters.map(character => {
            if (bookmarkedCharacters) {
                const bookmarked = bookmarkedCharacters.find(bookmarkedCharacter => bookmarkedCharacter.id === character.id)
                return (bookmarked === undefined) ? <CharacterCard character={character} key={character.id} />
                    : <CharacterCard character={bookmarked} key={bookmarked.id} />
            } else {
                return <CharacterCard character={character} key={character.id} />
            }

        })
    }
    const renderCharacters = () => {
           if (props.searchedCharacters) {
               return renderCharacterCards() 
            } else if (bookmarkedCharacters && !props.searchedCharacters && bookmarkedCharacters.length) {
                return <h4>Type in search</h4>
            } else {
                return <h4>Type in search</h4>
            }
    }

    return (
        <main className="container-grid">
            {renderCharacters()}
        </main>
    );
};


export default CharacterGrid;