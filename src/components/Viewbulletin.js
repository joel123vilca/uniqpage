import React, { Component } from 'react';
import { connect } from 'react-redux'
import { viewStorie } from '../actions'

import "./bulletin.css";

class ViewBulletin extends Component {
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.viewStorie(id)
    }
    render(){
        return (
            <div className="bulletin--div">
                <h2 className="bulletin-title">{this.props.storie.title}</h2>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state.view.uno)
    return {
      storie: state.view.uno
    }
}

export default connect(mapStateToProps, { viewStorie })(ViewBulletin);