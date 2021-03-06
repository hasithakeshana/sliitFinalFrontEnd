import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
//import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

 clicked = ()=>{
console.log('xxxx');

localStorage.removeItem('jwtToken');
}

render() {
  return (
<div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
          
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/grid">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          
            
            <MDBNavItem >
        <MDBNavLink className="waves-effect waves-light" to="/login" >

          
            <MDBIcon icon="user" /> Login
           
        </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem >
        <MDBNavLink className="waves-effect waves-light" to="/register">
            <MDBIcon icon="user-plus" /> Register
            </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="">
            <span onClick={ () => this.clicked()}>
              <MDBIcon  icon="power-off" />
              SignOut
              </span>
            </MDBNavLink>
          </MDBNavItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
    );
  }
}

export default NavbarPage;