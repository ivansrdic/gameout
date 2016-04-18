import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import WorkoutsList from '../shared/workout/workouts-list.jsx';

class PublicWorkout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.closePublicWorkouts.bind(this)}>
        {this.renderInventory()}
      </Modal>
    );
  }

  renderInventory() {
    if (this.props.show) {
      return (
          <div>
          <Modal.Header closeButton>
      <Modal.Title>Search public workouts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <WorkoutsList
          workouts={this.props.workouts}
          getWorkoutExercises={this.props.getWorkoutExercises}
      />

    </Modal.Body>
      <Modal.Footer>
      <Button onClick={this.closePublicWorkouts.bind(this)}>Close</Button>
      </Modal.Footer>
      </div>
    );
    }
  }

  closePublicWorkouts() {
    this.props.closePublicWorkouts();
  }
}

export default PublicWorkout;