import React from 'react';
import {Navbar, Nav, NavbarBrand, NavItem} from 'react-bootstrap';

const Navigation = ({content = () => null}) => (
  <Navbar>
    <Navbar.Header>
      <NavbarBrand>
        <a href="/">Gameout</a>
      </NavbarBrand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="/">Home</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;