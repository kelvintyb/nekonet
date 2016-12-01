import React from 'react';
import "../css/Header.css"

class Header extends React.Component {
  constructor(){
    super();
    this.renderLogin = this.renderLogin.bind(this);
  }
  renderLogin(){
    return(
      <nav className="login">
          <button className="facebook" onClick={() => this.props.authenticate("facebook")}>Log in with Facebook</button>
      </nav>
    )
  }
  render() {
      const logout = <button onClick={this.props.logout}>Log Out!</button>
      //check if they are not logged in at all
      if(!this.props.uid) {
          return <div>{this.renderLogin()}</div>
      }
      return (
        <div className="App-header">
          {logout}
          <img src="http://thecraftchop.com/files/images/grumpy.svg" className="App-logo" alt="logo" />
          <h2>Welcome to NekoNet</h2>
        </div>
      )
  }
}
export default Header;
