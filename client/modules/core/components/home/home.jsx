import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

const Home = ({content = () => null }) => (
  <Grid>
    <video autoPlay loop muted poster="landing-page.png" id="background">
      <source src="landing-page.mp4" type="video/mp4" />
    </video>
    <Row>
      <Col md={12}>
        <Panel>
          <h1 className="text-center">Floskule o vježbanju</h1>
        </Panel>
      </Col>
    </Row>
  </Grid>
);

export default Home;