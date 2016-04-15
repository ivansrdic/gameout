import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import _ from 'lodash';
import InfoBar from '../../../containers/common/navigation/info-bar/info-bar';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixed: false
    }
  }
  
  componentDidMount() {
    this.debouncedHandleScroll = _.debounce(this.handleScroll.bind(this), 10);
    window.addEventListener('scroll', this.debouncedHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedHandleScroll);
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

            <Nav>
              <NavItem href="/profile">Profile</NavItem>
              <NavItem href="/edit-info">User info</NavItem>
              <NavItem href="/customize-character">Character</NavItem>
              <NavItem href="/profile-setup">Profile Setup</NavItem>
              <NavItem href="/exercises">Exercises</NavItem>
              <NavItem href="/create-workout">Create Workout</NavItem>
            </Nav>
      
            <Nav id="auth-nav" pullRight style={{marginRight: 0}}>
              <NavItem onClick={() => {this.props.logout()}}>Log out</NavItem>
            </Nav>
    
          </Navbar.Collapse>
        </Navbar>
        <InfoBar user={this.props.user} fixed={this.state.fixed} />
      </div>
    );
  }
}

export default Navigation;