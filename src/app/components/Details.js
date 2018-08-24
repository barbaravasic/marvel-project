import React from 'react';
import './Details.css';

const Details = (props) => {
    const { name, description, comics } = props.character;

    const renderList = (list) => {
        return list.map((item, i) => {
            return <li key={i}>{item.name}</li>
        })
    }

    return (
        <div className="overlay hide ">
            <div className="details-container">
                <i className="fas fa-window-close close" onClick={props.onClose}></i>
                <h4>{name}</h4>
                <div className="description">
                    <p>Description: {(description !== "") ? description : "Sorry, no description for this character"}</p>
                </div>
                <div className="comics">
                    <p>Comics:</p>
                    <ul>
                        {renderList(comics)}
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Details;