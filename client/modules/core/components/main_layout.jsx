import React from 'react';
import {Grid, Row} from 'react-bootstrap';

const Layout = ({content = () => null, navigation = () => null}) => (
  <Grid>
    {navigation()}
    <Row>
      {content()}
    </Row>
  </Grid>
);

export default Layout;