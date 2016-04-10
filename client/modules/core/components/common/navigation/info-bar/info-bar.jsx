import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {character} = this.props;

    return (
      <Navbar id="info-bar" fixedTop={true} className={this.props.fixed?"":"info-bar"}>
        <Nav pullRight={true}>
          <NavItem><i className="fa fa-circle"></i> 0</NavItem>
          <NavItem><i className="fa fa-star"></i> {character.stats.experience}/120</NavItem>
          <NavItem><i className="fa fa-heart"></i> {character.stats.health}/50</NavItem>
          <NavItem>{this.props.user.username + " " + "Lvl " + character.stats.level}</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;