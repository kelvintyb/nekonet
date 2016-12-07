import React from 'react';
import ChannelList from "../components/ChannelList"
import ChatRoom from "../components/ChatRoom"
import base from "../base.js"
import {findById, filterCollectionByKeys} from "../utils/helpers"
import "../css/ChatContainer.css"

class ChatroomContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      chatrooms: {}
    }
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
    this.ref = base.syncState("/chatrooms", {
      context: this,
      state: "chatrooms"
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  onSendMessage(author, text) {
    //   const new_message = {
    //     id: this.state.messages[this.state.messages.length -1].id +1,
    //     author,
    //     text,
    //     channel_id: currChatroom
    //   };
    // const messages = [...this.state.messages, new_message];
    // this.setState ({messages});
  }

  render() {
    const localUserRef = this.context.uid;
    const localUserName = this.context.userName;
    const currChatroom = this.context.currChatroom;
    const user = findById(localUserRef , "users");
    const userChatKeyArray = Object.keys(user.chatList);
    const userChats = filterCollectionByKeys(userChatKeyArray, this.state.chatrooms);
    const chatRoomDatabase = base.database().ref(`chatrooms`)
    const currMessages = findById(currChatroom, chatRoomDatabase)["messages"]

    return (
      <div className="chat-container">
        <ChannelList channels={userChats} selectedChannelId={currChatroom} />
        <MessagePane currUserName={localUserName} currUserId={localUserRef} channel={currChatroom} messages={currMessages} onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

ChatroomContainer.contextTypes = {
  currChatroom: React.PropTypes.string,
  uid: React.PropTypes.string,
  userName: React.PropTypes.string,
  userImage: React.PropTypes.string
}
export default ChatroomContainer;
