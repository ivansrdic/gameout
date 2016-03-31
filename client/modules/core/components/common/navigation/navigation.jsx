import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
    if (this.props.user) {
      return <NavItem onClick={() => {this.props.logout()}}>Log out</NavItem>;
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
          <NavItem href="/profile">Profile</NavItem>
          <NavItem href="/edit-info">User info</NavItem>
          <NavItem href="/customize-character">Character</NavItem>
          <NavItem href="/profile-setup">Profile Setup</NavItem>
          <NavItem href="/create-exercise">Create Exercise</NavItem>
          <NavItem href="/create-workout">Create Workout</NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/how-it-works">How it works</NavItem>
          <NavItem href="/about">About</NavItem>
        </Nav>
      );
    }
  }
}

export default Navigation;