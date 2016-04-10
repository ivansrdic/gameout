import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import _ from 'lodash';
import InfoBar from './info-bar/info-bar.jsx';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixed: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', _.debounce(this.handleScroll.bind(this), 10));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', _.debounce(this.handleScroll.bind(this), 10));
  }

  handleScroll() {
    if(window.scrollY > 52) {
      this.setState({fixed: true});
    } else {
      this.setState({fixed: false});
    }
  }

  render() {
    return (
      <div>
        <Navbar style={{marginBottom: (this.state.fixed?72:0)}}>
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
        <InfoBar user={this.props.user} fixed={this.state.fixed} />
      </div>
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
          <NavItem href="/exercises">Exercises</NavItem>
          <NavItem href="/create-workout">Create Workout</NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/how-it-works">How it works</NavItem>
        </Nav>
      );
    }
  }
}

export default Navigation;