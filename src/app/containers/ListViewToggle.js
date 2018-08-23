import React, { Component } from 'react';

class ListViewToggle extends Component {


    render() {
        return (
            <button className="toggler-btn">
               <i class="fas fa-list-ul"></i>
               <i class="fas fa-th hidden"></i>
            </button>
        );
    }
}

export default ListViewToggle;