import React from 'react';
import './Details.css';

const Details = (props) => {
    const {name, description} = props.character;
    
    return (
        <div className="overlay hide ">
            <div className="details-container ">
                <i class="fas fa-window-close close" onClick={props.onClose}></i>
                <h4>{name}</h4>
                <p>{(description !== "") ? description : "Sorry, no description for this character"}</p>
            </div >
        </div >
    );
};

export default Details;