import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Workout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {workout, onClickWorkout} = this.props;
    return (

        <ListGroupItem header={workout.name} className="clearfix" onClick={onClickWorkout ? this.onClickWorkout.bind(this) : null}>
          {workout.description}
         <span className="pull-top-right options">
           {this.renderDelete()}
           {this.renderRemove()}
           {this.renderPublish()}
           {this.renderUnpublish()}
           {this.renderSubscribe()}
           {this.renderUnsubscribe()}
           {this.renderInfo()}
          </span>
        </ListGroupItem>
    );
  }

  // Delete workout from user workouts list
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

  // Removing from selected exercises in CreateWorkout
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

  renderPublish() {
    if (this.props.onClickPublish) {
      return (
        <a className="btn btn-xs btn-success"
           onClick={this.onClickPublish.bind(this)}>
          <i className="fa fa-plus"></i>
        </a>
      );
    }
  }

  renderUnpublish() {
    if (this.props.onClickUnpublish) {
      return (
        <a className="btn btn-xs btn-danger"
           onClick={this.onClickUnpublish.bind(this)}>
          <i className="fa fa-minus"></i>
        </a>
      );
    }
  }

  renderSubscribe() {
    if (this.props.onClickSubscribe) {
      return (
        <a className="btn btn-xs btn-success"
           onClick={this.onClickSubscribe.bind(this)}>
          <i className="fa fa-plus"></i>
        </a>
      );
    }
  }

  renderUnsubscribe() {
    if (this.props.onClickUnsubscribe) {
      return (
        <a className="btn btn-xs btn-danger"
           onClick={this.onClickUnsubscribe.bind(this)}>
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


  onClickWorkout(e) {
    e.stopPropagation();
    const {workout, onClickWorkout} = this.props;

    onClickWorkout(workout);
  }

  onClickDelete(e) {
    e.stopPropagation();
    const {workout, onClickDelete} = this.props;

    onClickDelete(workout);
  }

  onClickRemove(e) {
    e.stopPropagation();
    const {workout, onClickRemove} = this.props;

    onClickRemove(workout);
  }

  onClickPublish(e) {
    e.stopPropagation();
    const {workout, onClickPublish} = this.props;

    onClickPublish(workout);
  }

  onClickUnpublish(e) {
    e.stopPropagation();
    const {workout, onClickUnpublish} = this.props;

    onClickUnpublish(workout);
  }

  onClickSubscribe(e) {
    e.stopPropagation();
    const {workout, onClickSubscribe} = this.props;

    onClickSubscribe(workout);
  }

  onClickUnsubscribe(e) {
    e.stopPropagation();
    const {workout, onClickUnsubscribe} = this.props;

    onClickUnsubscribe(workout);
  }

  onClickInfo(e) {
    e.stopPropagation();
    const {workout, onClickInfo} = this.props;

    onClickInfo(workout);
  }
}

export default Workout;