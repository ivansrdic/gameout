import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import Exercise from './exercise.jsx';

class ExercisesList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ListGroup>
        {this.renderExercises()}
      </ListGroup>
    );
  }

  renderExercises() {
    const {exercises} = this.props;

    return (exercises.map(function (exercise) {
      return (<Exercise key={exercise.name} exercise={exercise} onClickExercise={this.props.onClickExercise}/>);
    }.bind(this)));
  }
}

export default ExercisesList;