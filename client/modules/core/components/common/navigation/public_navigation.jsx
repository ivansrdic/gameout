import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class PublicNavigation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const toggle = $("#navbar-toggle");
    $(".navbar").on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        toggle.click();
      }
    }.bind(this));
  }
  
  render() {
    return (
      <Navbar inverse={true}>
        <Navbar.Header>
          <a href="/"><img src="logo.png" alt="Gameout logo"/></a>
          <Navbar.Toggle id="navbar-toggle"/>
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