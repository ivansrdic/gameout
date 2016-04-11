import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class PublicNavigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <a href="/"><img src="logo.png" alt="Gameout logo"/></a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/how-it-works">How it works</NavItem>
          </Nav>
          <Nav id="auth-nav" pullRight style={{marginRight: 0}}>
            <NavItem href="/sign-in">Log in/Register</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default PublicNavigation;