import React, { Component } from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { showBanners } from '../actions'


class Slider extends Component {
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
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://uniq.edu.pe/public/img/imagenes/banner/elarenal.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button className="primari">Test</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://uniq.edu.pe/public/img/imagenes/banner/carreras.jpg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://uniq.edu.pe/public/img/imagenes/banner/encabezado.png"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
}

function mapStateToProps(state) {
  return {
    banners: state.banner.list
  }
}

export default connect(mapStateToProps, { showBanners })(Slider)