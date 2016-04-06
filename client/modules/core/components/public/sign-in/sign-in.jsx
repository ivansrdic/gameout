import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonInput} from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

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
                      <a className="btn btn-block btn-social btn-facebook" onClick={() => {this.props.Authorization.loginWithFacebook()}}>
                        <i className="fa fa-facebook"></i> Sign in with Facebook
                      </a>
                    </Col>
                  </div>
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-google" onClick={() => {this.props.Authorization.loginWithGoogle()}}>
                        <i className="fa fa-google"></i> Sign in with Google
                      </a>
                    </Col>
                  </div>
                </div>
                <Tabs defaultActiveKey={1} bsStyle="pills">
                  <hr/>
                  <Tab eventKey={1} title="Log in">
                    <h1 className="text-center">Log in</h1>

                    <form onSubmit={this.handleLoginFormSubmit.bind(this)}>
                      <Input ref="emailLogin" type="text" label="Email" placeholder="Email"/>
                      <Input ref="passwordLogin" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Login"/>
                    </form>
                  </Tab>
                  <Tab eventKey={2} title="Register">
                    <h1 className="text-center">Register</h1>

                    <form onSubmit={this.handleRegisterFormSubmit.bind(this)}>
                      <Input ref="emailRegister" type="email" label="Email" placeholder="Email"/>
                      <Input ref="usernameRegister" type="text" label="Username" placeholder="Username"/>
                      <Input ref="passwordRegister" type="password" label="Password" placeholder="Password"/>
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

  handleLoginFormSubmit(e) {
    e.preventDefault();

    const {emailLogin, passwordLogin} = this.refs;

    this.props.Authorization.login(emailLogin.getValue(), passwordLogin.getValue());
  }

  handleRegisterFormSubmit(e) {
    e.preventDefault();

    const {emailRegister, usernameRegister, passwordRegister} = this.refs;

    this.props.Authorization.register(emailRegister.getValue(), usernameRegister.getValue(), passwordRegister.getValue());
  }

  renderErrorMessage() {
    if(this.props.error) {
      return (
        <div className="alert alert-danger alert-dismissible fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <span className="fa fa-exclamation-circle"></span> <strong>{this.props.error}</strong>
        </div>
      );
    }
  }
}

export default SignIn;