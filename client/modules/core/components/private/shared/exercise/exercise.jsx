import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Exercise extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {exercise, onClickExercise, onClickDelete} = this.props;
    if (onClickDelete)
      return (
        <ListGroupItem className="clearfix" onClick={onClickExercise ? this.onClickExercise.bind(this) : null}>
          <b>{exercise.name}</b>
          <span className="pull-right">
            <a className="btn btn-xs btn-danger" onClick={onClickDelete ? this.onClickDelete.bind(this) : null}>
              <span className="fa fa-trash"></span>
            </a>
          </span>
        </ListGroupItem>
      );
    else
      return (
        <ListGroupItem header={exercise.name} onClick={onClickExercise ? onClickExercise(exercise) : null}>
          {exercise.description}
        </ListGroupItem>
      );
  }

  onClickExercise() {
    const {exercise, onClickExercise} = this.props;

    onClickExercise(exercise);
  }

  onClickDelete() {
    const {exercise, onClickDelete} = this.props;

    onClickDelete(exercise);
  }


}

export default Exercise;