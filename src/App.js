import React, { Component } from 'react';
import Header from "./components/Header"
import HeroHeader from "./components/HeroHeader"
import Footer from "./components/Footer"
import Cat from "./components/Cat"
import AddCatForm from "./components/AddCatForm"
import UserProfile from "./components/UserProfile"
import base from "./base"
import './css/App.css';

class App extends Component {
  constructor(){
    super();
    this.addCat = this.addCat.bind(this);
    this.updateCat = this.updateCat.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      //this is for detection of logged in user
      uid: null,
      //cats - note that age is going to be in terms of months
      cats: {},
      chatRooms: {}
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
      let user = `${authData.user.uid}`;
      var updates = {};
      updates[`/users/${user}`] = {
        uid: authData.user.uid,
        name: authData.user.displayName,
        imageUrl: authData.user.photoURL
      };
      //update database with user info - using .set will OVERWRITE the entire db, so don't use .set
      database.update(updates);
      //set user id & name in both localStorage & state to detect if user isLoggedIn, even if browser is refreshed
      //NOTE: consider using different storage for display name and image url since localStorage not supported by all browsers
      localStorage.setItem(`localUser`, `${authData.user.uid}`);
      localStorage.setItem(`localUserName`, `${authData.user.displayName}`)
      localStorage.setItem(`localUserImage`, `${authData.user.photoURL}`)

      this.setState({
        uid: authData.user.uid
      })
    })
  }
  addCat(cat){
    //make a copy of current state.cats
    const cats = {...this.state.cats};
    //add cat with unique key - may need to change since multiple users may add at the same time
    const newCatKey = base.database().ref().child("cats").push().key;
    //update currUser's fosterList in firebase
    let updates = {};
    updates[`/users/${this.state.uid}/fosterList/${newCatKey}`] = true
    base.database().ref().update(updates);
    //set state - this will automatically update the firebase due to 2-way binding
    cats[newCatKey] = cat
    this.setState({cats})
  }
  updateCat(catKey, cat){
    const cats = {...this.state.cats};
    Object.assign(cats[catKey], cat);
    this.setState({cats});
  }

//for like and unlike, just editCat as handler of the cat like and unlike btns and then use updateCat

// NOTE: should refactor into Redux pattern
  getChildContext(){
    return {
      addCat: this.addCat,
      updateCat: this.updateCat,
      uid: this.state.uid,
      userName: this.state.name,
      userImage: this.state.imageUrl,
      cats: this.state.cats
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          uid={this.state.uid} authenticate={this.authenticate}
          logout={this.logout}
        />
        <HeroHeader />
        <div className="main-container">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

App.childContextTypes = {
  addCat: React.PropTypes.func,
  updateCat: React.PropTypes.func,
  uid: React.PropTypes.string,
  userName: React.PropTypes.string,
  userImage: React.PropTypes.string,
  cats: React.PropTypes.object
}

export default App;
