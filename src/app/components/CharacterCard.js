import React from 'react';
import Bookmark from '../containers/Bookmark';
import Details from './Details';


const CharacterCard = (props) => {

    const onOpenDetails = (event) => {
        if (event.target.parentElement.parentElement.className === "card-container" && !event.target.classList.contains("fa-bookmark")) {
            const detailsOverlay = event.target.parentElement.parentElement.nextSibling
            detailsOverlay.classList.remove("hide");
            window.scrollTo(0,0);
            document.querySelector("body").classList.add("scroll-off");
        }
    }

    const onClose = (event) => {
        event.preventDefault();
        const detailsOverlay = event.target.parentElement.parentElement;
        detailsOverlay.classList.add("hide");
        document.querySelector("body").classList.remove("scroll-off");
    }

    const { name, picture } = props.character
    return (
        <React.Fragment>
            <div className="card-container" onClick={onOpenDetails}>
                <div className="card-title">
                    <h3>{name}</h3>
                </div>
                <div className="card-image">
                    <img src={picture} alt="marvel character" className="image" />
                </div>
                <Bookmark character={props.character} />
            </div>
            <Details character={props.character} onClose={onClose}/>
        </React.Fragment>
    );
};

export default CharacterCard;