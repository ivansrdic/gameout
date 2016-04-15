import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {user, stats} = this.props;

    if(user && stats) {
      return (
        <Navbar id="info-bar" fixedTop={true} className={this.props.fixed?"":"info-bar"}>
          <Nav pullRight={true}>
            <NavItem><i className="fa fa-circle"></i> 0</NavItem>
            <NavItem><i className="fa fa-star"></i> {stats.experience}/120</NavItem>
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