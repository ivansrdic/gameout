import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Exercise extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {exercise, onClickExercise} = this.props;
    var style;
    if (exercise.level == "easy") {
      style = "success";
    }
    else if (exercise.level == "medium") {
      style = "warning";
    }
    else if (exercise.level == "hard") {
      style = "danger";
    }

    return (
        <ListGroupItem className="clearfix" bsStyle={style} onClick={onClickExercise ? this.onClickExercise.bind(this) : null}>
          {this.renderCheckbox()}
          <b>{exercise.name}</b>
          <span className="badge" style={{float: "none", marginLeft: 10}}>{exercise.unit} reps</span>
          <span className="pull-right options">
            {this.renderDelete()}
            {this.renderAdd()}
            {this.renderRemove()}
            {this.renderInfo()}
          </span>
        </ListGroupItem>
    );
  }

  renderCheckbox() {
    const {completed} = this.props;
    if(completed === true || completed === false) {
      return(
        <i className={"list-group-item-checkbox fa " + (completed?"fa-check":"fa") + "-square-o"}></i>
      );
    }
  }

  renderDelete() {
    if (this.props.onClickDelete) {
      return (
        <a className="btn btn-xs btn-danger"
          onClick={this.onClickDelete.bind(this)}>
          <i className="fa fa-trash"></i>
        </a>
      );
    }
  }

  renderAdd() {
    if(this.props.onClickAdd) {
      return (
        <a className="btn btn-xs btn-success"
           onClick={this.onClickAdd.bind(this)}>
          <i className="fa fa-plus"></i>
        </a>
      );
    }
  }

  renderRemove() {
    if(this.props.onClickRemove) {
      return (
        <a className="btn btn-xs btn-danger"
           onClick={this.onClickRemove.bind(this)}>
          <i className="fa fa-minus"></i>
        </a>
      );
    }
  }

  renderInfo() {
    if (this.props.onClickInfo) {
      return (
        <a className="btn btn-xs btn-info"
           onClick={this.onClickInfo.bind(this)}>
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

  onClickAdd(e) {
    e.stopPropagation();
    const {exercise, onClickAdd} = this.props;

    onClickAdd(exercise);
  }

  onClickRemove(e) {
    e.stopPropagation();
    const {exercise, onClickRemove} = this.props;

    onClickRemove(exercise);
  }

  onClickInfo(e) {
    e.stopPropagation();
    const {exercise, onClickInfo} = this.props;
    
    onClickInfo(exercise);
  }
}

export default Exercise;