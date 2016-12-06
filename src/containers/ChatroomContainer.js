import React from 'react';
import ChatRoomSideList from "../components/ChatRoomSideList"
import ChatRoom from "../components/ChatRoom"
import base from "../base.js"

class ChatroomContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      chatrooms: {}
    }
  }

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
    return (
      <div>
        <h1>Chatroom container here</h1>
      </div>
    );
  }

}

export default ChatroomContainer;
