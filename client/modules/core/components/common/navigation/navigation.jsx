import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import InfoBar from '../../../containers/common/navigation/info-bar/info-bar';

class Navigation extends Component {
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
      <div>
        <Navbar fixedTop={true} inverse={true}>
          <Navbar.Header>
            <a href="/"><img src="logo.png" alt="Gameout logo"/></a>
            <Navbar.Toggle id="navbar-toggle"/>
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav>
              <NavItem href="/profile">Profile</NavItem>
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <MenuItem href="/edit-info">User info</MenuItem>
                <MenuItem href="/customize-character">Character</MenuItem>
              </NavDropdown>
              <NavDropdown title="Social" id="basic-nav-dropdown">
                <MenuItem href="/group">Group</MenuItem>
                <MenuItem href="/pvp-group">PvP</MenuItem>
              </NavDropdown>
              <NavDropdown title="Social" id="basic-nav-dropdown">
                <MenuItem href="/exercises">Exercises</MenuItem>
                <MenuItem href="/workouts">Workouts</MenuItem>
              </NavDropdown>
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