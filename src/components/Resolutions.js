import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem,ListItemAction, List} from 'react-mdl';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { showResolutions, searchResolutions} from '../actions';
import "./resolutions.css"; 
import resolutions from '../image/resolutions.jpg';
import Search from './SearchResolution';

class Resolutions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }
  componentWillMount() {
    this.props.showResolutions()
    this.props.searchResolutions(this.state.value)
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    this.props.onChange(event.target.value)
  }
 
  renderResolutionList() {
    return this.props.resolutions
    .filter(resolution  => `${resolution.description}`.toUpperCase().indexOf(this.state.value.toUpperCase()) >=0)
    .map((resolution) => {
      return (
        <ListItem key={resolution.id}>
          <h5>{resolution.title}</h5>
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
  renderResultResolutions(){
    console.log(this.props.resultResolutions);
    return this.props.resultResolutions
    .map((resolution) => {
      return (
        <ListItem key={resolution.id}>
          <h5>{resolution.title}</h5>
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
      <h2 className="bulletin-title">Resoluciones - U N I Q</h2>
      <input
        className="Search-input"
        placeholder="busca "
        type="text"
        name="search"
        value={this.state.value} 
        onChange={this.handleChange}/>
      <List>
      { this.renderResultResolutions()}
      </List>
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
    resolutions: state.resolutions.resolutions,
    resultResolutions: state.resolutions.resultResolutions
  }
}

export default connect(mapStateToProps, { showResolutions, searchResolutions })(Resolutions)