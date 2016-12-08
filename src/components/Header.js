import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import UserLogIn from "./UserLogIn"
import "../css/Header.css";

class Header extends React.Component {
  render() {
      return (
        <Navbar fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src="http://res.cloudinary.com/closecl/image/upload/c_scale,h_65/v1480845938/nekonet-logo_oimamp.png" alt="logo" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: "/cats"}}>
                <NavItem className="navlinks" eventKey={1} href="/cats">All Cats</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: "/about"}}>
                <NavItem className="navlinks" eventKey={2} href="/about">About Us</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <UserLogIn uid={this.props.uid} authenticate={this.props.authenticate} logout={this.props.logout}/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }
}
export default Header;
