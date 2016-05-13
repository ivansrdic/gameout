import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';


class ChangesMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="changes">
        {this.renderMessages()}
      </div>
    );
  }

  renderMessages() {
    return this.props.messages.map(function(message) {
      return (
        <ListGroupItem key={message.key} bsStyle={message.style} className={"animated " + message.animation}>
          {message.name}: {message.value}
        </ListGroupItem>
      );
    })
  }
}

export default ChangesMessage;