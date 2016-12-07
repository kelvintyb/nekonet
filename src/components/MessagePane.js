import React from 'react';
import AddMsgForm from './AddMsgForm';
import {findById, arrayFrom} from "../utils/helpers";
import '../css/MessagePane.css';

const Message = (props) => (
  <div className="Message">
      <div className="Message-author">{props.author}
      </div>
      <div className="Message-text">{props.text}
      </div>
  </div>
);

class List extends React.Component {
  render(){
    let messages;
    if (this.props.messages == "isUndefined"){
      messages = (
        <h2> Enter your first message below! </h2>
      )
    } else {
      messages = (
        arrayFrom(this.props.messages).map(function({author, text}, index) {
          return <Message key={index} author={author} text={text}/>
        })
      )
    }
    console.log(this.props.messages)
    return(
      <div className="MessagePane-List">
        {messages}
      </div>
    )
  }
}

class MessagePane extends React.Component {
  constructor(){
    super()
  }
  render(){

    const messages = (findById(this.props.params.id, this.context.chatrooms).messages) || "isUndefined"
    const name = this.context.userName
    return(
      <div className="MessagePane">
        <List messages={messages} />
        <AddMsgForm name={name} channel={this.context.currChatroom} onSend={this.context.onSendMessage} />
      </div>
    )
  }
}
// const localUserRef = this.context.uid;
// const localUserName = this.context.userName;
// const user = findById(localUserRef, this.context.users);
// const userChatKeyArray = Object.keys(user.chatList);
// const userChats = filterCollectionByKeys(userChatKeyArray, this.state.chatrooms);
// const chatRoomDatabase = this.state.chatrooms
// const currChatObj = findById(currChatroom, chatRoomDatabase)


// <MessagePane currUserName={localUserName} currUserId={localUserRef} channel={currChatroom} currChatObj={currChatObj} onSendMessage={this.onSendMessage} />
MessagePane.defaultProps = {
  messages: []
};

MessagePane.contextTypes = {
  userName: React.PropTypes.string,
  currChatroom: React.PropTypes.string,
  chatrooms: React.PropTypes.object,
  onSendMessage: React.PropTypes.func
}

export default MessagePane;
