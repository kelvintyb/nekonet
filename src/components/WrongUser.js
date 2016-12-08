import React from 'react';

class WrongUser extends React.Component {

  render() {
    return (
      <div style={{marginTop: `150px`}}>
        <h1>You are not logged in as the right user, please try again.</h1>
      </div>
    );
  }

}

export default WrongUser;
