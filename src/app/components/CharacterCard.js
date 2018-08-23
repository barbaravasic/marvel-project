import React from 'react';

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
        </div>
    );
};

export default CharacterCard;