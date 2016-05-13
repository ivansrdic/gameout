import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap';
import ExercisesList from '../shared/exercise/exercises-list.jsx';
import CreateExercise from '../../../containers/private/exercise/create-exercise';
import PublicExercises from './public-exercises.jsx';

class CreateExercisePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPublicExercises: false
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Row>
                <Col md={10} mdOffset={1}><h1 className="text-center">Exercises List</h1>
                  <ExercisesList exercises={this.props.exercises} onClickDelete={this.props.removeExercise}/>
                </Col>
              </Row>
              <Row>
                <Col md={10} mdOffset={1}>
                  <CreateExercise user={this.props.user}/>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
        <PublicExercises
          show={this.state.showPublicExercises}
          exercises={this.props.exercises}
          closePublicExercises={this.closePublicExercises.bind(this)}
        />
      </Grid>
    );
  }

  showPublicExercises() {
    /*
     <div className="center-button">
     <Button bsStyle="info" onClick={this.showPublicExercises.bind(this)}>Search exercises</Button>
     </div>
    this.setState({
      showPublicExercises: true
    });*/
  }

  closePublicExercises() {
    this.setState({
      showPublicExercises: false
    });
  }

}

export default CreateExercisePanel;