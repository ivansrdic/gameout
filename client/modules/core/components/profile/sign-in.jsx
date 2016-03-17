import React, {Component} from 'react';
import {Row, Col, Panel, Tabs, Tab, Input, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={8} mdOffset={2}>
                {this.renderErrorMessage()}
                <div className="social-buttons">
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebookSignInClick}>
                        <span className="fa fa-facebook"></span> Sign in with Facebook
                      </a>
                    </Col>
                  </div>
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-google" onClick={this.handleGoogleSignInClick}>
                        <span className="fa fa-google"></span> Sign in with Google
                      </a>
                    </Col>
                  </div>
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-twitter" onClick={this.handleTwitterSignInClick}>
                        <span className="fa fa-twitter"></span> Sign in with Twitter
                      </a>
                    </Col>
                  </div>
                </div>
                <Tabs defaultActiveKey={1} bsStyle="pills">
                  <hr/>
                  <Tab eventKey={1} title="Log in">
                    <h1 className="text-center">Log in</h1>

                    <form onSubmit={this.handleLoginFormSubmit.bind(this)}>
                      <Input id="username-login" type="text" label="Username/Email" placeholder="Username/Email"/>
                      <Input id="password-login" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Login"/>
                    </form>
                  </Tab>
                  <Tab eventKey={2} title="Register">
                    <h1 className="text-center">Register</h1>

                    <form onSubmit={this.handleRegisterFormSubmit.bind(this)}>
                      <Input id="email-register" type="email" label="Email" placeholder="Email"/>
                      <Input id="password-register" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Register"/>
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

    const username = $('#username-login').val();
    const password = $('#password-login').val();

    Actions.Authorization.login(username, password);
  }

  handleRegisterFormSubmit(e) {
    e.preventDefault();

    const email = $('#email-register').val();
    const password = $('#password-register').val();

    Actions.Authorization.register(email, password);
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

export default EditInfo;