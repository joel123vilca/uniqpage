import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem,ListItemAction, List} from 'react-mdl';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { showResolutions, searchResolutions} from '../actions';
import "./resolutions.css"; 
import resolutions from '../image/resolutions.jpg';

class Resolutions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      number:'',
      year:''
    }
  }
  componentWillMount() {
    this.props.showResolutions()
    this.props.searchResolutions(this.state.value)
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    this.props.onChange(event.target.value)
  }
  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    })
    this.props.onChange(event.target.value)
  }
  handleYearChange = (e) => {
    this.setState({
      year: e.target.value,
    })
    this.props.onChange(event.target.value)
  }
  renderResolutionList() {
    return this.props.resolutions
    .filter(resolution  => `${resolution.description}`.toUpperCase().indexOf(this.state.value.toUpperCase()) >=0)
    .filter(resolution  =>`${resolution.year}`.indexOf(this.state.year) >= 0)
    .filter(resolution  =>`${resolution.number}`.indexOf(this.state.number) >= 0)
    .map((resolution) => {
      return (
        <Grid item xs={12} sm={6}>
          <div className="resolution--div" key={resolution.id}>
            <h5 className="resolution--title">{resolution.title}</h5>
            <p className="resolution--description" >
            {resolution.description}
            </p>
            <a href={resolution.pdf_path} target="_blank"  edge="end" className="resolution--button">
              <Button variant="contained" style={{ fontSize: 15, color: 'white',background:'teal'}}>
                DESCARGAR
              </Button>
            </a>
          </div>
        </Grid>
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
        placeholder="buscar resolución "
        type="text"
        name="search"
        value={this.state.value} 
        onChange={this.handleChange}/>
      <input
        className="Number-input"
        placeholder="Número de resolución "
        type="number"
        name="number"
        min="1" 
        pattern="[0-9]+"
        value={this.state.number} 
        onChange={this.handleNumberChange}/>
      <input
        className="Year-input"
        placeholder="Año de la resolución "
        type="number"
        name="year"
        min="2012" 
        value={this.state.year} 
        onChange={this.handleYearChange}/>
      <List>
      { this.renderResultResolutions()}
      </List>
      <Grid container spacing={3}>
      { this.renderResolutionList() }
      </Grid>
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

export default connect(mapStateToProps, { showResolutions, searchResolutions })(Resolutions);