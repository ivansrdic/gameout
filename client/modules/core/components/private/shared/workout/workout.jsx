import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Workout extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {workout} = this.props;
    return (
      <ListGroupItem header={workout.name} onClick={this.onClickHandler.bind(this)}>
        {workout.description}
      </ListGroupItem>
    );
  }
  
  onClickHandler() {
    const {onClickWorkout, workout} = this.props;
    
    if (onClickWorkout) onClickWorkout(workout);
  }
}

export default Workout;