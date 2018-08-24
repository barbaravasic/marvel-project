import React from 'react';
import './CharacterGrid.css';
import CharacterCard from './CharacterCard';
import { getFromStorage } from '../../services/storage-services';

const CharacterGrid = (props) => {
    const renderCharacters = () => {
        if (props.searchedCharacters === null) {
            return <h4>Type in search</h4>
        } else {
            return props.searchedCharacters.map(character => {
                const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");
                if (bookmarkedCharacters) {
                    const bookmarked = bookmarkedCharacters.find(bookmarkedCharacter => bookmarkedCharacter.id === character.id)
                    return (bookmarked === undefined) ? <CharacterCard character={character} key={character.id} />
                        : <CharacterCard character={bookmarked} key={bookmarked.id} />
                } else {
                    return <CharacterCard character={character} key={character.id} />
                }
            })
        }
    }
    return (
        <main className="container-grid">
            {renderCharacters()}
        </main>
    );
};


export default CharacterGrid;