import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import Exercise from './exercise.jsx';

class ExercisesList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.exercises)
      return (
        <ListGroup className="clearfix">
          {this.renderExercises()}
        </ListGroup>
      );
    else
      return (
        <div></div>
      );
  }

  renderExercises() {
    const {exercises} = this.props;

    return (exercises.map(function (exercise) {
      return (
        <Exercise
          key={exercise._id}
          exercise={exercise}
          onClickExercise={this.props.onClickExercise}
          onClickDelete={this.props.onClickDelete}
          onSelectedAddToSelectedWorkout={this.props.onSelectedAddToSelectedWorkout}
          onClickRemoveExercise={this.props.onClickRemoveExercise}
        />
      );
    }.bind(this)));
  }
}

export default ExercisesList;