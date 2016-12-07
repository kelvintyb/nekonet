import React from 'react';
import AddMsgForm from './AddMsgForm';
import '../css/MessagePane.css';


const Message = ({author, text}) => (
  <div className="Message">
      <div className="Message-author">{author}
      </div>
      <div className="Message-text">{text}
      </div>
  </div>
);

const List = ({messages}) => (
  <div className="MessagePane-List">
    //need to use Object.keys to turn into message
    {messages.map(({id, author, text}) => <Message key={id} author={author} text={text} />) }
  </div>
);

const MessagePane = ({messages, onSendMessage}) => (
  <div className="MessagePane">
    <List messages={messages} />
    <AddMsgForm name={this.props.currUserName} channel={this.props.channel} onSend={onSendMessage} />
  </div>
);
// app passes the function to MessagePane, then MessagePane passes the function to Form, then when you click on the button just follows blindly.

MessagePane.defaultProps = {
  messages: {}
};

export default MessagePane;
