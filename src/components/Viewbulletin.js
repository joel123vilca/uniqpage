import React, { Component } from 'react';
import { connect } from 'react-redux'
import { viewStorie } from '../actions'

import "./viewbulletin.css";

class ViewBulletin extends Component {
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.viewStorie(id)
        this.props.storie.images = [];
    }
    render(){
        return (
            <div className="viewbulletin-content">
            <div style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
            <center>
            <h2 className="viewbulletin-title">{this.props.storie.title}</h2>
              <p style={{textAlign:"justify"}}>
              {this.props.storie.description}
              </p>
              </center>
            </div>
            <center>
            {   
                this.props.storie.images.map((image) => {
                return (
                    <img 
                    key={image.id}
                    src={image.image_path}
                    className="bulletin--image"
                    alt="imagen uno" 
                    />
                )
            })}
            </center>
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