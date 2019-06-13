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
    lng: '',
    resource: [
      {
        resource: "Free groceries",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "First Church of the Nazarene",
        website: "",
        address: "3401 W 3rd St Los Angeles",
        email: "",
        phone: "213-276-4600",
        hoursOfOperation: "",
        walkInsAllowed: "No",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "Line begins at 8am/First come first serve.",
        lat: 34.0695168,
        lng: -118.2899987
    },
      {
        resource: "Meals",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Downtown Womens Center",
        website: "https://www.downtownwomenscenter.org",
        address: "442 S San Pedro St Los Angeles, CA 90011",
        email: "",
        phone: "213-680-0600",
        hoursOfOperation: [
          "M: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
          "T: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
          "W: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
          "TH: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
          "F: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
          "SAT: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
          "S: 8:00AM - 9:00AM, 12:00PM - 1:00PM", 
        ],
        walkInsAllowed: "Yes",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0074794,
        lng: -118.2696364
    },
      {
        resource: "Meals",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Good Shepard",
        website: "",
        address: "267 Belmont Ave Los Angeles, CA 90026",
        email: "",
        phone: "213-250-5251",
        hoursOfOperation: [
          "T: 9:45AM - 2:00PM",
          "W: 9:45AM - 2:00PM ",
          "TH: 9:45AM - 2:00PM"
        ],
        walkInsAllowed: "",
        eligibilityRequirements: "Women Only",
        populationNotes: "",
        notes: "Located at Languille Shelter. Showers, breakfast and lunch, clothing, bus tokens and referrals are offered as well.",
        lat: 34.0662224,
        lng: -118.2632734
    },
      {
        resource: "Meals",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Silverlake Church",
        website: "",
        address: "2930 Hyperion Ave Los Angeles, CA 90027",
        email: "",
        phone: "323-663-3151",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.1098169,
        lng: -118.2707087
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    },
      {
        resource: "",
        servicePlanningArea: "",
        operator: "",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: ,
        lng:
    }
  ],
    filtered: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedQuake: {}
    
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
              {
                resources.map((r,i)=>
                
                <Marker key={i}
                    position={{lat: r.lat, lng: r.lng}}
                    icon={{
                        url: "/images/earthResource.png",
                        width: 15, height: 20}  
                  }
                    onClick = {(props, marker, e) => this.handleClick(props, marker, e, i)}
                    >
                </Marker>
                )
                }
                {
                    this.state.showingInfoWindow
                    &&
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <div>
                            <h3>{this.stringHandler(this.state.selectedResource)}</h3>
                        </div>
                    </InfoWindow>
                    
                }





            </Map>
          
          </>
  
  )
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbcC3bMFjuryUo-PkKcNze8g_kD-TuSm4'
})(MapContainer)