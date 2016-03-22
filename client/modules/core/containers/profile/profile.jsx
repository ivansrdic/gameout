import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import {Grid, Row, Col, Overlay, Popover, Button, ProgressBar} from 'react-bootstrap';
import {Transition} from 'react-overlays';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEquipment: false
    };
  }

  // TODO: better checking of complete setup
  componentWillUpdate(nextProps, nextState) {
    if(nextProps.ready) {
      NProgress.done();
      if(!nextProps.user.completedSetup) {
        FlowRouter.goOrRefresh('profile-setup')
      }
    }
  }

  // TODO: break down into components
  render() {
    return (
      <Grid className="profile" fluid={true}>
        <Row className="character-info no-gutter eq-height">
          <Col sm={3} lg={2}>
            <div className="character-window">
              <img src="character.png" alt="character" className="img-responsive"/>
              <Button className="equipment-toggle" bsStyle="default" onClick={this.handleEquipmentButtonClick.bind(this)}><i className="fa fa-play"></i></Button>
            </div>
          </Col>
          <div id="character-details">
              <Transition
                in={this.state.showEquipment}
                timeout={500}
                className="col-xs-12 col-sm-3 col-lg-2"
                enteringClassName="equipment-entering animate-character-stats"
                enteredClassName="equipment-entered"
                exitingClassName="equipment-exiting animate-character-stats"
                exitedClassName="equipment-exited"
              >
                <div className="hide-of">
                  <div className="equipment-container">
                    <div className="equipment">
                      <div className="equipment-row">
                        <div className="item-container"><div className="item head"></div></div>
                      </div>
                      <div className="equipment-row">
                        <div className="item-container item-container-weapon"><div className="item hand-right"></div></div>
                        <div className="item-container"><div className="item chest"></div></div>
                        <div className="item-container item-container-weapon"><div className="item hand-left"></div></div>
                      </div>
                    </div>
                  </div>
                </div>
            </Transition>
            <Col xs={12} sm={3} lg={2}>
              <div>
                <h3>Neki drugi column</h3>
                Zadrži svoju responzivnost
              </div>
            </Col>
            <Transition
              in={this.state.showEquipment}
              timeout={500}
              className="col-xs-12"
              enteringClassName="col-sm-3 col-lg-6 animate-character-stats"
              enteredClassName="col-sm-3 col-lg-6"
              exitingClassName="col-sm-6 col-lg-8 animate-character-stats"
              exitedClassName="col-sm-6 col-lg-8"
            >
              <div>
                <div className="stats">
                  <span><i className="fa fa-heart"></i> Health</span>
                  <ProgressBar bsStyle="danger" now={80} />
                  <span><i className="fa fa-star"></i> Experience</span>
                  <ProgressBar bsStyle="warning" now={60} />
                </div>
              </div>
            </Transition>
          </div>
        </Row>
        <Row>
          <Col md={12}>
            <h1 className="text-center">Hello, {this.props.user.profile.name}</h1>
            <p>User data</p>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleEquipmentButtonClick() {
    this.setState({
      showEquipment: !this.state.showEquipment
    });
  }
}

function composer(props, onData) {
  const subscription = Meteor.subscribe('character');

  if (subscription.ready()) {
    const data = {
      ready: true,
      character: Characters.findOne({owner: props.user._id})
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

export default composeWithTracker(composer)(Profile);