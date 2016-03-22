import React, {Component} from 'react';
import {Navbar, Nav, NavbarBrand, NavItem} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class Navigation extends Component {
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

          {this.renderLoggedInNav()}

          <Nav id="auth-nav" pullRight style={{marginRight: 0}}>
            {this.renderAuthNav()}
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderAuthNav() {
    // TODO: container for reactive data source
    if (Meteor.user()) {
      return <NavItem onClick={this.handleLogoutClick}>Log out</NavItem>;
    } else {
      return <NavItem href="/sign-in">Log in/Register</NavItem>;
    }
  }

  /**
   * Method renders navigation elements that are specific
   * to logged in users only.
   * @returns {XML}
   */
  renderLoggedInNav() {
    if (this.props.user) {
      return (
        <Nav>
          <NavItem href="/edit-info">Edit info</NavItem>
          <NavItem href="/customize-character">Customize</NavItem>
          <NavItem href="/profile">Profile</NavItem>
          <NavItem href="/profile-setup">Profile Setup</NavItem>
          <NavItem href="/create-workout">Create Workout</NavItem>
          <NavItem href="/create-workout-group">Create Workout Group</NavItem>
        </Nav>
      );
    } else {
      return(
        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/how-it-works">How it works</NavItem>
          <NavItem href="/about">About</NavItem>
        </Nav>
      );
    }
  }

  handleLogoutClick() {
    Actions.Authorization.logout();
  }
}

export default Navigation;