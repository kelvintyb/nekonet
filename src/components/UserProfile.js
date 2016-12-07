import React from 'react';
import Cat from "./Cat";
import CatDisplay from "../components/CatDisplay"
import {LinkContainer} from "react-router-bootstrap"
import "../css/UserProfile.css"


class UserProfile extends React.Component {

  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="sidebar" data-color="orange" data-image="../public/media/sidebar-2.jpg">
    	<div className="sidebar-wrapper">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text">
                    Add Username here
                </a>
            </div>

            <ul className="nav">
                <li>
                    <a href="dashboard.html">
                        <i className="ion-person"></i>
                        <p>Edit User Profile</p>
                    </a>
                </li>
                <li>
                    <a href="user.html">
                        <i className="ion-ios-paw"></i>
                        <p>Foster Cats</p>
                    </a>
                </li>
                <li className="active">
                    <a href="table.html">
                        <i className="ion-thumbsup"></i>
                        <p>Like List</p>
                    </a>
                </li>
                <li>
                    <a href="typography.html">
                        <i className="ion-chatboxes"></i>
                        <p>Chat</p>
                    </a>
                </li>
                <li>
                    <a href="notifications.html">
                        <i className="ion-android-notifications"></i>
                        <p>Notifications</p>
                    </a>
                </li>
				<li className="active-pro">
                    <a href="upgrade.html">
                        <i className="ion-document-text"></i>
                        <p>Addstuffhere</p>
                    </a>
                </li>
            </ul>
    	      </div>
        </div>
      </div>
      <div className="main-panel">
      <div className="content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">
                          Hello
                      </div>

                  </div>
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default UserProfile;
