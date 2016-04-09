import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Exercise extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {exercise, onClickExercise} = this.props;

    return (
        <ListGroupItem className="clearfix" onClick={onClickExercise ? this.onClickExercise.bind(this) : null}>
          {this.renderCheckbox()}
          <b>{exercise.name}</b>
          <span className="badge" style={{float: "none", marginLeft: 10}}>{exercise.unit} reps</span>
          <span className="pull-right">
            {this.renderDelete()}
            {this.renderSelect()}
            {this.renderRemove()}
            {this.renderInfo()}
          </span>
        </ListGroupItem>
    );
  }

  renderCheckbox() {
    const {checked} = this.props;
    if(checked !== null) {
      return(
        <i className={"list-group-item-checkbox fa "+ (this.props.completed?"fa-check":"fa") +"-square-o"}></i>
      );
    }
  }

  renderDelete() {
    if (this.props.onClickDelete) {
      return (
        <a className="btn btn-xs btn-danger"
          onClick={this.props.onClickDelete ? this.onClickDelete.bind(this) : null}>
          <i className="fa fa-trash"></i>
        </a>
      );
    }
  }

  renderSelect() {
    if(this.props.onSelectedAddToSelectedWorkout) {
      return (
        <a className="btn btn-xs btn-success"
           onClick={this.props.onSelectedAddToSelectedWorkout ? this.onSelectedAddToSelectedWorkout.bind(this) : null}>
          <i className="fa fa-plus"></i>
        </a>
      );
    }
  }

  renderRemove() {
    if(this.props.onClickRemoveExercise) {
      return (
        <a className="btn btn-xs btn-danger"
           onClick={this.props.onClickRemoveExercise ? this.onClickRemoveExercise.bind(this) : null}>
          <i className="fa fa-minus"></i>
        </a>
      );
    }
  }

  renderInfo() {
    if (this.props.onClickExerciseInfo) {
      return (
        <a className="btn btn-xs btn-info"
           onClick={this.props.onClickExerciseInfo ? this.onClickExerciseInfo.bind(this) : null}>
          <i className="fa fa-info"></i>
        </a>
      );
    }
  }

  onClickExercise(e) {
    e.stopPropagation();
    const {exercise, onClickExercise} = this.props;

    onClickExercise(exercise);
  }

  onClickDelete(e) {
    e.stopPropagation();
    const {exercise, onClickDelete} = this.props;

    onClickDelete(exercise);
  }

  onSelectedAddToSelectedWorkout(e) {
    e.stopPropagation();
    const {exercise, onSelectedAddToSelectedWorkout} = this.props;

    onSelectedAddToSelectedWorkout(exercise);
  }

  onClickRemoveExercise(e) {
    e.stopPropagation();
    const {exercise, onClickRemoveExercise} = this.props;

    onClickRemoveExercise(exercise);
  }

  onClickExerciseInfo(e) {
    e.stopPropagation();
    const {exercise, onClickExerciseInfo} = this.props;

    onClickExerciseInfo(exercise);
  }
}

export default Exercise;