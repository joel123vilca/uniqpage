import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class  Home extends Component {
  static defaultProps = {
    center: { lat: -12.856613, lng: -72.691911 },
    zoom: 11
  }
  render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
        </GoogleMapReact>
      </div>
    )
    }
}
