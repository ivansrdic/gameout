import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Workout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {workout} = this.props;
    return (
      <ListGroupItem header={workout.name} onClick={this.selectWorkout.bind(this)}>
        {workout.description}
      </ListGroupItem>
    );
  }

  selectWorkout() {
    const {selectWorkout, workout} = this.props;

    selectWorkout(workout);
  }
}

export default Workout;