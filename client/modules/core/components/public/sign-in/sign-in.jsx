import React from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonInput} from 'react-bootstrap';
import Component from '/client/modules/core/components/common/component.jsx';
import Message from '../../common/message.jsx';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const {messages} = this.props;
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={8} mdOffset={2}>

                <Message message={messages.globalMessage}/>

                <div className="social-buttons">
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-facebook" onClick={() => {this.props.loginWithFacebook()}}>
                        <i className="fa fa-facebook"></i> Sign in with Facebook
                      </a>
                    </Col>
                  </div>
                  <div className="row">
                    <Col md={12}>
                      <a className="btn btn-block btn-social btn-google" onClick={() => {this.props.loginWithGoogle()}}>
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
                      <Input ref="usernameEmailLogin" type="text" label="Username/Email" placeholder="Username/Email"/>
                      <Input ref="passwordLogin" type="password" label="Password" placeholder="Password"/>
                      <ButtonInput className="pull-right" type="submit" value="Login"/>
                    </form>
                  </Tab>
                  <Tab eventKey={2} title="Register">
                    <h1 className="text-center">Register</h1>

                    <form onSubmit={this.handleRegisterFormSubmit.bind(this)}>
                      <Input ref="emailRegister" type="email" label="Email" placeholder="Email"/>
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

    const {usernameEmailLogin, passwordLogin} = this.refs;

    this.props.login(usernameEmailLogin.getValue(), passwordLogin.getValue());
  }

  handleRegisterFormSubmit(e) {
    e.preventDefault();

    const {emailRegister, passwordRegister} = this.refs;

    this.props.register(emailRegister.getValue(), passwordRegister.getValue());
  }
}

export default SignIn;