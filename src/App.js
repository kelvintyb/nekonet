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
    this.incrementLikes = this.incrementLikes.bind(this)
    this.appendLikeList = this.appendLikeList.bind(this)
    this.decrementLikes = this.decrementLikes.bind(this)
    this.removeLikeList = this.removeLikeList.bind(this)

    this.addChat = this.addChat.bind(this);
    this.addCat = this.addCat.bind(this);
    this.updateCat = this.updateCat.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.updateCurrChat = this.updateCurrChat.bind(this)

    this.state = {
      //this is for detection of logged in user
      uid: null,
      userName: null,
      imageUrl: null,
      //cats - note that age is going to be in terms of months
      cats: {},
      users: {},
      //for chat tracking
      currChatroom: null
    }
  }
  componentWillMount(){
    //sync up state of cats with firebase here
    this.ref = base.syncState("/cats", {
      context: this,
      state: "cats"
    });
    this.ref = base.syncState("/users", {
      context: this,
      state: "users"
    });

    //check for loggedIn User
    const localUserRef = localStorage.getItem("localUser");
    if (localUserRef){
      //update App state.uid
      this.setState({uid: localUserRef});
    }
    if (localStorage.getItem("currChat")){
      this.setState({currChatroom: localStorage.getItem("currChat")})
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
    this.setState({uid: null})
    this.context.router.push("/")
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
        uid: authData.user.uid,
        name: authData.user.displayName,
        imageUrl: authData.user.photoURL
      })
      this.context.router.push("/")
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

  //TODO:for like and unlike, just editCat as handler of the cat like and unlike btns and then use updateCat

  addChat(chatKey, chat){
    //update chatrooms in firebase"
    let updates = {};
    updates[`/chatrooms/${chatKey}`] = chat;
    updates[`/users/${Object.keys(chat.users)[0]}/chatList/${chatKey}`] = true;
    updates[`/users/${Object.keys(chat.users)[1]}/chatList/${chatKey}`] = true;
    console.log(updates)
    console.log(this.state.cats)
    console.log(this.state.users)
    base.database().ref().update(updates);
    this.updateCurrChat(chatKey)
    localStorage.setItem(`currChat`, `${chatKey}`);
      //transition to chatroom route
    this.context.router.push("/chats")
  }
  updateCurrChat (chatKey) {
    this.setState({currChatroom: chatKey})
  }
  incrementLikes(catKey){
    const cats = {...this.state.cats};
    cats[catKey].likes += 1;
    this.setState({cats});
  }
  appendLikeList(catKey, userKey){
    let updates = {};
    updates[`/users/${userKey}/likeList/${catKey}`] = true;
    base.database().ref().update(updates);
  }
  decrementLikes(catKey){
    const cats = {...this.state.cats};
    cats[catKey].likes -= 1;
    this.setState({cats});
  }
  removeLikeList(catKey, userKey){
    let updates = {};
    updates[`/users/${userKey}/likeList/${catKey}`] = null;
    base.database().ref().update(updates);
  }


// NOTE: should refactor into Redux pattern
  getChildContext(){
    return {
      incrementLikes: this.incrementLikes,
      appendLikeList: this.appendLikeList,
      decrementLikes: this.decrementLikes,
      removeLikeList: this.removeLikeList,
      currChatroom: this.state.currChatroom,
      addChat: this.addChat,
      addCat: this.addCat,
      updateCat: this.updateCat,
      uid: this.state.uid,
      userName: this.state.name,
      userImage: this.state.imageUrl,
      cats: this.state.cats,
      users: this.state.users,
      updateCurrChat: this.updateCurrChat
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          uid={this.state.uid} authenticate={this.authenticate}
          logout={this.logout}
        />
        {this.props.children}

        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

App.childContextTypes = {
  incrementLikes: React.PropTypes.func,
  appendLikeList: React.PropTypes.func,
  decrementLikes: React.PropTypes.func,
  removeLikeList: React.PropTypes.func,
  users: React.PropTypes.object,
  currChatroom: React.PropTypes.string,
  addChat: React.PropTypes.func,
  addCat: React.PropTypes.func,
  updateCat: React.PropTypes.func,
  uid: React.PropTypes.string,
  userName: React.PropTypes.string,
  userImage: React.PropTypes.string,
  cats: React.PropTypes.object,
  updateCurrChat: React.PropTypes.func
}

export default App;
