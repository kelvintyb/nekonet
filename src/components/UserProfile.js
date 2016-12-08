import React from 'react';
import Cat from "./Cat";
import CatDisplay from "../components/CatDisplay"
import {LinkContainer} from "react-router-bootstrap"


class UserProfile extends React.Component {
  goTo(url, e){
    e.preventDefault();
    this.context.router.push(url);
  }

  render() {
    return (
      <div>
          <div className="sidebar" data-color="orange" data-image="../public/media/sidebar-2.jpg">
    	      <div className="sidebar-wrapper">
              <div className="logo">
                  <img className="img-thumbnail" src={localStorage.getItem("localUserImage")}/>
              </div>
              <ul className="nav">
                <li>
                    <a href="#" onClick={(e) => {e.preventDefault()}}>
                        <i className="ion-person"></i>
                        <p>Edit User Profile</p>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => this.goTo("/profile/cats",e)}>
                        <i className="ion-ios-paw"></i>
                        <p>Foster Cats</p>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => this.goTo("/profile/likelist",e)}>
                        <i className="ion-thumbsup"></i>
                        <p>Like List</p>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => this.goTo("/chats",e)}>
                        <i className="ion-chatboxes"></i>
                        <p>Chat</p>
                    </a>
                </li>
              </ul>
    	      </div>
          </div>
      </div>
    );
  }
}

UserProfile.contextTypes = {
  router: React.PropTypes.object
}
export default UserProfile;
