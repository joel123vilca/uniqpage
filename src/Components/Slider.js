import React, { Component } from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { showBanners } from '../actions';
import Button from 'react-bootstrap/Button'

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
    
    renderBannersList() {
      return this.props.banners.map((banner) => {
        const id = '123'
        return (
          <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100 slider"
            src={banner.image_path}
            alt="First slide"
          /> 
            <Carousel.Caption>
                <Button  variant="info" href="http://test1.uniq.edu.pe/storage/app/public/documentos/Binder1.pdf" target="_blank" color="primary">RESULTADOS</Button>
              </Carousel.Caption>
          </Carousel.Item>
        )
      })
    }

    render() {
      const { index, direction } = this.state;
      return (   
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          { this.renderBannersList() } 
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