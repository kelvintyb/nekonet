import React, { Component } from 'react';

class AddMsgForm extends Component {
  constructor() {
    super();
    this.state = {
      name: localStorage.getItem("localUserName"),
      message: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }
  // get name and message and put it into database

  onSubmit() {
    const { name, message } = this.state;
    this.props.onSend(name, message);
    this.setState({ message: "" })
  }

  updateMessage(event) {
    this.setState({message: event.target.value });
  }


  render () {
    return (
      <div className="MessagePane-Form">
        <div className="MessagePane-Form-container">
          <p>
            <textarea
              className="message"
              placeholder="Your Message"
              value={this.state.message}
              onChange={this.updateMessage}
              />
          </p>
          <p>
            <button className="send" onClick={this.onSubmit}>Send</button>
          </p>
        </div>
      </div>
    )
  }
}

AddMsgForm.contextTypes = {
  currChatroom: React.PropTypes.string,
  onSendMessage: React.PropTypes.func
}

export default AddMsgForm;
