import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {user, character, getLevel} = this.props;

    if(user && character) {
      const {stats} = character;
      return (
        <Navbar id="info-bar" fixedTop={true} className={this.props.fixed?"":"info-bar"}>
          <Nav pullRight={true}>
            <NavItem><i className="fa fa-circle"></i> {stats.gold}</NavItem>
            <NavItem><i className="fa fa-star"></i> {stats.experience}/{getLevel().experience}</NavItem>
            <NavItem><i className="fa fa-heart"></i> {stats.health}/50</NavItem>
            <NavItem>{user.username + " " + "Lvl " + stats.level}</NavItem>
          </Nav>
        </Navbar>
      );
    } else {
      return (
        <Navbar id="info-bar" fixedTop={true} className={this.props.fixed?"":"info-bar"}>
          <Nav pullRight={true}>
          </Nav>
        </Navbar>
      );
    }
  }
}

export default Navigation;