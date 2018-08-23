import React from 'react';
import Bookmark from '../containers/Bookmark';

const CharacterItem = (props) => {
    const {name, picture} = props.character
    return (
        <div className="list-item">
            <div className="list-image">
                <img src={picture} alt="image" />
            </div>
            <div className="list-title">
                <h3>{name}</h3>
            </div>
            <Bookmark character={props.character}/>
        </div>
    );
};

export default CharacterItem;