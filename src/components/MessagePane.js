import React from 'react';
import Form from './Form';
import './index.css';


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
    {messages.map(({id, author, text}) => <Message key={id} author={author} text={text} />) }
  </div>
);

const MessagePane = ({messages, onSendMessage}) => (
  <div className="MessagePane">
  <List messages={messages} />
  <Form onSend={onSendMessage} />
  </div>
);
// app passes the function to MessagePane, then MessagePane passes the function to Form, then when you click on the button just follows blindly.


MessagePane.defaultProps = {
  messages: []
};

MessagePane.propTypes = {
  messages: React.PropTypes.array.isRequired
};


export default MessagePane;
