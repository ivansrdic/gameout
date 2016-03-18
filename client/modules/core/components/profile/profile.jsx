import React, {Component} from 'react';
import {Grid, Row, Col, Overlay, Popover, Button, ProgressBar} from 'react-bootstrap';
import TransitionGroup from 'react-addons-css-transition-group';

class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEquipment: false
    };
  }

  // TODO: better checking of complete setup
  componentDidMount() {
    setTimeout(function() {
      if(!Meteor.users.findOne(Meteor.userId()).completedSetup) {
        alert('Please complete your setup');
      }
    }, 1000);
  }

  // TODO: break down into components
  render() {
    return (
      <Grid className="profile" fluid={true}>
        <Row className="character-info no-margin eq-height">
          <Col sm={3} lg={2}>
            <div className="character-window">
              <img src="character.png" alt="character" className="img-responsive"/>
              <Button className="equipment-toggle" bsStyle="default" onClick={this.handleEquipmentButtonClick.bind(this)}><i className="fa fa-play"></i></Button>
            </div>
          </Col>
          <TransitionGroup transitionName="slide-right" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.renderEquipment()}
          </TransitionGroup>
          <Col sm={9} lg={10-this.state.equipmentWidth}>
              <div className="stats">
                <span><i className="fa fa-heart"></i> Health</span>
                <ProgressBar bsStyle="danger" now={80} />
                <span><i className="fa fa-star"></i> Experience</span>
                <ProgressBar bsStyle="warning" now={60} />
              </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 className="text-center">Hello, {Meteor.user().profile.name}</h1>

            <p>User data</p>
          </Col>
        </Row>
      </Grid>
    );
  }
  renderEquipment() {
    if(this.state.showEquipment)
      return (
        <Col lg={2}>
          <div className="equipment">
            <div>
              <img src="character.png" alt="character" className="img-responsive"/>
            </div>
          </div>
        </Col>
      );
  }

  handleEquipmentButtonClick(e) {
    this.setState({
      showEquipment: !this.state.showEquipment,
      equipmentWidth: this.state.showEquipment?0:2
    });
  }
}

export default EditInfo;