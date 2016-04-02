import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import CreateExerciseContainer from '../../../containers/private/create-exercise/create-exercise';

class CreateExercise extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={10} mdOffset={1}>
                <CreateExerciseContainer />
              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default CreateExercise;