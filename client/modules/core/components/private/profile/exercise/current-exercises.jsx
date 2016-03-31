import React, {Component} from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import ExercisesList from '../../shared/exercise/exercises-list.jsx';

class CurrentExercises extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(this.props.exercises)
      return (
        <div>
          <ExercisesList exercises={this.props.exercises} />
          <div className="center-button">
            <Button bsSize="large" bsStyle="success" onClick={this.props.finishWorkout}>Finish</Button>
          </div>
        </div>
      );
    else {
      return (
        <div className="center-button">
          <Button bsSize="large" bsStyle="danger" onClick={this.props.chooseWorkout}>Ready</Button>
        </div>
      );
    }
  }
}

export default CurrentExercises;