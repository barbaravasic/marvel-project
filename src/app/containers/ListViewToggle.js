import React, { Component } from 'react';
import { changeViewAction } from '../../actions/change-view-action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFromStorage, saveToStorage } from '../../services/storage-services';

class ListViewToggle extends Component {

    onChangeView = event => {
        
        if (event.target.classList.contains("fas")) {
            event.preventDefault();
            this.props.changeViewAction(this.props.listView);
            saveToStorage("listView", this.props.listView);
        }
    }

    renderViewIcon() {
        const listView = getFromStorage("listView")
        console.log(listView);
        
        if(!listView){
            return <i className="fas fa-list-ul"></i>
        } else {
            return <i className="fas fa-th"></i>
        }
    }

    render() {
        return (
            <button className="toggler-btn" onClick={this.onChangeView}>
                {this.renderViewIcon()}
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        listView: state.listView
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeViewAction: changeViewAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewToggle);