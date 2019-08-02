import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { showStories } from '../actions';
import "./bulletin.css";
import { CardText, Card, CardActions, Button} from 'react-mdl'; 

class Bulletin extends Component {
    componentWillMount() {
        this.props.showStories()
    }
    renderStoriesList() {
        return this.props.stories.map((storie) => {
          return (
          <div className="bulletin--content" key={storie.id}>
          <Card shadow={0} style={{width: '300px', height: '450px'}}>
              <div className="bulletin--card">
                  <img src="http://api3.uniq.edu.pe/public/storage/stories/7cO11qeUq5WtQOxZR59kMBtNXSIuJTIhHqoqZiF6.jpeg" className="bulletin--image" alt="imagen uno" />
                  <span className="bulletin--fecha">
                      {storie.month}
                      <br></br>
                      <br></br>
                      {storie.day}
                  </span>
              </div>
              <CardText className="bulletin--detail">
                  {storie.title}
              </CardText>
              <CardActions border className="bulletin--action">
                  <Link  to={`/actividad/${storie.id}`}><Button
                  colored
                  >Ver más</Button></Link>
              </CardActions>
          </Card>
          </div>
          )
        })
      }
    render(){
        return (
            <div className="bulletin--div">
                <h2 className="bulletin-title">Boletín Informativo</h2>
            <section className="bulletin">
                { this.renderStoriesList() } 
            </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      stories: state.storie.lista
    }
}

export default connect(mapStateToProps, { showStories })(Bulletin);