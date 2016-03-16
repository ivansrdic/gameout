import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

const Home = ({content = () => null }) => (
  <div>
    <Row>
      <Col md={12}>
        <Panel>
          <h1 className="text-center">Edit info</h1>
        </Panel>
      </Col>
    </Row>
  </div>
);

export default Home;