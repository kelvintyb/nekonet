import React from 'react';
import ChatRoomSideList from "../components/ChatRoomSideList"
import ChatRoom from "../components/ChatRoom"
import base from "../base.js"
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
  //       name: localStorage.displayName,
  //       msg: textfield
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
  render() {
    const localUserRef = localStorage.getItem("localUser");

    return (
      <div className="chat-container">
        <ChannelList channels={this.state.channels} selectedChannelId={} />
        <MessagePane messages={this.state.messages} onSendMessage={this.onSendMessage} />
      </div>
    );
  }

}

export default ChatroomContainer;
