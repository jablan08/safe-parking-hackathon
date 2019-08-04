import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import NewResource from "./components/NewResource/NewResource"
import Register from "./components/Register/Register";
import Navbar from "../src/components/Navbar/Navbar"
import EditResource from "../src/components/EditResource/EditResource"

import * as routes from "./constants/routes";

import Map from '../src/components/Map/Map'
class App extends Component {
  state = {
    currentUser: {},
    showFilterBar: false
  }
  componentDidMount() {
    const current = localStorage.getItem("user");
    const parsedCurrent = JSON.parse(current);
    if (parsedCurrent) {
      this.setState({
        currentUser: parsedCurrent,
        logged: true
      });
    }
  }
  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
      
    })
  }
  openBar = ()=>{
    this.setState({
      showFilterBar: true
    })
  }
  switchBar = ()=>{
    if(this.state.showFilterBar){
    this.setState({
      showFilterBar: false
    })
  }else{
    this.setState({
      showFilterBar:true
    })
  }}
  closeBar = ()=>{
    this.setState({
      showFilterBar: false
    })
  }  
  doLogout= async () => {
    await fetch("/admin/logout", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    localStorage.clear()
    this.setState({
      currentUser: {}
    })
    this.props.history.push(routes.ROOT)
  }
  render() {
    const { currentUser, showFilterBar } = this.state 
    return ( 
      <div>
         <Navbar className="navbar" doLogout={this.doLogout} currentUser={currentUser} showFilterBar={showFilterBar} switchBar={this.switchBar} openBar={this.openBar}/>
         <Switch>
          <Route exact path={routes.ROOT} render={()=>  <Map showFilterBar={showFilterBar} openFilter={this.openBar} closeBar={this.closeBar} currentUser={currentUser}/> }/> 
          <Route exact path={routes.REGISTER} render={() => <Register currentUser={currentUser} setCurrentUser={this.setCurrentUser}/>} />
          <Route exact path={routes.LOGIN} render={()=> <Login currentUser={currentUser} setCurrentUser={this.setCurrentUser}/>} />
          <Route exact path={routes.POST} render={()=> <NewResource currentUser={currentUser} setCurrentUser={this.setCurrentUser}/>} />
          <Route path = {`${routes.RESOURCES}/:id`} render={()=><EditResource/>}/>
          <Route render={()=> <div>You're LOST</div>}/>
        </Switch>
       
      </div>
     );
  }
}
 
export default withRouter(App);
