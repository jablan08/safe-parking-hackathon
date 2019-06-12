import React, { Component } from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'


export class MapContainer extends Component {
  state={
    center:{},
    geo:navigator.geolocation
    
  }

  success(position){
    //Ethan is a wizard
    let crd=position.coords
    this.setState({
      center:{lat:crd.latitude,
              lng:crd.longitude}
    })
  }
  componentDidMount(){
    this.state.geo.getCurrentPosition(
      (position) => this.success(position)
    )
  }

    render() {
      
      const { center } = this.state
      console.log(center.lat)
      console.log(center.lng)
      console.log(this.state.center, "centering the map")
      return (
          <Map google={this.props.google} zoom={10} initialCenter={ 
              {lat: 48.8566, lng: 2.3522}
            } center={{center}}>
          </Map>
  
      )
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbcC3bMFjuryUo-PkKcNze8g_kD-TuSm4'
  })(MapContainer)