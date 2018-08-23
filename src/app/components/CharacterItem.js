import React from 'react';

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
        </div>
    );
};

export default CharacterItem;