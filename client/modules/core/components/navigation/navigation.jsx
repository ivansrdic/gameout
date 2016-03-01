import React from 'react';
import {Navbar, Nav, NavbarBrand, NavItem} from 'react-bootstrap';
import AccountsUIWrapper from './accounts-ui.jsx';

const Navigation = () => (
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
      <Nav pullRight id="accounts-ui-container" style={{marginRight: 0}}>
        <AccountsUIWrapper />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;