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
          <div id="character-details">
            <Transition
              in={this.state.showEquipment}
              timeout={600}
              className="col-sm-3 col-lg-2"
              enteringClassName='animate-width'
              exitingClassName='equipment-exiting animate-width'
              exitedClassName='equipment-exited'
            >
              <div key="equipmentAnimation">
                <div className="equipment">
                  <div>
                    <img src="character.png" alt="character" className="img-responsive"/>
                  </div>
                </div>
              </div>
            </Transition>
            <Col sm={3} lg={2}>
              <div>
                <h3>Neki drugi column</h3>
                Zadrži svoju responzivnost
              </div>
            </Col>
            <Transition
              in={this.state.showEquipment}
              timeout={600}
              enteringClassName='col-sm-3 col-lg-6 animate-width'
              enteredClassName='col-sm-3 col-lg-6'
              exitingClassName='col-sm-6 col-lg-8 animate-width'
              exitedClassName='col-sm-6 col-lg-8'
            >
              <div key="statsAnimation">
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
            <h1 className="text-center">Hello, {Meteor.user().profile.name}</h1>

            <p>User data</p>
          </Col>
        </Row>
      </Grid>
    );
  }
  //find a way to manipulate columns with ReactCSSTransitionGroup
  renderEquipment() {
    if(this.state.showEquipment) {
    }
  }
  renderStats() {
    return(
      <Col lg={12}>

      </Col>
    );
  }

  handleEquipmentButtonClick(e) {
    this.setState({
      showEquipment: !this.state.showEquipment
    });
  }
}

export default Profile;
/*<ReactCSSTransitionGroup transitionName="example2" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
 {this.renderStats()}
 </ReactCSSTransitionGroup>*/