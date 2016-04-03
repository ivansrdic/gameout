import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import CreateExercise from './../../../containers/private/create-exercise/create-exercise';

class CreateExerciseModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.onClickClose.bind(this)}>
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Create exercise</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateExercise user={this.props.user} onFormSubmit={this.props.onClickClose}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onClickClose.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      </Modal>
    );
  }

  onClickClose() {
    this.props.onClickClose();
  }
}

export default CreateExerciseModal;