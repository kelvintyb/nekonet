import React from 'react';
import Cat from "./Cat";
import CatDisplay from "../components/CatDisplay"

class UserProfile extends React.Component {

  render() {
    return (
      <div>
        <h2>This is the Profile View</h2>
        <section className="displaypicandname"></section>
        <section className="pull-left">
            <p>This should be the vertical navbar with fostercats,likelist and chats</p>

        </section>
        <section className="pull-right">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default UserProfile;
