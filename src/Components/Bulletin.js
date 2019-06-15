import React, { Component } from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {  Card, CardTitle, CardActions,CardText } from 'react-mdl';

class Bulletin extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    componentWillMount() {
      this.props.showBanners()
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }


    render() {
      const { index, direction } = this.state;
      return (   
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item >
            <div>
                    <h1>imagen 1</h1>
            </div>
            <div>
                    <h2>imagen 2</h2>
            </div>
        </Carousel.Item> 
        </Carousel>
      );
    }
}

export default Bulletin;