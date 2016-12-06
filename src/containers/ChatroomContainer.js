import React from 'react';
import ChannelList from "../components/ChannelList"
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

  onSendMessage(author, text) {
      const new_message = {
        id: this.state.messages[this.state.messages.length -1].id +1,
        author,
        text,
        channel_id: 1
      };
    const messages = [...this.state.messages, new_message];
    this.setState ({messages});
  }

  render() {
    const localUserRef = localStorage.getItem("localUser");
    const localUserName = localStorage.getItem("localUserName")

    return (
      <div className="chat-container">
        <ChannelList channels={this.state.channels} selectedChannelId={null} />
        <MessagePane messages={this.state.channels} onSendMessage={this.onSendMessage} />
      </div>
    );
  }

}

export default ChatroomContainer;
