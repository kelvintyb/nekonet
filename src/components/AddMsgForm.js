import React, { Component } from 'react';

class AddMsgForm extends Component {
  constructor() {
    super();

    this.state = {
      name: this.props.name,
      message: '',
      chatroom_id: this.props.channel      
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }
  // get name and message and put it into database

  onSubmit() {
    const { name, message } = this.state;
    console.log(name, message);
    this.props.onSend(name, message);
    this.setState({ name:"", message: "" })
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

export default AddMsgForm;
