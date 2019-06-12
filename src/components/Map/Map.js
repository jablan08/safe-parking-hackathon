import React, { Component } from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

export class MapContainer extends Component {
    render() {
      return (
        <Map google={this.props.google} zoom={15}>
   
          <Marker onClick={this.onMarkerClick}
                  name={ "New York, CA"} />
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbcC3bMFjuryUo-PkKcNze8g_kD-TuSm4'
  })(MapContainer)