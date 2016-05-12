import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * From time to time it would be prudent to remove try-catch block
   * to check for errors. This is a hotfix and needs to be refactored.
   * @returns {XML}
   */
  render() {
    const {character, level} = this.props;

    try {
      if (character && level) {
        const {stats} = character;
        return (
          <Navbar id="info-bar" fixedTop={true} inverse={true}>
            <Nav pullRight={true}>
              <NavItem><i className="fa fa-circle"></i> {stats.gold}</NavItem>
              <NavItem><i className="fa fa-star"></i> {stats.experience}/{level.experience}</NavItem>
              <NavItem><i className="fa fa-heart"></i> {stats.currentHealth}/{stats.maxHealth}</NavItem>
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
    } catch (err) {
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