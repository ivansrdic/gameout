import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import {Grid, Row, Col, Button, ProgressBar, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Transition} from 'react-overlays';
import Actions from '/client/modules/core/actions';
import {Characters} from '/collections';
import Item from './item.jsx';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEquipment: false,
      showInventory: false,
      readyForWorkout: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.ready) {
      NProgress.done();
    }
  }

  // TODO: break down into components
  render() {
    if (this.props.ready)
      return (
        <Grid className="profile" fluid={true}>
          <Row className="hero-info no-gutter">
            <Col sm={3} lg={2}>
              <div className="hero-container">
                {this.renderEquipment()}
                <Button className="toggle equipment-toggle" bsStyle="default"
                        onClick={this.handleEquipmentButtonClick.bind(this)}><i className="fa fa-play"></i></Button>
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
                    {this.renderEquipment()}
                    <Button className="toggle inventory-toggle" bsStyle="default"
                            onClick={this.handleInventoryButtonClick.bind(this)}>Show inventory</Button>
                  </div>
                </div>
              </Transition>
              <Col xs={12} sm={3} lg={2}>
                <div>
                  <h3>Hero stats</h3>
                  <div><b>Strength</b>: 10</div>
                  <div><b>Stamina</b>: 10</div>
                  <div><b>Agility</b>: 10</div>
                  <div><b>Intelligence</b>: 10</div>
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
                    <ProgressBar bsStyle="danger" now={80}/>
                    <span><i className="fa fa-star"></i> Experience</span>
                    <ProgressBar bsStyle="warning" now={60}/>
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
            </Col>
          </Row>

          {this.renderInventory()}

          {this.renderWorkoutSelection()}
        </Grid>
      );
    else
      return (
        <div></div>
      );
  }

  renderEquipment() {
    return (
      <div className="equipment">
        <div className="character-container">
          <div className="character"></div>
        </div>
        <Item equipment={true} type="head" onClickHandler={this.handleEquipmentItemClick} set={this.props.character.equipment.head}/>
        <Item equipment={true} type="chest" onClickHandler={this.handleEquipmentItemClick} set={this.props.character.equipment.chest}/>
        <Item equipment={true} type="leftHand" onClickHandler={this.handleEquipmentItemClick} set={this.props.character.equipment.leftHand}/>
        <Item equipment={true} type="rightHand" onClickHandler={this.handleEquipmentItemClick} set={this.props.character.equipment.rightHand}/>
      </div>
    );
  }

  renderInventory() {
    return (
      <Modal show={this.state.showInventory} onHide={this.handleInventoryCloseClick.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Click on the items you want to equip.</p>

          <hr />
          <div className="inventory">
            <Item type="head" onClickHandler={this.handleInventoryItemClick} set={1}/>
            <Item type="head" onClickHandler={this.handleInventoryItemClick} set={2}/>
            <Item type="head" onClickHandler={this.handleInventoryItemClick} set={3}/>
            <Item type="head" onClickHandler={this.handleInventoryItemClick} set={4}/>
            <Item type="head" onClickHandler={this.handleInventoryItemClick} set={5}/>
            <Item type="chest" onClickHandler={this.handleInventoryItemClick} set={1}/>
            <Item type="chest" onClickHandler={this.handleInventoryItemClick} set={2}/>
            <Item type="chest" onClickHandler={this.handleInventoryItemClick} set={3}/>
            <Item type="chest" onClickHandler={this.handleInventoryItemClick} set={4}/>
            <Item type="chest" onClickHandler={this.handleInventoryItemClick} set={5}/>
            <Item type="leftHand" onClickHandler={this.handleInventoryItemClick} set={1}/>
            <Item type="leftHand" onClickHandler={this.handleInventoryItemClick} set={2}/>
            <Item type="leftHand" onClickHandler={this.handleInventoryItemClick} set={3}/>
            <Item type="leftHand" onClickHandler={this.handleInventoryItemClick} set={4}/>
            <Item type="leftHand" onClickHandler={this.handleInventoryItemClick} set={5}/>
            <Item type="rightHand" onClickHandler={this.handleInventoryItemClick} set={1}/>
            <Item type="rightHand" onClickHandler={this.handleInventoryItemClick} set={2}/>
            <Item type="rightHand" onClickHandler={this.handleInventoryItemClick} set={3}/>
            <Item type="rightHand" onClickHandler={this.handleInventoryItemClick} set={4}/>
            <Item type="rightHand" onClickHandler={this.handleInventoryItemClick} set={5}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleInventoryCloseClick.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  renderWorkoutSelection() {
    return (
      <Modal show={this.state.readyForWorkout} onHide={this.handleWorkoutsCloseClick.bind(this)} bsSize="large">
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
          <Button onClick={this.handleWorkoutsCloseClick.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  handleEquipmentButtonClick() {
    this.setState({
      showEquipment: !this.state.showEquipment,
      showInventory: false
    });
  }

  handleEquipmentItemClick(e) {
    const item = $(e.target);
    Actions.Profile.unEquipItem(item.attr("data-type"));
  }

  handleInventoryButtonClick() {
    this.setState({
      showInventory: !this.state.showInventory
    });
  }

  handleInventoryItemClick(e) {
    const item = $(e.target);
    Actions.Profile.equipItem(item.attr("data-type"), item.attr("data-set"));
  }

  handleInventoryCloseClick() {
    this.setState({
      showInventory: false
    });
  }

  handleReadyButtonClick() {
    this.setState({
      readyForWorkout: true
    });
  }

  handleWorkoutsCloseClick() {
    this.setState({
      readyForWorkout: false
    });
  }
}

export default Profile;