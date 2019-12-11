import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleMapReact from 'google-map-react'

export class Map extends Component {
  static defaultProps = {
    center: {
      lat: -36.864462,
      lng: 174.776585
    },
    zoom: 15
  };

  render () {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBv8LvzPdi0SyERJh7n0fdJqzCeTqsF0tw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.mapCenter}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeIndex: state.activeIndex,
    mapCenter: state.center
  }
}

export default connect(mapStateToProps)(Map)
