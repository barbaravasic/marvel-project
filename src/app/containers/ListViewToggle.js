import React, { Component } from 'react';

class ListViewToggle extends Component {


    render() {
        return (
            <button className="toggler-btn">
               <i className="fas fa-list-ul"></i>
               <i className="fas fa-th hidden"></i>
            </button>
        );
    }
}

export default ListViewToggle;