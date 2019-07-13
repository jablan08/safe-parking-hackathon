import React, { Component } from "react"
import Search from "../Search/Search"
import Geocode from "react-geocode"
import styled from "styled-components";
import Filter from "../Filter/Filter"
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react"


const MainContainer = styled.div`
  .map {
    width: 100%;
    height:100%;
    z-index: -1;
  }
  .info-window {
    display: flex;
    flex-direction: column;
  }
  .info-titles {
    margin: 0;
    font-weight: normal;
  }
  
`
Geocode.setApiKey(process.env.NODE_ENV === "production" ? process.env.REACT_APP_HEROKU : process.env.REACT_APP_USE_THIS);
Geocode.enableDebug();

export class MapContainer extends Component {
  state={
    res: [],
    center:{},
    geo:navigator.geolocation,
    search: '',
    lat: '',
    lng: '',
  filtered: [],
  showingInfoWindow: false,
  activeMarker: {},
  selectedResource: {},
  zoom: 15,
  clicked:false,
  error: "",
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
    closeBar = async()=>{
      
      this.setState({
        showFilterBar: false
      })
      
    }
    handleGetResource = async () => {
      try {
        const getResources = await fetch("/resources", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        })
        const parsedResponse = await getResources.json()
        return parsedResponse.resources
      } catch (error) {
        this.setState({
          error: "There was an error processing your request."
        })
      }

    }
    handleDeleteResource = async (id) => {
      const deleteResource = await fetch(`/resources/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedResponse = await deleteResource.json();
      if (parsedResponse.success) {
        this.setState({
          res: this.state.res.filter(r => r._id !== id)
        })
      }
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
      const { resource, res } = this.state
      this.setState({
          showingInfoWindow: true,
          activeMarker: marker,
          selectedResource: res[i],
          center: {lat: res[i].lat, lng: res[i].lng},
          
          clicked:true
      })
    }
    componentDidMount(){
      this.state.geo.getCurrentPosition(
        (position) => this.success(position)
        )
      this.handleGetResource().then(alldata => {
        this.setState({
          res: alldata
        })
      })
    }
    
      
    success(position){
      //Ethan is a wizard
      let crd=position.coords
      this.setState({
        center:{lat:crd.latitude,
          lng:crd.longitude}
        })
    }  
    searching = (theSearch) => {
      this.setState({
        search: theSearch,
        center: {},
      })
      this.setSearch(theSearch)
    } 
    render() {
      const { center, lat, lng, resource, zoom, filtered, showingInfoWindow, selectedResource, activeMarker, res, } = this.state
      return (
        <MainContainer>
          <Map  
            streetViewControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
            google={this.props.google} 
            className="map"
            zoom={zoom} 
            initialCenter={ {lat: 34.0559993, lng: -118.2537683}} 
            center={center.lat ? center : {lat:lat, lng:lng}} >
            {
              filtered.length === 0
              ? 

              res.map((r,i)=>
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
               
              <Filter closeBar={this.props.closeBar} show={this.props.showFilterBar} resource={resource} setFilter={this.setFilter}/>
              {
                  showingInfoWindow
                  &&
                  <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                      <div className="info-window">
                          <h3 className="info-titles">{selectedResource.operator}</h3>
                          <b>Provides: {selectedResource.resource}</b>
                          <h4 className="info-titles">Hours:</h4>
                          <b>M: {selectedResource.hoursOfOperation.m === "" ? "Closed" : selectedResource.hoursOfOperation.m}</b>
                          <b>T: {selectedResource.hoursOfOperation.t === "" ? "Closed" : selectedResource.hoursOfOperation.t}</b>
                          <b>W: {selectedResource.hoursOfOperation.w === "" ? "Closed" : selectedResource.hoursOfOperation.w}</b>
                          <b>TH: {selectedResource.hoursOfOperation.th === "" ? "Closed" : selectedResource.hoursOfOperation.th}</b>
                          <b>F: {selectedResource.hoursOfOperation.f === "" ? "Closed" : selectedResource.hoursOfOperation.f}</b>
                          <b>SAT: {selectedResource.hoursOfOperation.sat === "" ? "Closed" : selectedResource.hoursOfOperation.sat}</b>
                          <b>SUN: {selectedResource.hoursOfOperation.sun === "" ? "Closed" : selectedResource.hoursOfOperation.sun}</b>


                          {selectedResource.phone}

                          <a href={`/resources/${selectedResource._id}`}>Edit</a>
                      </div>
                  </InfoWindow>
              }
          </Map>
        </MainContainer>
    

  )
}
}

export default GoogleApiWrapper({
  apiKey: process.env.NODE_ENV === "production" ? process.env.REACT_APP_HEROKU : process.env.REACT_APP_USE_THIS
})(MapContainer)