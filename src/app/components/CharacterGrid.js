import React from 'react';
import './CharacterGrid.css';
import CharacterCard from './CharacterCard';

const CharacterGrid = (props) => {
    const renderCharacters = () => {
        if (props.searchedCharacters === null){
            return <h4>Type in search</h4>
        } else {
            return  props.searchedCharacters.map(character => {
                return  <CharacterCard character={character} key={character.id}/>
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