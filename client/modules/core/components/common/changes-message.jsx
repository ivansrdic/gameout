import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';


class ChangesMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel id="changes">
        <ListGroup>
          {this.renderMessages()}
        </ListGroup>
      </Panel>
    );
  }

  renderMessages() {
    return this.props.messages.map(function(message) {
      return (
        <ListGroupItem key={message.key} bsStyle={message.style}>
          {message.name}: {message.value}
        </ListGroupItem>
      );
    })
  }
}

export default ChangesMessage;