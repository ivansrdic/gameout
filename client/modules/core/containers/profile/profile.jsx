import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import {Grid, Row, Col, Button, ProgressBar, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Transition} from 'react-overlays';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEquipment: false,
      showModal: false
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
        <Row className="hero-info no-gutter">
          <Col sm={3} lg={2}>
            <div className="hero-container">
              <div className="equipment">
                <div className="character-container"><div className="character"></div></div>
                <div className="item-container item-container-head"><div className="item head"></div></div>
                <div className="item-container item-container-hand-right"><div className="item hand-right"></div></div>
                <div className="item-container item-container-chest"><div className="item chest"></div></div>
                <div className="item-container item-container-hand-left"><div className="item hand-left"></div></div>
              </div>
              <Button className="equipment-toggle" bsStyle="default" onClick={this.handleEquipmentButtonClick.bind(this)}><i className="fa fa-play"></i></Button>
            </div>
          </Col>
          <div id="hero-details">
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
                      <div className="character-container"><div className="character"></div></div>
                      <div className="item-container item-container-head"><div className="item head"></div></div>
                      <div className="item-container item-container-hand-right"><div className="item hand-right"></div></div>
                      <div className="item-container item-container-chest"><div className="item chest"></div></div>
                      <div className="item-container item-container-hand-left"><div className="item hand-left"></div></div>
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
            <div className="ready-button-container">
              <Button bsSize="large" bsStyle="danger" onClick={this.handleReadyButtonClick.bind(this)}>Ready</Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleModalCloseClick.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                <hr />

                <ListGroup>
                  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
                  <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
                  <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
                </ListGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleModalCloseClick.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
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

  handleReadyButtonClick() {
    this.setState({
      showModal: true
    });
  }

  handleModalCloseClick() {
    this.setState({
      showModal: false
    });
  }
}

function composer(props, onData) {
  const subscription = Meteor.subscribe('character');

  if (subscription.ready()) {
    const data = {
      ready: true,
      character: Characters.findOne()
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

export default composeWithTracker(composer)(Profile);