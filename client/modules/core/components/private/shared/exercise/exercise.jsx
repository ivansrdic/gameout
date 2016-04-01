import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Exercise extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {exercise} = this.props;
    return (
      <ListGroupItem header={exercise.name} onClick={this.onClickHandler.bind(this)}>
        {exercise.description}
      </ListGroupItem>
    );
  }

  onClickHandler() {
    const {onClickExercise, exercise} = this.props;

    if (onClickExercise) onClickExercise(exercise);
  }
}

export default Exercise;