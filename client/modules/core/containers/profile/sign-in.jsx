import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillUnmount() {
    Session.set('auth-error', null);
  }

  //TODO: delete twitter integration
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={8} mdOffset={2}>
                {this.renderErrorMessage()}
                <div className="social-buttons">
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebookSignInClick}>
                        <i className="fa fa-facebook"></i> Sign in with Facebook
                      </a>
                    </Col>
                  </div>
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-google" onClick={this.handleGoogleSignInClick}>
                        <i className="fa fa-google"></i> Sign in with Google
                      </a>
                    </Col>
                  </div>
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-twitter" onClick={this.handleTwitterSignInClick}>
                        <i className="fa fa-twitter"></i> Sign in with Twitter
                      </a>
                    </Col>
                  </div>
                </div>
                <Tabs defaultActiveKey={1} bsStyle="pills">
                  <hr/>
                  <Tab eventKey={1} title="Log in">
                    <h1 className="text-center">Log in</h1>

                    <form onSubmit={this.handleLoginFormSubmit.bind(this)}>
                      <Input id="email-login" type="text" label="Email" placeholder="Email"/>
                      <Input id="password-login" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Login"/>
                    </form>
                  </Tab>
                  <Tab eventKey={2} title="Register">
                    <h1 className="text-center">Register</h1>

                    <form onSubmit={this.handleRegisterFormSubmit.bind(this)}>
                      <Input id="email-register" type="email" label="Email" placeholder="Email"/>
                      <Input id="username-register" type="text" label="Username" placeholder="Username"/>
                      <Input id="password-register" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Register"/>
                    </form>
                  </Tab>
                </Tabs>
              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleFacebookSignInClick() {
    Actions.Authorization.loginWithFacebook();
  }

  handleGoogleSignInClick() {
    Actions.Authorization.loginWithGoogle();
  }

  handleTwitterSignInClick() {
    Actions.Authorization.loginWithTwitter();
  }

  handleLoginFormSubmit(e) {
    e.preventDefault();

    const email = $('#email-login').val();
    const password = $('#password-login').val();

    Actions.Authorization.login(email, password);
  }

  handleRegisterFormSubmit(e) {
    e.preventDefault();

    const email = $('#email-register').val();
    const username = $('#username-register').val();
    const password = $('#password-register').val();

    Actions.Authorization.register(email, username, password);
  }

  renderErrorMessage() {
    if(this.props.authError) {
      return (
        <div className="alert alert-danger alert-dismissible fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <span className="fa fa-exclamation-circle"></span> <strong>{this.props.authError}</strong>
        </div>
      );
    }
  }
}

function composer(props, onData) {
  const authError = Session.get('auth-error');
  onData(null, {authError});
}

export default composeWithTracker(composer)(SignIn);