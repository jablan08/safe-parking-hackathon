import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import NewResource from "./components/NewResource/NewResource"
import Register from "./components/Register/Register";
import Navbar from "../src/components/Navbar/Navbar"

import * as routes from "./constants/routes";

import Map from '../src/components/Map/Map'
class App extends Component {
  state = {
    currentUser: {}
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
  doLogout= async () => {
    await fetch("/login/logout", {
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
    const { currentUser } = this.state 
    return ( 
      <div>
         <Navbar className="navbar" currentUser={currentUser} />
         <Switch>
          <Route exact path={routes.ROOT} render={()=>  <Map /> }/> 
          <Route exact path={routes.REGISTER} render={() => <Register currentUser={currentUser} setCurrentUser={this.setCurrentUser}/>} />
          <Route exact path={routes.LOGIN} render={()=> <Login currentUser={currentUser} setCurrentUser={this.setCurrentUser}/>} />
          <Route exact path={routes.POST} render={()=> <NewResource currentUser={currentUser} setCurrentUser={this.setCurrentUser}/>} />
          <Route render={()=> <div>You're LOST</div>}/>
        </Switch>
       
      </div>
     );
  }
}
 
export default withRouter(App);
