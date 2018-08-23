import React from 'react';
import './CharacterList.css';
import CharacterItem from './CharacterItem';

const CharacterList = (props) => {
    const renderCharacters = () => {
        if (props.searchedCharacters === null){
            return <h4>Type in search</h4>
        } else {
            return  props.searchedCharacters.map(character => {
                return  <CharacterItem character={character} key={character.id}/>
            })
        }
    }
    return (
        <main className="container">
        {renderCharacters()}
           
        </main>
    );
};


export default CharacterList;