import React from 'react';
import ChannelList from "../components/ChannelList"
import base from "../base.js"
import {findById, filterCollectionByKeys} from "../utils/helpers"
import "../css/ChatContainer.css"

class ChatroomContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      chatrooms: null,
      channel: null
    }
    this.onChannelSelect = this.onChannelSelect.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
  }
  // chatroomkey1 : {
  //  id: chatroomkey1,
  //   name: `${this.cat.name} fostered by: ${this.cat.uid}`
  //   users: { localStorage.uid, this.cat.uid }
  //   cat: this.cat
  //   messages: {
  //     message1key: {
  //       author: localStorage.displayName,
  //       text: textfield
  //       chatroom_id: currChatroom
  //
  //     } ,
  //     message2key: {}
  //   }
  // },
  // chatroomkey2: {
  //   //same as above
  //
  // }
  componentWillMount(){
    this.authListener = this.authListener.bind(this)
    this.authListener();

    this.ref = base.syncState("/chatrooms", {
      context: this,
      state: "chatrooms"
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref)
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
  onChannelSelect(id) {
    this.context.updateCurrChat(id);
    this.setState({channel: id})
    this.context.router.push(`/chats/${id}`)
  }
  onSendMessage(author, text) {
    const currChatroom = this.context.currChatroom;
    const msgKey = base.database().ref(`/chatrooms/${currChatroom}/messages`).push().key;
    let updates = {};
    updates[`/chatrooms/${currChatroom}/messages/${msgKey}`] = {author, text}
    base.database().ref().update(updates);
  }

  getChildContext(){
    return {
      chatrooms: this.state.chatrooms,
      onSendMessage: this.onSendMessage
    }
  }

  render() {
    const localUserRef = localStorage.getItem("localUser");
    const currChatroom = this.context.currChatroom;
    //BUG: this.context.users not filled on direct URL refresh - suspect the syncState request not complete from Appcontainer, will nd to either 1) syncstate of users in this container instead or 2) use a firebase .once("value").then to grab right user
    let user = findById(localUserRef, this.context.users);
    // console.log(this.context.users)
    // console.log(localUserRef)
    // console.log(currChatroom)
    // console.log(user)
    //quickfix for the abovementioned bug - allows component to load first
    const userChatKeyArray = !!user ? Object.keys(user.chatList) : [];
    const userChats = filterCollectionByKeys(userChatKeyArray, this.state.chatrooms);
    return (
      <div className="main-container chat-wrapper">
        <ChannelList channels={userChats} selectedChannelId={currChatroom} onSelect={this.onChannelSelect}/>
        {this.props.children}
      </div>
    );
  }
}

ChatroomContainer.contextTypes = {
  router: React.PropTypes.object,
  currChatroom: React.PropTypes.string,
  uid: React.PropTypes.string,
  userName: React.PropTypes.string,
  userImage: React.PropTypes.string,
  users: React.PropTypes.object,
  updateCurrChat: React.PropTypes.func
}

ChatroomContainer.childContextTypes = {
  chatrooms: React.PropTypes.object,
  onSendMessage: React.PropTypes.func
}

export default ChatroomContainer;
