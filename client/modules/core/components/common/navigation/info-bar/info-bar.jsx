import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Navbar id="info-bar" fixedTop={true} className={this.props.fixed?"":"info-bar"}>
        <Nav pullRight={true}>
          <NavItem><i className="fa fa-circle"></i> 0</NavItem>
          <NavItem><i className="fa fa-star"></i> 0/120</NavItem>
          <NavItem><i className="fa fa-heart"></i> 50/50</NavItem>
          <NavItem>Gameout Lvl 1</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;