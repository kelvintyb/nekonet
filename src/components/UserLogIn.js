import React from 'react';
import {LinkContainer} from "react-router-bootstrap"
import {MenuItem, NavDropdown, Button, ButtonToolbar} from "react-bootstrap"
import "../css/Header.css";


class UserLogIn extends React.Component {
  render() {
    const userName = localStorage.getItem("localUserName")
    //check if they are not logged in at all
    if(!this.props.uid) {
        return (
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" onClick={()=> this.props.authenticate("facebook")} active>Log in with Facebook</Button>
          </ButtonToolbar>
        )
    }

    return (
      <div>
        <div className="account">
            Hello, {userName}!
        </div>
        <div className="account">
        <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
          <LinkContainer to={{pathname: "/profile"}}>
            <MenuItem className="navlinks" eventKey={3.1}>My Profile</MenuItem>
          </LinkContainer>
          <LinkContainer to={{pathname: "/profile/cats"}}>
            <MenuItem className="navlinks" eventKey={3.2}>My Cats</MenuItem>
          </LinkContainer>
          <LinkContainer to={{pathname: "/chats"}}>
            <MenuItem className="navlinks" eventKey={3.3}>My Chats</MenuItem>
          </LinkContainer>
          <MenuItem divider />
          <MenuItem className="navlinks" eventKey={3.4} onSelect={this.props.logout}>Logout</MenuItem>
        </NavDropdown>
        </div>
      </div>
    );
  }

}

export default UserLogIn;
