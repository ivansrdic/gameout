import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Exercise from '../exercise/exercise.jsx';

class WorkoutsInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleWorkoutInfoCloseClick.bind(this)} bsSize="lg">
        {this.renderWorkoutInfo()}
      </Modal>
    );
  }

  renderWorkoutInfo() {
    if (this.props.show) {
      const {workout} = this.props;
      return (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>{workout.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{workout.description}</p>

              {this.renderExercises()}

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleWorkoutInfoCloseClick.bind(this)}>Close</Button>
            </Modal.Footer>
          </div>
      );
    }
  }

  renderExercises() {
    const {getWorkoutExercises} = this.props;
    const listOfExercises = getWorkoutExercises(this.props.workout);
    return (listOfExercises.map(function (exercise) {
      return (
          <Exercise
              key={exercise._id}
              exercise={exercise}
              onClickExercise={this.props.onClickExercise}
              //onClickDelete={this.props.onClickDelete}
              //onClickInfo={this.onClickInfo.bind(this)}
          />
      );
    }.bind(this)));
  }

  handleWorkoutInfoCloseClick() {
    this.props.closeWorkoutInfo();
  }
}

export default WorkoutsInfo;