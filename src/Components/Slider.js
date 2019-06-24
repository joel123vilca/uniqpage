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
    
    renderBannersList() {
      return this.props.banners.map((banner) => {
        return (
          <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100 slider"
            src={banner.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{banner.title_es}</h3>
            <p>{banner.description_es}</p>
            <Button className="primari">Test</Button>
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