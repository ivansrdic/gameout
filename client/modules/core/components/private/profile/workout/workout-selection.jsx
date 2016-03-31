import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import WorkoutsList from '../../shared/workout/workouts-list.jsx';

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
            <WorkoutsList workouts={this.props.getWorkouts()} onClickWorkout={this.props.selectWorkout} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleWorkoutSelectionCloseClick.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      );
    }
  }
  
  handleWorkoutSelectionCloseClick() {
    this.props.closeWorkoutSelection();
  }
}

export default WorkoutSelection;