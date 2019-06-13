import React, { Component } from 'react'
import Search from "../Search/Search"
import Geocode from "react-geocode"
import styled from "styled-components";
import Filter from "../Filter/Filter"
import Footer from "../Footer/Footer"
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react'


const MainContainer = styled.div`
  .map {
    width: 100%;
    height:100%;
    z-index: -1;
  }
  .footer{
    
  }
`
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
        operator: "Bread & Roses Cafe by St. Joseph Center's Homeless Service Center",
        website: "https://stjosephctr.org/program/outreach-engagement/",
        address: "663 Rose Ave Los Angeles, CA 90291",
        email: "",
        phone: "310-399-6878",
        hoursOfOperation: ["M: 7:30am-4:30pm", "T: 7:30am-4:30pm", "W: 7:30am-12:00pm", "TH: 7:30am-4:30pm", "F: 7:30am-3:30pm"],
        walkInsAllowed: "No",
        eligibilityRequirements: "Hot meals by appointment Monday-Friday must make reservation at Homeless Service Center",
        populationNotes: "",
        notes: "",
        lat: 34.0001117,
        lng: -118.4703919
    },
      {
        resource: "Showers",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Shower of Hope by Hollywood Adventist Church",
        website: "",
        address: "1711 N Van Ness Ave Hollywood, CA 90028",
        email: "",
        phone: "323-464-8455",
        hoursOfOperation: "T: 10:00AM – 3:00PM",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.102178,
        lng: -118.2096814
    },
      {
        resource: "Showers",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Shower of Hope by Hollywood 1st Baptist Church",
        website: "",
        address: "6682 Selma Ave Hollywood, CA 90028",
        email: "",
        phone: "",
        hoursOfOperation: "F: 2:00PM – 5:00PM",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0996188,
        lng: -118.335795
    },
      {
        resource: "Laundry",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Aroma Laundry & Water",
        website: "",
        address: "1448 N Alvarado St Los Angeles, CA 90026",
        email: "",
        phone: "323-400-8534",
        hoursOfOperation: "T: 6:00PM - 8:00PM ",
        walkInsAllowed: "Yes",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "Only open every 3rd Tuesday of every month.",
        lat: 34.0818607,
        lng:-118.2607583
    },
      {
        resource: "Storage",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "The BIN",
        website: "",
        address: "507 Towne Ave Los Angeles, CA 90013",
        email: "",
        phone: "213-629-1050",
        hoursOfOperation: [
          "M: 8:00AM - 5:00PM",
          "T: 8:00AM - 5:00PM",
          "W: 8:00AM - 5:00PM",
          "TH: 8:00AM - 5:00PM",
          "F: 8:00AM - 5:00PM",
          "SAT: 8:00AM - 1:00PM",
        ],
        walkInsAllowed: "Yes",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0428833,
        lng: -118.2422388
    },
      {
        resource: "Mental Health",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Exodus Mental Health",
        website: "https://www.exodusrecovery.com/eastside-marengo-street/",
        address: "1920 Marengo St Los Angeles, CA 90033",
        email: "",
        phone: "213-276-4600",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0568868,
        lng: -118.2082203
    },
      {
        resource: "Substance Abuse",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Rena B. Recovery Center",
        website: "",
        address: "4445 Burns Ave, Los Angeles, CA 90029",
        email: "",
        phone: "323-664-8940",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0878232,
        lng: -118.2907943
    },
      {
        resource: "Mental Health",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Didi Hirsh Metro Center",
        website: "",
        address: "672 S La Fayette Park Pl Ste 6, Los Angeles",
        email: "",
        phone: "213-381-3626",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0609786,
        lng: -118.2834131
    },
      {
        resource: "SPLA Parking",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "SPLA Parking",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0501069,
        lng: -118.2405926
    },
      {
        resource: "Service Planning Area",
        servicePlanningArea: "SPA 4 - Metro LA",
        operator: "Service Planning Area",
        website: "",
        address: "",
        email: "",
        phone: "",
        hoursOfOperation: "",
        walkInsAllowed: "",
        eligibilityRequirements: "",
        populationNotes: "",
        notes: "",
        lat: 34.0559993,
        lng: -118.2537683
    },
    ],
      filtered: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedResource: {},
      zoom: 15,
      showFilterBar: false,
      clicked:false
    }

    
    success(position){
      //Ethan is a wizard
      let crd=position.coords
      this.setState({
        center:{lat:crd.latitude,
          lng:crd.longitude}
        })
      }
    

    setFilter = (filteredItems) => {
      this.setState({
        filtered: filteredItems
      })
    }
    openBar = ()=>{
      this.setState({
        showFilterBar: true
      })
    }
    closeBar = ()=>{
      this.setState({
        showFilterBar: false
      })
    }  

      
    setSearch = (states) => {
      Geocode.fromAddress(states).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
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
    handleClick = (props, marker, e, i) => {
      const { resource } = this.state
      this.setState({
          showingInfoWindow: true,
          activeMarker: marker,
          selectedResource: this.state.resource[i],
          center: {lat: resource[i].lat, lng: resource[i].lng},
          zoom: 18,
          clicked:true
      })
    }
    componentDidMount(){
      this.state.geo.getCurrentPosition(
        (position) => this.success(position)
        )
      }
    searching = (theSearch) => {
      this.setState({
        search: theSearch,
        center: {},
      })
      this.setSearch(theSearch)
    } 
    render() {
      const { center, lat, lng, resource, zoom, filtered } = this.state
      console.log(this.state.filtered)
      return (
        <MainContainer>
          <Map  
            google={this.props.google} 
            className="map"
            zoom={zoom} 
            initialCenter={ {lat: 34.0559993, lng: -118.2537683}} 
            center={center.lat ? center : {lat:lat, lng:lng}} >
            {
              filtered.length === 0
              ? 

              resource.map((r,i)=>
              <Marker key={i}
                  position={{lat: r.lat, lng: r.lng}}
                  icon={{
                      url: 
                      
                        r.resource === "Meals"
                        ? "/images/foodPointer.png"
                        : r.resource === "Free groceries"
                          ? "/images/groceriesPointer.png"
                          : r.resource === "Mental Health"
                            ? "/images/mentalHealthPointer.png"
                            : r.resource === "Substance Abuse"
                              ? "/images/hospitalPointer.jpg"
                              : r.resource === "SPLA Parking"
                                ? "/images/parkingPointer.png"
                                : "/images/parkingPointer.png",
                      width: 15, height: 20
                    }  
                }
                  onClick = {(props, marker, e) => this.handleClick(props, marker, e, i)}
                  >
              </Marker>
              )
              :
              filtered.map((r,i)=>
              <Marker key={i}
                  position={{lat: r.lat, lng: r.lng}}
                  icon={{
                      url: 
                      
                        r.resource === "Meals"
                        ? "/images/foodPointer.png"
                        : r.resource === "Free groceries"
                          ? "/images/groceriesPointer.png"
                          : r.resource === "Mental Health"
                            ? "/images/mentalHealthPointer.png"
                            : r.resource === "Substance Abuse"
                              ? "/images/hospitalPointer.jpg"
                              : r.resource === "SPLA Parking"
                                ? "/images/parkingPointer.png"
                                : "/images/defaultPointer.png",
                      width: 15, height: 20
                    }  
                }
                  onClick = {(props, marker, e) => this.handleClick(props, marker, e, i)}
                  >
              </Marker>
              )

              }
              <Search searching={this.searching}/>
               
              <Filter closeBar={this.closeBar} show={this.props.showFilterBar} resource={resource} setFilter={this.setFilter}/>
              {
                  this.state.showingInfoWindow
                  &&
                  <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                      <div>
                          <h3>{this.state.selectedResource.operator}</h3>
                      </div>
                  </InfoWindow>
              }
          </Map>
            {/* <button className="filter-btn"onClick={this.openBar}><img src="/images/Filter.png"/></button> */}
          <Footer className="footer" clicked={this.state.clicked} 
                                    
                                     resource={this.state.filtered.length>0?
                                      this.state.filtered:this.state.resource} 
                                     selected={this.state.selectedResource}/>
        </MainContainer>

  )
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbcC3bMFjuryUo-PkKcNze8g_kD-TuSm4'
})(MapContainer)