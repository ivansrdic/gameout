import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Navigation from './navigation/navigation.jsx';
import Footer from './footer/footer.jsx';

class PublicLayout extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    return (
      <div>
        <Navigation />
        <Grid>
          {this.props.content()}
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default PublicLayout;