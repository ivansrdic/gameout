import React, {Component} from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import Exercise from './exercise.jsx';

class Exercises extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(this.props.exercises)
      return (
        <div>
          <ListGroup>
            {this.renderExercises()}
          </ListGroup>
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
  
  renderExercises() {
    const {exercises} = this.props;
    
    return (exercises.map(function (exercise) {
      return (<Exercise key={exercise.name} exercise={exercise} />);
    }.bind(this)));
  }
}

export default Exercises;