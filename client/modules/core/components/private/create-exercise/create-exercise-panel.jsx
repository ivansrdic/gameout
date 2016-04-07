import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import ExercisesList from '../shared/exercise/exercises-list.jsx';
import CreateExercise from '../../../containers/private/create-exercise/create-exercise';

class CreateExercisePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.ready)
      return (
        <Grid>
          <Row>
            <Col md={12}>
              <Panel>
                <Row>
                  <Col md={10} mdOffset={1}>
                    <ExercisesList exercises={this.props.exercises} onClickDelete={this.props.removeExercise}/>
                  </Col>
                  <Col md={10} mdOffset={1}>
                    <CreateExercise user={this.props.user}/>
                  </Col>
                </Row>
              </Panel>
            </Col>
          </Row>
        </Grid>
      );
    else
      return (
        <div></div>
      );
  }

}

export default CreateExercisePanel;