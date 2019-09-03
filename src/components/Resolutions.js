import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem, ListItemContent,ListItemAction, List} from 'react-mdl';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { showResolutions} from '../actions';
import "./alliances.css"; 
import resolutions from '../image/resolutions.jpg';

class Resolutions extends Component {
  componentWillMount() {
    this.props.showResolutions()
  }
  renderResolutionList() {
    return this.props.resolutions.map((resolution) => {
      return (
        <ListItem key={resolution.id}>
          <ListItemContent style={{margin: '35px'}}>{resolution.title}</ListItemContent>
          <p>{resolution.description}</p>
          <ListItemAction>
              <IconButton href={resolution.pdf_path} target="_blank"  edge="end">
                <Icon style={{ fontSize: 50 , color: 'teal'}}>picture_as_pdf</Icon>
              </IconButton>
          </ListItemAction>
        </ListItem>
      )
    })
  }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
        className="d-block w-100 alliance--banner"
        src={resolutions}
        alt="banner resoluciones"
      />
      <h2 className="bulletin-title">Resoluciones</h2>
      <List style={{width: '90%'}}>
      { this.renderResolutionList() } 
      </List>
          <br></br>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resolutions: state.resolutions.resolutions
  }
}

export default connect(mapStateToProps, { showResolutions })(Resolutions)