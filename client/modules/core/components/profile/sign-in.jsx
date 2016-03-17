import React, {Component} from 'react';
import {Row, Col, Panel, Tabs, Tab, Input, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /*componentDidMount() {
    const authTracker = Tracker.autorun(function() {
      if(Session.get('auth-error')) {
        this.setState({});
        Session.set('auth-error', null);
      }
    }.bind(this));

    this.setState({authTracker});
  }
  componentWillUnmount() {
    this.state.authTracker.stop();
  }*/

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={8} mdOffset={2}>
                <Tabs defaultActiveKey={1} bsStyle="pills">
                  <hr/>
                  {this.renderErrorMessage()}
                  <Tab eventKey={1} title="Log in">
                    <h1 className="text-center">Log in</h1>

                    <form onSubmit={this.handleLoginFormSubmit.bind(this)}>
                      <Input id="username-login" type="text" label="Username/Email" placeholder="Username"/>
                      <Input id="password-login" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Next"/>
                    </form>
                  </Tab>
                  <Tab eventKey={2} title="Register">
                    <h1 className="text-center">Register</h1>

                    <form onSubmit={this.handleRegisterFormSubmit.bind(this)}>
                      <Input id="username-register" type="text" label="Username" placeholder="Username"/>
                      <Input id="email-register" type="email" label="Email" placeholder="Email"/>
                      <Input id="password-register" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Next"/>
                    </form>
                  </Tab>
                </Tabs>
              </Col>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }

  handleLoginFormSubmit(e) {
    e.preventDefault();

    const username = $('#username-login').val();
    const password = $('#password-login').val();

    Actions.Authorization.login(username, password);
  }

  handleRegisterFormSubmit(e) {
    e.preventDefault();

    const username = $('#username-register').val();
    const email = $('#email-register').val();
    const password = $('#password-register').val();

    Actions.Authorization.register(username, email, password);
  }

  renderErrorMessage() {
    if(this.props.authError) {
      return (
        <div className="alert alert-danger fade in">
          <strong>{this.props.authError}</strong>
        </div>
      );
    }
  }
}

export default EditInfo;