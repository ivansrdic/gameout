import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

const CreateWorkout = ({content = () => null }) => (
  <Grid>
    <video autoPlay loop muted poster="landing-page.png" id="background">
      <source src="landing-page.mp4" type="video/mp4" />
    </video>
    <Row>
      <Col md={12}>
        <Panel id="createWorkoutPanel">
          <h1 className="text-center">Create Workout</h1>
          <br/>
        </Panel>
      </Col>
    </Row>
  </Grid>
);

export default CreateWorkout;