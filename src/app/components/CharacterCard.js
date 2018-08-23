import React from 'react';
import Bookmark from '../containers/Bookmark';

const CharacterCard = (props) => {

    const {name, picture}  = props.character
    return (
        <div className="card-container">
            <div className="card-title">
                <h3>{name}</h3>
            </div>
            <div className="card-image">
                <img src={picture} alt="marvel character" />
            </div>
            <Bookmark character={props.character}/>
        </div>
    );
};

export default CharacterCard;