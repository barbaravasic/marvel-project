import React from 'react';
import CharacterItem from './CharacterItem';
import './CharacterList.css'

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
        <div className="container-list">
           {renderCharacters()}
        </div>
    );
};

export default CharacterList;