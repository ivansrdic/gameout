import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button, Jumbotron, Thumbnail} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return (
      <div id="header">
      <Grid>
        <Row>
          <Jumbotron style={{'backgroundColor': 'rgba(148, 134, 115, 0.4)', 'color': 'white'}}>
            <h2>Welcome to Gameout</h2>
            <p>Impossible isn’t a fact. It’s an opinion. Impossible isn’t a declaration. It’s a dare. Impossible is potential. Impossible is nothing.</p>
            <p><Button href="/how-it-works" bsStyle="success" bsSize="large" style={{'color':'#3399FF'}}><b>Learn more</b></Button></p>
          </Jumbotron>
        </Row>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <Thumbnail src="dumbells.png" alt="100x100"  style={{'paddingTop':'15px','border': 'none', 'backgroundColor': 'rgba(148, 134, 115, 0.4)','height':'270'}}>
              <h3 style={{'color': 'white'}}>Workout routines</h3>
              <p style={{'color': 'white'}}>Don't know where to start? The application will offer you routines to start with.</p>
            </Thumbnail>
          </Col>

          <Col sm={6} md={3}>
            <Thumbnail src="prizes.png" alt="100x100"  style={{'paddingTop':'15px', 'border': 'none', 'backgroundColor': 'rgba(148, 134, 115, 0.4)','height':'270'}}>
              <h3 style={{'color': 'white'}}>Get prizes & achievements</h3>
              <p style={{'color': 'white'}}>Finished workouts will be awarded. Upgrade your virtual warrior with special items.</p>
            </Thumbnail>
          </Col>

          <Col sm={6} md={3}>
            <Thumbnail src="scale.png" alt="100x100" style={{'paddingTop':'15px','border': 'none', 'backgroundColor': 'rgba(148, 134, 115, 0.4)','height':'270'}}>
              <h3 style={{'color': 'white'}}>Get in shape</h3>
              <p style={{'color': 'white'}}>Follow our routines, add your own routines, earn experience and achieve your personal fitness goals.</p>
            </Thumbnail>
          </Col>

          <Col sm={6} md={3}>
            <Thumbnail src="health.png" alt="100x100" style={{'paddingTop':'15px','border': 'none', 'backgroundColor': 'rgba(148, 134, 115, 0.4)','height':'270'}}>
              <h3 style={{'color': 'white'}}>Improve your health</h3>
              <p style={{'color': 'white'}}>Always sitting by the desk? Time to change your lifestyle.</p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Home;