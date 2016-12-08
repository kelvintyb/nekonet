import React from 'react';
import UserProfile from "../components/UserProfile"
import base from "../base.js"
import "../css/UserProfile.css"


class ProfileContainer extends React.Component {
  componentWillMount(){
    this.authListener = this.authListener.bind(this)
    this.authListener();
  }
  componentWillUnmount(){
    this.firebaseListener && this.firebaseListener();
    this.authListener = undefined;
  }
  authListener() {
    this.firebaseListener = base.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
      } else {
        // No user is signed in.
        this.context.router.push(`/login`)
      }
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="wrapper">
          <UserProfile />
          <div className="main-panel">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProfileContainer.contextTypes = {
  router: React.PropTypes.object
}

export default ProfileContainer;
