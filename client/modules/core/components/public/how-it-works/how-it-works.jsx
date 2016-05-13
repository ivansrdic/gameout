import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

class HowItWorks extends Component {
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
          <Col md={12}>
            <Panel id="howitworksPanel">
              <h1 className="text-center">How it works</h1>
              <br/>
              <p>Gameout is based on the "gamification" principle which is used for motivating people to perform daily workouts for the purpose of a healthier lifestyle. <br/>
                <br/>
                <br/><iframe  class="col-lg-1 col-centered" width="560" height="315" src="https://www.youtube.com/embed/VOdk9uZqbzQ" frameborder="0" allowfullscreen></iframe>
                <br/>
                <br/>
                <br/>
                To start using the app, all you have to do is follow a few simple steps:
                <br/>
                <br/>
                <ul id="steps">
                  <li>First you have to sign up – you can do this by using your Facebook/Google+ account</li>
                  <li>The next step is setting up your profile. Tell us about your daily habits, some personal data and create your own character</li>
                  <li>Creating your character is a fun step because there are a lot of customizations</li>
                  <li>Let the games begin!</li>
                </ul>
                <br/>
                <br/>
                You will fight, you will sweat, but you WILL succeed. Good luck!
              </p>
            </Panel>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default HowItWorks;