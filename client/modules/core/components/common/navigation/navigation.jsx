import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import _ from 'lodash';
import InfoBar from '../../../containers/common/navigation/info-bar/info-bar';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar fixedTop={true} inverse={true}>
          <Navbar.Header>
            <a href="/"><img src="logo.png" alt="Gameout logo"/></a>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav>
              <NavItem href="/profile">Profile</NavItem>
              <NavItem href="/group">Group</NavItem>
              <NavItem href="/edit-info">User info</NavItem>
              <NavItem href="/customize-character">Character</NavItem>
              <NavItem href="/exercises">Exercises</NavItem>
              <NavItem href="/workouts">Workouts</NavItem>
              <NavItem href="/market">Market</NavItem>
            </Nav>
      
            <Nav id="auth-nav" pullRight style={{marginRight: 0}}>
              <NavItem onClick={() => {this.props.logout()}}>Log out</NavItem>
            </Nav>
    
          </Navbar.Collapse>
        </Navbar>
        <InfoBar user={this.props.user}/>
      </div>
    );
  }
}

export default Navigation;