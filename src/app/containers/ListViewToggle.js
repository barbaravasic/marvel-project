import React, { Component } from 'react';
import { changeViewAction } from '../../actions/change-view-action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ListViewToggle extends Component {

    onChangeView = event => {
        
        if (event.target.classList.contains("fas")) {
            this.props.changeViewAction(this.props.gridView);
        }
    }

    renderViewIcon() {
        if(this.props.gridView === true){
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
        gridView: state.gridView
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeViewAction: changeViewAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewToggle);