import React, {Component} from 'react';
import {ListGroupItem, ButtonInput} from 'react-bootstrap';

class Exercise extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {exercise, onClickExercise, onClickDelete, onSelectedAddToSelectedWorkout, onClickRemoveExercise} = this.props;
    if (onClickDelete || onSelectedAddToSelectedWorkout || onClickRemoveExercise) {
      return (
          <ListGroupItem className="clearfix" onClick={onClickExercise ? this.onClickExercise.bind(this) : null}>
            <b>{exercise.name}</b>
            {this.renderDelete()}
            {this.renderSelected()}
            {this.renderRemoved()}
          </ListGroupItem>
      );
    } else {
        return (
            <ListGroupItem header={exercise.name} onClick={onClickExercise ? onClickExercise(exercise) : null}>
              {exercise.description}
            </ListGroupItem>
        );
      }
  }

  renderRemoved() {
    if(this.props.onClickRemoveExercise) {
      return (
          <span className="pull-right">
            <a className="btn btn-xs btn-danger"
               onClick={this.props.onClickRemoveExercise ? this.onClickRemoveExercise.bind(this) : null}>
              <span className="fa fa-minus"></span>
            </a>
          </span>);
    }
  }

  renderSelected() {
      if(this.props.onSelectedAddToSelectedWorkout) {
        return (
          <span className="pull-right">
            <a className="btn btn-xs btn-success"
              onClick={this.props.onSelectedAddToSelectedWorkout ? this.onSelectedAddToSelectedWorkout.bind(this) : null}>
              <span className="fa fa-plus"></span>
            </a>
          </span>);
      }
  }

  renderDelete() {
    if (this.props.onClickDelete) {
      return (
        <span className="pull-right">
          <a className="btn btn-xs btn-danger"
            onClick={this.props.onClickDelete ? this.onClickDelete.bind(this) : null}>
            <span className="fa fa-trash"></span>
          </a>
        </span>)
    }
  }

  onClickRemoveExercise() {
    const {exercise, onClickRemoveExercise} = this.props;

    onClickRemoveExercise(exercise);
  }

  onSelectedAddToSelectedWorkout() {
    const {exercise, onSelectedAddToSelectedWorkout} = this.props;

    onSelectedAddToSelectedWorkout(exercise);
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