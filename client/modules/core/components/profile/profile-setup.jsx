import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

export default () => {
  return (
    <div>
      <Row>
        <Col md={12}>
          <Panel>
            <Col md={10} mdOffset={1}>
            </Col>
          </Panel>
        </Col>
      </Row>
    </div>
  );
}