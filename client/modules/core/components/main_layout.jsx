import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Navigation from './navigation/navigation.jsx';
import Footer from './footer/footer.jsx';

const Layout = ({content = () => null, navigation = () => null}) => (
  <div>
    <Navigation />
    <Grid>
      <Row>
        {content()}
      </Row>
    </Grid>
    <Footer />
  </div>
);

export default Layout;