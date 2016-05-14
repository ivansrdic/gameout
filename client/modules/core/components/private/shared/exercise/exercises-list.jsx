import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import Exercise from './exercise.jsx';
import ExercisesInfo from '../../shared/exercise/exercise-info.jsx';

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: null,
      showInfo: false
    };
  }
  
  render() {
    if (this.props.exercises.count() != 0)
      return (
        <div>
          <ListGroup className="exercise-list">
            {this.renderExercises()}
          </ListGroup>
          <ExercisesInfo
            show={this.state.showInfo}
            exercise={this.state.exercise}
            closeExerciseInfo={this.closeExerciseInfo.bind(this)}
          />
        </div>
      );
    else
      return (
        <div>
          <ListGroup style={{'textAlign':'center'}}>
            <ListGroupItem><Button href="/exercises">There are no exercises</Button></ListGroupItem>
          </ListGroup>
        </div>
      );
  }

  renderExercises() {
    const {exercises, completedExerciseIds} = this.props;

    return (exercises.map(function (exercise) {
      const completed = completedExerciseIds?completedExerciseIds.indexOf(exercise._id) != -1:null;
      return (
        <Exercise
          key={exercise._id}
          exercise={exercise}
          completed={completed}
          onClickExercise={this.props.onClickExercise}
          onClickDelete={this.props.onClickDelete}
          onClickAdd={this.props.onClickAdd}
          onClickRemove={this.props.onClickRemove}
          onClickInfo={this.onClickInfo.bind(this)}
        />
      );
    }.bind(this)));
  }

  onClickInfo(exercise) {
    this.setState({
      exercise,
      showInfo: true
    });
  }

  closeExerciseInfo() {
    this.setState({
      showInfo: false
    });
  }
}

export default ExercisesList;