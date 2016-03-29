import React, {Component} from 'react';
import {Button, Modal, ListGroup} from 'react-bootstrap';
import Workout from './workout.jsx';

class WorkoutSelection extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleWorkoutSelectionCloseClick.bind(this)} bsSize="large">
        {this.renderWorkoutSelection()}
      </Modal>
    );
  }

  renderWorkoutSelection() {
    if(this.props.show) {
      return (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <hr />
            <ListGroup>
              {this.renderWorkouts()}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleWorkoutSelectionCloseClick.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      );
    }
  }

  renderWorkouts() {
    const workouts = this.props.getWorkouts();

    return (workouts.map(function (workout) {
      return (<Workout key={workout.name} workout={workout} selectWorkout={this.props.selectWorkout} />);
    }.bind(this)));
  }
  
  handleWorkoutSelectionCloseClick() {
    this.props.closeWorkoutSelection();
  }
}

export default WorkoutSelection;