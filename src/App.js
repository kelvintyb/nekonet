import React, { Component } from 'react';
import Header from "./components/Header"
import Cat from "./components/Cat"
import AddCatForm from "./components/AddCatForm"
import UserProfile from "./components/UserProfile"
import base from "./base"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.addCat = this.addCat.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      //this is for detection of logged in user
      uid: null,
      //cats - note that age is going to be in terms of months
      cats: {}
    }
  }
  componentWillMount(){
    //sync up state of cats with firebase here
    this.ref = base.syncState("/cats", {
      context: this,
      state: "cats"
    });
    //check for loggedIn User
    const localUserRef = localStorage.getItem("localUser");
    if (localUserRef){
      //update App state.uid
      this.setState({uid: localUserRef});
    }
  }

  componentDidMount(){
    base.onAuth()((user) => {
      if(user){
        this.authHandler(null, {user});
      }
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }
  authenticate(provider){
    base.authWithOAuthPopup(provider, this.authHandler);
  }
  logout(){
    base.unauth();
    localStorage.removeItem("localUser")
    this.setState({uid: null});
  }
  authHandler(err, authData){
    if (err){
      console.error(err);
      return;
    }
    //grab app info from firebase using root ref
    const database = base.database().ref();

    //query firebase once for app database
    database.once("value", (snapshot) => {
      let user = `${authData.user.uid}`
        database.set({
          users: {
            [user] : {
              uid: authData.user.uid,
              name: authData.user.displayName,
              imageUrl: authData.user.photoURL
            }
          }
        })
      //set user id in both localStorage & state to detect if user isLoggedIn, even if browser is refreshed
      localStorage.setItem(`localUser`, `${authData.user.uid}`)
      this.setState({
        uid: authData.user.uid
      })
    })
  }

  addCat(cat){
    //make a copy of current state.cats
    const cats = {...this.state.cats};
    //add cat with unique key - may need to change since multiple users may add at the same time
    const timestamp = Date.now();
    cats[`cat-${timestamp}`] = cat
    //set state
    this.setState({cats})
  }

  render() {
    return (
      <div className="App">
        <Header
          uid={this.state.uid} authenticate={this.authenticate}
          logout={this.logout}
        />
        <ul className="list-of-cats">
          {
            Object.keys(this.state.cats)
                  .map(key => <Cat key={key} index={key} details={this.state.cats[key]} />)
          }
        </ul>
        <AddCatForm addCat={this.addCat} uid={this.state.uid} />
        <UserProfile />
      </div>
    );
  }
}

export default App;
