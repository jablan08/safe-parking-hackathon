import React, { Component } from 'react'
import Search from "../Search/Search"
import Geocode from "react-geocode"
import { GoogleApiWrapper, Map } from 'google-maps-react'

Geocode.setApiKey('AIzaSyBbcC3bMFjuryUo-PkKcNze8g_kD-TuSm4');
Geocode.enableDebug();

export class MapContainer extends Component {
  state={
    center:{},
    geo:navigator.geolocation,
    search: '',
    lat: '',
    lng: ''
    
  }
  
  success(position){
    //Ethan is a wizard
    let crd=position.coords
    this.setState({
      center:{lat:crd.latitude,
        lng:crd.longitude}
      })
    }
    
  setSearch = (states) => {
    Geocode.fromAddress(states).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng,"hitbthihtithith");
        this.setState({
          lat:lat,
          lng:lng
        })
      },
      error => {
        console.error(error);
      }
      );
    }
    componentDidMount(){
      this.state.geo.getCurrentPosition(
        (position) => this.success(position)
        )
      }
    searching = (theSearch) => {
      this.setState({
        search: theSearch
      })
      this.setSearch(theSearch)
    } 
      render() {
        
        const { center, lat, lng } = this.state
        console.log(center.lat)
        console.log(center.lng)
        console.log(this.state, "hittt")
        return (
          <>
            <Search searching={this.searching}/>
            <Map google={this.props.google} zoom={15} initialCenter={ 
              {lat: 34.0480489, lng: -118.24023980000001}
            } center={{lat:lat, lng:lng}} >
            </Map>
          
          </>
  
  )
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbcC3bMFjuryUo-PkKcNze8g_kD-TuSm4'
})(MapContainer)