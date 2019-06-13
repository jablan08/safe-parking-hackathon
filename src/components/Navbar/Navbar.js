import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from 'mdbreact';
import * as routes from '../../constants/routes'
import Filter from "../Filter/Filter"
import styled from "styled-components";

const MainContainer = styled(MDBContainer)`
  position:absolute;
  width: 100%;
 /* text-align: center; */
  .filter-btn {
    z-index: 1;
    border: none;
    background: none;
  }
  .nav-btns {
    display: flex;
  }
`

class Navbar extends Component {
state = {
  collapseID: '',
  currentUser: false
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    <MainContainer>
      <MDBNavbar color="light-blue lighten-4" style={{ marginTop: '20px', 'opacity': .73 }} light>
        <MDBContainer>
          <MDBNavbarBrand>
            <img className="img-logo" src="/images/Logo.png"/>
          </MDBNavbarBrand>
          <div className="nav-btns">
            {
              this.props.currentUser.splaId
              &&
              <MDBNavLink to={routes.POST} onClick={this.toggleCollapse('navbarCollapse1')}><img src="/images/AddResourceButton.png"/></MDBNavLink>
            }
            <button className="filter-btn"onClick={this.props.openBar}><img src="/images/Filter.png"/></button>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          </div>
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem>
                <MDBNavLink to={routes.ROOT} onClick={this.toggleCollapse('navbarCollapse1')}>Home</MDBNavLink>
              </MDBNavItem>
              
              { 
                !this.state.currentUser &&
              <MDBNavItem>
                <MDBNavLink to={routes.LOGIN} onClick={this.toggleCollapse('navbarCollapse1')}>Login</MDBNavLink>
              </MDBNavItem>
              }
              <MDBNavItem>
                <MDBNavLink to={routes.REGISTER} onClick={this.toggleCollapse('navbarCollapse1')}>Register</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MainContainer>
    );
  }
}

export default Navbar;