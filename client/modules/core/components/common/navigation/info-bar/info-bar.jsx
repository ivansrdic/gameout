import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {character, level} = this.props;

    if(character && level) {
      const {stats} = character;
      return (
        <Navbar id="info-bar" fixedTop={true} inverse={true}>
          <Nav pullRight={true}>
            <NavItem><i className="fa fa-circle"></i> {stats.gold}</NavItem>
            <NavItem><i className="fa fa-star"></i> {stats.experience}/{level.experience}</NavItem>
            <NavItem><i className="fa fa-heart"></i> {stats.health}/50</NavItem>
            <NavItem>{"Level " + stats.level}</NavItem>
          </Nav>
        </Navbar>
      );
    } else {
      return (
        <Navbar id="info-bar" fixedTop={true} inverse={true}>
          <Nav pullRight={true}>
          </Nav>
        </Navbar>
      );
    }
  }
}

export default Navigation;