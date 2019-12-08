import React from 'react'

import GoogleMapReact from 'google-map-react'

class Map extends React.Component {
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
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
