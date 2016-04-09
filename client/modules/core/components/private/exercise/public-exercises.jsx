import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import ExercisesList from '../shared/exercise/exercises-list.jsx';

class PublicExercies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.closePublicExercises.bind(this)}>
        {this.renderInventory()}
      </Modal>
    );
  }

  renderInventory() {
    if (this.props.show) {
      return (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Search public exercises</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExercisesList exercises={this.props.exercises} onClickAdd={this.addExercise.bind(this)} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closePublicExercises.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      );
    }
  }

  addExercise(exercise) {
    console.log("Add " + exercise.name + " to my exercises");
  }

  closePublicExercises() {
    this.props.closePublicExercises();
  }
}

export default PublicExercies;