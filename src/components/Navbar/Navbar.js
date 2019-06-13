import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer} from 'mdbreact';
import * as routes from '../../constants/routes'
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
  .navButton {
    margin-left: .3rem;
  }
  .more-navbar {
    padding: .5rem 0rem;
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
      <MDBNavbar className="more-navbar" color="light-blue lighten-4" style={{ marginTop: '20px', 'opacity': .73 }} light>
        <MDBContainer>
          <MDBNavbarBrand >
            <MDBNavLink to={routes.ROOT} onClick={this.toggleCollapse('navbarCollapse1')}><img className="img-logo" src="/images/Logo.png" alt=""/></MDBNavLink>
            
          </MDBNavbarBrand>
          <div className="nav-btns">
            {
              this.props.currentUser.splaId
              &&
              <MDBNavLink className="add-resource"to={routes.POST} ><img src="/images/AddResourceButton.png" alt=""/></MDBNavLink>
            }
            <button className="filter-btn" onClick={this.props.switchBar}><img src="/images/Filter.png" alt=""/></button>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          </div>
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem>
              <MDBNavLink className="add-resource"to={routes.POST} >Home</MDBNavLink>
              </MDBNavItem>
              
              { 
                this.props.currentUser.splaId
                ? <MDBNavItem onClick={()=>this.props.doLogout()} className="navButton" >Logout</MDBNavItem>
                :
                <MDBNavItem>
                  <MDBNavLink to={routes.LOGIN} onClick={this.toggleCollapse('navbarCollapse1')}>Login</MDBNavLink>
                </MDBNavItem>
              }
              {/* <MDBNavItem>
                <MDBNavLink to={routes.REGISTER} onClick={this.toggleCollapse('navbarCollapse1')}>Register</MDBNavLink>
              </MDBNavItem> */}
            </NavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MainContainer>
    );
  }
}

export default Navbar;