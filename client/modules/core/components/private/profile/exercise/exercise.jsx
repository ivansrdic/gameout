import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Workout extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {exercise} = this.props;
    return (
      <ListGroupItem header={exercise.name} >
        {exercise.description}
      </ListGroupItem>
    );
  }
}

export default Workout;