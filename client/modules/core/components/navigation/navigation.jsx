import React, {Component} from 'react';
import {Navbar, Nav, NavbarBrand, NavItem} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <NavbarBrand>
            <a href="/">Gameout</a>
          </NavbarBrand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/how-it-works">How it works</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/edit-info">Edit info</NavItem>
            <NavItem href="/customize-character">Customize</NavItem>
          </Nav>
          <Nav id="auth-nav" pullRight style={{marginRight: 0}}>
            {this.renderAuthNav()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderAuthNav() {
    if(Meteor.user()) {
      return <NavItem onClick={this.handleLogoutClick}>Log out</NavItem>;
    } else {
      return <NavItem href="/sign-in">Log in/Register</NavItem>;
    }
  }

  handleLogoutClick() {
    Actions.Authorization.logout();
  }
}

export default Navigation;