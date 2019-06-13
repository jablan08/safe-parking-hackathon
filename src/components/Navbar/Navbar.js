import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from 'mdbreact';
import * as routes from '../../constants/routes'
import Filter from "../Filter/Filter"
import styled from "styled-components";

const MainContainer = styled(MDBContainer)`
  position:absolute;
  .filter-btn {
    z-index: 1;
    border: none;
    background: none;
}
`

class Navbar extends Component {
state = {
  collapseID: ''
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

            <button className="filter-btn"onClick={this.props.openBar}><img src="/images/Filter.png"/></button>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          </div>
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to={routes.ROOT}>Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={routes.POST}>Post</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={routes.LOGIN}>Login</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={routes.REGISTER}>Register</MDBNavLink>
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